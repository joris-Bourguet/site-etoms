import { navigation } from "./navigations.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
import { header } from "./header.js";
import { blog } from "./blog.js";
import { boutique } from "./boutique.js";
import { cartable } from "./cartable.js";
import { marque } from "./marque.js";

header()
menu()

if (document.URL.includes("index")) {
    navigation()
} else if (document.URL.includes("contact")) {
    contact()
} else if (document.URL.includes("blog")) {
    blog()
} else if (document.URL.includes("boutique")) {
    boutique()
} else if (document.URL.includes("marque")) {
    marque()
} else if (document.URL.includes("cartable")) {
    cartable()
}