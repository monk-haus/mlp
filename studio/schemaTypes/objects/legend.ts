import { defineField, defineType } from "sanity";

export const legend = defineType({
  name: "legend",
  title: "Label",
  type: "object",
  description: "The small two-part label under a heading.",
  options: { columns: 2 },
  fields: [
    defineField({ name: "first", title: "First line", type: "string" }),
    defineField({ name: "second", title: "Second line", type: "string" }),
  ],
});
