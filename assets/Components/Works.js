import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const workComponent = $(".work");

export default {
    works: [
        {
            image: "./assets/img/works-img-01.png",
            title: "Set basic sorting rules for&nbsp;any categories",
            description: [
                "Bulk sort products on any category page you need, combine different sort rules:",
            ],
            list: {
                items: [
                    "Newest",
                    "Bestseller",
                    "Most reviewable",
                    "Price",
                    "Custom Attribute",
                ],
                bestKeys: [],
                strong: true,
            },
            height: 254,
            active: true,
        },
        {
            image: "./assets/img/works-img-02.png",
            title: "Drag and Drop catalog management",
            description: [
                "Use the Drag and Drop function to sort your products in the most intuitive, quickest way.",
                "Set scores for products by adding number, SKUs with higher scores will be displayed on top of the category pages.",
            ],
            list: {
                items: [],
                bestKeys: [],
                strong: false,
            },
            height: 0,
            active: false,
        },
        {
            image: "./assets/img/works-img-03.png",
            title: "Limit and add product groups per category pages",
            description: ["Achieve a certain variety on your catalog pages:"],
            list: {
                items: [
                    "Ensure the page does not contain identical products:&nbsp;same&nbsp;color, style or type.",
                    "Hide and add the desired products or product groups&nbsp;on&nbsp;the&nbsp;category page.",
                ],
                bestKeys: [],
                strong: false,
            },
            height: 0,
            active: false,
        },
        {
            image: "./assets/img/works-img-04.png",
            title: "Control poor-selling products",
            description: [
                "Sortler provides flexible features for the management of your low-selling items.",
            ],
            list: {
                items: [
                    "Tracking low-selling items",
                    "Raising the item position to the top.",
                    "Most Applying discounts",
                ],
                bestKeys: [],
                strong: true,
            },
            height: 0,
            active: false,
        },
        {
            image: "./assets/img/works-img-05.png",
            title: "Create rules of low-stock and out-of-stock products",
            description: [
                "Place low-stock items at the top of your product list. Move out-of-stock products down the catalog.",
            ],
            list: {
                items: [
                    "Place low-stock items at the top of your product list. Move out-of-stock products down the catalog.",
                    "Create rules for applying discounts in your catalog. Simplify loyalty program management, thereby increasing sales.",
                ],
                bestKeys: ["Place low-stock", "Create rules"],
                strong: false,
            },
            height: 0,
            active: false,
        },
    ],

    render() {
        if (workComponent) {
            workComponent.innerHTML = html`
                <div class="container">
                    <h2 class="section-heading">How Smaller works</h2>
                    <p class="work__desc section-desc">
                        Smaller is a cloud-based tool for merchandisers and
                        eCommerce professionals.
                    </p>
                    <!-- Work list -->
                    ${this.works &&
                    html`<div class="work__list">${this.items()}</div>`}
                </div>
            `;
        }
    },

    items() {
        return this.works.map((work, index) => {
            return html`
                <!-- Work item ${++index} -->
                <div class="work-item">
                    <figure class="work-item__media">
                        <img
                            src="${work.image}"
                            alt="${work.title}"
                            class="work-item__img"
                        />
                    </figure>
                    <div
                        class="work-item__progress ${work.active &&
                        "work-item__progress--active"}"
                        ${work.active &&
                        html`style="--height: ${work.height}px"`}
                    >
                        ${index}
                    </div>
                    <div class="work-item__content">
                        <h3 class="work-item__title">${work.title}</h3>
                        ${work.description &&
                        work.description.map(
                            (desc) =>
                                html`<p class="work-item__desc">${desc}</p>`
                        )}
                        ${work.list &&
                        work.list.items.length > 0 &&
                        html`
                            <ul class="work-item__list">
                                ${work.list.items.map(
                                    (item, index) =>
                                        html`
                                            <li class="work-item__list-item">
                                                <span
                                                    ${work.list.strong &&
                                                    `class="strong-text"`}
                                                >
                                                    ${item.replace(
                                                        work.list.bestKeys[
                                                            index
                                                        ],
                                                        html`
                                                            <strong
                                                                class="strong-text white-text"
                                                            >
                                                                ${work.list
                                                                    .bestKeys[
                                                                    index
                                                                ]}
                                                            </strong>
                                                        `
                                                    )}
                                                </span>
                                            </li>
                                        `
                                )}
                            </ul>
                        `}
                    </div>
                </div>
            `;
        });
    },

    start() {
        this.render();
    },
};
