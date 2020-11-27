import { navigation } from "./navigations.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
import { header } from "./header.js";
import { blog } from "./blog.js";
import { boutique } from "./boutique.js";

header()
menu()

if (document.URL.includes("index.html")) {
    navigation()
} else if (document.URL.includes("contact.html")) {
    contact()
} else if (document.URL.includes("blog.html")) {
    blog()
} else if (document.URL.includes("boutique.html")) {
    boutique()
}