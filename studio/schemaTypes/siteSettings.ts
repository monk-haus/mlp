import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons/Cog";
import { required } from "./rules";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "contact", title: "Contact details", default: true },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    defineField({
      name: "firmName",
      title: "Firm name",
      type: "string",
      group: "contact",
      validation: required,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      description: "Format: 613-862-3449",
      type: "string",
      group: "contact",
      validation: required,
    }),
    defineField({
      name: "fax",
      title: "Fax",
      description: "Format: 343-633-6512",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      group: "contact",
      options: { collapsible: false },
      fields: [
        defineField({ name: "street", title: "Street", type: "string", validation: required }),
        defineField({ name: "city", title: "City", type: "string", validation: required }),
        defineField({
          name: "region",
          title: "Province",
          description: "Two-letter code, e.g. ON",
          type: "string",
          validation: required,
        }),
        defineField({ name: "postalCode", title: "Postal code", type: "string", validation: required }),
        defineField({ name: "country", title: "Country", type: "string", validation: required }),
        defineField({
          name: "latitude",
          title: "Latitude",
          description: "Used by Google to place the office on the map. Update if the address changes.",
          type: "number",
        }),
        defineField({ name: "longitude", title: "Longitude", type: "number" }),
      ],
    }),
    defineField({
      name: "principal",
      title: "Principal lawyer",
      type: "object",
      group: "contact",
      options: { collapsible: false },
      fields: [
        defineField({ name: "name", title: "Name", type: "string", validation: required }),
        defineField({ name: "role", title: "Title", type: "string" }),
        defineField({
          name: "profileUrl",
          title: "Law Society profile link",
          type: "url",
        }),
      ],
    }),

    defineField({
      name: "title",
      title: "Page title",
      description: "Shown in the browser tab and Google results.",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required().max(70),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Shown under the title in Google results and link previews.",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      group: "seo",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "practiceAreas",
      title: "Areas of law (for Google)",
      type: "array",
      group: "seo",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "ogImage",
      title: "Link preview image",
      description: "Shown when the site is shared on social media or messaging apps. 1200 × 630 works best.",
      type: "image",
      group: "seo",
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
