const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerElement = $("#footer");

export default {
    render() {
        headerElement.innerHTML = `
            <div class="container">
                <h2 class="footer__heading section-heading">
                    All eCommerce CMS platforms supported
                </h2>
                <p class="footer__desc section-desc">
                    Magento 2, Shopify, WooCommerce, BigCommerce, Opencart and
                    more.
                </p>
                <ul class="footer__brand-list">
                    <li class="footer__brand-item">
                        <a href="#!" class="footer__brand-link">
                            <img
                                src="./assets/icons/magento.svg"
                                alt="Magento"
                                class="footer__brand-img"
                            />
                        </a>
                    </li>
                    <li class="footer__brand-item">
                        <a href="#!" class="footer__brand-link">
                            <img
                                src="./assets/icons/shopify.svg"
                                alt="shopify"
                                class="footer__brand-img"
                            />
                        </a>
                    </li>
                    <li class="footer__brand-item">
                        <a href="#!" class="footer__brand-link">
                            <img
                                src="./assets/icons/woo-commerce.svg"
                                alt="WOO COMMERCE"
                                class="footer__brand-img"
                            />
                        </a>
                    </li>
                    <li class="footer__brand-item">
                        <a href="#!" class="footer__brand-link">
                            <img
                                src="./assets/icons/big-commerce.svg"
                                alt="BIG COMMERCE"
                                class="footer__brand-img"
                            />
                        </a>
                    </li>
                    <li class="footer__brand-item">
                        <a href="#!" class="footer__brand-link">
                            <img
                                src="./assets/icons/opencart.svg"
                                alt="opencart"
                                class="footer__brand-img"
                            />
                        </a>
                    </li>
                </ul>

                <!-- Sortler -->
                <section class="footer__sortler">
                    <div class="footer__sortler-content">
                        <h3 class="footer__sortler-heading">
                            Try Sortler For Free!
                        </h3>
                        <a href="#!" class="btn footer__sortler-btn"
                            >Book a Demo</a
                        >
                        <ul class="footer__sortler-list">
                            <li class="footer__sortler-item">
                                <span class="footer__sortler-icon">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.5 5C16.5 5.51171 16.3902 5.99776 16.1928 6.43589C17.2704 7.03251 18 8.18105 18 9.5C18 10.7111 17.3849 11.7786 16.45 12.4069C16.4829 12.5997 16.5 12.7978 16.5 13C16.5 14.933 14.933 16.5 13 16.5C12.6428 16.5 12.2981 16.4465 11.9735 16.3471C11.3557 17.3395 10.255 18 9 18C7.74499 18 6.64426 17.3395 6.0265 16.3471C5.70188 16.4465 5.35719 16.5 5 16.5C3.067 16.5 1.5 14.933 1.5 13C1.5 12.7978 1.51714 12.5997 1.55004 12.4069C0.615145 11.7786 0 10.7111 0 9.5C0 8.18105 0.729563 7.0325 1.80715 6.43589C1.60981 5.99776 1.5 5.5117 1.5 5C1.5 3.067 3.067 1.5 5 1.5C5.35719 1.5 5.70188 1.55351 6.0265 1.65294C6.64426 0.660546 7.74499 0 9 0C10.255 0 11.3557 0.660548 11.9735 1.65294C12.2981 1.55351 12.6428 1.5 13 1.5C14.933 1.5 16.5 3.067 16.5 5Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M6 10L8 12L12 6"
                                            stroke="var(--secondary-color)"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span class="footer__sortler-text">
                                    NO Coding needed, Plug-&-Play.
                                </span>
                            </li>
                            <li class="footer__sortler-item">
                                <span class="footer__sortler-icon">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.5 5C16.5 5.51171 16.3902 5.99776 16.1928 6.43589C17.2704 7.03251 18 8.18105 18 9.5C18 10.7111 17.3849 11.7786 16.45 12.4069C16.4829 12.5997 16.5 12.7978 16.5 13C16.5 14.933 14.933 16.5 13 16.5C12.6428 16.5 12.2981 16.4465 11.9735 16.3471C11.3557 17.3395 10.255 18 9 18C7.74499 18 6.64426 17.3395 6.0265 16.3471C5.70188 16.4465 5.35719 16.5 5 16.5C3.067 16.5 1.5 14.933 1.5 13C1.5 12.7978 1.51714 12.5997 1.55004 12.4069C0.615145 11.7786 0 10.7111 0 9.5C0 8.18105 0.729563 7.0325 1.80715 6.43589C1.60981 5.99776 1.5 5.5117 1.5 5C1.5 3.067 3.067 1.5 5 1.5C5.35719 1.5 5.70188 1.55351 6.0265 1.65294C6.64426 0.660546 7.74499 0 9 0C10.255 0 11.3557 0.660548 11.9735 1.65294C12.2981 1.55351 12.6428 1.5 13 1.5C14.933 1.5 16.5 3.067 16.5 5Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M6 10L8 12L12 6"
                                            stroke="var(--secondary-color)"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span class="footer__sortler-text">
                                    All eCommerce platforms supported
                                </span>
                            </li>
                        </ul>
                    </div>
                    <figure class="footer__sortler-media">
                        <img
                            src="./assets/img/footer-sortler-img.png"
                            alt=""
                            class="footer__sortler-img"
                        />
                    </figure>
                </section>

                <!-- Navbar -->
                <div class="footer__navigation">
                    <!-- Footer logo -->
                    <a href="#!">
                        <img
                            src="./assets/icons/logo.svg"
                            alt="Smaller"
                            class="footer__logo"
                        />
                    </a>

                    <!-- Footer navbar -->
                    <navbar class="footer__navbar">
                        <ul class="footer__navbar-list">
                            <li class="footer__navbar-item">
                                <a href="#!" class="footer__navbar-link">
                                    Pricing
                                </a>
                            </li>
                            <li class="footer__navbar-item">
                                <a href="#!" class="footer__navbar-link">
                                    Company
                                </a>
                            </li>
                            <li class="footer__navbar-item">
                                <a href="#!" class="footer__navbar-link">
                                    Company
                                </a>
                            </li>
                            <li class="footer__navbar-item">
                                <a href="#!" class="footer__navbar-link">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </navbar>

                    <!-- Footer action -->
                    <div class="footer__action">
                        <a href="#!" class="footer__action-cta">
                            <img
                                src="./assets/icons/linkedin.svg"
                                alt="Linkedin"
                                class="footer__action-logo"
                            />
                        </a>
                        <a href="#!" class="footer__action-cta">
                            <img
                                src="./assets/icons/facebook.svg"
                                alt="Facebook"
                                class="footer__action-logo"
                            />
                        </a>
                        <a href="#!" class="footer__action-cta">
                            <img
                                src="./assets/icons/instagram.svg"
                                alt="Instagram"
                                class="footer__action-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    start() {
        this.render();
    },
};
