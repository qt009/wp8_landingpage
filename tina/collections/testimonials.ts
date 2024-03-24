import { Collection } from "tinacms";

export const Testimonials: Collection = {
    
        name: "testimonials",
        label: "Testimonials",
        path: "content/german/sections",
        format: "md",
        fields: [
          { type: "boolean", name: "enable", label: "Button", default: false },
          { type: "string", name: "title", label: "Titel"},
          { type: "rich-text", name: "description", label: "Inhalt" },
          {
            name: "testimonials",
            label: "Bewertungen",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item.name}
              },
              defaultItem: {
                name: "Mustermann",
                designation: "Musterjob",
                avatar: "/images/avatar-sm.png",                
              }
            },
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string",
              },
              {
                name: "designation",
                label: "Job",
                type: "string",
              },
              { type: "image", name: "avatar", label: "Avatar" },
              {
                name: "content",
                label: "Inhalt",
                type: "rich-text"
              },
            ]
          },
        ]
}
