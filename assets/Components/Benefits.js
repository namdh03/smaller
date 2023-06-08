import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const benefitComponent = $(".benefit");

export default {
    benefits: [
        {
            image: "./assets/icons/benefits-icon-01.svg",
            title: "Compatibility",
            description:
                "Sortler supports all popular eCommerce solutions, including Magento, Shopify, WooCommerce, BigCommerce.",
        },
        {
            image: "./assets/icons/benefits-icon-02.svg",
            title: "Simplified merchandising",
            description:
                "Your employees, work faster and the less time they spend on online visual merchandising tasks.",
        },
        {
            image: "./assets/icons/benefits-icon-03.svg",
            title: "No Coding Required",
            description:
                "Everything is designed in such a way as to put the smart sorting system into operation without delay.",
        },
        {
            image: "./assets/icons/benefits-icon-04.svg",
            title: "Built-in emulator",
            description:
                "Sortler provides you with a special emulator that shows all changes before they are applied to your live website.",
        },
        {
            image: "./assets/icons/benefits-icon-05.svg",
            title: "Backup feature",
            description:
                "Our visual product sorting tool has a&nbsp;backup feature to undo the changes made. So you actually risk nothing.",
        },
        {
            image: "./assets/icons/benefits-icon-06.svg",
            title: "Round-the-clock support",
            description:
                "Being in touch 24/7, we're ready to answer your questions in real-time, whenever you need.",
        },
    ],

    render() {
        if (benefitComponent && Object.keys(this.benefits).length > 0) {
            benefitComponent.innerHTML = html`
                <div class="container">
                    <h2 class="section-heading">Benefits</h2>
                    <div class="benefit__list">${this.items()}</div>
                </div>
            `;
        }
    },

    items() {
        return this.benefits.map((benefit, index) => {
            return html`
                <!-- Benefit item ${++index} -->
                <article class="benefit-item">
                    <div class="benefit-item__img-wrap">
                        <img
                            src="${benefit.image}"
                            alt="${benefit.title}"
                            class="benefit__item-img"
                        />
                    </div>
                    <h3 class="benefit-item__title">${benefit.title}</h3>
                    <p class="benefit-item__desc">${benefit.description}</p>
                </article>
            `;
        });
    },

    start() {
        this.render();
    },
};
