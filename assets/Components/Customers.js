import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const customerComponent = $(".customer");

export default {
    customers: [
        {
            name: "John Marko",
            comment:
                "Creating software tailored games development information duration.",
            image: "./assets/img/customer-img-01.png",
        },
        {
            name: "John Marko",
            comment:
                "Creating software tailored games development information duration.",
            image: "./assets/img/customer-img-02.png",
        },
        {
            name: "John Marko",
            comment:
                "Creating software tailored games development information duration.",
            image: "./assets/img/customer-img-03.png",
        },
    ],

    amountStar: 5,
    amountSliderBtn: {
        value: 4,
        indexActive: 2,
    },

    render() {
        if (customerComponent && Object.keys(this.customers).length > 0) {
            customerComponent.innerHTML = html`
                <div class="container">
                    <div class="customer__inner">
                        <strong class="customer__top">Testimonials</strong>
                        <h1 class="customer__heading">What Customer Say</h1>
                        <p class="customer__desc">
                            At vero eos et deleniti atque corrupti quos dolores.
                        </p>
                        <div class="customer__list">${this.membersList()}</div>
                        <figure class="customer__footer">
                            ${(() => {
                                let btn = "";
                                for (
                                    let i = 0;
                                    i < this.amountSliderBtn.value;
                                    i++
                                ) {
                                    btn += html`
                                        <span
                                            class="${this.amountSliderBtn
                                                .indexActive ==
                                            i + 1
                                                ? "active"
                                                : ""} customer__footer-icon "
                                        ></span>
                                    `;
                                }
                                return btn;
                            })()}
                        </figure>
                    </div>
                </div>
            `;
        }
    },

    membersList() {
        return this.customers.map((customer, index) => {
            return html`
                <!-- Item ${++index} -->
                <article class="customer__item">
                    <figure class="customer__media">
                        <div class="customer__media-img">
                            <img
                                src="${customer.image}"
                                alt=""
                                class="customer__img"
                            />
                        </div>
                        <div class="customer__icon">
                            ${(() => {
                                let stars = "";
                                for (let i = 0; i < this.amountStar; i++) {
                                    stars += html`
                                        <img
                                            src="./assets/icons/about-star.svg"
                                            alt=""
                                            class="customer__star"
                                        />
                                    `;
                                }
                                return stars;
                            })()}
                        </div>
                    </figure>
                    <section class="customer__content">
                        <h2 class="customer__content-heading">
                            ${customer.name}
                        </h2>
                        <p class="customer__content-desc">
                            ${customer.comment}
                        </p>
                    </section>
                </article>
            `;
        });
    },

    start() {
        this.render();
    },
};
