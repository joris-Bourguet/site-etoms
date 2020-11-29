import { navigation } from "./navigations.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
import { header } from "./header.js";
import { blog } from "./blog.js";
import { boutique } from "./boutique.js";
import { cartable } from "./cartable.js"
import { marque } from "./marque.js"

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
} else if (document.URL.includes("cartable.html")) {
    cartable()
} else if (document.URL.includes("marque.html")) {
    marque()
}