import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons/Home";
import { required } from "./rules";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "about", title: "About" },
    { name: "expertise", title: "Expertise" },
    { name: "principles", title: "Principles" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "headline",
          title: "Headline lines",
          description: "Each item is one line. Drag to reorder.",
          type: "array",
          of: [defineArrayMember({ type: "styledHeading" })],
          validation: (rule) => rule.min(1),
        }),
        defineField({ name: "legend", title: "Label", type: "legend" }),
        defineField({
          name: "intro",
          title: "Intro paragraph",
          type: "text",
          rows: 4,
          validation: required,
        }),
        defineField({
          name: "ctaLabel",
          title: "Button text",
          type: "string",
          validation: required,
        }),
      ],
    }),

    defineField({
      name: "about",
      title: "About",
      type: "object",
      group: "about",
      options: { collapsible: false },
      fields: [
        defineField({ name: "heading", title: "Heading", type: "styledHeading" }),
        defineField({ name: "legend", title: "Label", type: "legend" }),
        defineField({
          name: "photo",
          title: "Photo",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              description: "Describe the photo for screen readers and search engines.",
              type: "string",
              validation: required,
            }),
          ],
          validation: required,
        }),
        defineField({
          name: "summary",
          title: "Short bio",
          type: "text",
          rows: 4,
          validation: required,
        }),
        defineField({
          name: "linkLabel",
          title: "“Read more” link text",
          type: "string",
          initialValue: "Read more",
        }),
        defineField({
          name: "bioHeading",
          title: "Full bio heading",
          type: "styledHeading",
        }),
        defineField({
          name: "bioRole",
          title: "Full bio subtitle",
          type: "string",
        }),
        defineField({
          name: "bio",
          title: "Full bio paragraphs",
          description: "Each item is one paragraph. Drag to reorder.",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 6 })],
        }),
      ],
    }),

    defineField({
      name: "expertise",
      title: "Expertise",
      type: "object",
      group: "expertise",
      options: { collapsible: false },
      fields: [
        defineField({ name: "heading", title: "Heading", type: "styledHeading" }),
        defineField({ name: "legend", title: "Label", type: "legend" }),
        defineField({
          name: "intro",
          title: "Intro paragraph",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "ctaLabel",
          title: "Button text",
          type: "string",
        }),
        defineField({
          name: "areas",
          title: "Practice areas",
          description: "Drag to reorder. Numbers on the site follow this order.",
          type: "array",
          of: [
            defineArrayMember({
              name: "practiceArea",
              title: "Practice area",
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: required,
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 2,
                }),
              ],
              preview: {
                select: { title: "name", subtitle: "description" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "principles",
      title: "Principles",
      description:
        "The expanding panels below Expertise. Drag to reorder. Numbers on the site follow this order.",
      type: "array",
      group: "principles",
      of: [
        defineArrayMember({
          name: "principle",
          title: "Principle",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "styledHeading" }),
            defineField({
              name: "body",
              title: "Text",
              type: "text",
              rows: 4,
              validation: required,
            }),
          ],
          preview: {
            select: { italic: "heading.italic", regular: "heading.regular", subtitle: "body" },
            prepare: ({ italic, regular, subtitle }) => ({
              title: [italic, regular].filter(Boolean).join(" "),
              subtitle,
            }),
          },
        }),
      ],
    }),

    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      group: "contact",
      description: "Address, email and phone numbers are edited in Site settings.",
      options: { collapsible: false },
      fields: [
        defineField({ name: "heading", title: "Heading", type: "styledHeading" }),
        defineField({
          name: "blurb",
          title: "Paragraph",
          type: "text",
          rows: 4,
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home page" }),
  },
});
