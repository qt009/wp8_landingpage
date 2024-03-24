import { Collection } from "tinacms";

export const Entwickler: Collection = {
    
        // Entwickler
        name: "Entwickler",
        label: "Für Entwickler",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'entwickler'
        },
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