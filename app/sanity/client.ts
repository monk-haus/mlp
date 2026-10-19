import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "u3s6embk",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  perspective: "published",
});
