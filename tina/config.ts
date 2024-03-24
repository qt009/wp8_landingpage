import { defineConfig } from "tinacms";
import { Home } from "./collections/home";
// import { Testimonials } from "./collections/testimonials";
import { About } from "./collections/about";
import { Entscheider } from "./collections/entscheider";
import { Entwickler } from "./collections/entwickler";
import { Impressum } from "./collections/impressum";
import { Datenschutz } from "./collections/datenschutz";

export default defineConfig({
  branch: process.env.BRANCH,
  clientId: process.env.CLIENT_ID,
  token: process.env.TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "content/german",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static/",
    },
  },
  // See docs on content modeling for more info on how to set up new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      Home,
      About,
      Entscheider,
      Entwickler,
      Impressum,
      Datenschutz
    ]
  }
});
