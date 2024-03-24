import { Collection } from "tinacms";

export const Entscheider: Collection = {
    // Entscheider
    
        name: "Entscheider",
        label: "Für Entscheider",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'entscheider'
        },
        // ui: {
        //   parse(value) {
        //     //remove leading slash if it exists
        //     return value.startsWith("/") ? value.slice(1) : value;
        //   },
        // }
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Title",
            type: "string",
          },
          {
            name: "Content",
            label: "Inhalt",
            type: "rich-text",
            isBody: true,
          }
        ]
      
}