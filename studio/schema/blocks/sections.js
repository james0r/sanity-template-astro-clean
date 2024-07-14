import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Sections",
  name: "sections",
  type: "array",
  of: [
    defineArrayMember({
      title: "Image",
      name: "bodyImage",
      type: "imageWithAlt"
    }),
    defineArrayMember({
      title: "Content Area",
      name: 'contentArea',
      type: 'contentArea'
    })
  ],
});
