import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "u3s6embk",
    dataset: "production",
  },
  studioHost: "mayalawpractice",
  deployment: {
    autoUpdates: true,
  },
});
