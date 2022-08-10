console.log(Object.keys(HTMLImageElement.prototype).includes("loading"));

if (!HTMLImageElement.prototype.hasOwnProperty("loading")) {
  //Підтримується
} else {
  let script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  document.body.lastElementChild.insertAdjacentElement("beforebegin", script);
}
