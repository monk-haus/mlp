import { defineField, defineType } from "sanity";

export const styledHeading = defineType({
  name: "styledHeading",
  title: "Heading",
  type: "object",
  description: "Shown as: italic part, then regular part.",
  options: { columns: 2 },
  fields: [
    defineField({
      name: "italic",
      title: "Italic part",
      type: "string",
    }),
    defineField({
      name: "regular",
      title: "Regular part",
      type: "string",
    }),
  ],
  validation: (rule) =>
    rule.custom((value?: { italic?: string; regular?: string }) =>
      value?.italic || value?.regular ? true : "Add at least one part"
    ),
  preview: {
    select: { italic: "italic", regular: "regular" },
    prepare: ({ italic, regular }) => ({
      title: [italic, regular].filter(Boolean).join(" "),
    }),
  },
});
