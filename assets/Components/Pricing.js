const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const pricingComponent = $("#price");

export default {
    render() {
        if (pricingComponent) {
            pricingComponent.innerHTML = `
                <div class="container">
                    <div class="price__inner">
                        <h2 class="price__heading section-heading">Simple pricing</h2>
                        <p class="price__desc section-desc">
                            No credit card required. Cancel any time.
                        </p>
                        <div class="price__list">
                            <!-- Price item 1 -->
                            <article class="price-item">
                                <div class="price-item__inner">
                                    <div class="price-item__header">
                                        <img
                                            src="./assets/icons/pricing-icon-01.png"
                                            alt=""
                                            class="price-item__img"
                                        />
                                        <p class="price-item__title">Free</p>
                                    </div>
                                    <p class="price-item__desc">
                                        Starter plan to manage your one category
                                        and try everything Sortler has to offer
                                    </p>
                                    <p class="price-item__expense">
                                        $<strong class="price-item__value">
                                            0
                                        </strong>
                                        / free forever
                                    </p>
                                    <a href="#!" class="price-item__cta btn">
                                        Book a Demo
                                    </a>
                                    <ul class="price-item__list">
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Up to 1K products included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                1 category included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                1 staff account included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Indexation: ones a day
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </article>

                            <!-- Price item 2 -->
                            <article class="price-item price-item--active">
                                <div class="price-item__inner">
                                    <div class="price-item__header">
                                        <img
                                            src="./assets/icons/pricing-icon-02.png"
                                            alt=""
                                            class="price-item__img"
                                        />
                                        <p class="price-item__title">
                                            Business
                                        </p>
                                    </div>
                                    <p class="price-item__desc">
                                        More power with thouthands products and
                                        dozens of categories
                                    </p>
                                    <p class="price-item__expense">
                                        $<strong class="price-item__value">
                                            39
                                        </strong>
                                        / month billed monthly
                                    </p>
                                    <a href="#!" class="price-item__cta btn">
                                        Book a Demo
                                    </a>
                                    <ul class="price-item__list">
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Up to 100k products included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Up to 50 category included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                3 staff account included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Indexation: twice a day
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </article>

                            <!-- Price item 3 -->
                            <article class="price-item">
                                <div class="price-item__inner">
                                    <div class="price-item__header">
                                        <img
                                            src="./assets/icons/pricing-icon-03.png"
                                            alt=""
                                            class="price-item__img"
                                        />
                                        <p class="price-item__title">
                                            Advanced
                                        </p>
                                    </div>
                                    <p class="price-item__desc">
                                        A lot of categories and products,
                                        premium support and more...
                                    </p>
                                    <p class="price-item__expense">
                                        $<strong class="price-item__value">
                                            99
                                        </strong>
                                        / month billed monthly
                                    </p>
                                    <a href="#!" class="price-item__cta btn">
                                        Book a Demo
                                    </a>
                                    <ul class="price-item__list">
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Up to 200k products included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Up to 100 category included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                5 staff account included
                                            </span>
                                        </li>
                                        <li class="price-item__list-item">
                                            <span class="price-item__icon">
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
                                                        stroke="white"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span class="price-item__text">
                                                Indexation: each hour
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
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
