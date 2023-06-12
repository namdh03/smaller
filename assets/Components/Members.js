import html from "../js/core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const memberComponent = $(".member");

export default {
    members: [
        {
            image: "./assets/img/member-img-01.png",
            name: "DIANNE RUSSELL",
            position: "Founder",
            socials: {
                facebook: "#!",
                twitter: "#!",
                linkedin: "#!",
            },
        },
        {
            image: "./assets/img/member-img-02.png",
            name: "JENNIE WILSON",
            position: "Shop Manager",
            socials: {
                facebook: "#!",
                twitter: "#!",
                linkedin: "#!",
            },
        },
        {
            image: "./assets/img/member-img-03.png",
            name: "BESSIE COOPER",
            position: "Marketing Expert",
            socials: {
                facebook: "#!",
                twitter: "#!",
                linkedin: "#!",
            },
        },
    ],

    render() {
        if (memberComponent && Object.keys(this.members).length > 0) {
            memberComponent.innerHTML = html`
                <div class="container">
                    <div class="member__inner">
                        <h1 class="member__heading">OUR TEAM Members</h1>
                        <div class="member__list">${this.membersList()}</div>
                    </div>
                </div>
            `;
        }
    },

    facebookSVG(color) {
        return html`
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="${color}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_16185_1143)">
                    <path
                        d="M14.2387 9.98049H11.5039V19.9998H7.36033V9.98049H5.38965V6.45933H7.36033V4.18073C7.36033 2.55129 8.13434 -0.000244141 11.5408 -0.000244141L14.61 0.0125966V3.43049H12.3831C12.0178 3.43049 11.5041 3.613 11.5041 4.39029V6.46261H14.6007L14.2387 9.98049Z"
                        fill="${color}"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_16185_1143">
                        <rect width="20" height="20" fill="${color}" />
                    </clipPath>
                </defs>
            </svg>
        `;
    },

    twitterSVG(color) {
        return html`
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="${color}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_16185_1147)">
                    <path
                        d="M20 3.79863C19.2563 4.12488 18.4637 4.34113 17.6375 4.44613C18.4875 3.93863 19.1363 3.14113 19.4412 2.17988C18.6488 2.65238 17.7738 2.98613 16.8412 3.17238C16.0887 2.37113 15.0162 1.87488 13.8462 1.87488C11.5763 1.87488 9.74875 3.71738 9.74875 5.97613C9.74875 6.30113 9.77625 6.61363 9.84375 6.91113C6.435 6.74488 3.41875 5.11113 1.3925 2.62238C1.03875 3.23613 0.83125 3.93863 0.83125 4.69488C0.83125 6.11488 1.5625 7.37363 2.6525 8.10238C1.99375 8.08988 1.3475 7.89863 0.8 7.59738C0.8 7.60988 0.8 7.62613 0.8 7.64238C0.8 9.63488 2.22125 11.2899 4.085 11.6711C3.75125 11.7624 3.3875 11.8061 3.01 11.8061C2.7475 11.8061 2.4825 11.7911 2.23375 11.7361C2.765 13.3599 4.2725 14.5536 6.065 14.5924C4.67 15.6836 2.89875 16.3411 0.98125 16.3411C0.645 16.3411 0.3225 16.3261 0 16.2849C1.81625 17.4561 3.96875 18.1249 6.29 18.1249C13.835 18.1249 17.96 11.8749 17.96 6.45738C17.96 6.27613 17.9538 6.10113 17.945 5.92738C18.7588 5.34988 19.4425 4.62863 20 3.79863Z"
                        fill="${color}"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_16185_1147">
                        <rect width="20" height="20" fill="${color}" />
                    </clipPath>
                </defs>
            </svg>
        `;
    },

    linkedinSVG(color) {
        return html`
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="${color}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_16185_1151)">
                    <path
                        d="M20 12.1604V19.5557H15.7124V12.656C15.7124 10.9236 15.0934 9.74051 13.541 9.74051C12.3563 9.74051 11.6525 10.537 11.3417 11.3083C11.2288 11.5839 11.1997 11.9666 11.1997 12.3532V19.5554H6.91181C6.91181 19.5554 6.96937 7.86963 6.91181 6.66H11.2V8.48739C11.1914 8.50178 11.1793 8.51585 11.1716 8.5296H11.2V8.48739C11.7698 7.61063 12.786 6.35719 15.0643 6.35719C17.8851 6.35719 20 8.20025 20 12.1604ZM2.4263 0.44397C0.959582 0.44397 0 1.40675 0 2.6717C0 3.90979 0.931764 4.90039 2.37002 4.90039H2.39784C3.89333 4.90039 4.82317 3.90979 4.82317 2.6717C4.79472 1.40675 3.89333 0.44397 2.4263 0.44397ZM0.254844 19.5557H4.54115V6.66H0.254844V19.5557Z"
                        fill="${color}"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_16185_1151">
                        <rect width="20" height="20" fill="${color}" />
                    </clipPath>
                </defs>
            </svg>
        `;
    },

    membersList() {
        return this.members.map((member, index) => {
            return html`
                <!-- Item ${++index} -->
                <article class="member__item">
                    <figure class="member__item-media">
                        <img
                            src="${member.image}"
                            alt="${member.name}"
                            class="member__item-img"
                        />
                    </figure>
                    <section class="member__item-content">
                        <h3 class="member__item-heading">${member.name}</h3>
                        <p class="member__item-desc">${member.position}</p>
                        <figure class="member__item-footer">
                            <a
                                href="${member.socials.facebook}"
                                class="member__item-link"
                            >
                                ${this.facebookSVG("currentColor")}
                            </a>
                            <a
                                href="${member.socials.twitter}"
                                class="member__item-link"
                            >
                                ${this.twitterSVG("currentColor")}
                            </a>
                            <a
                                href="${member.socials.linkedin}"
                                class="member__item-link"
                            >
                                ${this.linkedinSVG("currentColor")}
                            </a>
                        </figure>
                    </section>
                </article>
            `;
        });
    },

    start() {
        this.render();
    },
};
