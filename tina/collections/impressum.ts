import { Collection } from "tinacms";

export const Impressum: Collection = {
    
        name: "Impressum",
        label: "Impressum",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'impressum'
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