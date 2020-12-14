// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "prismjs/themes/prism-tomorrow.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap",
  });
}
