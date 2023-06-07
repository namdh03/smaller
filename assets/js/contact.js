const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const contactTextarea = $(".contact__form-textarea");

contactTextarea.oninput = (e) =>
    (e.target.style.height = e.target.scrollHeight + "px");
