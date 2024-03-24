import { Collection } from "tinacms";

export const Datenschutz: Collection = {
        name: "Datenschutz",
        label: "Datenschutz",
        path: "content/german/pages/",
        format: "md",
        match: {
          include: 'datenschutz'
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
            label: "Titel",
            type: "string",
          },
          {
            name: "meta_title",
            label: "Tab Titel",
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