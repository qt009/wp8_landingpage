import { Collection } from "tinacms";

export const About: Collection = {
    
    // About
    name: "about",
    label: "About",
    path: "content/german/about",
    format: "md",
    fields: [
        {
        name: "title",
        label: "Titel",
        type: "rich-text",
        },
        {
        name: "meta_title",
        label: "Tab Titel",
        type: "string",
        },
        {
        name: "image",
        type: "image",
        label: "Bild",
        },
        {
        name: "body",
        label: "Inhalt",
        type: "rich-text",
        isBody: true,
        }
    ]
      
}