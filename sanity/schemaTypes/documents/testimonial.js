export default {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "text",
            title: "Comment",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "id",
            title: "ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "display",
            title: "Display",
            type: "boolean",
            validation: (Rule) => Rule.required(),
        },
    ],
}