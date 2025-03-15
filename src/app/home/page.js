'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const home = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };


    return <>
        <main id="main-content" className="u-outline-none">
            <section
                id={0}
                className="
  band -module u-backgroundColor-white
  home-hero-module
  u-padding-0
  js-hhcm
  js-component
    "
                data-autoplayspeed={7000}
                style={{ animationDuration: "7000ms" }}
                data-module-name="home-hero-carousel-module"
                data-module-index={1}
            >
                <div
                    className="hhcm-slides js-hhcm-slides slick-initialized slick-slider"
                    data-component-name="home-hero-carousel"
                    role="toolbar"
                >
                    <div
                        aria-live="polite"
                        className="slick-list draggable"
                        style={{ padding: 0 }}
                    >
                        <Slider {...settings} className="slick-track" ref={sliderRef}>

                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide slick-cloned"
                                data-slide-indicator-color-class="-color-light"
                                data-next-prev-buttons-color-class="-color-light"
                                data-slick-index={-2}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Special Finish Business Cards"
                                >
                                    <a
                                        href="/home/card-details"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg 2x"
                                                alt="Special Finish Business Cards"
                                                className="wide-media"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  -color-light
    u-textAlign-left@medium
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Give them a good feeling about you",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <div
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Give them a good feeling about you
                                                    </div>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Business Cards with special finishes, beautifully printed.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/home/card-details"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Special Finish Business Cards
                                                    </a>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="
  hiding-single-row-nav__container -color-light
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                                >
                                    <div className="wrapper u-padding-0">
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/standard-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Standard Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/moo-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MOO Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/minicards"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MiniCards
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide slick-cloned"
                                data-slide-indicator-color-class="-color-light"
                                data-next-prev-buttons-color-class="-color-light"
                                data-slick-index={-1}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Stickers & Labels"
                                >
                                    <a
                                        href="/us/stickers"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Stickers.jpg, /assets/images0812WF-HPC-1920x500-Stickers.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0812WF-HPC-640x570-Stickers.jpg"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Stickers.jpg, /assets/images/0812WF-HPC-1920x500-Stickers.jpg 2x"
                                                alt="Stickers & Labels"
                                                className="wide-media"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  -color-light
    u-textAlign-left@medium
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Make your brand stick in their minds",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <div
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Make your brand stick in their minds
                                                    </div>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Have fun with branded Stickers and Labels.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/us/stickers"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Stickers &amp; Labels
                                                    </a>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="
  hiding-single-row-nav__container -color-light
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                                >
                                    <div className="wrapper u-padding-0">
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/round"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Round Stickers
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/rectangular"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Rectangular Stickers
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/stickerbooks"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        StickerBooks
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/return-address-labels"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Return Address Labels
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide slick-current slick-active slick-center"
                                data-slide-indicator-color-class="-color-dark"
                                data-next-prev-buttons-color-class="-color-dark"
                                data-slick-index={0}
                                aria-hidden="false"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                                role="option"
                                aria-describedby="slick-slide00"
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Planners"
                                >
                                    <a
                                        href="/us/brochures"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={0}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0813WF-HPC-1920x500-GTM-Launch.jpg, /assets/images/0813WF-HPC-3840x1000-GTM-Launch.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0813WF-HPC-640x570-GTM-Launch.jpg"
                                                srcSet="/assets/images/0813WF-HPC-640x570-GTM-Launch.jpg, /assets/images/0813WF-HPC-1280x1140-GTM-Launch.jpg 2x"
                                                alt="Planners"
                                                className="wide-media"
                                                fetchPriority="high"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Brochures. Let your story unfold, %s",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <h1
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Brochures. Let your story unfold.
                                                    </h1>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Draw people into your world with premium, beautifully
                                                    printed Brochures – perfect for high volumes.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/us/brochures"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={0}
                                                    >
                                                        Shop Brochures
                                                    </a>
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
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2558d348-fc45-45bc-8b44-fef6713ab724"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={0}
                                                    >
                                                        Bi-fold Brochures
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2c243af0-6568-4d12-af12-3a7dd4054274"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={0}
                                                    >
                                                        Tri-fold Brochures
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide"
                                data-slide-indicator-color-class="-color-light"
                                data-next-prev-buttons-color-class="-color-light"
                                data-slick-index={1}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                                role="option"
                                aria-describedby="slick-slide01"
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Special Finish Business Cards"
                                >
                                    <a
                                        href="/home/card-details/super"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-3840x1000-Business-Cards-Special-Finishes.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0812WF-HPC-640x570-Business-Cards-Special-Finishes.jpg"
                                                srcSet="/assets/images/0812WF-HPC-640x570-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-1280x1140-Business-Cards-Special-Finishes.jpg 2x"
                                                alt="Special Finish Business Cards"
                                                className="wide-media"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  -color-light
    u-textAlign-left@medium
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Give them a good feeling about you",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <div
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Give them a good feeling about you
                                                    </div>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Business Cards with special finishes, beautifully printed.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/home/card-details/super"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Special Finish Business Cards
                                                    </a>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="
  hiding-single-row-nav__container -color-light
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                                >
                                    <div className="wrapper u-padding-0">
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/standard-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Standard Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/moo-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MOO Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/minicards"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MiniCards
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide"
                                data-slide-indicator-color-class="-color-light"
                                data-next-prev-buttons-color-class="-color-light"
                                data-slick-index={2}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                                role="option"
                                aria-describedby="slick-slide02"
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Stickers & Labels"
                                >
                                    <a
                                        href="/us/stickers"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Stickers.jpg, /assets/images/0812WF-HPC-3840x1000-Stickers.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0812WF-HPC-640x570-Stickers.jpg"
                                                srcSet="/assets/images/0812WF-HPC-640x570-Stickers.jpg, /assets/images/0812WF-HPC-1280x1140-Stickers.jpg 2x"
                                                alt="Stickers & Labels"
                                                className="wide-media"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  -color-light
    u-textAlign-left@medium
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Make your brand stick in their minds",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <div
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Make your brand stick in their minds
                                                    </div>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Have fun with branded Stickers and Labels.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/us/stickers"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Stickers &amp; Labels
                                                    </a>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="
  hiding-single-row-nav__container -color-light
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                                >
                                    <div className="wrapper u-padding-0">
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/round"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Round Stickers
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/rectangular"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Rectangular Stickers
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/stickerbooks"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        StickerBooks
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/us/stickers/return-address-labels"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Return Address Labels
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide slick-cloned slick-center"
                                data-slide-indicator-color-class="-color-dark"
                                data-next-prev-buttons-color-class="-color-dark"
                                data-slick-index={3}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Planners"
                                >
                                    <a
                                        href="/us/brochures"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0813WF-HPC-1920x500-GTM-Launch.jpg, /assets/images/0813WF-HPC-3840x1000-GTM-Launch.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0813WF-HPC-640x570-GTM-Launch.jpg"
                                                srcSet="/assets/images/0813WF-HPC-640x570-GTM-Launch.jpg, /assets/images/0813WF-HPC-1280x1140-GTM-Launch.jpg 2x"
                                                alt="Planners"
                                                className="wide-media"
                                                fetchPriority="high"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Brochures. Let your story unfold, %s",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <h1
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Brochures. Let your story unfold.
                                                    </h1>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Draw people into your world with premium, beautifully
                                                    printed Brochures – perfect for high volumes.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/us/brochures"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Brochures
                                                    </a>
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
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2558d348-fc45-45bc-8b44-fef6713ab724"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Bi-fold Brochures
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2c243af0-6568-4d12-af12-3a7dd4054274"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Tri-fold Brochures
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="u-position-relative hhcm-slide js-hhcm-slide slick-slide slick-cloned"
                                data-slide-indicator-color-class="-color-light"
                                data-next-prev-buttons-color-class="-color-light"
                                data-slick-index={4}
                                aria-hidden="true"
                                style={{ width: 1400 }}
                                tabIndex={-1}
                            >
                                <div
                                    className="wide-media__wrap -stacking@until-medium -fixed-height-tall@until-medium"
                                    data-component-name="home-hero-carousel-image"
                                    data-component-text="Special Finish Business Cards"
                                >
                                    <a
                                        href="/home/card-details/super"
                                        className="-standalone-white -large js-ga4-click-track"
                                        data-qa-name="hero-image"
                                        tabIndex={-1}
                                    >
                                        <picture>
                                            <source
                                                media="only screen and (min-width: 40.0625em)"
                                                srcSet="/assets/images/0812WF-HPC-1920x500-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-3840x1000-Business-Cards-Special-Finishes.jpg 2x"
                                            />
                                            <img
                                                src="/assets/images/0812WF-HPC-640x570-Business-Cards-Special-Finishes.jpg"
                                                srcSet="/assets/images/0812WF-HPC-640x570-Business-Cards-Special-Finishes.jpg, /assets/images/0812WF-HPC-1280x1140-Business-Cards-Special-Finishes.jpg 2x"
                                                alt="Special Finish Business Cards"
                                                className="wide-media"
                                            />
                                        </picture>
                                    </a>{" "}
                                </div>
                                <div className="wrapper home-hero-module__header-wrap hhmc-header-wrap">
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
                  -color-light
    u-textAlign-left@medium
                  left-shift
                  js-personalised-header
              "
                                                data-remembered-user='{
                  "heading": "Give them a good feeling about you",
                  "hideSecondaryHeading": true
              }'
                                            >
                                                <div className="h1 u-color-inherit u-marginBottom-xxxs has-fouc js-home-hero-heading-wrapper">
                                                    <div
                                                        className="h1 u-color-inherit u-marginBottom-xxxs u-display-inline js-home-hero-heading"
                                                        data-di-mask=""
                                                        data-qa-name="heading"
                                                    >
                                                        Give them a good feeling about you
                                                    </div>
                                                </div>
                                                <p className="p__lead u-marginBottom-xs has-fouc js-home-hero-module-sub-heading">
                                                    Business Cards with special finishes, beautifully printed.
                                                </p>
                                                <div className="home-hero-module__header-ctas-wrap -left has-fouc js-home-hero-module-button-wrapper">
                                                    <a
                                                        href="/home/card-details/super"
                                                        className="btn home-hero-module__header-cta -left u-margin-horizontal-xxxs u-margin-vertical-xxxs -standalone-white -large js-ga4-click-track"
                                                        data-qa-name="primary-cta"
                                                        data-component-name="primary-cta"
                                                        tabIndex={-1}
                                                    >
                                                        Shop Special Finish Business Cards
                                                    </a>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="
  hiding-single-row-nav__container -color-light
  u-position-absolute u-visually-hidden@until-medium u-width-100
  u-pointerEvents-none
    "
                                >
                                    <div className="wrapper u-padding-0">
                                        <nav
                                            className="hiding-single-row-nav__nav"
                                            style={{ margin: "0 200px" }}
                                        >
                                            <ul className="hiding-single-row-nav__list fnx-list-inline u-textAlign-center">
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/standard-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        Standard Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/moo-size"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MOO Size Business Cards
                                                    </a>{" "}
                                                </li>
                                                <li className="u-padding-horizontal-m">
                                                    <a
                                                        href="/home/card-details/minicards"
                                                        className="animated-underline u-padding-vertical-xxxs u-fontFamily-primaryMedium u-fontSize-m u-pointerEvents-auto js-ga4-click-track"
                                                        data-component-name="animated-underline-link"
                                                        data-qa-name="animated-underline-link"
                                                        tabIndex={-1}
                                                    >
                                                        MiniCards
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <ul
                        className="hhmc__slide-indicator fade-then-hide js-hhmc-slide-indicator -color-dark is-visible"
                        style={{}}
                        role="tablist"
                    >
                        <li
                            className="slick-active"
                            aria-hidden="false"
                            role="presentation"
                            aria-selected="true"
                            aria-controls="navigation00"
                            id="slick-slide00"
                        >
                            <button
                                type="button"
                                data-role="none"
                                role="button"
                                aria-required="false"
                                tabIndex={0}
                                className="prev-button slick-arrow"
                                data-component-name="slide-indicator"
                                data-component-text="slide-1"
                                onClick={() => goToSlide(0)}
                            >
                                1
                            </button>
                        </li>
                        <li
                            aria-hidden="true"
                            role="presentation"
                            aria-selected="false"
                            aria-controls="navigation01"
                            id="slick-slide01"
                        >
                            <button
                                type="button"
                                data-role="none"
                                role="button"
                                aria-required="false"
                                tabIndex={1}
                                className="next-button slick-arrow"
                                data-component-name="slide-indicator"
                                data-component-text="slide-2"
                                onClick={() => goToSlide(1)}
                            >
                                2
                            </button>
                        </li>
                        <li
                            aria-hidden="true"
                            role="presentation"
                            aria-selected="false"
                            aria-controls="navigation02"
                            id="slick-slide02"
                        >
                            <button
                                type="button"
                                data-role="none"
                                role="button"
                                aria-required="false"
                                tabIndex={2}
                                className="js-ga4-click-track"
                                data-component-name="slide-indicator"
                                data-component-text="slide-3"
                                onClick={() => goToSlide(2)}
                            >
                                3
                            </button>
                        </li>
                    </ul>
                </div>
                <div
                    className="fade-then-hide u-display-none@until-medium js-hhcm-nav-buttons is-visible"
                    data-component-name="carousel-buttons"
                >
                    <div
                        className="u-center-transform-y u-lineHeight-0 u-left-0 u-marginLeft-m js-carousel-prev slick-arrow"
                        style={{}}
                    >
                        <button
                            className="hhcm__btn btn -disc js-ga4-click-track js-btn -ghost-dark prev-button slick-arrow"
                            data-module-action="click_left"
                            data-qa-name="prev-button"
                        >
                            <div className="u-center-transform u-lineHeight-0">
                                <svg
                                    viewBox="0 0 48 48"
                                    className="svg-icon -base"
                                    style={{
                                        transform: "rotate(180deg)",
                                        transformOrigin: "50% 50%"
                                    }}
                                    role="presentation"
                                    aria-hidden="true"
                                    data-icon-id="ui--chevron-right-xbold"
                                >
                                    <path d="M19.698 9.568l-2.828 2.828L28.474 24 16.87 35.603l2.828 2.828L34.13 24 19.698 9.568z" />
                                </svg>{" "}
                            </div>
                        </button>
                    </div>
                    <div
                        className="u-center-transform-y u-lineHeight-0 u-right-0 u-marginRight-m js-carousel-next slick-arrow"
                        style={{}}
                    >
                        <button
                            className="hhcm__btn btn -disc js-ga4-click-track js-btn -ghost-dark next-button slick-arrow"
                            data-module-action="click_right"
                            data-qa-name="next-button"
                        >
                            <div className="u-center-transform u-lineHeight-0">
                                <svg
                                    viewBox="0 0 48 48"
                                    className="svg-icon -base"
                                    role="presentation"
                                    aria-hidden="true"
                                    data-icon-id="ui--chevron-right-xbold"
                                >
                                    <path d="M19.698 9.568l-2.828 2.828L28.474 24 16.87 35.603l2.828 2.828L34.13 24 19.698 9.568z" />
                                </svg>{" "}
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <section
                id="TrustPilotMicroComboModel"
                className="band -module -small trust-pilot-micro-combo-module         u-backgroundColor-white
"
            >
                <div className="wrapper">
                    <div className="u-last-child-margin-bottom-0 u-textAlign-center">
                        {/* TrustBox script */}
                        {/* End TrustBox script */}
                        {/* TrustBox widget - Micro Combo */}
                        <div
                            className="trustpilot-widget"
                            data-locale="en-US"
                            data-template-id="5419b6ffb0d04a076446a9af"
                            data-businessunit-id="4aa6d5d8000064000504b8c3"
                            data-style-height="20px"
                            data-style-width="100%"
                            data-theme="light"
                            style={{ position: "relative" }}
                        >
                            <iframe
                                title="Customer reviews powered by Trustpilot"
                                loading="auto"
                                src="https://widget.trustpilot.com/trustboxes/5419b6ffb0d04a076446a9af/index.html?templateId=5419b6ffb0d04a076446a9af&businessunitId=4aa6d5d8000064000504b8c3#locale=en-US&styleHeight=20px&styleWidth=100%25&theme=light"
                                style={{
                                    position: "relative",
                                    height: 20,
                                    width: "100%",
                                    borderStyle: "none",
                                    display: "block",
                                    overflow: "hidden"
                                }}
                            />
                        </div>
                        {/* End TrustBox widget */}
                    </div>
                </div>
            </section>
            <section

                className="
  band
      -module
          -small
  u-backgroundColor-white
  
  
  js-component
    "
                data-module-name="tile-rack-svg-icons"
                data-module-index={2}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="">
                        <div className="tile-rack__container layout layout--row-spacing u-display-flex u-flexWrap-wrap u-justifyContent-center js-tile-rack-slider">
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
                                                    src="/assets/images/icons/MOO-Icon-Next-Day-Delivery.svg"
                                                    alt="Next day delivery!"
                                                    title="Next day delivery!"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Next day delivery!
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
                                                        Next day delivery!
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Available on selected products. Order before 2PM (EST)
                                                        Mon–Fri.*
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
                                                    src="/assets/images/icons/MOO-Icon-Promise.svg"
                                                    alt=" The MOO promise"
                                                    title=" The MOO promise"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    The MOO promise
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
                                                        The MOO promise
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        We move heaven and earth so you’re happy with your
                                                        order!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>{" "}
                            </div>
                            <div className="tile-rack__tile-wrap tile-rack__svg-icons-tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap">
                                <a
                                    href="/us/business-printing-services"
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
                                                    src="/assets/images/icons/MOO-Icon-Sample-Pack.svg"
                                                    alt="Business perks"
                                                    title="Business perks"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Business perks
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
                                                        Business perks
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Get more discounts and extra support with our business
                                                        plans.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>{" "}
                            </div>
                            <div className="tile-rack__tile-wrap tile-rack__svg-icons-tile-wrap layout__item u-display-flex u-1/4@medium js-tile-wrap">
                                <a
                                    href="/us/sample-packs"
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
                                                    src="/assets/images/icons/MOO-Icon-Printfinity.svg"
                                                    alt="Get a feel for MOO"
                                                    title="Get a feel for MOO"
                                                    className="tile__image"
                                                    data-qa-name="image"
                                                />
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Get a feel for MOO
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
                                                        Get a feel for MOO
                                                    </h3>{" "}
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <p>
                                                        Order a sample pack so you can&nbsp;feel our&nbsp;papers
                                                        and finishes for yourself.
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

                className="
  band
      -module
  u-backgroundColor-neutralTint
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={3}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Popular products</h2>
                            <p className="p__lead">
                                These are tried and true favorites that will have you set to get
                                down to business.
                            </p>
                        </header>
                    </div>
                    <div className="">
                        <div className="layout layout--row-spacing u-display-flex u-flexWrap-wrap">
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Business Cards"
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
                                                                src="/assets/images/0702WF-TR-752x564-Business-Cards.jpg"
                                                                srcSet="/assets/images//0702WF-TR-752x564-Business-Cards.jpg, /assets/images//0702WF-TR-752x564-Business-Cards.jpg 2x"
                                                                alt=""
                                                                className="tile__image"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Postcards"
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
                                                                src="/assets/images/0702WF-TR-752x564-Postcards.jpg"
                                                                srcSet="/assets/images/0702WF-TR-752x564-Postcards.jpg, /assets/images/0702WF-TR-752x564-Postcards.jpg 2x"
                                                                alt=""
                                                                className="tile__image"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Postcards</span>&nbsp;
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Postcards</span>&nbsp;
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="https://beta.moo.com/products/ecomm-b2406e90-14c0-4c08-8a4a-2e4342982346/ecomm-b99bc481-fe81-4bab-8265-8a5bf978fd30"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop New MOO Water Bottles"
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
                                                                src="/assets/images/0868WF-TR-752x564-All%20(1)0.jpg"
                                                                srcSet="/assets/images/0868WF-TR-752x564-All%20(1)0.jpg, /assets/images/0868WF-TR-752x564-All%20(1)0.jpg 2x"
                                                                alt=""
                                                                className="tile__image"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop New MOO Water Bottles</span>&nbsp;
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop New MOO Water Bottles</span>&nbsp;
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
                                <div
                                    className="u-display-flex u-flex-grow-1 js-tile-last-saved-project"
                                    data-tile-last-saved-project='{
  "creationDatePrefix": "",
  "alternativeHeading": "Your latest saved items",
  "alternativeImageUrl": "/dam/jcr:c8cdf9cb-a3f1-43cf-98cf-aefb7a0964af/CRB-7007-Web-Window-Last-Saved-752x564px.jpg",
  "alternativeImageAlt": "",
  "alternativeCtaLabel": "Finish your project",
  "alternativeCtaLink": "/us/account/unfinished-projects.php"
    }'
                                    data-di-mask=""
                                >
                                    <div
                                        className="tile
  -link
    u-textAlign-left
    
  "
                                        data-component-name="tile-last-saved-project"
                                        data-qa-name="tile-last-saved-project"
                                    >
                                        <div
                                            className="tile__body has-fouc js-tile-body"
                                            data-qa-name="body"
                                        >
                                            <div className="tile__media-wrap">
                                                <a
                                                    href="/home/card-details"
                                                    className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                    data-qa-name="image-link"
                                                    data-component-text="Shop Stickers & Labels"
                                                >
                                                    <div
                                                        className="tile__ratio-box u-ratio-4:3"
                                                        data-qa-name="ratio-box"
                                                    >
                                                        <div className="tile__ratio-box-inner">
                                                            <figure
                                                                className="tile__figure u-margin-0 js-figure
u-backgroundColor-neutral20"
                                                                data-qa-name="figure"
                                                            >
                                                                <img
                                                                    src="/assets/images/0702WF-TR-752x564-Stickers.jpg"
                                                                    srcSet="/assets/images/0702WF-TR-752x564-Stickers.jpg, /assets/images/0702WF-TR-752x564-Stickers.jpg 2x"
                                                                    alt=""
                                                                    className="tile__image"
                                                                    data-qa-name="image"
                                                                />
                                                                <figcaption
                                                                    className="u-visually-hidden"
                                                                    data-qa-name="figcaption"
                                                                ></figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </a>{" "}
                                            </div>
                                            <div className="tile__text-wrap" data-qa-name="text-wrap">
                                                <div
                                                    className="tile__text-wrap-inner u-padding-0"
                                                    data-qa-name="text-wrap-inner"
                                                ></div>
                                                <a
                                                    href="/us/stickers"
                                                    className="tile__horizontal-footer-link has-fouc js-tile-footer js-ga4-click-track"
                                                    data-qa-name="horizontal-footer-link"
                                                >
                                                    <div
                                                        className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                        data-qa-name="horizontal-footer"
                                                    >
                                                        <div className="cta-link -has-chevron">
                                                            <span className="cta-link__text">
                                                                <span className="js-tile-footer-link-label">
                                                                    Shop Stickers &amp; Labels
                                                                </span>
                                                                &nbsp;
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
                                            href="/home/card-details"
                                            className="has-fouc js-tile-footer js-ga4-click-track"
                                            data-qa-name="footer-link"
                                        >
                                            <div
                                                className="tile__footer cta-link__wrap u-paddingTop-xs"
                                                data-qa-name="footer"
                                            >
                                                <div className="cta-link -has-chevron">
                                                    <span className="cta-link__text">
                                                        <span className="js-tile-footer-link-label">
                                                            Shop Stickers &amp; Labels
                                                        </span>
                                                        &nbsp;
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
            </section>
            <section

                className="
  band
      -module
  u-backgroundColor-neutralTint
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={4}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="">
                        <div className="layout layout--row-spacing u-display-flex u-flexWrap-wrap">
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Invitations"
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
                                                                src="/assets/images/0702WF-TR-752x564-Invitations0.jpg"
                                                                data-srcset="/assets/images/0702WF-TR-752x564-Invitations0.jpg, /assets/images/0702WF-TR-752x564-Invitations0.jpg 2x"
                                                                alt=""
                                                                className="tile__image lazyload"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Invitations</span>&nbsp;
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
                                        href="/us/invitations"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Invitations</span>&nbsp;
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Notebooks & Planners"
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
                                                                src="/assets/images/0687WF-TR-752x564-Tape-Bound-Notebooks0.jpg"
                                                                data-srcset="/assets/images/0687WF-TR-752x564-Tape-Bound-Notebooks0.jpg, /assets/images/0687WF-TR-752x564-Tape-Bound-Notebooks0.jpg 2x"
                                                                alt=""
                                                                className="tile__image lazyload"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Notebooks &amp; Planners</span>&nbsp;
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Notebooks &amp; Planners</span>&nbsp;
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Flyers"
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
                                                                src="/assets/images/0702WF-TR-752x564-Flyers.jpg"
                                                                data-srcset="/assets/images/0702WF-TR-752x564-Flyers.jpg, /assets/images/0702WF-TR-752x564-Flyers.jpg 2x"
                                                                alt=""
                                                                className="tile__image lazyload"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Flyers</span>&nbsp;
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Flyers</span>&nbsp;
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
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/4@medium">
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
                                                href="/home/card-details"
                                                className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                data-qa-name="image-link"
                                                data-component-text="Shop Notepads"
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
                                                                src="/assets/images/0760WF-Notepad-Launch-TR-752x564-Group-Non-Full-Bleed0.jpg"
                                                                data-srcset="/assets/images/0760WF-Notepad-Launch-TR-752x564-Group-Non-Full-Bleed0.jpg, /assets/images/0760WF-Notepad-Launch-TR-752x564-Group-Non-Full-Bleed0.jpg 2x"
                                                                alt=""
                                                                className="tile__image lazyload"
                                                                data-qa-name="image"
                                                            />
                                                            <figcaption
                                                                className="u-visually-hidden"
                                                                data-qa-name="figcaption"
                                                            ></figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner u-padding-0"
                                                data-qa-name="text-wrap-inner"
                                            ></div>
                                            <a
                                                href="/home/card-details"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Notepads</span>&nbsp;
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
                                        href="/home/card-details"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap u-paddingTop-xs"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Notepads</span>&nbsp;
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
                <div
                    className="wrapper u-textAlign-center u-marginTop-xl"
                    data-component-name="module-footer"
                >
                    <a
                        href="/home/card-details"
                        className="btn -standalone -large js-ga4-click-track"
                    >
                        Shop All MOO Products
                    </a>{" "}
                </div>
            </section>
            <section

                className="band -module biwt-module        u-backgroundColor-white
 u-padding-0@medium u-marginTop-0@medium js-component"
                data-module-name="background-image-with-text-module"
                data-module-index={5}
            >
                <div className="biwt__media-wrap-outer u-marginBottom-m u-marginBottom-0@medium">
                    <div className="wide-media__wrap -stacking@until-medium">
                        <picture>
                            <source
                                media="only screen and (min-width: 40.0625em)"
                                srcSet="/assets/images/0812WF-BIWT-3840x1000-EN-Business-Printing-Services0.jpg, /assets/images/0812WF-BIWT-3840x1000-EN-Business-Printing-Services0.jpg 2x"
                            />
                            <img
                                src="/.imaging/scale/dam/1a5978e6-6109-44d8-829b-2609212b9891/0812WF-BIWT-1216x912-EN-Business-Printing-Services.jpg"
                                srcSet="/.imaging/scale/dam/1a5978e6-6109-44d8-829b-2609212b9891/0812WF-BIWT-1216x912-EN-Business-Printing-Services.jpg, /dam/jcr:7d78857d-c90a-4d5f-a322-d95a033c321d/0812WF-BIWT-1216x912-EN-Business-Printing-Services.jpg 2x"
                                alt="Luxe Paper  "
                                className="wide-media -disable@until-medium"
                            />
                        </picture>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="layout">
                        <div className="layout__item biwt__panel-container -right">
                            <div className="panel__body biwt__panel">
                                <header
                                    className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                                    data-component-name="module-header"
                                >
                                    <h2 className="h__module">Take your brand to the next level</h2>
                                    <p>
                                        Whether you’re starting out or scaling up, get access to
                                        exclusive discounts, products, support, and more.
                                    </p>
                                    <div className="module-header__cta-wrap u-display-block">
                                        <a
                                            href="/us/business-printing-services"
                                            className="cta-link -has-chevron js-ga4-click-track"
                                            data-overlay-id="background-image-with-text-module-buildflow"
                                        >
                                            <span className="cta-link__text">
                                                <span>Compare Business Plans</span>&nbsp;
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
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="getstarted"
                className="band -module        u-backgroundColor-white
 js-component"
                data-module-name="logo-module"
                data-module-index={6}
            >
                <div className="wrapper">
                    <div className="u-textAlign-center logo-module__header-wrap">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module"> </h2>
                        </header>
                    </div>
                    <div className="layout u-textAlign-center">
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0676WF-Logo-112x112-Uber.svg"
                                src="/assets/images/icons/0676WF-Logo-112x112-Uber.svg"
                                alt="Uber logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0676WF-Logo-112x112-Calm.svg"
                                src="/assets/images/icons/0676WF-Logo-112x112-Calm.svg"
                                alt="coca cola logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0676WF-Logo-112x112-Glossier.svg"
                                src="/assets/images/icons/0676WF-Logo-112x112-Glossier.svg"
                                alt="Glossier Logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0676WF-Logo-112x112-Etsy.svg"
                                src="/assets/images/icons/0676WF-Logo-112x112-Etsy.svg"
                                alt="Etsy logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0000WF-Logo-112x112-Airbnb-Version2.svg"
                                src="/assets/images/icons/0000WF-Logo-112x112-Airbnb-Version2.svg"
                                alt="Audi logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                        <div
                            className="layout__item -animate u-1/2 u-1/3@medium u-1/6@large"
                            data-component-name="logo-block"
                        >
                            <img
                                data-src="/assets/images/icons/0000WF-Logo-112x112-TED-Version2.svg"
                                src="/assets/images/icons/0000WF-Logo-112x112-TED-Version2.svg"
                                alt="Facebook logo"
                                className="logo-module__image lazyload"
                            />{" "}
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="TrustPilotCarouselModel"
                className="band -module         u-backgroundColor-white
"
            >
                <div className="wrapper">
                    <div className="u-last-child-margin-bottom-0 u-textAlign-center">
                        {/* TrustBox script */}
                        {/* End TrustBox script */}
                        {/* TrustBox widget - Carousel */}
                        <div
                            className="trustpilot-widget"
                            data-locale="en-US"
                            data-template-id="53aa8912dec7e10d38f59f36"
                            data-businessunit-id="4aa6d5d8000064000504b8c3"
                            data-style-height="140px"
                            data-style-width="100%"
                            data-theme="light"
                            data-stars="4,5"
                            data-review-languages="en"
                            style={{ position: "relative" }}
                        >
                            <iframe
                                title="Customer reviews powered by Trustpilot"
                                loading="auto"
                                src="https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/index.html?templateId=53aa8912dec7e10d38f59f36&businessunitId=4aa6d5d8000064000504b8c3#locale=en-US&styleHeight=140px&styleWidth=100%25&theme=light&stars=4%2C5&reviewLanguages=en"
                                style={{
                                    position: "relative",
                                    height: 140,
                                    width: "100%",
                                    borderStyle: "none",
                                    display: "block",
                                    overflow: "hidden"
                                }}
                            />
                        </div>
                        {/* End TrustBox widget */}
                    </div>
                </div>
            </section>
            <section

                className="band -module        u-backgroundColor-neutralTint
 lego-module js-component"
                data-module-name="lego-module"
                data-module-index={7}
            >
                <div className="wrapper">
                    <div className="lego-module__row layout u-display-flex@medium">
                        <div className="lego-module__tile-wrap block__wrap-mob layout__item u-1/2@large u-display-flex@medium u-flexDirection-column@medium u-last-child-margin-bottom-0">
                            <div
                                className="tile
  -link
  u-textAlign-
"
                                data-component-name="tile-lego-large"
                            >
                                <div className="tile__body -lego-tile-large">
                                    <div className="tile__media-wrap">
                                        <a
                                            href="https://www.moo.com/blog/inspiration/best-business-cards-special-finish"
                                            className="tile__image-link js-tile-image-link js-ga4-click-track"
                                            data-component-text=""
                                        >
                                            <figure
                                                className="tile__figure u-margin-0
"
                                                data-qa-name="figure"
                                            >
                                                <picture>
                                                    <source
                                                        media="only screen and (min-width: 64.0625em)"
                                                        srcSet="/assets/images/BC%20to%20wow%20693%20x%20520.jpg, /assets/images/BC%20to%20wow%201386%20x%201040.jpg 2x"
                                                    />
                                                    <img
                                                        src="/assets/images/BC%20to%20wow%20376%20x%20282.jpg"
                                                        srcSet="/assets/images/BC%20to%20wow%20376%20x%20282.jpg, /assets/images/BC%20to%20wow%20752%20x%20564.jpg 2x"
                                                        alt="Business Cards to wow your customer"
                                                        title="Business Cards to wow your customer"
                                                        className="tile__image"
                                                        data-qa-name="image"
                                                    />
                                                </picture>
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Business Cards to wow your customer
                                                </figcaption>
                                            </figure>
                                        </a>{" "}
                                    </div>
                                    <div className="tile__text-wrap">
                                        <div
                                            className="tile__text-wrap-inner"
                                            data-qa-name="text-wrap-inner"
                                        >
                                            <div className="u-marginBottom-xxxs">
                                                <h3 className="h__block" data-qa-name="heading">
                                                    Business Cards to wow your customer
                                                </h3>{" "}
                                            </div>
                                            <div className="list-default__parent u-last-child-margin-bottom-0">
                                                <p>A Special Finish takes your cards beyond the visual.</p>
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.moo.com/blog/inspiration/best-business-cards-special-finish"
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
                                    href="https://www.moo.com/blog/inspiration/best-business-cards-special-finish"
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
                        <div className="lego-module__tile-wrap block__wrap-mob layout__item u-1/2@large u-display-flex@medium u-flexDirection-column@medium u-last-child-margin-bottom-0">
                            <div
                                className="tile
  -link
  u-textAlign-
"
                                data-component-name="tile-lego-large"
                            >
                                <div className="tile__body -lego-tile-large">
                                    <div className="tile__media-wrap">
                                        <a
                                            href="https://www.moo.com/blog/inspiration/micro-luxury-ball-point-pen"
                                            className="tile__image-link js-tile-image-link js-ga4-click-track"
                                            data-component-text=""
                                        >
                                            <figure
                                                className="tile__figure u-margin-0
"
                                                data-qa-name="figure"
                                            >
                                                <picture>
                                                    <source
                                                        media="only screen and (min-width: 64.0625em)"
                                                        srcSet="/assets/images/Elevate%20the%20every%20day%20693%20x%20520.jpeg, /assets/images/Elevate%20the%20every%20day%201386%20x%201040.jpeg 2x"
                                                    />
                                                    <img
                                                        src="/assets/images/Elevate%20the%20every%20day%20376%20x%20282.jpeg"
                                                        srcSet="/assets/images/Elevate%20the%20every%20day%20376%20x%20282.jpeg, /assets/images/Elevate%20the%20every%20day%20752%20x%20564.jpeg 2x"
                                                        alt="Make work feel more luxurious"
                                                        title="Make work feel more luxurious"
                                                        className="tile__image"
                                                        data-qa-name="image"
                                                    />
                                                </picture>
                                                <figcaption
                                                    className="u-visually-hidden"
                                                    data-qa-name="figcaption"
                                                >
                                                    Make work feel more luxurious
                                                </figcaption>
                                            </figure>
                                        </a>{" "}
                                    </div>
                                    <div className="tile__text-wrap">
                                        <div
                                            className="tile__text-wrap-inner"
                                            data-qa-name="text-wrap-inner"
                                        >
                                            <div className="u-marginBottom-xxxs">
                                                <h3 className="h__block" data-qa-name="heading">
                                                    Make work feel more luxurious
                                                </h3>{" "}
                                            </div>
                                            <div className="list-default__parent u-last-child-margin-bottom-0">
                                                <p>
                                                    Micro luxuries have a big impact. See how premium tools
                                                    can transform the workday.
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.moo.com/blog/inspiration/micro-luxury-ball-point-pen"
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
                                    href="https://www.moo.com/blog/inspiration/micro-luxury-ball-point-pen"
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
                    <div className="lego-module__row -bottom layout u-display-flex@medium"></div>
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
                                        srcSet="/assets/images/0836WF-IC-2352x578-All-Products-Sample-Pack.jpg, /assets/images/0836WF-IC-2352x578-All-Products-Sample-Pack.jpg 2x"
                                    />
                                    <source
                                        media="only screen and (min-width: 40.0625em)"
                                        srcSet="/assets/images/0836WF-IC-1952x500-All-Products-Sample-Pack.jpg, /assets/images/0836WF-IC-1952x500-All-Products-Sample-Pack.jpg 2x"
                                    />
                                    <img
                                        src="/assets/images/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg"
                                        srcSet="/assets/images/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg, /assets/images/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg 2x"
                                        alt=""
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="wrapper u-textAlign-center intercom-module__block-wrap -color-light u-paddingBottom-0 u-paddingTop-m u-paddingTop-0@large">
                            <header className="u-color-inherit">
                                <h3 className="h4 u-color-inherit">Free sample</h3>
                                <p className="p__lead">
                                    New to MOO? See our full print range in all the possible
                                    variations <br /> of shape, paper stock &amp; finishes for free.
                                </p>
                                <div className="intercom-module__mobile-ctas-wrap">
                                    <a
                                        href="/us/sample-packs"
                                        className="btn -ghost-light u-margin-vertical-xxxs u-margin-horizontal-xxxs@small u-display-none@until-large js-ga4-click-track"
                                    >
                                        Get your sample pack
                                    </a>
                                    <a
                                        href="/us/sample-packs"
                                        className="btn -standalone u-margin-vertical-xxxs u-margin-horizontal-xxxs@small u-display-none@large js-ga4-click-track"
                                    >
                                        Get your sample pack
                                    </a>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            <section

                className="band -module        u-backgroundColor-white
 js-component"
                data-module-name="grid-module"
                data-module-index={9}
            >
                <div className="wrapper grid-module__blocks-wrap">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Let’s be friends</h2>
                            <p className="p__lead">
                                Connect with us on social media for design inspiration,
                                behind-the-scenes clips and top tips from our expert team. <br />{" "}
                                Plus random, beautiful things that make us smile.
                            </p>
                        </header>
                    </div>
                    <div className="grid-block__inner-blocks-wrap layout layout--flush u-display-flex u-flexWrap-wrap u-cancel-wrapper-padding@until-medium">
                        <div className="grid-block__inner-block-wrap layout__item u-1/2 u-1/4@medium">
                            <a
                                href="https://www.instagram.com/p/DBwR-jDK0br/?img_index=1"
                                className="js-ga4-click-track"
                                data-component-name="grid-block"
                            >
                                <figure className="u-margin-0">
                                    <img
                                        src="/assets/images/0801WF-G-640x640-Social-Content-1.jpg"
                                        alt="Business Cards"
                                    />
                                </figure>
                            </a>{" "}
                        </div>
                        <div className="grid-block__inner-block-wrap layout__item u-1/2 u-1/4@medium">
                            <a
                                href="https://www.instagram.com/p/DA6MjIfNWJc/"
                                className="js-ga4-click-track"
                                data-component-name="grid-block"
                            >
                                <figure className="u-margin-0">
                                    <img
                                        src="/assets/images/0801WF-G-640x640-Social-Content-2.jpg"
                                        alt="Hand holding Business Cards"
                                    />
                                </figure>
                            </a>{" "}
                        </div>
                        <div className="grid-block__inner-block-wrap layout__item u-1/2 u-1/4@medium">
                            <a
                                href="https://www.instagram.com/p/DABrGsoqcNk/?img_index=1"
                                className="js-ga4-click-track"
                                data-component-name="grid-block"
                            >
                                <figure className="u-margin-0">
                                    <img
                                        src="/assets/images/0801WF-G-640x640-Social-Content-3.jpg"
                                        alt="Business Cards"
                                    />
                                </figure>
                            </a>{" "}
                        </div>
                        <div className="grid-block__inner-block-wrap layout__item u-1/2 u-1/4@medium">
                            <a
                                href="https://www.instagram.com/p/C9Pyqo1Ioh9/"
                                className="js-ga4-click-track"
                                data-component-name="grid-block"
                            >
                                <figure className="u-margin-0">
                                    <img
                                        src="/assets/images/0801WF-G-640x640-Social-Content-4.jpg"
                                        alt="Hand holding a Square Business Cards"
                                    />
                                </figure>
                            </a>{" "}
                        </div>
                    </div>
                </div>
            </section>
        </main>


    </>
}

export default home;