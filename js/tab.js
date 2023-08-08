let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Regresa por favor :(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});