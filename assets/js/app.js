import { navigation } from "./navigations.js";
import { contact } from "./contact.js";
import { header } from "./header.js";

if (document.URL.includes("index.html")) {
    navigation()
} else if (document.URL.includes("contact.html")) {
    contact()
} else {
    header()
}