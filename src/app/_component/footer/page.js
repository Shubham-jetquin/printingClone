const footer = () => {
    return <>
        <section
            id="newsletter-sign-up-form"
            className="band newsletter-sign-up-module u-padding-0 js-component"
            data-module-index={9}
        >
            <div className="band -module u-backgroundColor-neutralTint">
                <div className="wrapper">
                    <div className="layout layout--middle">
                        <div className="layout__item u-1/2@medium">
                            <div className="u-padding-vertical-xs">
                                <h3 className="h4">
                                    Sign up to the&nbsp;<a href="/us/newsletter-signup">MOOsletter</a>
                                    &nbsp;for special offers, news and inspiration
                                </h3>
                            </div>
                        </div>
                        <div className="layout__item u-1/2@medium u-marginBottom-m u-marginBottom-0@medium">
                            <form
                                className="js-newsletter_signup-form"
                                data-test-id="newsletter-sign-up-form"
                                data-has-redirect="true"
                                action="/us/ajaxrequests/newsletter/signup.php"
                                method="post"
                                noValidate=""
                            >
                                <div className="u-position-relative">
                                    <input
                                        type="hidden"
                                        name="redirectUrl"
                                        defaultValue="/us/newsletter-thanks"
                                    />
                                    <input
                                        type="hidden"
                                        name="requestPromoCode"
                                        defaultValue="false"
                                    />
                                    <input type="hidden" name="section" defaultValue="FOOTER" />
                                    <input
                                        type="hidden"
                                        name="recaptchaToken"
                                        defaultValue="03AFcWeA73DDXslusuUTX3ttKacevFqNK6WFfmHkm_YUuzoWEAyiFhkQEQrcHodTNxMitjkzjVdWKhsxtNZQD5Ikv8sMeU_ZGYxmrIjgIABmKkTwl-TIzHgwWm-l8KCC_RNylUDE_AtLEXeZxn4KrDfA-toHbILdBLOkOIRGeJ2YudGSPl3l7VuXVi6rwXjI0PabnniTauw0nQGthz7DfYQmwqeS9AyX120TruoxLc70GIP3ujImaHcpZhyKl55dBCL_qq2ixFLUbrFGRxZSx7x1ihTo9EMXP69-UTkAJ3ZtAb2a_Va3hPz8KU2SFYD_Lj6WNME5r2vVkkyD_CAG-jIFY777B9cleJRqFRVzDZP05JtiiT_PyVov_GLVSbsjBL9ec3vz9rij0jINYki32wFRoUPvqgyYKxpyt5lXNwvTH0EvtNf_SDhHG5sq2UNLV7szejSnr3VQdt6gRLSI1dss-kWkbNBcYvykSMe2Aqlc3aWV5n4BU3OqXf1G3IMZkPBLyc2ZLeaO-oun2J9FkGCvuwqMLvGo14Qt1KBKkmofDym3AjT1w4B9jbdhMnnDN-g0OQkuM4O_ZWySQLVtfHWpT5t9pIwdQN5WCV_OPvGf5a6k8zOvN1cSmSRMSzzXjyItjclWUG609tFggqfZsQloQ5tv2SF_E_bklpfXmRmvBpaYdiK09HyecBgXV8AknLCjDQ620U21vvNwpwTxvwFaqucX_2eEwEP6utlewVtPO-Cae2MEC1IUJrhcRETzGb-YInrEayEMQiQZtWj1mNPQTwwR5RGG32orTbX0BCxzr9VlVNQW6SHsT27SFNHt4C7emDdWl9rm8N7LYyoeCK7lOVpLwa1KvKDPg5SzjbIgBzb6ELh9pn6N7kqQ1MEZZnK3knTAgNI2oI2f_-ZQzhNdgVB62DZLBiFNX0Zjv1A1x47PlYCRaXJgnuw-bKK0XWUuTjHsavUKv_VRGCNMB8fLiTAcnNnjnlMUNyHR1aBaxuzPNojXJUNPU"
                                    />
                                    <input
                                        className="text-input u-paddingRight-xl js-newsletter_signup__email"
                                        type="email"
                                        name="other"
                                        placeholder="example@moo.com"
                                    />
                                    <button
                                        className="newsletter-sign-up-form__button"
                                        data-test-id="newsletter-sign-up-form-submit"
                                        type="submit"
                                    >
                                        <div className="icon__morph -chevron-right">
                                            <div className="icon__morph-block -m1" />
                                            <div className="icon__morph-block -m2" />
                                            <div className="icon__morph-block -m3" />
                                        </div>
                                    </button>
                                </div>
                                <p className="p__meta u-marginTop-xxs u-marginBottom-0">
                                    This site is protected by reCAPTCHA and the Google{" "}
                                    <a href="https://policies.google.com/privacy" target="_blank">
                                        Privacy Policy
                                    </a>{" "}
                                    and{" "}
                                    <a href="https://policies.google.com/terms" target="_blank">
                                        Terms of Service
                                    </a>{" "}
                                    apply.
                                </p>
                                <div
                                    className="error-text newsletter-sign-up-form__error js-newsletter_signup__error"
                                    data-test-id="newsletter-sign-up-form-error"
                                >
                                    Please enter a valid email address
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Added */}

        <div className="fnx-site footer-wrap">
            <section
                className="newsletter-sign-up-bottom-banner js-newsletter-sign-up-bottom-banner u-display-none@medium"
                data-enabled="true"
            >
                <div className="bottom-banner u-backgroundColor-neutralTint js-bottom-banner">
                    <div className="wrapper u-position-relative u-padding-vertical-s u-padding-vertical-m@medium">
                        <div className="u-position-relative js-overlay-content js-entry-screen">
                            <div className="layout layout--large">
                                <div className="layout__item">
                                    <div className="u-1/2@medium">
                                        <div className="h4 u-marginBottom-xs@medium u-paddingLeft-xxxs u-paddingLeft-0@medium js-newsletter-bottom-banner-form-screen-heading">
                                            <span className="u-display-none@medium">
                                                New to MOO? Get 20% off
                                            </span>
                                            <span className="u-display-none@until-medium">
                                                New to MOO? Get 20% off
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="layout__item u-1/2@medium">
                                    <div className="bottom-banner__text u-paddingLeft-xxxs u-paddingLeft-0@medium">
                                        <span className="u-display-none@medium">
                                            <p>
                                                Sign up to our MOOsletter for 20% off your first order,
                                                business tips, inspo, exclusive special offers and more.
                                            </p>
                                        </span>
                                        <span className="u-display-none@until-medium">
                                            <p>
                                                Sign up to our MOOsletter for 20% off your first order,
                                                business tips, inspo, exclusive special offers and more.
                                            </p>
                                        </span>
                                    </div>
                                </div>
                                <div className="layout__item u-1/2@medium u-paddingRight-xxxl@large">
                                    <div className="bottom-banner__newsletter-sign-up-form">
                                        <form
                                            className="js-newsletter_signup-form"
                                            data-test-id="newsletter-sign-up-form"
                                            data-has-redirect="false"
                                            action="/us/ajaxrequests/newsletter/signup.php"
                                            method="post"
                                            noValidate=""
                                        >
                                            <input
                                                type="hidden"
                                                name="requestPromoCode"
                                                defaultValue="true"
                                            />
                                            <input
                                                type="hidden"
                                                name="section"
                                                defaultValue="NEWSLETTER_BANNER"
                                            />
                                            <input
                                                type="hidden"
                                                name="recaptchaToken"
                                                defaultValue="03AFcWeA73DDXslusuUTX3ttKacevFqNK6WFfmHkm_YUuzoWEAyiFhkQEQrcHodTNxMitjkzjVdWKhsxtNZQD5Ikv8sMeU_ZGYxmrIjgIABmKkTwl-TIzHgwWm-l8KCC_RNylUDE_AtLEXeZxn4KrDfA-toHbILdBLOkOIRGeJ2YudGSPl3l7VuXVi6rwXjI0PabnniTauw0nQGthz7DfYQmwqeS9AyX120TruoxLc70GIP3ujImaHcpZhyKl55dBCL_qq2ixFLUbrFGRxZSx7x1ihTo9EMXP69-UTkAJ3ZtAb2a_Va3hPz8KU2SFYD_Lj6WNME5r2vVkkyD_CAG-jIFY777B9cleJRqFRVzDZP05JtiiT_PyVov_GLVSbsjBL9ec3vz9rij0jINYki32wFRoUPvqgyYKxpyt5lXNwvTH0EvtNf_SDhHG5sq2UNLV7szejSnr3VQdt6gRLSI1dss-kWkbNBcYvykSMe2Aqlc3aWV5n4BU3OqXf1G3IMZkPBLyc2ZLeaO-oun2J9FkGCvuwqMLvGo14Qt1KBKkmofDym3AjT1w4B9jbdhMnnDN-g0OQkuM4O_ZWySQLVtfHWpT5t9pIwdQN5WCV_OPvGf5a6k8zOvN1cSmSRMSzzXjyItjclWUG609tFggqfZsQloQ5tv2SF_E_bklpfXmRmvBpaYdiK09HyecBgXV8AknLCjDQ620U21vvNwpwTxvwFaqucX_2eEwEP6utlewVtPO-Cae2MEC1IUJrhcRETzGb-YInrEayEMQiQZtWj1mNPQTwwR5RGG32orTbX0BCxzr9VlVNQW6SHsT27SFNHt4C7emDdWl9rm8N7LYyoeCK7lOVpLwa1KvKDPg5SzjbIgBzb6ELh9pn6N7kqQ1MEZZnK3knTAgNI2oI2f_-ZQzhNdgVB62DZLBiFNX0Zjv1A1x47PlYCRaXJgnuw-bKK0XWUuTjHsavUKv_VRGCNMB8fLiTAcnNnjnlMUNyHR1aBaxuzPNojXJUNPU"
                                            />
                                            <input
                                                className="text-input u-paddingRight-xl js-newsletter_signup__email"
                                                type="email"
                                                name="other"
                                                placeholder="Enter your email address"
                                            />
                                            <button
                                                type="submit"
                                                className="btn -small u-position-absolute u-width-auto u-right-0 u-bottom-0 js-ga4-click-track"
                                                data-test-id="newsletter-sign-up-form-submit"
                                            >
                                                Sign up
                                            </button>
                                            <p className="p__meta u-marginTop-xxs u-marginBottom-0">
                                                This site is protected by reCAPTCHA and the Google{" "}
                                                <a
                                                    href="https://policies.google.com/privacy"
                                                    target="_blank"
                                                >
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a href="https://policies.google.com/terms" target="_blank">
                                                    Terms of Service
                                                </a>{" "}
                                                apply.
                                            </p>
                                            <div
                                                className="error-text newsletter-sign-up-form__error js-newsletter_signup__error"
                                                data-test-id="newsletter-sign-up-form-error"
                                            >
                                                Oops – that looks a little bit wrong. Have another go?
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="layout u-marginTop-xs">
                                <div className="layout__item u-1/2 u-position-relative u-paddingTop-l u-marginTop-xxxxs u-marginTop-0@small">
                                    <a
                                        href="/us/about/privacy-policy"
                                        className="cta-link -has-chevron -black u-center-transform-y u-paddingLeft-xxxs js-ga4-click-track"
                                        target="_blank"
                                    >
                                        <span className="cta-link__text">
                                            <span>Privacy Policy</span>&nbsp;
                                            <svg
                                                viewBox="0 0 48 48"
                                                className="svg-icon cta-link__chevron"
                                                role="presentation"
                                                aria-hidden="true"
                                                data-icon-id="ui--chevron-right-xxbold"
                                            >
                                                <path d="M14.663 13.813l10.186 10.186-10.186 10.175 4.24 4.244 14.434-14.417L18.905 9.57l-4.242 4.243z" />
                                            </svg>
                                        </span>
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                        <div
                            className="u-position-relative js-overlay-content js-exit-screen"
                            style={{ display: "none", maxWidth: 600 }}
                        >
                            <div className="h4 u-marginBottom-xs u-paddingLeft-xxxs js-newsletter-bottom-banner-thank-you-screen-heading">
                                Almost there…
                            </div>
                            <div className="bottom-banner__text u-paddingLeft-xxxs">
                                <p>
                                    We’ve sent you an email to make sure we’ve got the right inbox.
                                    Just confirm your email address and we’ll send you a code for 20%
                                    off your first order (when you spend $40 or more).&nbsp;
                                </p>
                            </div>
                            <a
                                href="/us/about/privacy-policy"
                                className="cta-link -has-chevron -black u-paddingLeft-xxxs js-ga4-click-track"
                                target="_blank"
                            >
                                <span className="cta-link__text">
                                    <span>Privacy Policy</span>&nbsp;
                                    <svg
                                        viewBox="0 0 48 48"
                                        className="svg-icon cta-link__chevron"
                                        role="presentation"
                                        aria-hidden="true"
                                        data-icon-id="ui--chevron-right-xxbold"
                                    >
                                        <path d="M14.663 13.813l10.186 10.186-10.186 10.175 4.24 4.244 14.434-14.417L18.905 9.57l-4.242 4.243z" />
                                    </svg>
                                </span>
                            </a>{" "}
                        </div>
                    </div>
                    <button
                        className="close-button -small-offset btn -small -disc -transparent-dark js-hide-banner"
                        type="button"
                    >
                        <svg
                            viewBox="0 0 48 48"
                            className="svg-icon -small"
                            role="presentation"
                            aria-hidden="true"
                            data-icon-id="ui--close-xbold"
                        >
                            <path d="M39.64 10.79L36.772 8 24 21.131 11.228 8 8.36 10.79 21.21 24 8.36 37.21 11.228 40 24 26.869 36.772 40l2.868-2.79L26.79 24l12.85-13.21z" />
                        </svg>{" "}
                    </button>
                </div>
            </section>
            <footer className="footer js-footer">
                <div
                    className="band u-padding-0"
                    data-module-location="footer"
                    data-module-name="footer"
                >
                    <div className="footer__bar">
                        <div className="wrapper">
                            <div className="layout footer__bar-inner">
                                <div className="layout__item u-2/3@medium footer__review-wrap">
                                    <div
                                        className="trust-pilot"
                                        data-component-name="trust-pilot--logo--stars--trust-score"
                                    >
                                        <div className="u-display-inlineBlock u-verticalAlign-middle u-marginRight-xs">
                                            <a
                                                href="https://www.trustpilot.com/review/www.moo.com"
                                                className="js-ga4-click-track"
                                                title="TrustPilot"
                                                data-component-name="trustpilot-logo"
                                            >
                                                <svg
                                                    viewBox="0 0 516.13 58.17"
                                                    className="svg-icon trust-pilot__logo"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-logo-dark-bg"
                                                >
                                                    <defs>
                                                        <linearGradient
                                                            id="a"
                                                            x1="29.04"
                                                            y1="58.17"
                                                            x2="29.04"
                                                            y2="24.99"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop offset={0} stopColor="#e37a27" />
                                                            <stop offset=".47" stopColor="#f9a220" />
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="b"
                                                            x1="28.93"
                                                            y1="22.66"
                                                            x2="28.93"
                                                            y2=".38"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop offset={0} stopColor="#fff" />
                                                            <stop offset={1} stopColor="#f9a220" />
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="c"
                                                            x1="29.04"
                                                            y1=".23"
                                                            x2="29.04"
                                                            y2="57.94"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop offset={0} stopColor="#4a484a" />
                                                            <stop offset={1} />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        d="M119.41 3.32a10.68 10.68 0 0 1-.09 1.47 3.29 3.29 0 0 1-.3 1 1.51 1.51 0 0 1-.49.56 1.24 1.24 0 0 1-.65.18H101.6v50.2a1.11 1.11 0 0 1-.18.63 1.18 1.18 0 0 1-.63.42 7.1 7.1 0 0 1-1.18.27 14.59 14.59 0 0 1-1.86.11 14.77 14.77 0 0 1-1.84-.11 7.12 7.12 0 0 1-1.21-.27 1.18 1.18 0 0 1-.62-.42 1.11 1.11 0 0 1-.18-.63V6.53H77.61a1.22 1.22 0 0 1-.61-.17 1.31 1.31 0 0 1-.47-.56 4 4 0 0 1-.3-1 8.8 8.8 0 0 1-.11-1.47 9.2 9.2 0 0 1 .11-1.5A4.39 4.39 0 0 1 76.5.76a1.32 1.32 0 0 1 .5-.58 1.27 1.27 0 0 1 .61-.18h40.27a1.29 1.29 0 0 1 .65.18 1.51 1.51 0 0 1 .49.58 3.59 3.59 0 0 1 .3 1.05 11.17 11.17 0 0 1 .09 1.51zm49.4 53.42a1.24 1.24 0 0 1-.14.63 1 1 0 0 1-.57.44 4.87 4.87 0 0 1-1.25.28 20.81 20.81 0 0 1-2.15.09 16.69 16.69 0 0 1-1.9-.09 4.43 4.43 0 0 1-1.18-.29 1.52 1.52 0 0 1-.69-.56 3.29 3.29 0 0 1-.43-.9l-5.32-13.64c-.63-1.55-1.28-3-1.95-4.27a14 14 0 0 0-2.4-3.36 9.79 9.79 0 0 0-3.26-2.19 11.68 11.68 0 0 0-4.52-.79h-5.15v24.65a1 1 0 0 1-.2.63 1.29 1.29 0 0 1-.63.42 6.46 6.46 0 0 1-1.16.27 14.63 14.63 0 0 1-1.86.11 14.48 14.48 0 0 1-1.85-.11 7.13 7.13 0 0 1-1.19-.27 1.22 1.22 0 0 1-.63-.42 1.14 1.14 0 0 1-.17-.63V3.14a2.87 2.87 0 0 1 .92-2.44 3.17 3.17 0 0 1 1.93-.7h12.3c1.46 0 2.68 0 3.65.11s1.84.16 2.62.25a22.08 22.08 0 0 1 5.93 1.83 14 14 0 0 1 4.32 3.18 12.81 12.81 0 0 1 2.61 4.41 16.36 16.36 0 0 1 .87 5.48 16.1 16.1 0 0 1-.79 5.22 12.58 12.58 0 0 1-2.25 4.07 14.94 14.94 0 0 1-3.54 3.07 22.37 22.37 0 0 1-4.61 2.19 10.8 10.8 0 0 1 2.6 1.58 14.17 14.17 0 0 1 2.17 2.31 22.72 22.72 0 0 1 1.91 3.1c.59 1.15 1.19 2.47 1.78 3.94l5.19 12.75c.42 1.08.68 1.83.81 2.26a4.44 4.44 0 0 1 .18.99zm-11.59-40.67a10.35 10.35 0 0 0-1.52-5.75 8.62 8.62 0 0 0-5.1-3.38 14.91 14.91 0 0 0-2.53-.45c-.94-.09-2.17-.13-3.69-.13h-6.49v19.51h7.52a16.8 16.8 0 0 0 5.26-.74 10.39 10.39 0 0 0 3.69-2.06 8 8 0 0 0 2.17-3.07 10.74 10.74 0 0 0 .69-3.93zm63.16 20.14a26.35 26.35 0 0 1-1.51 9.27 18.83 18.83 0 0 1-4.34 6.9 18.29 18.29 0 0 1-6.87 4.27 26.89 26.89 0 0 1-9.2 1.46 25.73 25.73 0 0 1-8.59-1.37 18.19 18.19 0 0 1-6.65-4 17.71 17.71 0 0 1-4.28-6.74 26.38 26.38 0 0 1-1.5-9.25V1.41a1.11 1.11 0 0 1 .17-.62 1.2 1.2 0 0 1 .61-.41 6.44 6.44 0 0 1 1.15-.26 11.87 11.87 0 0 1 1.86-.12 12.11 12.11 0 0 1 1.77.12 6 6 0 0 1 1.17.26 1.21 1.21 0 0 1 .6.41 1.11 1.11 0 0 1 .18.62v34.45a22.24 22.24 0 0 0 1 6.91 13.1 13.1 0 0 0 2.8 4.91 11.54 11.54 0 0 0 4.41 3 16.05 16.05 0 0 0 5.79 1 16.31 16.31 0 0 0 5.87-1 11.08 11.08 0 0 0 4.37-2.9 13 13 0 0 0 2.72-4.81 21 21 0 0 0 1-6.69V1.41a1.11 1.11 0 0 1 .09-.62 1.18 1.18 0 0 1 .61-.41 6.51 6.51 0 0 1 1.17-.26 12.12 12.12 0 0 1 1.86-.12 11.58 11.58 0 0 1 1.78.11 5.82 5.82 0 0 1 1.15.26 1.32 1.32 0 0 1 .62.41 1 1 0 0 1 .19.62zm43.41 5.26a16.43 16.43 0 0 1-1.47 7.08 15.21 15.21 0 0 1-4.06 5.25 17.58 17.58 0 0 1-6.11 3.26 25.55 25.55 0 0 1-7.57 1.09 26.13 26.13 0 0 1-5.25-.49 27.84 27.84 0 0 1-4.33-1.17 21.08 21.08 0 0 1-3.19-1.49 8.22 8.22 0 0 1-1.81-1.22 3.11 3.11 0 0 1-.75-1.33 7.83 7.83 0 0 1-.24-2.17 11.67 11.67 0 0 1 .09-1.59 3.69 3.69 0 0 1 .26-1 1.15 1.15 0 0 1 .43-.55 1.22 1.22 0 0 1 .61-.15 3.61 3.61 0 0 1 1.73.74 25.33 25.33 0 0 0 2.87 1.6 26.24 26.24 0 0 0 4.23 1.67 19.19 19.19 0 0 0 5.7.77 14.35 14.35 0 0 0 4.48-.65 10.74 10.74 0 0 0 3.5-1.85 8.18 8.18 0 0 0 2.24-2.95 9.7 9.7 0 0 0 .78-4 7.49 7.49 0 0 0-1.08-4.11 11 11 0 0 0-2.88-3 25.31 25.31 0 0 0-4.08-2.35l-4.69-2.19a48.3 48.3 0 0 1-4.67-2.47 19.71 19.71 0 0 1-4.07-3.2 14.87 14.87 0 0 1-2.91-4.3 14.32 14.32 0 0 1-1.11-5.91 14.72 14.72 0 0 1 1.29-6.31 12.85 12.85 0 0 1 3.58-4.65A16 16 0 0 1 240.77 1a22.74 22.74 0 0 1 6.83-1 23 23 0 0 1 3.78.33 26.81 26.81 0 0 1 3.62.87 20.91 20.91 0 0 1 3 1.22 7.61 7.61 0 0 1 1.72 1.1 3.05 3.05 0 0 1 .54.65 2.21 2.21 0 0 1 .22.61 5.76 5.76 0 0 1 .13.9c0 .35.05.8.05 1.34a13.65 13.65 0 0 1-.07 1.4 4.91 4.91 0 0 1-.2 1 1.26 1.26 0 0 1-.37.61.86.86 0 0 1-.54.2 3.52 3.52 0 0 1-1.51-.62c-.68-.41-1.51-.86-2.51-1.37a23 23 0 0 0-3.51-1.4 15.49 15.49 0 0 0-4.57-.63 12.13 12.13 0 0 0-4.1.63 8.63 8.63 0 0 0-2.88 1.68 6.73 6.73 0 0 0-1.7 2.49 8.37 8.37 0 0 0-.57 3.06 7.38 7.38 0 0 0 1.09 4.06 11.09 11.09 0 0 0 2.9 3 26 26 0 0 0 4.13 2.4l4.71 2.21c1.6.74 3.17 1.56 4.72 2.44a20.14 20.14 0 0 1 4.13 3.14 14.41 14.41 0 0 1 2.91 4.28 14 14 0 0 1 1.07 5.87zm47.8-38.16a10.53 10.53 0 0 1-.09 1.47 3.19 3.19 0 0 1-.29 1 1.38 1.38 0 0 1-.49.56 1.18 1.18 0 0 1-.65.18h-16.25v50.12a1.06 1.06 0 0 1-.18.62 1.17 1.17 0 0 1-.62.43 6.8 6.8 0 0 1-1.18.26 14.69 14.69 0 0 1-3.68 0 6.66 6.66 0 0 1-1.21-.26 1.2 1.2 0 0 1-.63-.43 1.11 1.11 0 0 1-.18-.62V6.52h-16.26a1.19 1.19 0 0 1-.65-.18 1.24 1.24 0 0 1-.47-.56 4.45 4.45 0 0 1-.29-1 8.6 8.6 0 0 1-.11-1.47 9 9 0 0 1 .11-1.49 4.82 4.82 0 0 1 .29-1.05 1.3 1.3 0 0 1 .47-.58 1.27 1.27 0 0 1 .65-.18h40.2a1.26 1.26 0 0 1 .65.18 1.43 1.43 0 0 1 .49.58 3.45 3.45 0 0 1 .29 1.05 11 11 0 0 1 .08 1.49z"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M356.32 17a20.37 20.37 0 0 1-1.44 7.84 16.45 16.45 0 0 1-4.09 5.95 18.17 18.17 0 0 1-6.53 3.81 28.2 28.2 0 0 1-9.26 1.29h-6.57v20.85a1 1 0 0 1-.2.63 1.31 1.31 0 0 1-.62.42 6.33 6.33 0 0 1-1.17.27 15.6 15.6 0 0 1-3.7 0 6.82 6.82 0 0 1-1.19-.27 1.15 1.15 0 0 1-.63-.42 1.08 1.08 0 0 1-.18-.63V3.32a3.11 3.11 0 0 1 .94-2.55 3.25 3.25 0 0 1 2.11-.77h12.39c1.26 0 2.45.05 3.61.16a32.66 32.66 0 0 1 4.06.67 16.83 16.83 0 0 1 4.8 1.92 15.12 15.12 0 0 1 4.13 3.47 14.79 14.79 0 0 1 2.61 4.78 18.46 18.46 0 0 1 .93 6zm-8.1.63a11.93 11.93 0 0 0-1.32-5.9 9.14 9.14 0 0 0-3.26-3.54 11 11 0 0 0-4-1.48 28 28 0 0 0-4.06-.31h-7.11v23.18h6.94a16.12 16.12 0 0 0 5.79-.9 10.84 10.84 0 0 0 3.8-2.48 10.46 10.46 0 0 0 2.38-3.8 14.09 14.09 0 0 0 .83-4.82zm26.3 39.07a1.08 1.08 0 0 1-.18.62 1.19 1.19 0 0 1-.63.42 6.54 6.54 0 0 1-1.18.27 12.85 12.85 0 0 1-1.84.11 13 13 0 0 1-1.82-.11 6.47 6.47 0 0 1-1.2-.27 1.21 1.21 0 0 1-.63-.42 1.12 1.12 0 0 1-.17-.62V1.43a1 1 0 0 1 .2-.63 1.31 1.31 0 0 1 .67-.42 6.65 6.65 0 0 1 1.2-.27A12.44 12.44 0 0 1 370.7 0a13 13 0 0 1 1.84.11 6 6 0 0 1 1.18.27 1.17 1.17 0 0 1 .63.42 1.08 1.08 0 0 1 .18.63zm44.25-1.88a10.81 10.81 0 0 1-.08 1.49 3.48 3.48 0 0 1-.3 1 1.42 1.42 0 0 1-.49.62 1.16 1.16 0 0 1-.7.21h-25.6a3.15 3.15 0 0 1-1.94-.7 2.89 2.89 0 0 1-.91-2.44V1.44a1.08 1.08 0 0 1 .17-.63 1.21 1.21 0 0 1 .62-.42 6.66 6.66 0 0 1 1.21-.27 15 15 0 0 1 3.69 0 6.47 6.47 0 0 1 1.18.27 1.17 1.17 0 0 1 .63.42 1.09 1.09 0 0 1 .18.63V51.5h20.77a1.16 1.16 0 0 1 .7.2 1.51 1.51 0 0 1 .49.58 3 3 0 0 1 .3 1 11.3 11.3 0 0 1 .08 1.54zm52.42-26.45a43.76 43.76 0 0 1-1.61 12.33 25.83 25.83 0 0 1-4.82 9.3 21 21 0 0 1-8 5.92A28.47 28.47 0 0 1 445.45 58a29.12 29.12 0 0 1-11-1.89 19.41 19.41 0 0 1-7.67-5.52 23.48 23.48 0 0 1-4.51-9 46.43 46.43 0 0 1-1.49-12.33 42.84 42.84 0 0 1 1.62-12.12A25.22 25.22 0 0 1 427.23 8a21.32 21.32 0 0 1 8.06-5.88A28.52 28.52 0 0 1 446.57 0a28.82 28.82 0 0 1 10.85 1.87 19.77 19.77 0 0 1 7.69 5.47 23.34 23.34 0 0 1 4.57 8.89 44.55 44.55 0 0 1 1.51 12.14zm-7.93.52a44.41 44.41 0 0 0-.85-8.91 20.65 20.65 0 0 0-2.83-7.14 13.68 13.68 0 0 0-5.28-4.74 17.88 17.88 0 0 0-8.18-1.7 16.75 16.75 0 0 0-8.18 1.83 15.39 15.39 0 0 0-5.37 4.88 20.3 20.3 0 0 0-3 7.12 39.82 39.82 0 0 0-.89 8.56 47.11 47.11 0 0 0 .83 9.16 20.51 20.51 0 0 0 2.78 7.2 13.34 13.34 0 0 0 5.25 4.71 18 18 0 0 0 8.25 1.68 17 17 0 0 0 8.27-1.83 14.87 14.87 0 0 0 5.39-4.94 21 21 0 0 0 2.91-7.21 41.73 41.73 0 0 0 .91-8.67zm52.87-25.57a9.94 9.94 0 0 1-.13 1.47 2.94 2.94 0 0 1-.29 1 1.43 1.43 0 0 1-.49.56 1.21 1.21 0 0 1-.65.18h-16.24v50.2a1.05 1.05 0 0 1-.19.63 1.13 1.13 0 0 1-.62.42 7 7 0 0 1-1.19.27 14.44 14.44 0 0 1-1.86.11 14.7 14.7 0 0 1-1.83-.11 7 7 0 0 1-1.21-.27 1.17 1.17 0 0 1-.62-.42 1.1 1.1 0 0 1-.18-.63V6.53h-16.3a1.21 1.21 0 0 1-.64-.18 1.31 1.31 0 0 1-.48-.56 4.47 4.47 0 0 1-.29-1 8.29 8.29 0 0 1-.11-1.47 8.66 8.66 0 0 1 .11-1.5 4.91 4.91 0 0 1 .29-1.05 1.31 1.31 0 0 1 .48-.58 1.25 1.25 0 0 1 .64-.18h40.28a1.26 1.26 0 0 1 .65.18 1.43 1.43 0 0 1 .49.58 3.2 3.2 0 0 1 .25 1.05 10.4 10.4 0 0 1 .13 1.5z"
                                                        fill="#929497"
                                                    />
                                                    <path
                                                        d="M0 0v25.67s19.43 9.25 29.3 25.79c0 0 4.35-36.52 28.78-51.45z"
                                                        fill="#f9a220"
                                                    />
                                                    <path
                                                        d="M0 46.81v11.36h26.11A41.06 41.06 0 0 0 0 46.81zm33.12 11.36h25V25c-14.12 3.82-25 33.17-25 33.17z"
                                                        fill="url(#a)"
                                                    />
                                                    <path
                                                        d="M.39.39h57.07S48.1 3.69 38 22.3c0 0-22.08 2.25-37.56-4.5z"
                                                        opacity=".5"
                                                        fill="url(#b)"
                                                    />
                                                    <path
                                                        d="M29.3 51.45C19.43 34.91 0 25.67 0 25.67v21.14a41.32 41.32 0 0 1 26.11 11.36h7S44 28.82 58.08 25V0H58C33.64 15 29.3 51.45 29.3 51.45z"
                                                        fill="url(#c)"
                                                    />
                                                </svg>{" "}
                                            </a>{" "}
                                        </div>
                                        <ul className="trust-pilot__stars-wrap fnx-list-inline">
                                            <li data-qa-name="star">
                                                <svg
                                                    viewBox="0 0 85 80.9"
                                                    className="svg-icon trust-pilot__star "
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-star"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M42.5 0l9.4 31.8 33.1-.9-27.3 18.7 11.1 31.3-26.3-20.2-26.3 20.2 11.1-31.3L0 30.9l33.1.9"
                                                    />
                                                </svg>{" "}
                                            </li>
                                            <li data-qa-name="star">
                                                <svg
                                                    viewBox="0 0 85 80.9"
                                                    className="svg-icon trust-pilot__star "
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-star"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M42.5 0l9.4 31.8 33.1-.9-27.3 18.7 11.1 31.3-26.3-20.2-26.3 20.2 11.1-31.3L0 30.9l33.1.9"
                                                    />
                                                </svg>{" "}
                                            </li>
                                            <li data-qa-name="star">
                                                <svg
                                                    viewBox="0 0 85 80.9"
                                                    className="svg-icon trust-pilot__star "
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-star"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M42.5 0l9.4 31.8 33.1-.9-27.3 18.7 11.1 31.3-26.3-20.2-26.3 20.2 11.1-31.3L0 30.9l33.1.9"
                                                    />
                                                </svg>{" "}
                                            </li>
                                            <li data-qa-name="star">
                                                <svg
                                                    viewBox="0 0 85 80.9"
                                                    className="svg-icon trust-pilot__star "
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-star"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M42.5 0l9.4 31.8 33.1-.9-27.3 18.7 11.1 31.3-26.3-20.2-26.3 20.2 11.1-31.3L0 30.9l33.1.9"
                                                    />
                                                </svg>{" "}
                                            </li>
                                            <li data-qa-name="half-star">
                                                <svg
                                                    viewBox="0 0 85 80.9"
                                                    className="svg-icon trust-pilot__star -half"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="logo--trust-pilot-star"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M42.5 0l9.4 31.8 33.1-.9-27.3 18.7 11.1 31.3-26.3-20.2-26.3 20.2 11.1-31.3L0 30.9l33.1.9"
                                                    />
                                                </svg>{" "}
                                            </li>
                                        </ul>
                                        <span className="u-color-white">
                                            <div className="trust-pilot__rating">4.7/5</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="layout__item u-1/3@medium footer__social-wrap">
                                    <ul className="fnx-list-inline smi__list">
                                        <li
                                            className="smi__item u-1/3 u-width-auto@medium"
                                            data-component-heading="facebook"
                                        >
                                            <a
                                                href="https://www.facebook.com/moo"
                                                className="smi__link js-ga4-click-track"
                                                data-component-name="social-media-icon"
                                            >
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="svg-icon -medium"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="ui--facebook"
                                                >
                                                    <path d="M27.787 10.279a3.558 3.558 0 0 1 2.892-1.009h3.81V2.843a53.021 53.021 0 0 0-5.554-.276 8.9 8.9 0 0 0-6.656 2.479 9.3 9.3 0 0 0-2.571 7.024v5.279h-6.2v7.161h6.2v18.408H27.1V24.51h6.2l.918-7.161H27.1v-4.591a3.693 3.693 0 0 1 .687-2.479z" />
                                                </svg>{" "}
                                            </a>
                                        </li>
                                        <li
                                            className="smi__item u-1/3 u-width-auto@medium"
                                            data-component-heading="instagram"
                                        >
                                            <a
                                                href="https://www.instagram.com/moo/"
                                                className="smi__link js-ga4-click-track"
                                                data-component-name="social-media-icon"
                                            >
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="svg-icon -medium"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="ui--instagram"
                                                >
                                                    <path d="M43.219 29.172q.023-1.431.023-5.151t-.023-5.154q-.02-1.127-.091-2.774a17.6 17.6 0 0 0-.306-2.64 12.077 12.077 0 0 0-.591-2.026 9.33 9.33 0 0 0-2.217-3.4A9.643 9.643 0 0 0 38.385 6.7a9.742 9.742 0 0 0-1.774-.893 12.077 12.077 0 0 0-2.026-.591 17.481 17.481 0 0 0-2.64-.305q-1.648-.073-2.773-.092-1.431-.019-5.151-.019t-5.154.023q-1.127.019-2.774.092a17.481 17.481 0 0 0-2.64.305 12.077 12.077 0 0 0-2.026.591 9.774 9.774 0 0 0-1.774.889A10.216 10.216 0 0 0 6.7 9.653a9.774 9.774 0 0 0-.893 1.774 12.077 12.077 0 0 0-.591 2.026 17.481 17.481 0 0 0-.305 2.64q-.073 1.649-.092 2.774Q4.8 20.3 4.8 24.021t.023 5.151q.019 1.125.092 2.773a17.481 17.481 0 0 0 .305 2.64 12.077 12.077 0 0 0 .591 2.026 10.011 10.011 0 0 0 3.846 4.731 9.9 9.9 0 0 0 1.774.889 12.077 12.077 0 0 0 2.026.591 17.6 17.6 0 0 0 2.64.306q1.649.072 2.774.091 1.43.023 5.154.023t5.151-.023q1.125-.02 2.773-.091a17.6 17.6 0 0 0 2.64-.306 12.077 12.077 0 0 0 2.026-.591 9.666 9.666 0 0 0 5.62-5.62 12.077 12.077 0 0 0 .591-2.026 17.6 17.6 0 0 0 .306-2.64q.068-1.645.087-2.773zm-3.46-.1q-.019 1.114-.092 2.717a13.588 13.588 0 0 1-.267 2.236 8.615 8.615 0 0 1-.4 1.335A6.2 6.2 0 0 1 35.356 39a8.582 8.582 0 0 1-1.335.4 13.588 13.588 0 0 1-2.236.267q-1.6.072-2.716.092-1.354.018-5.048.019t-5.051-.019q-1.114-.019-2.717-.092a13.562 13.562 0 0 1-2.235-.267 8.627 8.627 0 0 1-1.336-.4 6.2 6.2 0 0 1-3.647-3.647 8.615 8.615 0 0 1-.4-1.335 13.588 13.588 0 0 1-.267-2.236q-.072-1.6-.088-2.717-.022-1.353-.023-5.047t.023-5.051q.017-1.114.088-2.717a14.242 14.242 0 0 1 .267-2.235 8.627 8.627 0 0 1 .4-1.336 6.32 6.32 0 0 1 .6-1.19 7.027 7.027 0 0 1 1.857-1.859 6.32 6.32 0 0 1 1.19-.6 8.627 8.627 0 0 1 1.336-.4 14.242 14.242 0 0 1 2.235-.267q1.6-.072 2.717-.088 1.355-.022 5.051-.023t5.048.023q1.113.015 2.716.088a13.588 13.588 0 0 1 2.236.267 8.582 8.582 0 0 1 1.335.4A6.2 6.2 0 0 1 39 12.682a8.627 8.627 0 0 1 .4 1.336 13.562 13.562 0 0 1 .267 2.235q.073 1.6.092 2.717.018 1.355.019 5.051t-.019 5.047z" />
                                                    <path d="M31 17.039a9.828 9.828 0 1 0 2.118 3.14A9.83 9.83 0 0 0 31 17.039zm-1.076 9.473a6.411 6.411 0 0 1-8.4 3.411 6.3 6.3 0 0 1-2.037-1.373 6.368 6.368 0 0 1-1.374-2.038 6.429 6.429 0 0 1 0-4.986 6.439 6.439 0 0 1 3.411-3.411 6.41 6.41 0 0 1 8.4 8.4zM34.28 11.45a2.309 2.309 0 0 0-1.633 3.941 2.309 2.309 0 0 0 3.266-3.266 2.224 2.224 0 0 0-1.633-.675z" />
                                                </svg>{" "}
                                            </a>
                                        </li>
                                        <li
                                            className="smi__item u-1/3 u-width-auto@medium"
                                            data-component-heading="twitter"
                                        >
                                            <a
                                                href="https://twitter.com/MOO"
                                                className="smi__link js-ga4-click-track"
                                                data-component-name="social-media-icon"
                                            >
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="svg-icon -medium"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="ui--twitter"
                                                >
                                                    <path d="M3.51 38.561a24.732 24.732 0 0 0 13.56 3.965q11.456 0 18.652-8.175a24.833 24.833 0 0 0 6.511-16.987v-1.126a16.748 16.748 0 0 0 4.357-4.6 18.5 18.5 0 0 1-5.091 1.42 8.59 8.59 0 0 0 3.916-4.945 17.025 17.025 0 0 1-5.63 2.2 8.56 8.56 0 0 0-6.462-2.79 8.765 8.765 0 0 0-8.567 10.819A24 24 0 0 1 14.525 15.6 24.906 24.906 0 0 1 6.5 9.139a8.495 8.495 0 0 0-1.175 4.455A8.6 8.6 0 0 0 6.4 17.8a8.723 8.723 0 0 0 2.84 3.133 8.261 8.261 0 0 1-4.015-1.126v.1a8.686 8.686 0 0 0 2.055 5.681 8.231 8.231 0 0 0 5.042 3.035 8.566 8.566 0 0 1-2.35.294 10.768 10.768 0 0 1-1.664-.147 8.722 8.722 0 0 0 3.084 4.357 8.314 8.314 0 0 0 5.189 1.762 17.252 17.252 0 0 1-10.966 3.819 13.581 13.581 0 0 1-2.105-.147z" />
                                                </svg>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-padding-vertical-m@medium">
                        <div className="wrapper">
                            <nav className="js-nav-ftr__nav currency-selector js-currency-selector">
                                <div
                                    className="currency-selector__container"
                                    data-component-name="country-selector"
                                >
                                    <div className="nav-ftr__link nav-ftr__link--l1 currency-selector__link-l1 js-nav-ftr__link--l1">
                                        <span>United States (English)</span>
                                        <svg
                                            viewBox="0 0 17 12"
                                            className="svg-icon currency-selector__flag"
                                            role="presentation"
                                            aria-hidden="true"
                                            data-icon-id="flag--us"
                                        >
                                            <path
                                                d="M0 10.5c0 .2 0 .3.1.5h16.8c.1-.2.1-.3.1-.5V10H0v.5zM0 8h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm.1-1h16.8c-.2-.6-.7-1-1.3-1H1.4C.8 0 .3.4.1 1z"
                                                fill="#B32335"
                                            />
                                            <path
                                                d="M0 9h17v1H0zm16.9 2H.1c.2.6.7 1 1.3 1h14.3c.5 0 1-.4 1.2-1zM0 7h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-1.5V2h17v-.5c0-.2 0-.3-.1-.5H.1c-.1.2-.1.3-.1.5z"
                                                fill="#fff"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#3C3B6E"
                                                d="M0 6V1.5C0 .7.6 0 1.4 0H8v6H0z"
                                            />
                                            <path
                                                d="M1.5 1.2l.2.4H2l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm1.7 0l.1.4h.4l-.3.3.1.3-.3-.1-.3.1v-.3l-.2-.3H3zm1.6 0l.2.4h.3l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.4zm1.7 0l.2.4H7l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm-5 1.3l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm1.7 0l.1.3.4.1-.3.2.1.4-.3-.2-.3.2v-.4l-.2-.2.3-.1zm1.6 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.4-.1zm1.7 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm-5 1.3l.2.3H2l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3zm1.7 0l.1.3h.4l-.3.3.1.4-.3-.2-.3.2v-.4l-.2-.3H3zm1.6 0l.2.3h.3l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.4zm1.7 0l.2.3H7l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3z"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#fff"
                                            />
                                        </svg>{" "}
                                        <div className="nav-chevron">
                                            <div className="icon__morph">
                                                <div className="icon__morph-block -m1" />
                                                <div className="icon__morph-block -m2" />
                                                <div className="icon__morph-block -m3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="currency-selector__l2-list-container js-nav-ftr__list--l2 js-to-show">
                                        <ul className="nav-ftr__list u-padding-vertical-xs">
                                            <li>
                                                <a
                                                    href="/au/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="au"
                                                >
                                                    Australia
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--au"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#203C89"
                                                            d="M1.4 0h14.3c.7 0 1.3.7 1.3 1.5v9c0 .8-.6 1.5-1.4 1.5H1.4C.6 12 0 11.3 0 10.5v-9C0 .7.6 0 1.4 0z"
                                                        />
                                                        <path fill="#fff" d="M3.1 1.9V2z" />
                                                        <path
                                                            d="M0 5.5V6h.1l2.8-2h-.8zM7.8 0L5 2h.8L8 .4V0zM3.1 2L.6.2C.5.3.4.4.3.6l2 1.4h.8zm2.1 2L8 6v-.6L6 4zm-.7-4h-1v2.4H0v1.2h3.5V6h1V3.6H8V2.4H4.5z"
                                                            fill="#CC1417"
                                                        />
                                                        <path
                                                            d="M3.1 6h.4V3.6H0V4h1.4L0 5v.5L2.1 4h.8L.1 6h.7l2.3-1.6zM5 2l2.8-2h-.7L4.9 1.5V0h-.4v2.4H8V2H6.5L8 .9V.4L5.8 2zM3.5 0h-.4v1.4L1.1 0C.9 0 .8.1.7.2l2.4 1.7h-.8L.3.5C.2.7.2.8.1.9L1.6 2H0v.4h3.5V0zm1 3.6V6h.4V4.3L7.3 6H8L5.2 4H6l2 1.4v-.5L6.7 4H8v-.4H4.6zM3.3 9.7l.4-.6-.7.3-.2-.8-.3.8-.7-.3.4.6-.7.4.8.1-.1.8.6-.6.5.6-.1-.8.8-.1-.7-.4zm7.4-5.2l.2-.3-.3.1-.2-.3-.1.3-.3-.1.2.3-.3.2h.4l-.1.4.3-.3.3.3-.1-.4h.4l-.4-.2zM13 2.1l-.3.1-.1-.3-.1.3-.3-.1.2.3-.4.2h.4l-.1.4.3-.3.2.3-.1-.4h.4l-.3-.2.2-.3zm2 3.5l-.3-.2.2-.3-.3.1-.1-.3-.1.3-.4-.1.2.3-.3.2h.4l-.1.4.3-.3.2.3-.1-.4h.4zm-2.2 4.8l.2-.3-.3.1-.1-.3-.1.3-.3-.1.2.3-.4.2h.4l-.1.4.3-.3.3.3-.1-.4h.4l-.4-.2zm-.4-3.8l-.1-.2-.1.2H12l.1.2V7l.2-.1.2.1v-.2l.1-.2z"
                                                            fill="#fff"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/ca/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="ca"
                                                >
                                                    Canada
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--ca"
                                                    >
                                                        <path d="M13 0h14.6H13z" fill="none" />
                                                        <path
                                                            fill="#E52420"
                                                            d="M1.2 0C.5.1.1.7 0 1.4v9.2c.1.8.6 1.4 1.4 1.4H4V0H1.2z"
                                                        />
                                                        <path fill="#fff" d="M4 0h9v12H4z" />
                                                        <path
                                                            fill="#E52420"
                                                            d="M15.8 0H13v12h2.6c.8 0 1.4-.7 1.4-1.5v-9c0-.8-.5-1.4-1.2-1.5z"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#E52620"
                                                            d="M8.6 8.7c0-.5 0-.9-.1-1.2 0-.1.1-.1.2-.1.8.1 1.1.2 1.1.2-.3-.8.7-1.1 1.2-1.6-.4-.1-.3-.1-.1-1-.8.3-.8.2-.9-.2 0 0-.1.1-.6.7-.1.1-.2 0-.2-.1.3-1.4.3-1.5.3-1.5-.5.4-.5.4-.6.2-.3-.5-.4-.8-.4-.8s-.1.3-.4.8c-.1.2-.1.2-.6-.2 0 0 0 .1.3 1.4 0 .1-.1.2-.2.1L7 4.8c-.2.4-.1.5-.9.2.2 1 .3.9-.1 1 .5.4 1.5.8 1.1 1.5 0 0 .4-.1 1.1-.2.1 0 .2 0 .2.1 0 .3 0 .7-.1 1.2h.3z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/eu/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="nofollow"
                                                    title="eu"
                                                >
                                                    Europe
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--eu"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#1E3D87"
                                                            d="M1.4 12C.6 12 0 11.4 0 10.6V1.4C0 .6.6 0 1.4 0h14.3c.7 0 1.3.6 1.3 1.4v9.1c0 .8-.6 1.4-1.4 1.4H1.4z"
                                                        />
                                                        <path
                                                            d="M8 3.9l.5-.3.6.3-.1-.7.5-.4-.7-.1-.3-.6-.2.6-.7.1.5.4zm.8 4.8l-.3-.6-.2.6-.7.1.5.4-.1.7.5-.3.6.3-.1-.7.5-.4zM10 4.2l-.1.7.6-.3.5.3-.1-.7.5-.4-.7-.1-.2-.6-.3.6-.7.1zm.7 3.5l-.2-.6-.3.6-.7.1.5.4-.1.7.6-.3.5.3-.1-.7.5-.4zM6.5 3.1l-.2.6-.7.1.5.4-.1.7.5-.3.6.3-.1-.7.5-.4-.7-.1zm.3 4.6l-.3-.6-.2.6-.7.1.5.4-.1.7.5-.3.6.3-.1-.7.5-.4zM6 6.2l.5-.4-.7-.1-.3-.6-.2.6-.7.1.5.4-.1.7.5-.3.6.3zm6.4-.4l-.7-.1-.2-.6-.3.6-.7.1.5.4-.1.7.6-.3.5.3-.1-.7z"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#FFCC0C"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/fr/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="fr"
                                                >
                                                    France
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--fr"
                                                    >
                                                        <path d="M11 0h14.6H11z" fill="none" />
                                                        <path
                                                            fill="#0656A3"
                                                            d="M1.2 0C.5.1.1.7 0 1.4v9.2c.1.8.6 1.4 1.4 1.4H6V0H1.2z"
                                                        />
                                                        <path fill="#fff" d="M6 0h5v12H6z" />
                                                        <path
                                                            fill="#E84237"
                                                            d="M15.8 0H11v12h4.6c.8 0 1.4-.7 1.4-1.5v-9c0-.8-.5-1.4-1.2-1.5z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/de/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="de"
                                                >
                                                    Germany | Deutschland
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--de"
                                                    >
                                                        <path d="M15.6 0H1.4h14.2z" fill="none" />
                                                        <path
                                                            fill="#1D1D1B"
                                                            d="M0 1.5V4h17V1.5c0-.8-.6-1.5-1.3-1.5H1.3C.6 0 0 .7 0 1.5z"
                                                        />
                                                        <path fill="#E52420" d="M0 4h17v4H0z" />
                                                        <path
                                                            fill="#FFCC04"
                                                            d="M17 10.5V8H0v2.5c0 .8.6 1.5 1.4 1.5h14.3c.7 0 1.3-.7 1.3-1.5z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/it/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="it"
                                                >
                                                    Italy | Italia
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--it"
                                                    >
                                                        <path d="M11 0h14.6H11z" fill="none" />
                                                        <path
                                                            fill="#009246"
                                                            d="M1.2 0C.5.1.1.7 0 1.4v9.2c.1.8.6 1.4 1.4 1.4H6V0H1.2z"
                                                        />
                                                        <path fill="#fff" d="M6 0h5v12H6z" />
                                                        <path
                                                            fill="#CF2C37"
                                                            d="M15.8 0H11v12h4.6c.8 0 1.4-.7 1.4-1.5v-9c0-.8-.5-1.4-1.2-1.5z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/nl/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="nofollow"
                                                    title="nl"
                                                >
                                                    Netherlands | Nederland
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--nl"
                                                    >
                                                        <path d="M15.6 0H1.4h14.2z" fill="none" />
                                                        <path
                                                            fill="#AF1D29"
                                                            d="M0 1.5V4h17V1.5c0-.8-.6-1.5-1.3-1.5H1.3C.6 0 0 .7 0 1.5z"
                                                        />
                                                        <path fill="#fff" d="M0 4h17v4H0z" />
                                                        <path
                                                            fill="#21478B"
                                                            d="M17 10.5V8H0v2.5c0 .8.6 1.5 1.4 1.5h14.3c.7 0 1.3-.7 1.3-1.5z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/es/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="es"
                                                >
                                                    Spain | España
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--es"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#AB191D"
                                                            d="M1.3 0h14.3c.7 0 1.4.7 1.4 1.5v9c0 .8-.6 1.5-1.4 1.5H1.3C.6 12 0 11.3 0 10.5v-9C0 .7.6 0 1.3 0z"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#F1BF00"
                                                            d="M0 3h17v6H0z"
                                                        />
                                                        <path
                                                            fill="#AB191D"
                                                            d="M4.3 4.4c-.5 0-.8-.4-.8-.4s-.3.4-.7.4c-.5 0-.8-.3-.8-.3v2C2 7.4 3.5 8 3.5 8S5 7.4 5 6.1v-2s-.3.3-.7.3z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/uk/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="uk"
                                                >
                                                    United Kingdom
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--uk"
                                                    >
                                                        <path
                                                            fill="#33348e"
                                                            d="M0 7.8v1.8l3-1.8zM10.7 12h5.2l-5.2-3.2V12zm-9.8-.1c.2.1.3.1.5.1H6V8.9l-5.1 3zM0 2.3v1.9h3zM6 0H1.4c-.1 0-.3 0-.4.1l5 3V0zm11 9.7V7.8h-3.2z"
                                                        />
                                                        <path
                                                            fill="#fff"
                                                            d="M9.8 7.2V12h.9V8.8l5.2 3.2c.4-.1.8-.4 1-.8l-5.5-3.4h1.5l4.2 2.5v-.6l-3.2-1.9H17v-.6H9.8zM6.9 4.8V0H6v3.1l-5-3C.6.2.2.5.1 1l5.2 3.2H3.8L0 1.8v.5l3 1.9H0v.6h6.9zm0 2.4H0v.6h3L0 9.6v.9c0 .2 0 .4.1.5l5.2-3.2H6v.6L.5 11.7c.1.1.3.2.4.2l5.1-3V12h.9V7.2z"
                                                        />
                                                        <path
                                                            fill="#cc2229"
                                                            d="M9.8 4.8V0H6.9v4.8H0v2.4h6.9V12h2.9V7.2H17V4.8h-4.4z"
                                                        />
                                                        <path
                                                            fill="#cc2229"
                                                            d="M11.3 7.8l5.5 3.4c.1-.2.2-.4.2-.7v-.2l-4.2-2.5h-1.5zm-6-3.6L.1 1c-.1.1-.1.3-.1.5v.3l3.8 2.4h1.5z"
                                                        />
                                                        <path
                                                            fill="#33348e"
                                                            d="M15.9 0h-5.2v3.2L15.9 0zM17 4.2v-2l-3.3 2z"
                                                        />
                                                        <path
                                                            fill="#fff"
                                                            d="M16.8.8l-5.5 3.4h-.6v-.6L16.3.2c-.1-.1-.3-.2-.4-.2l-5.2 3.2V0h-.9v4.8H17v-.6h-3.3l3.3-2v-.7c0-.2-.1-.5-.2-.7z"
                                                        />
                                                        <path
                                                            fill="#cc2229"
                                                            d="M10.7 4.2h.6L16.8.8c-.1-.3-.3-.5-.5-.6l-5.6 3.4v.6zM6 7.8h-.7L.1 11c.1.3.2.5.4.7L6 8.4v-.6z"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/us/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="us"
                                                >
                                                    United States (English)
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--us"
                                                    >
                                                        <path
                                                            d="M0 10.5c0 .2 0 .3.1.5h16.8c.1-.2.1-.3.1-.5V10H0v.5zM0 8h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm.1-1h16.8c-.2-.6-.7-1-1.3-1H1.4C.8 0 .3.4.1 1z"
                                                            fill="#B32335"
                                                        />
                                                        <path
                                                            d="M0 9h17v1H0zm16.9 2H.1c.2.6.7 1 1.3 1h14.3c.5 0 1-.4 1.2-1zM0 7h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-1.5V2h17v-.5c0-.2 0-.3-.1-.5H.1c-.1.2-.1.3-.1.5z"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#3C3B6E"
                                                            d="M0 6V1.5C0 .7.6 0 1.4 0H8v6H0z"
                                                        />
                                                        <path
                                                            d="M1.5 1.2l.2.4H2l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm1.7 0l.1.4h.4l-.3.3.1.3-.3-.1-.3.1v-.3l-.2-.3H3zm1.6 0l.2.4h.3l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.4zm1.7 0l.2.4H7l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm-5 1.3l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm1.7 0l.1.3.4.1-.3.2.1.4-.3-.2-.3.2v-.4l-.2-.2.3-.1zm1.6 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.4-.1zm1.7 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm-5 1.3l.2.3H2l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3zm1.7 0l.1.3h.4l-.3.3.1.4-.3-.2-.3.2v-.4l-.2-.3H3zm1.6 0l.2.3h.3l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.4zm1.7 0l.2.3H7l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3z"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#fff"
                                                        />
                                                    </svg>
                                                    <svg
                                                        viewBox="0 0 48 48"
                                                        className="svg-icon -small u-color-moogreen u-right-0 u-marginRight-xs u-center-transform-y"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="ui--tick-xbold"
                                                    >
                                                        <path d="M20.399 39.353L5.111 24.065l2.828-2.829 12.46 12.46L42.12 11.975l2.829 2.828-24.55 24.55z" />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/es-us/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="es-us"
                                                >
                                                    United States (Español)
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--us"
                                                    >
                                                        <path
                                                            d="M0 10.5c0 .2 0 .3.1.5h16.8c.1-.2.1-.3.1-.5V10H0v.5zM0 8h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm.1-1h16.8c-.2-.6-.7-1-1.3-1H1.4C.8 0 .3.4.1 1z"
                                                            fill="#B32335"
                                                        />
                                                        <path
                                                            d="M0 9h17v1H0zm16.9 2H.1c.2.6.7 1 1.3 1h14.3c.5 0 1-.4 1.2-1zM0 7h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-1.5V2h17v-.5c0-.2 0-.3-.1-.5H.1c-.1.2-.1.3-.1.5z"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#3C3B6E"
                                                            d="M0 6V1.5C0 .7.6 0 1.4 0H8v6H0z"
                                                        />
                                                        <path
                                                            d="M1.5 1.2l.2.4H2l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm1.7 0l.1.4h.4l-.3.3.1.3-.3-.1-.3.1v-.3l-.2-.3H3zm1.6 0l.2.4h.3l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.4zm1.7 0l.2.4H7l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm-5 1.3l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm1.7 0l.1.3.4.1-.3.2.1.4-.3-.2-.3.2v-.4l-.2-.2.3-.1zm1.6 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.4-.1zm1.7 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm-5 1.3l.2.3H2l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3zm1.7 0l.1.3h.4l-.3.3.1.4-.3-.2-.3.2v-.4l-.2-.3H3zm1.6 0l.2.3h.3l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.4zm1.7 0l.2.3H7l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3z"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#fff"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a
                                                    href="/fr-us/"
                                                    className="nav-ftr__link nav-ftr__link--l2 currency-selector__link-l2 js-ga4-click-track"
                                                    rel="alternate"
                                                    title="fr-us"
                                                >
                                                    United States (Français)
                                                    <svg
                                                        viewBox="0 0 17 12"
                                                        className="svg-icon currency-selector__flag"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        data-icon-id="flag--us"
                                                    >
                                                        <path
                                                            d="M0 10.5c0 .2 0 .3.1.5h16.8c.1-.2.1-.3.1-.5V10H0v.5zM0 8h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm.1-1h16.8c-.2-.6-.7-1-1.3-1H1.4C.8 0 .3.4.1 1z"
                                                            fill="#B32335"
                                                        />
                                                        <path
                                                            d="M0 9h17v1H0zm16.9 2H.1c.2.6.7 1 1.3 1h14.3c.5 0 1-.4 1.2-1zM0 7h17v1H0zm0-2h17v1H0zm0-2h17v1H0zm0-1.5V2h17v-.5c0-.2 0-.3-.1-.5H.1c-.1.2-.1.3-.1.5z"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#3C3B6E"
                                                            d="M0 6V1.5C0 .7.6 0 1.4 0H8v6H0z"
                                                        />
                                                        <path
                                                            d="M1.5 1.2l.2.4H2l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm1.7 0l.1.4h.4l-.3.3.1.3-.3-.1-.3.1v-.3l-.2-.3H3zm1.6 0l.2.4h.3l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.4zm1.7 0l.2.4H7l-.2.3v.3l-.3-.1-.3.1.1-.3-.3-.3h.3zm-5 1.3l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm1.7 0l.1.3.4.1-.3.2.1.4-.3-.2-.3.2v-.4l-.2-.2.3-.1zm1.6 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.4-.1zm1.7 0l.2.3.3.1-.2.2v.4l-.3-.2-.3.2.1-.4-.3-.2.3-.1zm-5 1.3l.2.3H2l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3zm1.7 0l.1.3h.4l-.3.3.1.4-.3-.2-.3.2v-.4l-.2-.3H3zm1.6 0l.2.3h.3l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.4zm1.7 0l.2.3H7l-.2.3v.4l-.3-.2-.3.2.1-.4-.3-.3h.3z"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            fill="#fff"
                                                        />
                                                    </svg>{" "}
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="u-padding-vertical-m">
                        <div className="wrapper">
                            <nav className="js-nav-ftr__nav">
                                <ul className="nav-ftr-main__list">
                                    <li className="u-2/5@medium nav-ftr-main__item">
                                        <div className="nav-ftr-main__link-container-l1">
                                            <div className="nav-ftr__link nav-ftr__link--l1 nav-ftr-main__link-l1 js-nav-ftr__link--l1">
                                                <span className="nav-ftr__heading">Products</span>
                                                <div className="nav-chevron">
                                                    <div className="icon__morph -chevron-down">
                                                        <div className="icon__morph-block -m1" />
                                                        <div className="icon__morph-block -m2" />
                                                        <div className="icon__morph-block -m3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-ftr-main__list-wrap-l2 js-nav-ftr__list--l2">
                                            <div className="u-1/2@medium nav-ftr-main__list-container-l2">
                                                <ul
                                                    className="nav-ftr__list u-paddingTop-xs u-paddingTop-0@medium"
                                                    data-component-name="footer-navigation"
                                                >
                                                    <li>
                                                        <a
                                                            href="/us/products"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            All Products
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-cards"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Business Cards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-cards/square"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Square Business Cards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-cards/letterpress"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Letterpress Business Cards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/luxe-products"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Luxe by MOO
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/drinkware"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            MOO Water Bottle
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-cards/minicards"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            MiniCards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/flyers"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Flyers
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="u-1/2@medium nav-ftr-main__list-container-l2">
                                                <ul
                                                    className="nav-ftr__list u-paddingBottom-xs u-paddingBottom-0@medium"
                                                    data-component-name="footer-navigation"
                                                >
                                                    <li>
                                                        <a
                                                            href="/us/postcards"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Postcards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/luxe-notecards"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Notecards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/gifts/cards/"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Gift Cards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/greeting-cards"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Greeting Cards
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/stickers"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Stickers and Labels
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/letterhead"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Letterheads
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/accessories"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Accessories
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/branded-merchandise"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Branded Merchandise
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="u-1/5@medium nav-ftr-main__item">
                                        <div className="nav-ftr-main__link-container-l1">
                                            <div className="nav-ftr__link nav-ftr__link--l1 nav-ftr-main__link-l1 js-nav-ftr__link--l1">
                                                <span className="nav-ftr__heading">Paper Stocks</span>
                                                <div className="nav-chevron">
                                                    <div className="icon__morph -chevron-down">
                                                        <div className="icon__morph-block -m1" />
                                                        <div className="icon__morph-block -m2" />
                                                        <div className="icon__morph-block -m3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-ftr-main__list-wrap-l2 js-nav-ftr__list--l2">
                                            <div className="nav-ftr-main__list-container-l2">
                                                <ul
                                                    className="nav-ftr__list u-padding-vertical-xs u-padding-vertical-0@medium"
                                                    data-component-name="footer-navigation"
                                                >
                                                    <li>
                                                        <a
                                                            href="/us/about/paper"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-paper"
                                                        >
                                                            Paper Stocks
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/eco"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-eco"
                                                        >
                                                            MOO Eco
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/paper#luxe"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-luxe"
                                                        >
                                                            MOO Luxe
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/paper#super"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-super"
                                                        >
                                                            MOO Super
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/paper#cotton"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-cotton"
                                                        >
                                                            MOO Cotton
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/paper#original"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-original"
                                                        >
                                                            MOO Original
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/paper#letterpress"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-letterpress"
                                                        >
                                                            MOO Letterpress
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/sample-packs"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-samplepacks"
                                                        >
                                                            Sample Packs
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="u-1/5@medium nav-ftr-main__item">
                                        <div className="nav-ftr-main__link-container-l1">
                                            <div className="nav-ftr__link nav-ftr__link--l1 nav-ftr-main__link-l1 js-nav-ftr__link--l1">
                                                <span className="nav-ftr__heading">About Us</span>
                                                <div className="nav-chevron">
                                                    <div className="icon__morph -chevron-down">
                                                        <div className="icon__morph-block -m1" />
                                                        <div className="icon__morph-block -m2" />
                                                        <div className="icon__morph-block -m3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-ftr-main__list-wrap-l2 js-nav-ftr__list--l2">
                                            <div className="nav-ftr-main__list-container-l2">
                                                <ul
                                                    className="nav-ftr__list u-padding-vertical-xs u-padding-vertical-0@medium"
                                                    data-component-name="footer-navigation"
                                                >
                                                    <li>
                                                        <a
                                                            href="/us/about"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            About MOO
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/press"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-press"
                                                        >
                                                            Media resources
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/people-products-planet"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            People, products and the planet
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/about-the-company"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Who we are
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/working-for-moo"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-careers"
                                                        >
                                                            Careers
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/blog/"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            The Drop
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-printing-services"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-mbs"
                                                        >
                                                            Business Services
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/business-printing-services/reseller-print-solutions"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Reseller
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/printfinity"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-printfinity"
                                                        >
                                                            Printfinity
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/moo-promise"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-moo-promise"
                                                        >
                                                            The MOO Promise
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/packaging"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-packaging"
                                                        >
                                                            Packaging
                                                        </a>{" "}
                                                    </li>l
                                                    <li>
                                                        <a
                                                            href="/us/partner"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Partner with MOO
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="u-1/5@medium nav-ftr-main__item">
                                        <div className="nav-ftr-main__link-container-l1">
                                            <div className="nav-ftr__link nav-ftr__link--l1 nav-ftr-main__link-l1 js-nav-ftr__link--l1">
                                                <span className="nav-ftr__heading">Help</span>
                                                <div className="nav-chevron">
                                                    <div className="icon__morph -chevron-down">
                                                        <div className="icon__morph-block -m1" />
                                                        <div className="icon__morph-block -m2" />
                                                        <div className="icon__morph-block -m3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-ftr-main__list-wrap-l2 js-nav-ftr__list--l2">
                                            <div className="nav-ftr-main__list-container-l2">
                                                <ul
                                                    className="nav-ftr__list u-padding-vertical-xs u-padding-vertical-0@medium"
                                                    data-component-name="footer-navigation"
                                                >
                                                    <li>
                                                        <a
                                                            href="https://support.moo.com/hc/en-us/articles/204288414"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Contact us
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/home/pricing"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Pricing
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/next-day-delivery"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                            id="footer-ndd"
                                                        >
                                                            Next Day Delivery
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://support.moo.com/hc/en-us"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            FAQs
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://support.moo.com/hc/en-us/sections/200572464"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Artwork guidelines
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/hello/affiliates"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Affiliates
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/refer"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Refer and Earn
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://submit-irm.trustarc.com/services/validation/e33b000f-76a4-4c10-99d3-47d4456411fc"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Do not sell or share my personal information
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/us/about/vulnerability-disclosure"
                                                            className="nav-ftr__link nav-ftr__link--l2 nav-ftr-main__link-l2 js-nav-ftr__link js-ga4-click-track"
                                                        >
                                                            Vulnerability Disclosure
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="u-paddingBottom-m">
                        <hr className="separator -light u-marginBottom-m" />
                        <div className="wrapper footer-legal">
                            <div className="media media--large media--rev">
                                <div
                                    className="media__img footer__links-wrap"
                                    data-component-name="footer-legal-links"
                                >
                                    <nav>
                                        <ul className="fnx-list-inline">
                                            <li>
                                                <a
                                                    href="/home/terms-conditions"
                                                    className="footer-legal-link js-ga4-click-track"
                                                >
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/home/privacy-policy"
                                                    className="footer-legal-link js-ga4-click-track"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/home/fonts"
                                                    className="footer-legal-link js-ga4-click-track"
                                                >
                                                    Fonts
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/home/sitemap"
                                                    className="footer-legal-link js-ga4-click-track"
                                                >
                                                    Sitemap
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/home/about-the-company"
                                                    className="footer-legal-link js-ga4-click-track"
                                                >
                                                    Company information
                                                </a>
                                            </li>
                                            <li
                                                id="teconsent"
                                                consent="undefined"
                                                aria-label="Open Cookie Preferences Modal"
                                                className="truste_caIcon_display"
                                                role="complementary"
                                            >
                                                <a
                                                    role="link"
                                                    id="icon-id001594714785078044"
                                                    tabIndex={0}
                                                    lang="en"
                                                    aria-haspopup="dialog"
                                                    aria-label="Cookie Preferences, opens a dedicated popup modal window"
                                                    className="truste_cursor_pointer"
                                                >
                                                    Cookie Preferences
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="media__body">
                                    <div className="media media--small">
                                        <div className="media__img footer-address__moo-drop-wrap">
                                            <svg
                                                viewBox="0 0 48 48"
                                                className="svg-icon footer-address__moo-drop"
                                                role="presentation"
                                                aria-hidden="true"
                                                data-icon-id="ui--moo-drop-fill"
                                            >
                                                <path d="M15.281 40.789A13.249 13.249 0 0 0 24 43.869c.51 0 1-.018 1.5-.057a13.434 13.434 0 0 0 8.373-4.068 13.445 13.445 0 0 0 4.074-9.823 13.289 13.289 0 0 0-1.659-6.61c-.161-.321-1.52-2.716-11.425-19.736a1.04 1.04 0 0 0-1.728 0c-9.9 17.02-11.264 19.415-11.4 19.691a13.335 13.335 0 0 0-1.684 6.655 13.445 13.445 0 0 0 4.074 9.823 15.557 15.557 0 0 0 1.156 1.045z" />
                                            </svg>{" "}
                                        </div>
                                        <div className="media__body footer-address__wrap">
                                            <svg
                                                viewBox="0 0 48 48"
                                                className="svg-icon footer-address__moo-drop"
                                                role="presentation"
                                                aria-hidden="true"
                                                data-icon-id="ui--moo-drop-fill"
                                            >
                                                <path d="M15.281 40.789A13.249 13.249 0 0 0 24 43.869c.51 0 1-.018 1.5-.057a13.434 13.434 0 0 0 8.373-4.068 13.445 13.445 0 0 0 4.074-9.823 13.289 13.289 0 0 0-1.659-6.61c-.161-.321-1.52-2.716-11.425-19.736a1.04 1.04 0 0 0-1.728 0c-9.9 17.02-11.264 19.415-11.4 19.691a13.335 13.335 0 0 0-1.684 6.655 13.445 13.445 0 0 0 4.074 9.823 15.557 15.557 0 0 0 1.156 1.045z" />
                                            </svg>{" "}
                                            <span className="footer__address">
                                                © MOO Inc., 25 Fairmount Ave, East Providence, RI 02914, USA
                                                - Registered in the United States of America.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    </>
}

export default footer;