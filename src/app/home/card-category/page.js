'use client';

import { useRouter } from "next/navigation";
const cardCategory = () => {

    const router = useRouter();

    const productClick = (productId) => {
        localStorage.setItem("selectedPostcard", JSON.stringify(productId));
        router.push("/home/card-details");
    }

    const postcardFoil = [
        {
            id: 1,
            title: "Original Postcards",
            description: "16-17pt premium paper with matte or gloss options.",
            price: "23.00",
            image: "/assets/images/0702WF-TR-752x564-Original-Postcards.jpg",
            link: "/us/postcards/original",
            thickness: "16-17pt",
            quantity: 25,
            features: [
                "16–17pt paper thickness",
                "Our “feel good” premium paper",
                "Available in matte or gloss",
                "Coating on one or both sides",
                "Uncoated side is writable"
            ]
        },
        {
            id: 2,
            title: "Super Postcards",
            description: "18pt silky smooth, strong, and durable Postcards.",
            price: "31.00",
            image: "/assets/images/0702WF-TR-752x564-Super-Postcards.jpg",
            link: "/us/postcards/super",
            thickness: "18pt",
            quantity: 25,
            features: [
                "18pt paper thickness",
                "Silky smooth, strong and durable",
                "Comes in a Soft Touch coating",
                "Shine-free, so there’s no glare",
                "For Postcards they’ll want to keep"
            ]
        },
        {
            id: 3,
            title: "Luxe Postcards",
            description: "32pt thick Mohawk Superfine® paper.",
            price: "56.00",
            image: "/assets/images/0702WF-TR-752x564-Luxe-Postcards.jpg",
            link: "/us/postcards/luxe",
            thickness: "32pt",
            quantity: 25,
            features: [
                "32pt paper thickness",
                "Thick, Mohawk Superfine® paper",
                "Choice of 8 color seams",
                "Uncoated and naturally textured",
                "Writable on both sides with pen"
            ]
        },
        {
            id: 4,
            title: "Foil Postcards",
            description: "18pt premium paper with raised Gold or Silver Foil.",
            price: "62.00",
            image: "/assets/images/0702WF-TR-752x564-Foil-Postcards.jpg",
            link: "/us/postcards/gold-and-silver-foil",
            thickness: "18pt",
            quantity: 25,
            features: [
                "18pt paper thickness",
                "Raised Gold or Silver Foil",
                "Strong Super paper, Soft Touch coating",
                "Foil one or both sides (at no extra cost)",
                "Makes your brand literally shine"
            ]
        }
    ];
    return <>
        <main id="main-content" className="u-outline-none">
            <section

                className="
  band -module  home-hero-module
  u-paddingTop-0 u-paddingBottom-xs u-padding-0@medium
  js-component
    "
                data-module-name="home-hero-module"
                data-module-index={1}
            >
                <div
                    className="
      wide-media__wrap -stacking@until-medium -fixed-height-short@until-medium
      u-marginBottom-m u-marginBottom-0@medium
  "
                    data-component-name="home-hero-image"
                >
                    <a href="#paperstocks" className="-standalone -medium js-ga4-click-track">
                        <picture>
                            <source
                                media="only screen and (min-width: 40.0625em)"
                                srcSet="/assets/images/0650WF-HP-1920x530-Postcards1.jpg, /dam/jcr:15886929-791c-4215-a516-49c59230a7a9/0650WF-HP-3840x1060-Postcards0.jpg 2x"
                            />
                            <img
                                src="/assets/images/0650WF-HP-640x350-Postcards4.jpg"
                                srcSet="/assets/images/0650WF-HP-640x350-Postcards4.jpg, /dam/jcr:3caf223e-48d9-40ec-8f57-725ebf6f69b7/0650WF-HP-1280x700-Postcards.jpg 2x"
                                alt="A range of custom high quality Postcards by MOO"
                                className="wide-media"
                                fetchPriority="high"
                            />
                        </picture>
                    </a>{" "}
                </div>
                <div className="wrapper home-hero-module__header-wrap">
                    <div
                        className="layout     
     home-hero-module__header-vertical-align-middle
"
                    >
                        <div
                            className="layout__item     u-1/2@medium u-1/3@large
"
                        >
                            <header
                                className="
                  home-hero-module__header u-last-child-margin-bottom-0
                  -color-dark
    u-textAlign-left@medium
                  js-personalised-header
              "
                                data-remembered-user='{
                  "heading": " Postcards.",
                  "hideSecondaryHeading": true
              }'
                            >
                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                    <h1
                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                        data-di-mask=""
                                        data-qa-name="heading"
                                    >
                                        Postcards.
                                        <br />
                                    </h1>
                                    <span className="js-home-hero-secondary-heading">
                                        For fresh announcements.
                                    </span>
                                </div>
                                <p className="p__lead u-marginBottom-xs u-display-none@until-medium has-fouc js-home-hero-module-sub-heading">
                                    Get the word out there in a range of sizes and special finishes.
                                </p>
                                <div className="home-hero-module__header-ctas-wrap -left has-fouc u-display-none@until-medium js-home-hero-module-button-wrapper">
                                    <a
                                        href="#paperstocks"
                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone -medium js-ga4-click-track"
                                        data-component-name="primary-cta"
                                    >
                                        Shop Postcards
                                    </a>
                                    <a
                                        href="/us/account/reorder.php"
                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -medium js-ga4-click-track"
                                        data-component-name="secondary-cta"
                                    >
                                        Reorder
                                    </a>{" "}
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
                <div
                    className="
  hiding-single-row-nav__container -color-dark
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                >
                    <div className="wrapper u-padding-0">
                        <nav className="hiding-single-row-nav__nav">
                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                <li className="u-padding-horizontal-m">
                                    <a
                                        href="/us/postcards/original"
                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                        data-component-name="animated-underline-link"
                                        data-qa-name="animated-underline-link"
                                    >
                                        Original Postcards
                                    </a>{" "}
                                </li>
                                <li className="u-padding-horizontal-m">
                                    <a
                                        href="/us/postcards/super"
                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                        data-component-name="animated-underline-link"
                                        data-qa-name="animated-underline-link"
                                    >
                                        Super Postcards
                                    </a>{" "}
                                </li>
                                <li className="u-padding-horizontal-m">
                                    <a
                                        href="/us/postcards/luxe"
                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                        data-component-name="animated-underline-link"
                                        data-qa-name="animated-underline-link"
                                    >
                                        Luxe Postcards
                                    </a>{" "}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="wrapper u-textAlign-center u-display-none@medium">
                    <p className="p__lead u-marginBottom-m">
                        Get the word out there in a range of sizes and special finishes.
                    </p>
                    <div className="home-hero-module__mobile-ctas-wrap">
                        <div className="u-display-flex">
                            <a
                                href="#paperstocks"
                                className="btn -width-100 -standalone js-ga4-click-track"
                            >
                                Shop Postcards
                            </a>{" "}
                        </div>
                        <div className="u-display-flex u-marginTop-xs">
                            <a
                                href="/us/account/reorder.php"
                                className="btn -width-100 -ghost-dark js-ga4-click-track"
                            >
                                Reorder
                            </a>{" "}
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="band sticky-nav js-fnx-sticky-nav u-padding-0"
                data-is-visible-small-viewport="false"
                data-module-name="sticky-nav"
                data-module-location="header"
            >
                <div className="wrapper">
                    <nav className="sticky-nav__nav u-position-relative u-overflow-hidden u-textAlign-center">
                        <div className="sticky-nav__logo u-center-transform-y js-fnx-sticky-nav-moo-drop u-color-moogreen">
                            <a
                                href="#htmlBody"
                                className="u-color-moogreen js-ga4-click-track"
                                data-component-name="sticky-nav-moo-drop"
                                id="stickyNavCta"
                            >
                                <svg
                                    viewBox="0 0 48 48"
                                    className="svg-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                    data-icon-id="ui--moo-drop-bold"
                                >
                                    <path d="M24 44.015a13.46 13.46 0 0 1-8.86-3.133 15.619 15.619 0 0 1-1.165-1.055 13.649 13.649 0 0 1-4.135-9.973 13.565 13.565 0 0 1 1.713-6.764c.067-.137.339-.681 11.151-19.259a1.5 1.5 0 0 1 2.592 0C36.108 22.409 36.38 22.953 36.483 23.158a13.478 13.478 0 0 1 1.677 6.7 13.65 13.65 0 0 1-4.136 9.974 13.643 13.643 0 0 1-8.5 4.129c-.519.039-1.012.054-1.524.054zm0-36.448c-7.75 13.322-9.627 16.6-9.8 16.935a10.681 10.681 0 0 0-1.359 5.352 10.612 10.612 0 0 0 3.259 7.853 12.809 12.809 0 0 0 .952.861A10.411 10.411 0 0 0 24 41.015q.651 0 1.254-.046a10.565 10.565 0 0 0 6.646-3.253 10.623 10.623 0 0 0 3.265-7.862 10.592 10.592 0 0 0-1.325-5.287c-.212-.401-2.09-3.678-9.84-17z" />
                                </svg>{" "}
                                <span className="u-visually-hidden">MOO</span>
                            </a>{" "}
                        </div>
                        <ul className="sticky-nav__list u-center-transform-x js-fnx-sticky-nav-list js-scrollspy-nav">
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#012"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    012
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#paperstocks"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="paperstocks"
                                    rel=""
                                >
                                    Postcard Papers
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#shopBySize"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="shopBySize"
                                    rel=""
                                >
                                    Postcard Sizes
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#018"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    018
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#03"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    03
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#pricing"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="pricing"
                                    rel=""
                                >
                                    Postcard Pricing
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#designingyourcards"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="designingyourcards"
                                    rel=""
                                >
                                    Designing your Postcards
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#011"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    011
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#whyMOO"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="whyMOO"
                                    rel=""
                                >
                                    Why MOO?
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#0112"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    0112
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#0113"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    0113
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#0114"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    0114
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item u-display-none">
                                <a
                                    href="#0115"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"

                                    rel=""
                                >
                                    0115
                                </a>{" "}
                            </li>
                            <li className="sticky-nav__item">
                                <a
                                    href="#faqs"
                                    className="sticky-nav__link js-fnx-sticky-nav-link js-ga4-click-track"
                                    data-scroll-section="faqs"
                                    rel=""
                                >
                                    FAQs
                                </a>{" "}
                            </li>
                        </ul>
                        <div
                            className="sticky-nav__cta-wrap u-center-transform-y js-fnx-sticky-nav-cta"
                            data-component-name="sticky-nav-cta"
                        >
                            <a
                                href="#shopBySize"
                                className="btn -small js-ga4-click-track"
                                id="stickyNavCta"
                            >
                                Start making
                            </a>{" "}
                        </div>
                    </nav>
                </div>
            </div>
            <div className="band sticky-nav__spacer u-padding-0 js-fnx-sticky-nav-spacer" />
            <section
                id="paperstocks"
                className="
  band
      -module
  u-backgroundColor-white
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={2}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Shop Postcards by paper or foil</h2>
                            <p className="p__lead">
                                Show off your brand at its best with personalized Postcards. With
                                stocks that go from premium to extra-fancy.
                            </p>
                        </header>
                    </div>
                    <div className="">
                        <div className="tile-rack__container layout layout--row-spacing u-display-flex u-flexWrap-wrap  js-tile-rack-slider">

                            {postcardFoil.map((postcard) => (
                                <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap" key={postcard.id}>
                                    <div
                                        className="tile
-link
 u-textAlign-
 js-tile
 "
                                        data-component-name="tile"
                                        data-site-search="exclude"
                                        data-qa-name="tile"
                                        onClick={() => productClick(postcard.id)}
                                    >
                                        <div className="tile__body" data-qa-name="body">
                                            <div className="tile__media-wrap">
                                                <a
                                                   onClick={() => productClick(postcard.id)}
                                                    className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                    data-qa-name="image-link"
                                                    data-component-text=""
                                                >
                                                    <figure
                                                        className="tile__figure u-margin-0
"
                                                        data-qa-name="figure"
                                                    >
                                                        <img
                                                            src={postcard.image} alt={postcard.title} title={postcard.title}

                                                            className="tile__image ls-is-cached lazyloaded"
                                                            data-qa-name="image"

                                                        />
                                                        <figcaption
                                                            className="u-visually-hidden"
                                                            data-qa-name="figcaption"
                                                        >
                                                            {postcard.title} - {postcard.thickness}
                                                        </figcaption>
                                                        <div
                                                            className="capsule tile__capsule "
                                                            data-qa-name="image-capsule"
                                                        >
                                                            {postcard.thickness}
                                                        </div>
                                                    </figure>
                                                </a>{" "}
                                            </div>
                                            <div className="tile__text-wrap" data-qa-name="text-wrap">
                                                <div
                                                    className="tile__text-wrap-inner"
                                                    data-qa-name="text-wrap-inner"
                                                >
                                                    <div className="u-marginBottom-xxxs">
                                                        <h3 className="h__block" data-qa-name="heading">
                                                            {postcard.title}
                                                        </h3>
                                                    </div>
                                                    <p className="u-marginBottom-xs">
                                                        <span
                                                            className="u-fontSize-s"
                                                            data-qa-name="quantity-from"
                                                        >
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="quantity"
                                                            >
                                                                25
                                                            </span>{" "}
                                                            postcards from
                                                        </span>
                                                        <span className="price__price-with-tax-wrap">
                                                            <span className="price__display-price">
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium u-color-dark"
                                                                    data-qa-name="price-inc-tax"
                                                                >
                                                                    {postcard.quantity}
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <div className="list-default__parent u-last-child-margin-bottom-0">
                                                        <ul>
                                                            {postcard.features.map((feature, index) => (
                                                                <li key={index}>{feature}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <a
                                                    onClick={() => productClick(postcard.id)}
                                                    className="tile__horizontal-footer-link js-ga4-click-track"
                                                    data-qa-name="horizontal-footer-link"
                                                >
                                                    <div
                                                        className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                        data-qa-name="horizontal-footer"
                                                    >
                                                        <div className="cta-link -has-chevron">
                                                            <span className="cta-link__text">
                                                                <span>Shop {postcard.title}</span>&nbsp;
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
                                                        </div>{" "}
                                                    </div>
                                                </a>{" "}
                                            </div>
                                        </div>
                                        <a
                                           onClick={() => productClick(postcard.id)}
                                            className="js-ga4-click-track"
                                            data-qa-name="footer-link"
                                        >
                                            <div
                                                className="tile__footer cta-link__wrap"
                                                data-qa-name="footer"
                                            >
                                                <div className="cta-link -has-chevron">
                                                    <span className="cta-link__text">
                                                        <span>Shop {postcard.title}</span>&nbsp;
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
                                                </div>{" "}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            <section
                id="shopBySize"
                className="band -module size-module        u-backgroundColor-neutralTint
 js-size-module js-component"
                data-module-name="size-module"
                data-module-index={3}
            >
                <div className="wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Shop Postcards by Size</h2>
                            <p className="p__lead">
                                Our Postcards now come in more sizes than ever.
                            </p>
                        </header>
                    </div>
                </div>
                <div className="wrapper u-justifyContent-center@medium">
                    <div className="layout u-display-flex@medium u-justifyContent-center@medium u-margin-0@medium layout--row-spacing-large js-equal-height-parent">
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate  u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/standard"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Standard1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Standard1.png, /assets/images/0559WF-SM-588-postcards-Standard1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Standard1.png, /assets/images/0559WF-SM-588-postcards-Standard1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Standard Postcards</h3>
                                        <p className="u-margin-0">4" x 6"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $23.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/standard"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Standard Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate  u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/square"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Square1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Square1.png,/assets/images/0559WF-SM-588-postcards-Square1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Square1.png, /assets/images/0559WF-SM-588-postcards-Square1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Square Postcards</h3>
                                        <p className="u-margin-0">4.72" x 4.72"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $22.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/square"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Square Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate  u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/rack-cards"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Rackcard1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Rackcard1.png, /assets/images/0559WF-SM-588-postcards-Rackcard1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Rackcard1.png, /assets/images/0559WF-SM-588-postcards-Rackcard1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Rack Cards</h3>
                                        <p className="u-margin-0">3.67" x 8.5"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $25.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/rack-cards"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Rack Cards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate  u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/half-page"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Half-Page1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Half-Page1.png, /assets/images/0559WF-SM-588-postcards-Half-Page1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Half-Page1.png, /assets/images/0559WF-SM-588-postcards-Half-Page1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Half Page Postcards</h3>
                                        <p className="u-margin-0">5.5" x 8.5"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $34.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/half-page"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Half Page Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="layout u-display-flex@medium u-justifyContent-center@medium u-margin-0@medium">
                        <div className="layout__item size-module__layout-item u-display-flex@medium  u-padding-0 js-size-block-wrap-measure" />
                        <div className="layout__item size-module__layout-item u-display-flex@medium  u-padding-0 js-size-block-wrap-measure" />
                        <div className="layout__item size-module__layout-item u-display-flex@medium  u-padding-0 js-size-block-wrap-measure" />
                        <div className="layout__item size-module__layout-item u-display-flex@medium  u-padding-0 js-size-block-wrap-measure" />
                    </div>
                </div>
            </section>
            <section

                className="band -module size-module        u-backgroundColor-neutralTint
 js-size-module js-component"
                data-module-name="size-module"
                data-module-index={4}
            >
                <div className="wrapper u-justifyContent-center@medium">
                    <div className="layout u-display-flex@medium u-justifyContent-center@medium u-margin-0@medium layout--row-spacing-large js-equal-height-parent">
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate u-margin-horizontal-m@medium u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/small"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Small1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Small1.png, /assets/images/0559WF-SM-588-postcards-Small1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Small1.png, /assets/images/0559WF-SM-588-postcards-Small1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Small Postcards</h3>
                                        <p className="u-margin-0">4.13" x 5.83"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $23.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/small"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Small Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate u-margin-horizontal-m@medium u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/medium"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Medium1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Medium1.png, /assets/images/0559WF-SM-588-postcards-Medium1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Medium1.png, /assets/images/0559WF-SM-588-postcards-Medium1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Medium Postcards</h3>
                                        <p className="u-margin-0">5" x 7"</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $26.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/medium"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Medium Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="layout__item size-module__layout-item u-display-flex@medium -animate u-margin-horizontal-m@medium u-padding-0@medium js-size-block-wrap"
                            style={{ width: "256.75px" }}
                        >
                            <figure
                                className="size-block has-link cta-link__wrap"
                                data-component-name="size-block"
                            >
                                <a
                                    href="/us/postcards/large"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="/assets/images/0559WF-SM-588-postcards-Large1.png"
                                            data-srcset="/assets/images/0559WF-SM-588-postcards-Large1.png, /assets/images/0559WF-SM-588-postcards-Large1.png 2x"
                                            alt=""
                                            className="size-block__image ls-is-cached lazyloaded"
                                            srcSet="/assets/images/0559WF-SM-588-postcards-Large1.png, /assets/images/0559WF-SM-588-postcards-Large1.png 2x"
                                        />
                                    </div>
                                </a>{" "}
                                <figcaption
                                    className="size-block__info-wrap u-textAlign-center js-equal-height-child"
                                    style={{ height: "auto" }}
                                >
                                    <div
                                        className="js-equal-height-child-2"
                                        style={{ height: "auto" }}
                                    >
                                        <h3 className="h__block">Large Postcards</h3>
                                        <p className="u-margin-0">6” x 9”</p>
                                        <p className="u-margin-0">
                                            <span className="u-fontSize-s" data-qa-name="quantity-from">
                                                <span
                                                    className="u-fontFamily-secondaryMedium"
                                                    data-qa-name="quantity"
                                                >
                                                    25
                                                </span>{" "}
                                                postcards from
                                            </span>
                                            <span className="price__price-with-tax-wrap">
                                                <span className="price__display-price">
                                                    <span
                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                        data-qa-name="price-inc-tax"
                                                    >
                                                        $39.00
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <a
                                        href="/us/postcards/large"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Shop Large Postcards</span>&nbsp;
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
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="layout u-display-flex@medium u-justifyContent-center@medium u-margin-0@medium">
                        <div className="layout__item size-module__layout-item u-display-flex@medium u-margin-horizontal-m@medium u-padding-0 js-size-block-wrap-measure" />
                        <div className="layout__item size-module__layout-item u-display-flex@medium u-margin-horizontal-m@medium u-padding-0 js-size-block-wrap-measure" />
                        <div className="layout__item size-module__layout-item u-display-flex@medium u-margin-horizontal-m@medium u-padding-0 js-size-block-wrap-measure" />
                    </div>
                </div>
            </section>
            <section
                id=""
                className="band -module intercom-module u-backgroundColor-white js-component"
                data-module-name="intercom-module"
                data-module-index={5}
            >
                <div className="wrapper u-padding-0@until-medium">
                    <div className="u-position-relative">
                        <div className="intercom-module__ratio-box">
                            <div className="u-position-absolute u-top-0">
                                <picture>
                                    <source
                                        media="only screen and (min-width: 64.0625em)"
                                        srcSet="/assets/images/0585WF-CTA-2352x578-Intercom-Update.jpg, /assets/images/0585WF-CTA-2352x578-Intercom-Update.jpg 2x"
                                    />
                                    <source
                                        media="only screen and (min-width: 40.0625em)"
                                        srcSet="/assets/images/0585WF-CTA-1952x500-Intercom-Update1.jpg, /assets/images/0585WF-CTA-1952x500-Intercom-Update1.jpg 2x"
                                    />
                                    <img
                                        src="/assets/images/0585WF-CTA-1280x960-Intercom-Update.jpg"
                                        srcSet="/assets/images/0585WF-CTA-1280x960-Intercom-Update.jpg, /assets/images/0585WF-CTA-1280x960-Intercom-Update.jpg 2x"
                                        alt=""
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="wrapper u-textAlign-center intercom-module__block-wrap -color-dark u-paddingBottom-0 u-paddingTop-m u-paddingTop-0@large">
                            <header className="u-color-inherit">
                                <h3 className="h4 u-color-inherit">
                                    Brand more. Save more. Work less.
                                </h3>
                                <p className="p__lead">
                                    Sign up to a MOO business plan to unlock exclusive products, pro
                                    design help, special discounts and more.
                                </p>
                                <div className="intercom-module__mobile-ctas-wrap">
                                    <a
                                        href="/us/business-printing-services"
                                        className="btn -standalone u-margin-vertical-xxxs u-margin-horizontal-xxxs@small js-ga4-click-track"
                                    >
                                        Check our plans
                                    </a>
                                    <button
                                        className="btn -standalone-white u-margin-vertical-xxxs u-margin-horizontal-xxxs@small js-intercom-button js-ga4-click-track"
                                        data-qa-name="intercom-cta"
                                    >
                                        Talk with us
                                    </button>{" "}
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="pricing"
                className="band -module tabs-module js-tabs-module js-component is-tabs"
                data-module-name="tabs-module"
                data-module-index={6}
            >
                <div
                    className="wrapper tabs-module__wrapper js-tabs-wrapper"
                    style={{ height: 519 }}
                >
                    <ul className="tabs-module__list js-tabs-list" role="tablist">
                        <li
                            className="tabs-module__item js-tab-item is-selected"
                            role="presentation"
                        >
                            <a
                                href="#"
                                className="tabs-module__link js-tab-link"
                                role="tab"
                                aria-selected="true"
                            >
                                <span>Pricing</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Pricing
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div className="layout" data-component-name="pricing">
                                    <div className="layout__item u-1/4@large u-marginBottom-m u-marginBottom-0@large">
                                        <header className="u-marginBottom-m">
                                            <div className="u-marginBottom-xxxs">
                                                <h2 className="tabs-module__heading" data-qa-name="heading">
                                                    Postcards - Pricing
                                                </h2>
                                            </div>
                                            <p>Select your product, get your price.</p>
                                        </header>
                                        <div id="js-pricing-table-options">
                                            <fieldset className="u-last-child-margin-bottom-0 u-margin-0">
                                                <legend className="u-visually-hidden">Postcards</legend>
                                                <div className="field-container -side-by-side">
                                                    <label htmlFor="field1" className="label">
                                                        Size
                                                    </label>
                                                    <div className="js-field">
                                                        <select
                                                            style={{ width: "100%" }}
                                                            tabIndex={-1}
                                                            className="select2-hidden-accessible"
                                                            aria-hidden="true"
                                                        >
                                                            <option
                                                                value='Small (4.13" x 5.83")'
                                                                data-description=""
                                                            >
                                                                Small (4.13" x 5.83")
                                                            </option>
                                                            <option
                                                                value='Standard (4" x 6")'
                                                                data-description=""
                                                            >
                                                                Standard (4" x 6")
                                                            </option>
                                                            <option
                                                                value='Square (4.72" x 4.72")'
                                                                data-description=""
                                                            >
                                                                Square (4.72" x 4.72")
                                                            </option>
                                                            <option
                                                                value='Rack Card (3.67" x 8.5")'
                                                                data-description=""
                                                            >
                                                                Rack Card (3.67" x 8.5")
                                                            </option>
                                                            <option value='Medium (5" x 7")' data-description="">
                                                                Medium (5" x 7")
                                                            </option>
                                                            <option
                                                                value='Half Page (5.5" x 8.5")'
                                                                data-description=""
                                                            >
                                                                Half Page (5.5" x 8.5")
                                                            </option>
                                                            <option
                                                                value="Large Postcards (6” x 9”)"
                                                                data-description=""
                                                            >
                                                                Large Postcards (6” x 9”)
                                                            </option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            style={{ width: "100%" }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex={0}
                                                                    aria-labelledby="select2-rs7w-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-rs7w-container"
                                                                        title='Small (4.13" x 5.83")'
                                                                    >
                                                                        Small (4.13" x 5.83")
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span
                                                                className="dropdown-wrapper"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field-container -side-by-side">
                                                    <label htmlFor="field2" className="label">
                                                        Paper
                                                    </label>
                                                    <div className="js-field">
                                                        <select
                                                            style={{ width: "100%" }}
                                                            tabIndex={-1}
                                                            className="select2-hidden-accessible"
                                                            aria-hidden="true"
                                                        >
                                                            <option value="Original" data-description="">
                                                                Original
                                                            </option>
                                                            <option value="Super" data-description="">
                                                                Super
                                                            </option>
                                                            <option value="Luxe" data-description="">
                                                                Luxe
                                                            </option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            style={{ width: "100%" }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex={0}
                                                                    aria-labelledby="select2-nov8-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-nov8-container"
                                                                        title="Original"
                                                                    >
                                                                        Original
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span
                                                                className="dropdown-wrapper"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field-container -side-by-side">
                                                    <label htmlFor="field3" className="label">
                                                        Foil
                                                    </label>
                                                    <div className="js-field">
                                                        <select
                                                            style={{ width: "100%" }}
                                                            tabIndex={-1}
                                                            className="select2-hidden-accessible"
                                                            aria-hidden="true"
                                                        >
                                                            <option value="None" data-description="">
                                                                None
                                                            </option>
                                                            <option value="Gold Foil" data-description="">
                                                                Gold Foil
                                                            </option>
                                                            <option value="Silver Foil" data-description="">
                                                                Silver Foil
                                                            </option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            style={{ width: "100%" }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex={0}
                                                                    aria-labelledby="select2-j5lx-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-j5lx-container"
                                                                        title="None"
                                                                    >
                                                                        None
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span
                                                                className="dropdown-wrapper"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="layout__item u-2/4@large">
                                        <div id="js-fnx-react-pricing-table">
                                            <table
                                                className="table -pricing -striped u-margin-0@large has-3-cols@medium"
                                                role="grid"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Quantity</th>
                                                        <th className="u-display-none@until-medium">
                                                            Price per Postcard
                                                        </th>
                                                        <th>Pack Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    25
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.92</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $23.00
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    50
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.78</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $39.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $46.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    100
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.58</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $58.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $92.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    250
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.38</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $95.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $230.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    500
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.28</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $142.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $460.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    1,000
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.18</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $181.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $920.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>
                                                                <span
                                                                    className="u-fontFamily-secondaryMedium"
                                                                    data-qa-name="quantity"
                                                                >
                                                                    2,500
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="u-display-none@until-medium">$0.15</td>
                                                        <td>
                                                            <span className="price__price-with-tax-wrap">
                                                                <span className="price__display-price">
                                                                    <span
                                                                        className="u-fontFamily-secondaryMedium u-color-dark"
                                                                        data-qa-name="price-inc-tax"
                                                                    >
                                                                        $367.00
                                                                    </span>
                                                                    <span> </span>
                                                                    <s
                                                                        className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                        data-qa-name="price-inc-tax-strikethrough"
                                                                    >
                                                                        $2300.00
                                                                    </s>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan="100%">
                                                            For more quantities and pricing visit our{" "}
                                                            <a
                                                                href="/us/help/faq/cost-calculator.html"
                                                                className="js-ga4-click-track"
                                                            >
                                                                Shipping and Cost Calculator
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large">
                                        <div className="moo-promise__wrap block__wrap-mob">
                                            <div className="media">
                                                <div className="media__img moo-promise__image-wrap">
                                                    <figure className="u-marginBottom-xs">
                                                        <img
                                                            src="/assets/images/icons/0716WF-SVG-72x72-Retirement-Plan-Business-Discounts0.svg"
                                                            alt=""
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="tabs-module__heading">
                                                        Buy more, save more
                                                    </h4>
                                                    <p>
                                                        There are good reasons to stock up big on business
                                                        Postcards: You won't have to worry about running out;
                                                        you can build a really massive "house of cards" (if you
                                                        keep your hand steady); and best of all, you'll save a
                                                        LOAD of money.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                id="designingyourcards"
                className="
  band
      -module
  u-backgroundColor-white
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={7}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Designing your Postcards</h2>
                            <p className="p__lead">
                                Whether you’re a beginner or a professional designer, we have
                                Postcard design options for any skill level.
                            </p>
                        </header>
                    </div>
                    <div className="">
                        <div className="layout layout--row-spacing u-display-flex u-flexWrap-wrap">
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
  -link
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="/us/postcards/design-guidelines"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <div
                                                    className="tile__ratio-box u-ratio-2:1"
                                                    data-qa-name="ratio-box"
                                                >
                                                    <div className="tile__ratio-box-inner">
                                                        <figure
                                                            className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                            data-qa-name="figure"
                                                        >
                                                            <img
                                                                src="/assets/images/category__OPT-032.jpg"
                                                                data-srcset="/assets/images/category__OPT-032.jpg, /assets/images/category__OPT-032.jpg 2x"
                                                                alt="Upload a full design if you..."
                                                                title="Upload a full design if you..."
                                                                className="tile__image ls-is-cached lazyloaded"
                                                                data-qa-name="image"
                                                                srcSet="/assets/images/category__OPT-032.jpg, /assets/images/category__OPT-032.jpg 2x"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            >
                                                                Upload a full design if you...
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Upload a full design if you...
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Already have a complete design</li>
                                                        <li>Have design chops (or your own designer)</li>
                                                        <li>Are confident with your Postcard layout</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/postcards/design-guidelines"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Start making</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="/us/postcards/design-guidelines"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Start making</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
  -link
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="/us/postcards/design-guidelines-dyo"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <div
                                                    className="tile__ratio-box u-ratio-2:1"
                                                    data-qa-name="ratio-box"
                                                >
                                                    <div className="tile__ratio-box-inner">
                                                        <figure
                                                            className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                            data-qa-name="figure"
                                                        >
                                                            <img
                                                                src="/assets/images/category__OPT-022.jpg"
                                                                data-srcset="/assets/images/category__OPT-022.jpg, /assets/images/category__OPT-022.jpg 2x"
                                                                alt="Design your Postcards online if you..."
                                                                title="Design your Postcards online if you..."
                                                                className="tile__image ls-is-cached lazyloaded"
                                                                data-qa-name="image"
                                                                srcSet="/assets/images/category__OPT-022.jpg, /assets/images/category__OPT-022.jpg 2x"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            >
                                                                Design your Postcards online if you...
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Design your Postcards online if you...
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Already have your own logo</li>
                                                        <li>Want to create your own Postcard design easily</li>
                                                        <li>Want to customize every detail</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/postcards/design-guidelines-dyo"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Start making</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="/us/postcards/design-guidelines-dyo"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Start making</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
  -link
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&paperType=classic&productType=postcard_medium"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <div
                                                    className="tile__ratio-box u-ratio-2:1"
                                                    data-qa-name="ratio-box"
                                                >
                                                    <div className="tile__ratio-box-inner">
                                                        <figure
                                                            className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                            data-qa-name="figure"
                                                        >
                                                            <img
                                                                src="/assets/images/category__OPT-022.jpg"
                                                                data-srcset="/assets/images/category__OPT-022.jpg, /assets/images/category__OPT-022.jpg 2x"
                                                                alt="Use our templates if you..."
                                                                title="Use our templates if you..."
                                                                className="tile__image ls-is-cached lazyloaded"
                                                                data-qa-name="image"
                                                                srcSet="/assets/images/category__OPT-022.jpg, /assets/images/category__OPT-022.jpg 2x"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            >
                                                                Use our templates if you...
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Use our templates if you...
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Are looking for inspiration</li>
                                                        <li>Want a professional, quality Postcard design</li>
                                                        <li>
                                                            Want simple, fast customisation for quick card
                                                            printing
                                                        </li>
                                                        <li>Are creating Small or Medium Postcards</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&paperType=classic&productType=postcard_medium"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Start making</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&paperType=classic&productType=postcard_medium"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Start making</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id=""
                className="band -module intercom-module u-backgroundColor-white js-component"
                data-module-name="intercom-module"
                data-module-index={8}
            >
                <div className="wrapper u-padding-0@until-medium">
                    <div className="u-position-relative">
                        <div className="intercom-module__ratio-box">
                            <div className="u-position-absolute u-top-0">
                                <picture>
                                    <source
                                        media="only screen and (min-width: 64.0625em)"
                                        srcSet="/assets/images/0649WF-Eco-Messaging-Refresh-CTA-2352x578-intercom1.jpg, /assets/images/0649WF-Eco-Messaging-Refresh-CTA-2352x578-intercom1.jpg 2x"
                                    />
                                    <source
                                        media="only screen and (min-width: 40.0625em)"
                                        srcSet="/assets/images/0649WF-Eco-Messaging-Refresh-CTA-1952x500-intercom1.jpg, /assets/images/0649WF-Eco-Messaging-Refresh-CTA-1952x500-intercom1.jpg 2x"
                                    />
                                    <img
                                        src="/assets/images/0649WF-Eco-Messaging-Refresh-CTA-1280x960-intercom1.jpg"
                                        srcSet="/assets/images/0649WF-Eco-Messaging-Refresh-CTA-1280x960-intercom1.jpg, /assets/images/0649WF-Eco-Messaging-Refresh-CTA-1280x960-intercom1.jpg 2x"
                                        alt=""
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="wrapper u-textAlign-center intercom-module__block-wrap -color-light u-paddingBottom-0 u-paddingTop-m u-paddingTop-0@large">
                            <header className="u-color-inherit">
                                <h3 className="h4 u-color-inherit">
                                    Bulk shouldn’t cost the earth. Meet Eco
                                </h3>
                                <p className="p__lead">
                                    Save money on premium quality printed postcards and do your bit
                                    for the environment. So everybody wins.
                                </p>
                                <div className="intercom-module__mobile-ctas-wrap">
                                    <a
                                        href="/us/eco"
                                        className="btn -ghost-light u-margin-vertical-xxxs u-margin-horizontal-xxxs@small u-display-none@until-large js-ga4-click-track"
                                    >
                                        Buy bulk with Eco
                                    </a>
                                    <a
                                        href="/us/eco"
                                        className="btn -standalone u-margin-vertical-xxxs u-margin-horizontal-xxxs@small u-display-none@large js-ga4-click-track"
                                    >
                                        Buy bulk with Eco
                                    </a>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="whyMOO"
                className="
  band
      -module
  u-backgroundColor-neutralTint
  
  
  js-component
    "
                data-module-name="tile-rack-svg-icons"
                data-module-index={9}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Why MOO Postcards?</h2>
                            <p className="p__lead">
                                From our products to our service, you’ll feel the MOO difference at
                                every step.
                            </p>
                        </header>
                    </div>
                    <div className="">
                        <div className="tile-rack__container layout layout--row-spacing u-display-flex u-flexWrap-wrap u-justifyContent-center js-tile-rack-slider">
                            <div className="tile-rack__tile-wrap tile-rack__svg-icons-tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap">
                                <a
                                    href="/us/about/printfinity"
                                    className="tile -borderless
u-textAlign-center
js-tile
-link -link-whole-tile js-ga4-click-track"
                                    data-component-name="tile-svg-icon"
                                    data-qa-name="tile-svg-icon"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <figure
                                                className="tile__figure u-margin-0
"
                                                data-qa-name="figure"
                                            >
                                                <img
                                                    src="/assets/images/icons/MOO-Icon-Printfinity0.svg"
                                                    alt="Printfinity makes every card unique"
                                                    title="Printfinity makes every card unique"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Printfinity makes every card unique
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Printfinity makes every card unique
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Print a different image or full color on the back of
                                                        every single card at no extra cost for even more
                                                        creative Postcards.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>{" "}
                            </div>
                            <div className="tile-rack__tile-wrap tile-rack__svg-icons-tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap">
                                <a
                                    href="/us/about/next-day-delivery"
                                    className="tile -borderless
u-textAlign-center
js-tile
-link -link-whole-tile js-ga4-click-track"
                                    data-component-name="tile-svg-icon"
                                    data-qa-name="tile-svg-icon"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <figure
                                                className="tile__figure u-margin-0
"
                                                data-qa-name="figure"
                                            >
                                                <img
                                                    src="/assets/images/icons/MOO-Icon-Next-Day-Delivery0.svg"
                                                    alt="Next day Postcards!"
                                                    title="Next day Postcards!"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Next day Postcards!
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Next day Postcards!
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Next-day, fast Postcard printing is available on
                                                        Original orders before 2pm (EST) Mon-Fri.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>{" "}
                            </div>
                            <div className="tile-rack__tile-wrap tile-rack__svg-icons-tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap">
                                <a
                                    href="/us/about/moo-promise"
                                    className="tile -borderless
u-textAlign-center
js-tile
-link -link-whole-tile js-ga4-click-track"
                                    data-component-name="tile-svg-icon"
                                    data-qa-name="tile-svg-icon"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <figure
                                                className="tile__figure u-margin-0
"
                                                data-qa-name="figure"
                                            >
                                                <img
                                                    src="/assets/images/icons/MOO-Icon-Promise0.svg"
                                                    alt="The MOO Promise"
                                                    title="The MOO Promise"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    The MOO Promise
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        The MOO Promise
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Not only do we offer the best high quality Postcards,
                                                        we'll move heaven and earth to make you happy or your
                                                        money back.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="TrustPilotProductReviewsSEOModule"
                className="band -module         u-backgroundColor-white
"
            >
                <div className="wrapper">
                    <div className="u-last-child-margin-bottom-0 u-textAlign-center">
                        {/* TrustBox script */}
                        {/* End TrustBox script */}
                        {/* TrustBox widget - Product Reviews SEO */}
                        <div
                            className="trustpilot-widget"
                            data-locale="en-US"
                            data-template-id="5717796816f630043868e2e8"
                            data-businessunit-id="4aa6d5d8000064000504b8c3"
                            data-style-height="350px"
                            data-style-width="100%"
                            data-theme="light"
                            data-sku="PP403,PP404,PP405,PP402,PP406,PP407,PP408,PP409,PP410,PP411,PP412,PP413,PP414,PP415,PP254,PP151,PP5,PP251,PP252,PP253,PP149,PP150,PP370,PP371,PP69,PP70,PP71,PP72,PP147,PP148,PP352,PP353,PP354,PP355,PP365,PP356,PP357,PP358,PP359,PP360,PP361,PP362,PP363,PP364,PP289,PP290,PP291,PP292,PP368,PP369,PP293,PP294,PP295,PP296,PP297,PP298,PP299,PP300,PP239,PP240,PP241,PP242,PP243,PP244,PP372,PP245,PP373,PP246,PP247,PP248,PP249,PP250,PP388,PP389,PP390,PP391,PP392,PP393,PP394,PP395,PP396,PP397,PP398,PP399,PP400,PP401,PP419,PP416,PP417,PP418,PP420,PP421,PP422,PP423,PP424,PP425,PP426,PP427,PP428,PP429"
                            data-review-languages="en"
                            style={{ position: "relative" }}
                        >
                            <iframe
                                title="Customer reviews powered by Trustpilot"
                                loading="auto"
                                src="https://widget.trustpilot.com/trustboxes/5717796816f630043868e2e8/index.html?templateId=5717796816f630043868e2e8&businessunitId=4aa6d5d8000064000504b8c3#locale=en-US&styleHeight=350px&styleWidth=100%25&theme=light&sku=PP403%2CPP404%2CPP405%2CPP402%2CPP406%2CPP407%2CPP408%2CPP409%2CPP410%2CPP411%2CPP412%2CPP413%2CPP414%2CPP415%2CPP254%2CPP151%2CPP5%2CPP251%2CPP252%2CPP253%2CPP149%2CPP150%2CPP370%2CPP371%2CPP69%2CPP70%2CPP71%2CPP72%2CPP147%2CPP148%2CPP352%2CPP353%2CPP354%2CPP355%2CPP365%2CPP356%2CPP357%2CPP358%2CPP359%2CPP360%2CPP361%2CPP362%2CPP363%2CPP364%2CPP289%2CPP290%2CPP291%2CPP292%2CPP368%2CPP369%2CPP293%2CPP294%2CPP295%2CPP296%2CPP297%2CPP298%2CPP299%2CPP300%2CPP239%2CPP240%2CPP241%2CPP242%2CPP243%2CPP244%2CPP372%2CPP245%2CPP373%2CPP246%2CPP247%2CPP248%2CPP249%2CPP250%2CPP388%2CPP389%2CPP390%2CPP391%2CPP392%2CPP393%2CPP394%2CPP395%2CPP396%2CPP397%2CPP398%2CPP399%2CPP400%2CPP401%2CPP419%2CPP416%2CPP417%2CPP418%2CPP420%2CPP421%2CPP422%2CPP423%2CPP424%2CPP425%2CPP426%2CPP427%2CPP428%2CPP429&reviewLanguages=en"
                                style={{
                                    position: "relative",
                                    height: 350,
                                    width: "100%",
                                    borderStyle: "none",
                                    display: "block",
                                    overflow: "hidden"
                                }}
                            />
                        </div>
                        {/* End TrustBox widget */}{" "}
                    </div>
                </div>
            </section>
            <section

                className="band -module        u-backgroundColor-neutralTint
 js-component"
                data-module-name="tile-rack-title-left"
                data-module-index={10}
            >
                <div className="wrapper">
                    <div className="layout">
                        <div className="layout__item u-1/4@large">
                            <header
                                className="module-header list-default__parent u-last-child-margin-bottom-0 u-marginBottom-0@large js-module-header"
                                data-component-name="module-header"
                            >
                                <h2 className="h__module">Postcards – Design inspiration</h2>
                                <p className="p__lead">
                                    Have you seen these sweet Postcards? Get some big ideas, brand
                                    inspiration and tips to grow your business.
                                </p>
                                <div className="module-header__cta-wrap u-display-block">
                                    <a
                                        href="https://www.moo.com/blog/?s=postcards"
                                        className="cta-link -has-chevron js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Get inspired</span>&nbsp;
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
                            </header>
                        </div>
                        <div className="layout__item u-3/4@large">
                            <div className="">
                                <div className="tile-rack__container layout layout--row-spacing u-display-flex u-flexWrap-wrap  js-tile-rack-slider">
                                    <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                        <div
                                            className="tile
  -link
    u-textAlign-
    js-tile
    "
                                            data-component-name="tile"
                                            data-qa-name="tile"
                                        >
                                            <div className="tile__body" data-qa-name="body">
                                                <div className="tile__media-wrap">
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/modern-postcards"
                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                        data-qa-name="image-link"
                                                        data-component-text=""
                                                    >
                                                        <div
                                                            className="tile__ratio-box u-ratio-4:3"
                                                            data-qa-name="ratio-box"
                                                        >
                                                            <div className="tile__ratio-box-inner">
                                                                <figure
                                                                    className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                                    data-qa-name="figure"
                                                                >
                                                                    <img
                                                                        src="/assets/images/0699WF-TR-752x564.jpg"
                                                                        data-srcset="/assets/images/0699WF-TR-752x564.jpg, /assets/images/0699WF-TR-752x564.jpg 2x"
                                                                        alt="Postcards that make a statement"
                                                                        title="Postcards that make a statement"
                                                                        className="tile__image lazyloaded"
                                                                        data-qa-name="image"
                                                                        srcSet="/assets/images/0699WF-TR-752x564.jpg, /assets/images/0699WF-TR-752x564.jpg 2x"
                                                                    />
                                                                    <figcaption
                                                                        className="u-visually-hidden"
                                                                        data-qa-name="figcaption"
                                                                    >
                                                                        Postcards that make a statement
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                                <div className="tile__text-wrap" data-qa-name="text-wrap">
                                                    <div
                                                        className="tile__text-wrap-inner"
                                                        data-qa-name="text-wrap-inner"
                                                    >
                                                        <div className="u-marginBottom-xxxs">
                                                            <h3 className="h__block" data-qa-name="heading">
                                                                Postcards that make a statement
                                                            </h3>
                                                        </div>
                                                        <div className="list-default__parent u-last-child-margin-bottom-0">
                                                            <p>
                                                                Seven ways to deliver something special, using
                                                                color, type, tactile finishes and more.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/modern-postcards"
                                                        className="tile__horizontal-footer-link js-ga4-click-track"
                                                        data-qa-name="horizontal-footer-link"
                                                    >
                                                        <div
                                                            className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                            data-qa-name="horizontal-footer"
                                                        >
                                                            <div className="cta-link -has-chevron">
                                                                <span className="cta-link__text">
                                                                    <span>Read more</span>&nbsp;
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
                                                            </div>{" "}
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                            </div>
                                            <a
                                                href="https://www.moo.com/blog/inspiration/modern-postcards"
                                                className="js-ga4-click-track"
                                                data-qa-name="footer-link"
                                            >
                                                <div
                                                    className="tile__footer cta-link__wrap"
                                                    data-qa-name="footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Read more</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                        <div
                                            className="tile
  -link
    u-textAlign-
    js-tile
    "
                                            data-component-name="tile"
                                            data-qa-name="tile"
                                        >
                                            <div className="tile__body" data-qa-name="body">
                                                <div className="tile__media-wrap">
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards"
                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                        data-qa-name="image-link"
                                                        data-component-text=""
                                                    >
                                                        <div
                                                            className="tile__ratio-box u-ratio-4:3"
                                                            data-qa-name="ratio-box"
                                                        >
                                                            <div className="tile__ratio-box-inner">
                                                                <figure
                                                                    className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                                    data-qa-name="figure"
                                                                >
                                                                    <img
                                                                        src="/assets/images/0699WF-TR-752x564.jpg"
                                                                        data-srcset="/assets/images/0699WF-TR-752x564.jpg, /assets/images/0699WF-TR-752x564.jpg 2x"
                                                                        alt="Five ways to use Postcards"
                                                                        title="Five ways to use Postcards"
                                                                        className="tile__image ls-is-cached lazyloaded"
                                                                        data-qa-name="image"
                                                                        srcSet="/assets/images/0699WF-TR-752x564.jpg, /assets/images/0699WF-TR-752x564.jpg 2x"
                                                                    />
                                                                    <figcaption
                                                                        className="u-visually-hidden"
                                                                        data-qa-name="figcaption"
                                                                    >
                                                                        Five ways to use Postcards
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                                <div className="tile__text-wrap" data-qa-name="text-wrap">
                                                    <div
                                                        className="tile__text-wrap-inner"
                                                        data-qa-name="text-wrap-inner"
                                                    >
                                                        <div className="u-marginBottom-xxxs">
                                                            <h3 className="h__block" data-qa-name="heading">
                                                                Five ways to use Postcards
                                                            </h3>
                                                        </div>
                                                        <div className="list-default__parent u-last-child-margin-bottom-0">
                                                            <p>
                                                                From the classic to the unexpected, here’s how to do
                                                                something different with Postcards.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards"
                                                        className="tile__horizontal-footer-link js-ga4-click-track"
                                                        data-qa-name="horizontal-footer-link"
                                                    >
                                                        <div
                                                            className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                            data-qa-name="horizontal-footer"
                                                        >
                                                            <div className="cta-link -has-chevron">
                                                                <span className="cta-link__text">
                                                                    <span>Read more</span>&nbsp;
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
                                                            </div>{" "}
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                            </div>
                                            <a
                                                href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards"
                                                className="js-ga4-click-track"
                                                data-qa-name="footer-link"
                                            >
                                                <div
                                                    className="tile__footer cta-link__wrap"
                                                    data-qa-name="footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Read more</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                        <div
                                            className="tile
  -link
    u-textAlign-
    js-tile
    "
                                            data-component-name="tile"
                                            data-qa-name="tile"
                                        >
                                            <div className="tile__body" data-qa-name="body">
                                                <div className="tile__media-wrap">
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/postcard-sizes-dimensions-guide"
                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                        data-qa-name="image-link"
                                                        data-component-text=""
                                                    >
                                                        <div
                                                            className="tile__ratio-box u-ratio-4:3"
                                                            data-qa-name="ratio-box"
                                                        >
                                                            <div className="tile__ratio-box-inner">
                                                                <figure
                                                                    className="tile__figure u-margin-0
u-backgroundColor-neutral20"
                                                                    data-qa-name="figure"
                                                                >
                                                                    <img
                                                                        src="/assets/images/blog-postcard-sizes.jpg"
                                                                        data-srcset="/assets/images/blog-postcard-sizes.jpg, /assets/images/blog-postcard-sizes.jpg 2x"
                                                                        alt="The ultimate guide to Postcard sizes and dimensions"
                                                                        title="The ultimate guide to Postcard sizes and dimensions"
                                                                        className="tile__image ls-is-cached lazyloaded"
                                                                        data-qa-name="image"
                                                                        srcSet="/assets/images/blog-postcard-sizes.jpg, /assets/images/blog-postcard-sizes.jpg 2x"
                                                                    />
                                                                    <figcaption
                                                                        className="u-visually-hidden"
                                                                        data-qa-name="figcaption"
                                                                    >
                                                                        The ultimate guide to Postcard sizes and
                                                                        dimensions
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                                <div className="tile__text-wrap" data-qa-name="text-wrap">
                                                    <div
                                                        className="tile__text-wrap-inner"
                                                        data-qa-name="text-wrap-inner"
                                                    >
                                                        <div className="u-marginBottom-xxxs">
                                                            <h3 className="h__block" data-qa-name="heading">
                                                                The ultimate guide to Postcard sizes and dimensions
                                                            </h3>
                                                        </div>
                                                        <div className="list-default__parent u-last-child-margin-bottom-0">
                                                            <p>
                                                                What Postcard size should you choose to promote your
                                                                brand? Here’s everything you need to know about our
                                                                Postcard dimensions.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/postcard-sizes-dimensions-guide"
                                                        className="tile__horizontal-footer-link js-ga4-click-track"
                                                        data-qa-name="horizontal-footer-link"
                                                    >
                                                        <div
                                                            className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                            data-qa-name="horizontal-footer"
                                                        >
                                                            <div className="cta-link -has-chevron">
                                                                <span className="cta-link__text">
                                                                    <span>Read more</span>&nbsp;
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
                                                            </div>{" "}
                                                        </div>
                                                    </a>{" "}
                                                </div>
                                            </div>
                                            <a
                                                href="https://www.moo.com/blog/inspiration/postcard-sizes-dimensions-guide"
                                                className="js-ga4-click-track"
                                                data-qa-name="footer-link"
                                            >
                                                <div
                                                    className="tile__footer cta-link__wrap"
                                                    data-qa-name="footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Read more</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section

                className="band -module        u-backgroundColor-white
 js-component"
                data-module-name="rich-media-module"
                data-module-index={11}
            >
                <div className="wrapper">
                    <div className="rm-module__blocks-wrap layout layout--middle">
                        <div className="rm-module__block-wrap rm-module__large-media-block-wrap layout__item">
                            <div
                                className="media-block -large -in-rmm layout"
                                data-component-name="media-block-large"
                            >
                                <div className="media-block__image-wrap u-marginBottom-0 layout__item">
                                    <div className="media-block__image-container">
                                        <figure className="u-margin-0">
                                            <img
                                                src="/assets/images/0650WF-Category-Hero-Updates-Postcards-RM-608%20x%204562.jpg"
                                                data-srcset="/assets/images/0650WF-Category-Hero-Updates-Postcards-RM-608%20x%204562.jpg, /assets/images/0650WF-Category-Hero-Updates-Postcards-RM-608%20x%204562.jpg 2x"
                                                alt="Woman holding a Postcard"
                                                className=" ls-is-cached lazyloaded"
                                                srcSet="/assets/images/0650WF-Category-Hero-Updates-Postcards-RM-608%20x%204562.jpg, /assets/images/0650WF-Category-Hero-Updates-Postcards-RM-608%20x%204562.jpg 2x"
                                            />
                                        </figure>
                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="rm-module__block-wrap rm-module__rich-media-block-wrap layout__item">
                            <div className="rm-block" data-component-name="rich-media-block">
                                <h3 className="h4 u-marginBottom-xs u-text-padding-align-with-image">
                                    The Power of Postcards
                                </h3>
                                <div className="u-text-padding-align-with-image u-last-child-margin-bottom-0">
                                    <div className="list-default__parent u-marginBottom-m u-last-child-margin-bottom-0">
                                        <p>
                                            Not just for bragging on the beach, custom Postcards are the
                                            perfect tool for all things promotional – from inserts and
                                            giveaways to direct mail and discounts.
                                            <br />
                                            <br />
                                            There’s a customizable MOO Postcard template for every
                                            occasion, whether you're an estate agent with an open house or
                                            a smoothie stand doing a two-for-one.
                                            <br />
                                            <br />
                                            And for those extra special deliveries, just slip a
                                            personalized card in an{" "}
                                            <a href="/us/accessories/envelopes">envelope</a> and seal it
                                            with a <a href="/us/stickers">sticker</a>.
                                        </p>
                                    </div>
                                    <a
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&paperType=postcard&productType=postcard"
                                        className="btn u-marginBottom-m u-marginTop-xs js-ga4-click-track"
                                    >
                                        Start making
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section

                className="
  band
      -module
  u-backgroundColor-neutralTint
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={12}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Even more good stuff</h2>
                        </header>
                    </div>
                    <div className="">
                        <div className="tile-rack__container layout layout--row-spacing u-display-flex u-flexWrap-wrap  js-tile-rack-slider">
                            <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                <div
                                    className="tile
  -link
    u-textAlign-
    js-tile
    "
                                    data-component-name="tile"
                                    data-site-search="exclude"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="/us/business-cards"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <figure
                                                    className="tile__figure u-margin-0
"
                                                    data-qa-name="figure"
                                                >
                                                    <img
                                                        src="/assets/images/0702WF-TR-752x376-Business-Cards.jpg"
                                                        data-srcset="/assets/images/0702WF-TR-752x376-Business-Cards.jpg, /assets/images/0702WF-TR-752x376-Business-Cards.jpg 2x"
                                                        alt="Business Cards"
                                                        title="Business Cards"
                                                        className="tile__image ls-is-cached lazyloaded"
                                                        data-qa-name="image"
                                                        srcSet="/assets/images/0702WF-TR-752x376-Business-Cards.jpg,/assets/images/0702WF-TR-752x376-Business-Cards.jpg 2x"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Business Cards
                                                    </figcaption>
                                                </figure>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Business Cards
                                                    </h3>
                                                </div>
                                                <p className="u-marginBottom-xs">
                                                    <span
                                                        className="u-fontSize-s"
                                                        data-qa-name="quantity-from"
                                                    >
                                                        <span
                                                            className="u-fontFamily-secondaryMedium"
                                                            data-qa-name="quantity"
                                                        >
                                                            50
                                                        </span>{" "}
                                                        cards from
                                                    </span>
                                                    <span className="price__price-with-tax-wrap">
                                                        <span className="price__display-price">
                                                            <span
                                                                className="u-fontFamily-secondaryMedium u-color-dark"
                                                                data-qa-name="price-inc-tax"
                                                            >
                                                                $22.00
                                                            </span>
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Irresistibly premium papers</li>
                                                        <li>
                                                            Shiny special finishes like Gold Foil for extra wow
                                                        </li>
                                                        <li>In MOO, Standard, Square and MiniCard sizes</li>
                                                        <li>
                                                            Print a different design on every card, at no extra
                                                            cost
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/business-cards"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Business Cards</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="/us/business-cards"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Business Cards</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                <div
                                    className="tile
  -link
    u-textAlign-
    js-tile
    "
                                    data-component-name="tile"
                                    data-site-search="exclude"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="/us/greeting-cards"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <figure
                                                    className="tile__figure u-margin-0
"
                                                    data-qa-name="figure"
                                                >
                                                    <img
                                                        src="/assets/images/0702WF-TR-752x376-Greeting-Cards.jpg"
                                                        data-srcset="/assets/images/0702WF-TR-752x376-Greeting-Cards.jpg, /assets/images/0702WF-TR-752x376-Greeting-Cards.jpg 2x"
                                                        alt="Greeting Cards"
                                                        title="Greeting Cards"
                                                        className="tile__image lazyloaded"
                                                        data-qa-name="image"
                                                        srcSet="/assets/images/0702WF-TR-752x376-Greeting-Cards.jpg, /assets/images/0702WF-TR-752x376-Greeting-Cards.jpg 2x"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Greeting Cards
                                                    </figcaption>
                                                </figure>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Greeting Cards
                                                    </h3>
                                                </div>
                                                <p className="u-marginBottom-xs">
                                                    <span
                                                        className="u-fontSize-s"
                                                        data-qa-name="quantity-from"
                                                    >
                                                        <span
                                                            className="u-fontFamily-secondaryMedium"
                                                            data-qa-name="quantity"
                                                        >
                                                            25
                                                        </span>{" "}
                                                        greeting cards from
                                                    </span>
                                                    <span className="price__price-with-tax-wrap">
                                                        <span className="price__display-price">
                                                            <span
                                                                className="u-fontFamily-secondaryMedium u-color-dark"
                                                                data-qa-name="price-inc-tax"
                                                            >
                                                                $40.00
                                                            </span>
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>
                                                            16pt paper stock with satin finish for vibrant colors
                                                        </li>
                                                        <li>Uncoated inside, so it’s nice to write on</li>
                                                        <li>
                                                            Print a different customizable design on every card
                                                        </li>
                                                        <li>Free white envelopes as standard</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/greeting-cards"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Greeting Cards</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="/us/greeting-cards"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Greeting Cards</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap layout__item u-display-flex u-1/3@medium js-tile-wrap">
                                <div
                                    className="tile
  -link
    u-textAlign-left
    js-tile
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
                                            <a
                                                href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text=""
                                            >
                                                <figure
                                                    className="tile__figure u-margin-0
"
                                                    data-qa-name="figure"
                                                >
                                                    <img
                                                        src="/assets/images/0702WF-TR-752x376-Custom-Twist-Pens.jpg"
                                                        data-srcset="/assets/images/0702WF-TR-752x376-Custom-Twist-Pens.jpg, //assets/images/0702WF-TR-752x376-Custom-Twist-Pens.jpg 2x"
                                                        alt="Custom MOO Twist Pen"
                                                        title="Custom MOO Twist Pen"
                                                        className="tile__image lazyloaded"
                                                        data-qa-name="image"
                                                        srcSet="/assets/images/0702WF-TR-752x376-Custom-Twist-Pens.jpg, /assets/images/0702WF-TR-752x376-Custom-Twist-Pens.jpg 2x"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Custom MOO Twist Pen
                                                    </figcaption>
                                                </figure>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                        <div className="media-flex__body">
                                                            <h3 className="h__block" data-qa-name="heading">
                                                                Custom MOO Twist Pen
                                                            </h3>
                                                        </div>
                                                        <div className="media-flex__img u-lineHeight-0">
                                                            <div
                                                                className="pill u-color-white -small"
                                                                style={{ backgroundColor: "#3D3935" }}
                                                                data-qa-name="body-pill"
                                                            >
                                                                NEW
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Nice and weighty in your hand</li>
                                                        <li>Comfortable feel, for smooth writing</li>
                                                        <li>Made with recyclable aluminium&nbsp;</li>
                                                        <li>Refillable ink cartridge</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop MOO Twist Pen</span>&nbsp;
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
                                                    </div>{" "}
                                                </div>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <a
                                        href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop MOO Twist Pen</span>&nbsp;
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
                                            </div>{" "}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="faqs"
                className="band -module         u-backgroundColor-white
 js-faq-module js-component"
                data-module-index={13}
            >
                <div className="wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">FAQs - Postcards</h2>
                        </header>
                    </div>
                    <div className="faq-module__faq-container list-default__parent">
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                How can I make my own custom Postcards?
                            </h3>
                            <p>
                                At MOO, there are a few ways of making and printing your Postcards.
                                You can upload your own design or use our online design tools to
                                create designs from scratch. And for{" "}
                                <a href="https://www.moo.com/us/postcards/small" target="_blank">
                                    Small
                                </a>{" "}
                                and{" "}
                                <a href="https://www.moo.com/us/postcards/medium" target="_blank">
                                    Medium
                                </a>{" "}
                                Postcards, you can use one of our{" "}
                                <a
                                    href="https://www.moo.com/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&origPaperType=postcard&paperType=postcard&productType=postcard"
                                    target="_blank"
                                >
                                    Postcard templates
                                </a>
                                . There are loads of designs to choose from.
                            </p>
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                What can I use personalized Postcards for?
                            </h3>
                            <p>
                                These days, Postcards are about so much more than, well, posting.
                                They’re a versatile canvas for a whole load of promotional and
                                marketing uses. Think direct mail, event handouts, menus, product
                                info sheets, small prints for artwork. With a number of different
                                papers, sizes and finishes to choose from, with MOO you’ll find the
                                perfect business Postcard for pretty much anything you can think of.
                            </p>
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                What’s the size of a standard Postcard?
                            </h3>
                            <p>
                                The “standard” Postcard size is agreed to be 4” x 6”, which is also
                                our “Standard” Postcard. If you’re using a first class stamp, good
                                news – because it’s the most efficient size to use at that rate. At
                                MOO, our Postcards come in seven different sizes and dimensions:
                            </p>
                        </div>
                        <ul>
                            <li>
                                <a href="/us/postcards/small">Small</a> (4.13"x 5.83")
                            </li>
                            <li>
                                <a href="/us/postcards/square">Square</a> (4.72"x 4.72")
                            </li>
                            <li>
                                <a href="/us/postcards/rack-cards">Rack Cards</a> (3.67"x 8.5")
                            </li>
                            <li>
                                <a href="/us/postcards/medium">Medium</a> (5"x 7")
                            </li>
                            <li>
                                <a href="/us/postcards/half-page">Half Page</a> (5.5"x 8.5")"
                            </li>
                            <li>
                                <a href="/us/postcards/large">Large</a> (6” x 9”)
                            </li>
                            <li>
                                <a href="/us/postcards/standard">Standard size</a> (4” x 6”)
                            </li>
                        </ul>
                        <p>
                            When deciding which size to order, consider what you’ll be using them
                            for and whether you’ll be posting them. Also, think about your
                            Postcard design and how much messaging you’ll need to fit. Sometimes
                            it’s good to go bigger – or smaller!
                        </p>
                    </div>
                </div>
            </section>
        </main>


    </>
}

export default cardCategory;