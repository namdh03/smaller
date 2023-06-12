import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const blogComponent = $(".blog");

export default {
    blogs: [
        {
            image: "./assets/img/blog-img-01.png",
            title: "To be our partner",
            description: `At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-02.png",
            title: "For best results work",
            description: `But I must explain to you how all this mistaken
            idea of denouncing pleasure and praising pain was born.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-03.png",
            title: "Awesome tips",
            description: `There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-04.png",
            title: "Printing and typesetting",
            description: `At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-05.png",
            title: "Type of sports shoes",
            description: `But I must explain to you how all this mistaken
            idea of denouncing pleasure and praising pain was born.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-06.png",
            title: "Awesome tips",
            description: `There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-07.png",
            title: "To be our partner",
            description: `At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-08.png",
            title: "For best results work",
            description: `But I must explain to you how all this mistaken
            idea of denouncing pleasure and praising pain was born.`,
            link: "#!",
        },
        {
            image: "./assets/img/blog-img-09.png",
            title: "Awesome tips",
            description: `There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration.`,
            link: "#!",
        },
    ],
    render() {
        if (blogComponent && Object.keys(this.blogs).length > 0) {
            blogComponent.innerHTML = html` <div class="container">
                <div class="blog__inner">
                    <h1 class="blog__heading">Our latest blog</h1>
                    <p class="blog__desc">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms.
                    </p>
                    <div class="blog__list">${this.blogsList()}</div>
                    <div class="blog__button">
                        <button class="btn--secondary blog__btn">
                            Load More
                        </button>
                    </div>
                </div>
            </div>`;
        }
    },

    blogsList() {
        return this.blogs.map((blog, index) => {
            return html`
                <!-- Item ${++index} -->
                <article class="blog__item">
                    <figure class="blog__item-img-wrapped">
                        <a href="${blog.link}">
                            <img
                                src="${blog.image}"
                                alt="${blog.title}"
                                class="blog__item-img"
                            />
                        </a>
                    </figure>
                    <section class="blog__item-content">
                        <h2>
                            <a
                                href="${blog.link}"
                                class="blog__item-content-title"
                            >
                                ${blog.title}
                            </a>
                        </h2>
                        <p class="blog__item-content-info">
                            ${blog.description}
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
