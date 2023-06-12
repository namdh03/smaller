import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const aboutComponent = $(".about");

export default {
    about: {
        heading: "About Us",
        subHeading: "Welcome to smaller online shop.",
        description: `We serve all kind of legal ,original, authentic
        products, specially clothing, cosmetics, extra ordinary electronics
        devices, any kind of leather goods like. We serve all kind of legal
        ,original, authentic products, specially clothing, cosmetics, extra
        ordinary electronics devices, any kind of leather goods like `,
        images: [
            "./assets/img/about-img-01.png",
            "./assets/img/about-img-02.png",
        ],
        link: "#!",
    },

    render() {
        if (aboutComponent) {
            aboutComponent.innerHTML = html`
                <div class="container">
                    <div class="about__inner">
                        <h1 class="about__heading">${this.about.heading}</h1>
                        <div class="about__wrapper">
                            <section class="about__content">
                                <h2 class="about__title">
                                    ${this.about.subHeading}
                                </h2>
                                <p class="about__desc">
                                    ${this.about.description}
                                </p>
                                <a
                                    href="${this.about.link}"
                                    class="btn--secondary about__btn"
                                >
                                    Learn More
                                </a>
                            </section>
                            <figure class="about__media">
                                <img
                                    src="${this.about.images[0]}"
                                    alt=""
                                    class="about__img about__img--big"
                                />
                                <img
                                    src="${this.about.images[1]}"
                                    alt=""
                                    class="about__img about__img--small"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    start() {
        this.render();
    },
};
