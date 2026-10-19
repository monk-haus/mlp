import { useRef, useState, type ChangeEvent } from "react";
import { Button, Flex, Stack, Text } from "@sanity/ui";
import { UploadIcon } from "@sanity/icons/Upload";
import {
  insert,
  setIfMissing,
  useClient,
  type ArrayOfObjectsInputProps,
} from "sanity";

const BATCH_SIZE = 5;

const uniqueKey = () => Math.random().toString(36).slice(2, 12);

function toBatches<T>(items: T[], size: number) {
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += size) batches.push(items.slice(i, i + size));
  return batches;
}

export function BatchImageArrayInput(props: ArrayOfObjectsInputProps) {
  const { onChange, readOnly } = props;
  const client = useClient({ apiVersion: "2025-01-01" });
  const fileInput = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);

  const uploadFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length === 0) return;

    setProgress({ done: 0, total: files.length });
    onChange(setIfMissing([]));

    let done = 0;
    for (const batch of toBatches(files, BATCH_SIZE)) {
      const assets = await Promise.all(
        batch.map((file) => client.assets.upload("image", file, { filename: file.name }))
      );
      const items = assets.map((asset) => ({
        _type: "image",
        _key: uniqueKey(),
        asset: { _type: "reference", _ref: asset._id },
      }));
      onChange(insert(items, "after", [-1]));
      done += batch.length;
      setProgress({ done, total: files.length });
    }

    setProgress(null);
  };

  return (
    <Stack gap={3}>
      {props.renderDefault(props)}
      <input
        ref={fileInput}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={uploadFiles}
      />
      <Flex align="center" gap={3}>
        <Button
          icon={UploadIcon}
          mode="ghost"
          text="Upload multiple images"
          disabled={readOnly || progress !== null}
          onClick={() => fileInput.current?.click()}
        />
        {progress && (
          <Text size={1} muted>
            Uploading {progress.done} / {progress.total}…
          </Text>
        )}
      </Flex>
    </Stack>
  );
}
