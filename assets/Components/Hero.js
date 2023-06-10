import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heroComponent = $(".hero");

export default {
    render() {
        if (heroComponent) {
            heroComponent.innerHTML = html`
                <div class="container">
                    <div class="hero__inner">
                        <!-- Hero content -->
                        <section class="hero__content">
                            <h1 class="hero__heading">
                                Online catalog management
                                <img
                                    src="./assets/img/hero-img-01.png"
                                    alt=""
                                    class="hero__heading-img"
                                />
                                tool
                            </h1>
                            <p class="hero__desc">
                                Skyrocket your online store conversion rate the
                                customer experience with visual merchandising.
                            </p>
                            <div class="hero-action">
                                <a href="#!" class="btn hero-action__booking">
                                    Book a Demo
                                </a>
                                <a href="#!" class="btn hero-action__asking">
                                    Ask a Question
                                </a>
                            </div>
                        </section>
                        <!-- Hero media -->
                        <figure class="hero__media">
                            <img
                                src="./assets/img/hero-img-02.png"
                                alt="Online catalog management tool"
                                class="hero__media-img"
                            />
                        </figure>
                    </div>
                </div>
            `;
        }
    },

    start() {
        this.render();
    },
};
