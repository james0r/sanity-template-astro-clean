import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";

export const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export function decodeAssetId(id) {
  const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/
  const [, assetId, dimensions, format] = pattern.exec(id)
  const [width, height] = dimensions.split("x").map(v => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}
