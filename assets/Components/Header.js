const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerComponent = $("#header");

export default {
    render() {
        if (headerComponent) {
            headerComponent.innerHTML = `
                <div class="container">
                    <div class="header__inner">
                        <!-- Header logo -->
                        <a href="./">
                            <img
                                src="./assets/icons/logo.svg"
                                alt="Smaller"
                                class="header__logo"
                            />
                        </a>

                    <!-- Header navbar -->
                    <nav class="navbar">
                        <ul class="navbar__list">
                            <li class="navbar__item">
                                <a href="./product.html" class="navbar__link">Product</a>
                            </li>
                            <li class="navbar__item">
                                <a href="./pricing.html" class="navbar__link">Pricing</a>
                            </li>
                            <li class="navbar__item">
                                <a href="./contact.html" class="navbar__link">Contact us</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#!" class="navbar__link">Blog</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#!" class="navbar__link">About Us</a>
                            </li>
                        </ul>
                    </nav>

                        <!--Header action -->
                        <div class="header-action">
                            <a href="#!" class="header-action__login"> Login </a>
                            <a href="#!" class="header-action__book btn">
                                Book a Demo
                            </a>
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
