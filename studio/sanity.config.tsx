import { defineConfig, type ArrayOfObjectsInputProps, type InputProps } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { schemaTypes, SINGLETON_TYPES } from "./schemaTypes";
import { structure } from "./structure";
import { BatchImageArrayInput } from "./components/BatchImageArrayInput";

const SINGLETON_ACTIONS = new Set(["publish", "discardChanges", "restore"]);

function isImageArray(props: InputProps): props is ArrayOfObjectsInputProps {
  const { schemaType } = props;
  return (
    schemaType.jsonType === "array" &&
    "of" in schemaType &&
    schemaType.of.length > 0 &&
    schemaType.of.every((member) => member.name === "image")
  );
}

export default defineConfig({
  name: "default",
  title: "Maya Law Practice",
  projectId: "u3s6embk",
  dataset: "production",

  plugins: [structureTool({ structure }), media(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },

  document: {
    actions: (actions, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? actions.filter(({ action }) => action && SINGLETON_ACTIONS.has(action))
        : actions,
  },

  form: {
    components: {
      input: (props) =>
        isImageArray(props) ? <BatchImageArrayInput {...props} /> : props.renderDefault(props),
    },
  },
});
