import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "lsmfmy6a",
    dataset: "production",
  },
  studioHost: "hugotech",
  autoUpdates: true,
});
