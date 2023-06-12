import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerComponent = $("#header");

export default {
    logo: "./assets/icons/logo.svg",

    navbar: [
        {
            link: "./product.html",
            title: "Product",
        },
        {
            link: "./pricing.html",
            title: "Pricing",
        },
        {
            link: "./contact.html",
            title: "Contact us",
        },
        {
            link: "./blog.html",
            title: "Blog",
        },
        {
            link: "./about.html",
            title: "About Us",
        },
    ],

    render() {
        if (headerComponent) {
            headerComponent.innerHTML = html`
                <div class="container">
                    <div class="header__inner">
                        <!-- Header logo -->
                        <a href="./">
                            <img
                                src="${this.logo}"
                                alt="Smaller"
                                class="header__logo"
                            />
                        </a>

                        <!-- Header navbar -->
                        <nav class="navbar">
                            <ul class="navbar__list">
                                ${this.navbar.map((item) => {
                                    return html`
                                        <li class="navbar__item">
                                            <a
                                                href="${item.link}"
                                                class="navbar__link"
                                            >
                                                ${item.title}
                                            </a>
                                        </li>
                                    `;
                                })}
                            </ul>
                        </nav>

                        <!--Header action -->
                        <div class="header-action">
                            <a href="#!" class="header-action__login">
                                Login
                            </a>
                            <a href="#!" class="header-action__book btn">
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    handleEvent() {
        const navLink = $$(".navbar__link");
        const currLocation = window.location.href;
        Array.from(navLink).forEach((item) => {
            if (item.href === currLocation) {
                if ($(".navbar__link.navbar__link--active")) {
                    $(".navbar__link.navbar__link--active").classList.remove(
                        "navbar__link--active"
                    );
                }
                item.classList.add("navbar__link--active");
            }
        });
    },

    start() {
        this.render();
        this.handleEvent();
    },
};
