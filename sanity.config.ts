import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "HugoTech Blog",

  projectId: "lsmfmy6a",
  dataset: "production",

  basePath: "/es/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  deployment: {
    appId: "w7ucbnff8gsb099k8pg2rnv7",
    autoUpdates: true,
  },
});
