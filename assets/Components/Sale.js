import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const saleComponent = $(".sale");

export default {
    sale: [
        {
            image: "./assets/icons/sales-rate.svg",
            title: "Conversion rate skyrockets.",
            description:
                "Convert more online sales with our visual merchandising interface.",
        },
        {
            image: "./assets/icons/sales-average.svg",
            title: "Increase average order value",
            description:
                "Increase average order value of your online store by 17% with this little trick.",
        },
        {
            image: "./assets/icons/sales-time.svg",
            title: "Spend less time for management",
            description:
                "Let your employees spend less time managing the online selling it.",
        },
    ],

    render() {
        if (saleComponent) {
            saleComponent.innerHTML = html`
                <div class="container">
                    <h2 class="section-heading">
                        Merchandising to increase sales.
                    </h2>
                    <div class="sale__row">
                        ${this.sale.map((item, index) => {
                            return html`
                                <!-- Sale item ${++index} -->
                                <section class="sale-item">
                                    <img
                                        src="${item.image}"
                                        alt="${item.title}"
                                        class="sale-item__img"
                                    />
                                    <h3 class="sale-item__title">
                                        ${item.title}
                                    </h3>
                                    <p class="sale-item__desc">
                                        ${item.description}
                                    </p>
                                </section>
                            `;
                        })}
                    </div>
                </div>
            `;
        }
    },

    start() {
        this.render();
    },
};
