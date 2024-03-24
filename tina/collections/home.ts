import { Collection } from "tinacms";

export const Home: Collection = {
  //Home
  name: "home_page",
  label: "Home",
  path: "content/german",
  format: "md",
  match: {
    include: '_index'
  },
  ui: {
    global: true,
  },
  fields: [
    {
      name: "banner",
      label: "Banner",
      type: "object",
      fields: [
        { name: "title", label: "Titel", type: "string"},
        { name: "content", label: "Inhalt", type: "rich-text"},
        { name: "image", label: "Bild", type: "image" },
        {
          name: "button",
          label: "Button",
          type: "object",
          fields: [
            {type: "boolean", name: "enable", label: "Button", default: false},
            {type: "string", name: "link"},
            {type: "string", name: "label"},
          ],
        },
      ],
    },
    {
      name: "features",
      label: "Features",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {label: item.title}
        },
        defaultItem: {
          title: "We3ve Feature",
          image: "/images/service-1.png"
        }
      },
      fields: [
        {
          name: "title",
          label: "Titel",
          type: "string",
          
        },
        { type: "image", name: "image", label: "Bild" },
        {
          name: "content",
          label: "Inhalt",
          type: "rich-text"
        },
        {
          name: "bulletpoints",
          label: "Bulletpoints",
          type: "string",
          list: true
        },
        {
          name: "button",
          label: "Button",
          type: "object",
          fields: [
            {type: "boolean", name: "enable", label: "Button", default: false},
            {type: "string", name: "link"},
            {type: "string", name: "label"},
          ],
        },
      ],
    },
    {
      name: "testimonials",
      label: "Testimonials",
      type: "object",
      fields: [
        { type: "boolean", name: "enable", label: "Button", default: false },
        { type: "string", name: "title", label: "Titel"},
        { type: "rich-text", name: "description", label: "Inhalt" },
        {
          name: "bewertungen",
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
  ],
}