import { createImageUrlBuilder } from "@sanity/image-url";
import { sanity } from "./client";
import type { SanityImage } from "./types";

const builder = createImageUrlBuilder(sanity);

export const imageUrl = (image: SanityImage) => builder.image(image).auto("format");

export function croppedDimensions(image: SanityImage) {
  const { width, height } = image.asset.metadata.dimensions;
  const crop = image.crop ?? { top: 0, bottom: 0, left: 0, right: 0 };
  return {
    width: Math.round(width * (1 - crop.left - crop.right)),
    height: Math.round(height * (1 - crop.top - crop.bottom)),
  };
}
