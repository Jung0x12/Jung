import { LqipModernOptions } from "lqip-modern";
import getPlaiceholder from "lqip-modern";

export async function generateBlurDataURLs(
  input: string[],
  opts?: LqipModernOptions,
) {
  const results = await Promise.all(
    input.map(async (path) => {
      const { metadata } = await getPlaiceholder(path, opts);
      const blurDataURL = metadata.dataURIBase64;
      return { path, blurDataURL };
    }),
  );
  return results;
}
