'use client';
import { useState, useEffect } from "react";

const header = () => {

    const [isOpen, setIsOpen] = useState(null);
    const [isOpenMenu, setIsOpenMenu] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedMenu, setIsClickedMenu] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let timeoutId = null;

    const handleMouseEnter = (menu) => {
        if (!isClicked) {
            clearTimeout(timeoutId); // Clear any existing timeout
            setIsOpen(menu);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
            timeoutId = setTimeout(() => {
                setIsOpen(null);
            }, 4000); // Change to 5000 for 5 sec delay
        }
        setIsOpen(null);
    };

    const handleClick = (menu) => {
        clearTimeout(timeoutId);
        setIsOpen(isOpen === menu ? null : menu);
        setIsClicked(!isClicked);
    };


    // For header menu

    const handleMouseEnters = (menu) => {
        if (!isClicked) {
            clearTimeout(timeoutId); // Clear any existing timeout
            setIsOpenMenu(menu);
        }
    };

    const handleMouseLeaves = () => {
        if (!isClicked) {
            timeoutId = setTimeout(() => {
                setIsOpenMenu(null);
            }, 4000); // Change to 5000 for 5 sec delay
        }
        setIsOpenMenu(null);
    };

    const handleClicks = (menu) => {
        clearTimeout(timeoutId);
        setIsOpenMenu(isOpenMenu === menu ? null : menu);
        setIsClickedMenu(!isClickedMenu);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <>
        <div
            id="fnx-header"
            className="fnx-site header__band-wrap"
            data-extole-website-locale="us"
        >
            <div
                className="band header__band u-padding-0"
                role="banner"
                data-module-location="header"
                data-module-name="header"
            >
                <div
                    className={`overlay-screen js-nav__overlay-screen ${isOpen ? "is-visible" : ""}`}
                    data-component-name="nav-overlay-screen"
                />
                <div className="wrapper header__wrapper u-position-relative">
                    <div
                        className={`nav-main__dropdown-background js-nav__dropdown-bg ${isOpen ? "is-visible can-animate-height" : ""}`}
                        style={{ height: "659.812px" }}
                    />
                    <header className="header js-header" data-qa-name="header">
                        <a
                            href="/"
                            className="u-color-moogreen js-ga4-click-track"
                            data-component-name="moo-logo-home-link"
                        >
                            <div className="header__logo">
                                <svg
                                    viewBox="0 0 120 42"
                                    className="svg-icon u-fill"
                                    role="presentation"
                                    aria-hidden="true"
                                    data-icon-id="logo--moo"
                                >
                                    <path d="M50 27.45l9.2-17.8a1.62 1.62 0 0 1 1.6-1.1 1.52 1.52 0 0 1 1.6 1.6v21.5a1.6 1.6 0 0 1-1.6 1.7 1.63 1.63 0 0 1-1.7-1.7v-15l-7.3 14a2.14 2.14 0 0 1-1.8 1.1 2 2 0 0 1-1.8-1.1l-7.3-14v15a1.63 1.63 0 0 1-1.7 1.7 1.6 1.6 0 0 1-1.6-1.7v-21.4a1.47 1.47 0 0 1 1.6-1.6 1.71 1.71 0 0 1 1.6 1.1zm28.4 3a9.5 9.5 0 1 1 9.5-9.5 9.5 9.5 0 0 1-9.5 9.5m12.7-9.5a12.7 12.7 0 1 0-12.7 12.7 12.72 12.72 0 0 0 12.7-12.7m15.7 9.5a9.5 9.5 0 1 1 9.5-9.5 9.5 9.5 0 0 1-9.5 9.5m12.7-9.5a12.7 12.7 0 1 0-12.7 12.7 12.72 12.72 0 0 0 12.7-12.7m-106 15.3a9.7 9.7 0 0 0 9.8-9.8 13.55 13.55 0 0 0-.2-2c-.4-2.2-2.1-6-5-11.1-2.2-3.9-4.1-6.7-4.1-6.7l-.5-.7-.4.6s-1.9 2.9-4.1 6.7c-3 5.1-4.7 8.9-5 11.1a13.55 13.55 0 0 0-.2 2 10.06 10.06 0 0 0 2 6 9.34 9.34 0 0 0 7.7 3.9m0 3.4a12.69 12.69 0 0 1-10.3-5.1 12.6 12.6 0 0 1-2.7-7.9A10.9 10.9 0 0 1 .8 24c.5-2.9 2.6-7.6 6.4-14.1 2.8-4.8 5.1-8.4 5.2-8.4.2-.4.5-.9 1.1-.9s.9.5 1.2.9c0 0 2.4 3.6 5.2 8.4 3.8 6.5 5.9 11.2 6.4 14.1a10.9 10.9 0 0 1 .3 2.6 12.6 12.6 0 0 1-2.7 7.9 13.47 13.47 0 0 1-10.4 5.1" />
                                </svg>{" "}
                                <span className="u-visually-hidden">MOO</span>
                            </div>
                        </a>{" "}
                        <div
                            className="header__nav-toggle -open js-nav-toggle"
                            data-component-name="open-menu-icon"
                        >
                            <button type="button">
                                <svg
                                    viewBox="0 0 48 48"
                                    className="svg-icon -medium"
                                    role="presentation"
                                    aria-hidden="true"
                                    data-icon-id="ui--menu-xbold"
                                >
                                    <path d="M4.052 22.052h39.95v3.896H4.052zm0-12h39.95v3.896H4.052zm0 24h39.95v3.896H4.052z" />
                                </svg>{" "}
                            </button>
                        </div>
                        <div className="nav-main js-nav">
                            <div className="nav-main__scroll-wrap js-nav__scroll-wrap">
                                <nav
                                    className="nav-main__nav js-nav-main-nav"
                                    data-component-name="header-navigation-level-1"
                                >
                                    <ul className="nav-main__list -l1">
                                        <span className="nav-main__items-wrap">
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    onMouseEnter={() => handleMouseEnter("Business-Cards")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Business-Cards")}
                                                    className={`nav-main__link -l1 js-nav__link--l1 is-parent ${isOpen === 'Business-Cards' ? "is-selected" : ""}`}
                                                >
                                                    Business Cards
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === 'Business-Cards' ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/business-cards/original"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg, /dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg 2x"
                                                                                                    alt="Original Business Cards"
                                                                                                    title="Original Business Cards"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg, /dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Original Business Cards
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Original Business Cards
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Thicker than your average card, Original
                                                                                        Business Cards set a new standard for
                                                                                        “standard” business cards.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/business-cards/original"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Original Business Cards</span>
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/business-cards/finishes"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:5713c730-b015-4d4f-90ae-661bbb2c2982/0702WF-TR-752x376-Gold-Foil-Business-Cards.jpg, /dam/jcr:5713c730-b015-4d4f-90ae-661bbb2c2982/0702WF-TR-752x376-Gold-Foil-Business-Cards.jpg 2x"
                                                                                                    alt="Business Cards with special finishes"
                                                                                                    title="Business Cards with special finishes"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:5713c730-b015-4d4f-90ae-661bbb2c2982/0702WF-TR-752x376-Gold-Foil-Business-Cards.jpg, /dam/jcr:5713c730-b015-4d4f-90ae-661bbb2c2982/0702WF-TR-752x376-Gold-Foil-Business-Cards.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Business Cards with special finishes
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Business Cards with special finishes
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Add extra dazzle, shine and texture.
                                                                                        With special finishes like Spot Gloss,
                                                                                        Gold Foil and &nbsp;Silver Foil.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/business-cards/finishes"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Special Finishes</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards"
                                                            className="nav-main__link -l2 js-nav__link--l2"
                                                        >
                                                            All Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/original"
                                                            className="nav-main__link -l2 js-nav__link--l2"
                                                        >
                                                            Original Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/super"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Super Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/luxe"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Luxe Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/cotton"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Cotton Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/finishes"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Special Finishes
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/finishes/gold-foil-business-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Gold Foil Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/finishes/silver-foil-business-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Silver Foil Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/finishes/spot-gloss-business-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Spot Gloss Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/finishes/raised-spot-gloss-business-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Raised Spot Gloss Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/letterpress"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Letterpress Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/standard-size"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Standard Size Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/moo-size"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            MOO Size Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/square"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Square Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/minicards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            MiniCards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-cards/qr-code"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            QR Code Business Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/luxe-products"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Luxe by MOO
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/luxe-products"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Luxe by MOO</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-4a7c7c7e-24f9-4040-945e-71ecce4c1e8a/moo-53709615-f6d3-4daa-86b8-3cdda239e674"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Boxed Luxe Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/luxe"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Luxe Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/square"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Luxe Square Business Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-cards/minicards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Luxe MiniCards</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/accessories/business-card-holders"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Business Card Holders
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/sample-packs/free-sample-business-cards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Business Card Sample Pack
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://www.moo.com/us/design-templates/business-cards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=businesscard_us"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Design a Business Card
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "Postcards" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Postcards")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Postcards")}
                                                >
                                                    Postcards
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === 'Postcards' ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/postcards/original"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:593a0954-955e-4f74-b854-7508308985e1/0702WF-TR-752x376-Original-Postcards.jpg, /dam/jcr:593a0954-955e-4f74-b854-7508308985e1/0702WF-TR-752x376-Original-Postcards.jpg 2x"
                                                                                                    alt="Original Postcards"
                                                                                                    title="Original Postcards"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:593a0954-955e-4f74-b854-7508308985e1/0702WF-TR-752x376-Original-Postcards.jpg, /dam/jcr:593a0954-955e-4f74-b854-7508308985e1/0702WF-TR-752x376-Original-Postcards.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Original Postcards
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Original Postcards
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Great quality AND great value. Whether
                                                                                        in gloss or matte, our entry-level
                                                                                        Postcard paper packs a punch.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/postcards/original"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Original Postcards</span>&nbsp;
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/postcards/gold-and-silver-foil"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:bcc23bb2-08fa-4cc2-85bd-95d64fd5fbdd/0702WF-TR-752x376-Foil-Postcards.jpg, /dam/jcr:bcc23bb2-08fa-4cc2-85bd-95d64fd5fbdd/0702WF-TR-752x376-Foil-Postcards.jpg 2x"
                                                                                                    alt="Foil Postcards"
                                                                                                    title="Foil Postcards"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:bcc23bb2-08fa-4cc2-85bd-95d64fd5fbdd/0702WF-TR-752x376-Foil-Postcards.jpg, /dam/jcr:bcc23bb2-08fa-4cc2-85bd-95d64fd5fbdd/0702WF-TR-752x376-Foil-Postcards.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Foil Postcards
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Foil Postcards
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Turn heads by adding touchy-feely Gold
                                                                                        or Silver Foil to your Postcards. Try it
                                                                                        on text, photos, your logo – anywhere!
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/postcards/gold-and-silver-foil"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Foil Postcards</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/standard"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Standard Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/square"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Square Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/rack-cards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Rack Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/half-page"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Half Page Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/small"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Small Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/medium"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Medium Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/large"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Large Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/original"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Original Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/super"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Super Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/luxe"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Luxe Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/eco"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Eco Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards/gold-and-silver-foil"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Gold and Silver Foil Postcards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/cards"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Custom Cards
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/invitations"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Invitations</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/save-the-date-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Save the Date Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/thank-you-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Thank You Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/change-the-date"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Change the Date Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/gift-certificates"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Gift Certificates
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/change-of-address-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Change of Address Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/sample-packs/all-products-sample-pack"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Print Product Sample Pack
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://www.moo.com/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Design a Postcard
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "Flyers" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Flyers")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Flyers")}
                                                >
                                                    Flyers
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === "Flyers" ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/flyers/premium"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:1cb4e1f0-ed9c-4491-9f4e-c24767dce308/0702WF-TR-752x376-Premium-Flyer.jpg, /dam/jcr:1cb4e1f0-ed9c-4491-9f4e-c24767dce308/0702WF-TR-752x376-Premium-Flyer.jpg 2x"
                                                                                                    alt="Premium Flyers"
                                                                                                    title="Premium Flyers"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:1cb4e1f0-ed9c-4491-9f4e-c24767dce308/0702WF-TR-752x376-Premium-Flyer.jpg, /dam/jcr:1cb4e1f0-ed9c-4491-9f4e-c24767dce308/0702WF-TR-752x376-Premium-Flyer.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Premium Flyers
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Premium Flyers
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        In gloss or matte, Premium Flyers are
                                                                                        designed to make your brand extra
                                                                                        memorable.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/flyers/premium"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Premium Flyers</span>&nbsp;
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/flyers/pearlescent"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:c4dc7f31-768c-437c-be7e-5ae69eee18ba/0702WF-TR-752x376-Square-Flyers.jpg, /dam/jcr:c4dc7f31-768c-437c-be7e-5ae69eee18ba/0702WF-TR-752x376-Square-Flyers.jpg 2x"
                                                                                                    alt="Pearlescent Flyers"
                                                                                                    title="Pearlescent Flyers"
                                                                                                    className="tile__image lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:c4dc7f31-768c-437c-be7e-5ae69eee18ba/0702WF-TR-752x376-Square-Flyers.jpg, /dam/jcr:c4dc7f31-768c-437c-be7e-5ae69eee18ba/0702WF-TR-752x376-Square-Flyers.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Pearlescent Flyers
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                                        <div className="media-flex__body">
                                                                                            <div
                                                                                                className="h__block"
                                                                                                data-qa-name="heading"
                                                                                            >
                                                                                                Pearlescent Flyers
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                                            <div
                                                                                                className="pill u-color-white -small"
                                                                                                style={{
                                                                                                    backgroundColor: "#ffffff"
                                                                                                }}
                                                                                            ></div>{" "}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Not for throwaway ideas, Pearlescent
                                                                                        Flyers are eye-catchingly metallic and
                                                                                        luxurious.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/flyers/pearlescent"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Pearlescent Flyers</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/us-letter"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            US Letter Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/half-page"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Half Page Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/long"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Long Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/square"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Square Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/small"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Small Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/premium"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Premium Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/flyers/pearlescent"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Pearlescent Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/eco"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Eco Flyers
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <span
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Custom Flyers
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/menus"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Menus</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/event-programs"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Event Programs</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/design-templates/flyers/"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Design a Flyer
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "Marketing-Materials" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Marketing-Materials")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Marketing-Materials")}
                                                >
                                                    Marketing Materials
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === "Marketing-Materials" ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/stickers"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:8d411798-7f58-4cfa-b4b2-e29780b582f4/0702WF-TR-752x376-Stickers0.jpg, /dam/jcr:8d411798-7f58-4cfa-b4b2-e29780b582f4/0702WF-TR-752x376-Stickers0.jpg 2x"
                                                                                                    alt="Stickers & Labels"
                                                                                                    title="Stickers & Labels"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:8d411798-7f58-4cfa-b4b2-e29780b582f4/0702WF-TR-752x376-Stickers0.jpg, /dam/jcr:8d411798-7f58-4cfa-b4b2-e29780b582f4/0702WF-TR-752x376-Stickers0.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Stickers &amp; Labels
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                                        <div className="media-flex__body">
                                                                                            <div
                                                                                                className="h__block"
                                                                                                data-qa-name="heading"
                                                                                            >
                                                                                                Stickers &amp; Labels
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                                            <div
                                                                                                className="pill u-color-white -small"
                                                                                                style={{
                                                                                                    backgroundColor: "#ffffff"
                                                                                                }}
                                                                                            ></div>{" "}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Feature your photography or business
                                                                                        logo and use for marketing, packaging,
                                                                                        or just for fun.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/stickers"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Stickers &amp; Labels</span>
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2c243af0-6568-4d12-af12-3a7dd4054274 "
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/.imaging/scale/dam/20679869-69ca-492c-a56b-6150e7336d91/0813WF-Collection-Launch-TR-752x376.jpg, /dam/jcr:16cf8e41-8362-4899-b6ee-4555658c6708/0813WF-Collection-Launch-TR-752x376.jpg 2x"
                                                                                                    alt="Brochures"
                                                                                                    title="Brochures"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/.imaging/scale/dam/20679869-69ca-492c-a56b-6150e7336d91/0813WF-Collection-Launch-TR-752x376.jpg, /dam/jcr:16cf8e41-8362-4899-b6ee-4555658c6708/0813WF-Collection-Launch-TR-752x376.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Brochures
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Brochures
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Tell a deeper story about your brand
                                                                                        with printed brochures. From event
                                                                                        handouts to inserts and more – access
                                                                                        beautiful print at great value.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2c243af0-6568-4d12-af12-3a7dd4054274 "
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop Brochures</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/marketing-materials"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All Marketing Materials
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/postcards"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Postcards
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/postcards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/small"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Small Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/standard"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Standard Postcards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/square"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Square Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/rack-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Rack Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/medium"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Medium Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/half-page"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Half Page Postcards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3 -divider                                                         ">
                                                                <a
                                                                    href="/us/postcards/large"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Large Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/original"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Original Postcards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/super"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Super Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/postcards/luxe"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Luxe Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/eco"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Eco Postcards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3 -divider                                                         ">
                                                                <a
                                                                    href="/us/postcards/gold-and-silver-foil"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Gold and Silver Foil Postcards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/design-templates/postcards/"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Design a Postcard
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/stickers"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Stickers &amp; Labels
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/stickers"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        All Stickers &amp; Labels
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/round"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Round Stickers</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/rectangular"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Rectangular Stickers
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/stickerbooks"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">StickerBooks</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3 -divider                                                         ">
                                                                <a
                                                                    href="/us/stickers/return-address-labels"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Return Address Labels
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/design-guidelines"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Design a Sticker</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/brochures"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Brochures
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2c243af0-6568-4d12-af12-3a7dd4054274"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Tri-Fold Brochures
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3 -divider                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2558d348-fc45-45bc-8b44-fef6713ab724"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Bi-Fold Brochures
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-2558d348-fc45-45bc-8b44-fef6713ab724"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Gloss Brochures</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-25fe38b6-bec3-4ade-b5cc-c9b80dec6ea4/ecomm-50fd6e0c-b017-49f1-9677-71b4e141f458"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Matte Brochures</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/packaging-inserts"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Packaging Inserts
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://beta.moo.com/products"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Branded Merchandise
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/branded-merchandise"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        All Branded Merchandise
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-811b3835-6559-418e-b95f-889502baf04d/moo-f2de89be-c4dc-4ddb-8588-eb113402256b"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                Softcover Planners
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">MOO Notepads</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-f76e3c72-f261-4311-9f81-6756a3248411/moo-71081d26-d11d-42d8-876c-1c090f6c6361"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        MOO Softcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-9f1ffc5b-f17e-4846-9a9b-6b4f5d223621/moo-d7e6d833-d606-4ff7-8bf1-f1ce5b1ca298"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Tape Bound Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-b2406e90-14c0-4c08-8a4a-2e4342982346/ecomm-b99bc481-fe81-4bab-8265-8a5bf978fd30"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                New MOO Water Bottles
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-55a03980-c031-4186-98c9-4cefc26e1d30/ecomm-459603d9-70a0-46de-b8b5-9150fdfe5c4e"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                Insulated Mugs
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-a3cb86e9-f49d-4783-b78a-eb5f3e403040/ecomm-32349e8b-f1ea-4980-b139-5a6c5c113329"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Large Insulated Water Bottles
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-c6d05753-3281-44a3-8208-32e31bf5599a/moo-b523ddd1-bf01-4d9e-b7f3-87c557ca194f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Insulated Tumblers
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-58ad334f-fe29-43b4-8998-7602e9e5e3e5/ecomm-92efb81b-913e-4c77-99d1-56927476a883"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Original MOO Water Bottles
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">MOO Twist Pens</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-2e34c099-9365-4411-b93e-b58cd2da46a7/ecomm-2aea09fb-928d-4102-b058-3f52559455a3"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Perpetual Planners
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-d3de3609-0fc5-4b0b-926f-c2b9dabb3201/ecomm-ef2d2f1d-8626-4c3e-a533-24e9f061a265"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Hardcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-7daf2d82-af78-4a04-a0d7-e81f8993167f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Softcover Journals
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/cards"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Custom Cards
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Custom Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/loyalty-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Loyalty Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/gift-certificates"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Gift Certificates
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/menus"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Menus</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/appointment-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Appointment Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/event-programs"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Event Programs</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/invitations"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Invitations</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/trade-show-and-event-marketing-materials"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Event Marketing
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/eco"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Eco paper range
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/sample-packs/all-products-sample-pack"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Print Product Sample Pack
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/products"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All products
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "Stationery" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Stationery")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Stationery")}
                                                >
                                                    Stationery
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === "Stationery" ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:bdcd42ff-bda4-4141-94c0-710bf3ab9a41/0760WF-Notepad-Launch-TR-752x376-Group-Non-Full-Bleed0.jpg, /dam/jcr:bdcd42ff-bda4-4141-94c0-710bf3ab9a41/0760WF-Notepad-Launch-TR-752x376-Group-Non-Full-Bleed0.jpg 2x"
                                                                                                    alt="MOO Notepads"
                                                                                                    title="MOO Notepads"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:bdcd42ff-bda4-4141-94c0-710bf3ab9a41/0760WF-Notepad-Launch-TR-752x376-Group-Non-Full-Bleed0.jpg, /dam/jcr:bdcd42ff-bda4-4141-94c0-710bf3ab9a41/0760WF-Notepad-Launch-TR-752x376-Group-Non-Full-Bleed0.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                MOO Notepads
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        MOO Notepads
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        With its easy-tear design and signature
                                                                                        MOO quality, this affordable custom
                                                                                        Notepad is perfect for bulk buys.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop MOO Notepads</span>&nbsp;
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="https://beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-cf706217-4229-4579-82f1-8ef3e5523dd7"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:094f525c-4129-48cb-8a9e-ec5c56da617b/0702WF-TR-752x376-Custom-Lined-Softcover-Journals.jpg, /dam/jcr:094f525c-4129-48cb-8a9e-ec5c56da617b/0702WF-TR-752x376-Custom-Lined-Softcover-Journals.jpg 2x"
                                                                                                    alt="MOO Softcover Journals"
                                                                                                    title="MOO Softcover Journals"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:094f525c-4129-48cb-8a9e-ec5c56da617b/0702WF-TR-752x376-Custom-Lined-Softcover-Journals.jpg, /dam/jcr:094f525c-4129-48cb-8a9e-ec5c56da617b/0702WF-TR-752x376-Custom-Lined-Softcover-Journals.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                MOO Softcover Journals
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        MOO Softcover Journals
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Go custom. Show off your brand with a
                                                                                        custom Notebook. Just order 100&nbsp;or
                                                                                        more to get started.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="https://beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-cf706217-4229-4579-82f1-8ef3e5523dd7"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop MOO Softcover Journals</span>
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/stationery"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All Stationery
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            MOO Notepads
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/luxe-notecards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Luxe Notecards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/letterhead"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Letterhead
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/accessories/envelopes"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Envelopes
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/small"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Small Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/medium"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Medium Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/square"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Square Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/large"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Large Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/mini"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Mini Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/n9"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">#9 Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/n10"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">#10 Envelopes</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/small-patternsplash"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Small PatternSplash Envelopes
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/medium-patternsplash"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Medium PatternSplash Envelopes
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/coloursplash"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Small ColorSplash Envelopes
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/accessories/envelopes/medium-coloursplash"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Medium ColorSplash Envelopes
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/stickers/return-address-labels"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Return Address Labels
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/stickers"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Stickers &amp; Labels
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/stickers"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        All Stickers &amp; Labels
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/round"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Round Stickers</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/rectangular"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Rectangular Stickers
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/stickers/stickerbooks"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">StickerBooks</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/design-templates/stickers/?finishingOption=standard&productType=sticker_round"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Design a Sticker</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/display-boxes"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Display Boxes
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/greeting-cards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Greeting Cards
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/notebooks-journals"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Notebooks
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/notebooks-journals"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Notebooks</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">MOO Notepads</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-f76e3c72-f261-4311-9f81-6756a3248411/moo-71081d26-d11d-42d8-876c-1c090f6c6361"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        MOO Softcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-9f1ffc5b-f17e-4846-9a9b-6b4f5d223621/moo-d7e6d833-d606-4ff7-8bf1-f1ce5b1ca298"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Tape Bound Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-d3de3609-0fc5-4b0b-926f-c2b9dabb3201/ecomm-ef2d2f1d-8626-4c3e-a533-24e9f061a265"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Notebooks</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/notebooks-journals/hardcover"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Hardcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-7daf2d82-af78-4a04-a0d7-e81f8993167f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Softcover Journals
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/notebooks-journals/hard-softcover-duo"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Hard &amp; Softcover Duo
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/notebooks-journals#shopnotebooks"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Limited Edition</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/planners"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Planners
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/planners"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Planners</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-811b3835-6559-418e-b95f-889502baf04d/moo-f2de89be-c4dc-4ddb-8588-eb113402256b"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                MOO Softcover Planners
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-2e34c099-9365-4411-b93e-b58cd2da46a7/ecomm-2aea09fb-928d-4102-b058-3f52559455a3"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Perpetual Planners
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://beta.moo.com/products"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Branded Merchandise
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/branded-merchandise"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        All Branded Merchandise
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-811b3835-6559-418e-b95f-889502baf04d/moo-f2de89be-c4dc-4ddb-8588-eb113402256b"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                Softcover Planners
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-f76e3c72-f261-4311-9f81-6756a3248411/moo-71081d26-d11d-42d8-876c-1c090f6c6361"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        MOO Softcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-9f1ffc5b-f17e-4846-9a9b-6b4f5d223621/moo-29e8b030-f5cb-4117-aefc-422be9f94db8"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Tape Bound Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">MOO Twist Pens</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-2e34c099-9365-4411-b93e-b58cd2da46a7/ecomm-2aea09fb-928d-4102-b058-3f52559455a3"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Perpetual Planners
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-d3de3609-0fc5-4b0b-926f-c2b9dabb3201/ecomm-ef2d2f1d-8626-4c3e-a533-24e9f061a265"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Hardcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-7daf2d82-af78-4a04-a0d7-e81f8993167f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Softcover Journals
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/cards"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Custom Cards
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">All Custom Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/invitations"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Invitations</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/thank-you-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Thank you Cards</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/save-the-date-cards"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Save the Date Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/gift-tags"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Gift Tags</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/cards/change-the-date"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Change the Date Cards
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/products"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All products
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "BrandedMerchandise" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("BrandedMerchandise")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("BrandedMerchandise")}
                                                >
                                                    Branded Merchandise
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === "BrandedMerchandise" ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/bundles"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:8b4d565e-9576-4747-98e1-646c56a17203/0821WF-TR-752x376-3.jpg, /dam/jcr:8b4d565e-9576-4747-98e1-646c56a17203/0821WF-TR-752x376-3.jpg 2x"
                                                                                                    alt="Save up to 20% off* branded merch"
                                                                                                    title="Save up to 20% off* branded merch"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:8b4d565e-9576-4747-98e1-646c56a17203/0821WF-TR-752x376-3.jpg, /dam/jcr:8b4d565e-9576-4747-98e1-646c56a17203/0821WF-TR-752x376-3.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Save up to 20% off* branded merch
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Save up to 20% off* branded merch
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Create your perfect bundle – two
                                                                                        products for 10% off*, three products
                                                                                        for 15% off*, and when you buy four or
                                                                                        more products, you’ll get 20% off*.
                                                                                        Let’s get bundling!
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/bundles"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop now</span>&nbsp;
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="https://beta.moo.com/products/ecomm-b2406e90-14c0-4c08-8a4a-2e4342982346/ecomm-b99bc481-fe81-4bab-8265-8a5bf978fd30"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:44e53aae-a13b-4da9-9e93-5f6b14d5808d/0868WF-TR-752x376-18oz-ALL1.jpg, /dam/jcr:44e53aae-a13b-4da9-9e93-5f6b14d5808d/0868WF-TR-752x376-18oz-ALL1.jpg 2x"
                                                                                                    alt="New MOO Water Bottles"
                                                                                                    title="New MOO Water Bottles"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:44e53aae-a13b-4da9-9e93-5f6b14d5808d/0868WF-TR-752x376-18oz-ALL1.jpg, /dam/jcr:44e53aae-a13b-4da9-9e93-5f6b14d5808d/0868WF-TR-752x376-18oz-ALL1.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                New MOO Water Bottles
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                                        <div className="media-flex__body">
                                                                                            <div
                                                                                                className="h__block"
                                                                                                data-qa-name="heading"
                                                                                            >
                                                                                                New MOO Water Bottles
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                                            <div
                                                                                                className="pill u-color-white -small"
                                                                                                style={{
                                                                                                    backgroundColor: "#3D3935"
                                                                                                }}
                                                                                            >
                                                                                                NEW
                                                                                            </div>{" "}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Double-walled insulation. Durable
                                                                                        design. BPA and toxin free. The New MOO
                                                                                        Water Bottle is everything you want in a
                                                                                        water bottle – and nothing you don’t.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="https://beta.moo.com/products/ecomm-b2406e90-14c0-4c08-8a4a-2e4342982346/ecomm-b99bc481-fe81-4bab-8265-8a5bf978fd30"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Shop New MOO Water Bottles</span>
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
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/branded-merchandise"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All Branded Merchandise
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/notebooks-journals"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Notebooks
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-f76e3c72-f261-4311-9f81-6756a3248411/moo-71081d26-d11d-42d8-876c-1c090f6c6361"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        MOO Softcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-9f1ffc5b-f17e-4846-9a9b-6b4f5d223621/moo-29e8b030-f5cb-4117-aefc-422be9f94db8"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Tape Bound Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-d3de3609-0fc5-4b0b-926f-c2b9dabb3201/ecomm-ef2d2f1d-8626-4c3e-a533-24e9f061a265"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Hardcover Notebooks
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-4ec527cf-781e-43f3-9e57-2a7d0b4d72b9/ecomm-7daf2d82-af78-4a04-a0d7-e81f8993167f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Softcover Journals
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-1eaad284-b239-45cc-90f2-7df113e3a687/moo-7522b7d2-6b57-4cd8-95ee-ef6f11914d4e"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">MOO Notepads</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/planners"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Planners
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/moo-811b3835-6559-418e-b95f-889502baf04d/moo-f2de89be-c4dc-4ddb-8588-eb113402256b"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                Softcover Planners
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://products.beta.moo.com/products/ecomm-2e34c099-9365-4411-b93e-b58cd2da46a7/ecomm-2aea09fb-928d-4102-b058-3f52559455a3"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Perpetual Planners
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/drinkware"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Drinkware
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-b2406e90-14c0-4c08-8a4a-2e4342982346/ecomm-b99bc481-fe81-4bab-8265-8a5bf978fd30"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                New MOO Water Bottles
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-55a03980-c031-4186-98c9-4cefc26e1d30/ecomm-459603d9-70a0-46de-b8b5-9150fdfe5c4e"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div className="media-flex media-flex--small media-flex--rev">
                                                                        <div className="media-flex__body">
                                                                            <div data-qa-name="heading">
                                                                                Insulated Mugs
                                                                            </div>
                                                                        </div>
                                                                        <div className="media-flex__img u-lineHeight-0">
                                                                            <div className="pill u-backgroundColor-recommended -small">
                                                                                NEW
                                                                            </div>{" "}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-a3cb86e9-f49d-4783-b78a-eb5f3e403040/ecomm-32349e8b-f1ea-4980-b139-5a6c5c113329"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Large Insulated Water Bottles
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-c6d05753-3281-44a3-8208-32e31bf5599a/moo-b523ddd1-bf01-4d9e-b7f3-87c557ca194f"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Insulated Tumblers
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="https://beta.moo.com/products/ecomm-58ad334f-fe29-43b4-8998-7602e9e5e3e5/ecomm-4f20c584-7dfc-4181-b089-0839257c1381"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Original MOO Water Bottles
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/drinkware/moo-water-bottle"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Original Non-Custom MOO Water Bottles
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="https://products.beta.moo.com/products/ecomm-bb33d39d-7d7b-47a1-82cf-eddfb4afee58/ecomm-1fa2d91f-66c8-455c-8eb1-30ef9a6d50de"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            MOO Twist Pens
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/last-chance-to-buy"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Last Chance to Buy
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/bundles"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            BUNDLES: Save up to 20%*
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-printing-services/design-services"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Advanced Design Services
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === 'Business-Services' ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Business-Services")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Business-Services")}
                                                >
                                                    Business Services
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === 'Business-Services' ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/business-printing-services/reseller-print-solutions"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/.imaging/scale/dam/1d4582f5-420d-4744-8b9a-51f67413a6d3/0198WF-TR-752x564-resellers-subscription.jpg, /dam/jcr:6d5fe142-6481-46eb-a6e6-798a8b8b9538/0198WF-TR-752x564-resellers-subscription.jpg 2x"
                                                                                                    alt="Reseller Plan"
                                                                                                    title="Reseller Plan"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/.imaging/scale/dam/1d4582f5-420d-4744-8b9a-51f67413a6d3/0198WF-TR-752x564-resellers-subscription.jpg, /dam/jcr:6d5fe142-6481-46eb-a6e6-798a8b8b9538/0198WF-TR-752x564-resellers-subscription.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Reseller Plan
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Reseller Plan
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Our Reseller plan is made just for you.
                                                                                        With more custom options, discounts on
                                                                                        everything you order and dedicated
                                                                                        proofing support.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/business-printing-services/reseller-print-solutions"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Find out more</span>&nbsp;
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/business-printing-services"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:10284c52-0ff7-4227-b406-b02fc60a7012/0198WF-TR-752x376-managed-services-platform.jpg, /dam/jcr:10284c52-0ff7-4227-b406-b02fc60a7012/0198WF-TR-752x376-managed-services-platform.jpg 2x"
                                                                                                    alt="Our (revamped) plans"
                                                                                                    title="Our (revamped) plans"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:10284c52-0ff7-4227-b406-b02fc60a7012/0198WF-TR-752x376-managed-services-platform.jpg, /dam/jcr:10284c52-0ff7-4227-b406-b02fc60a7012/0198WF-TR-752x376-managed-services-platform.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Our (revamped) plans
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Our (revamped) plans
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Premium print is just the start. Our new
                                                                                        plans help all types of business get
                                                                                        more support, services and savings from
                                                                                        MOO.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/business-printing-services"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Find out more</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-printing-services"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Business Services
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-printing-services/comparison"
                                                            className="nav-main__link -l2
                                               is-parent
                                              js-nav__link--l2"
                                                        >
                                                            Our plans
                                                            <div className="nav-chevron">
                                                                <div className="icon__morph -chevron-down">
                                                                    <div className="icon__morph-block -m1" />
                                                                    <div className="icon__morph-block -m2" />
                                                                    <div className="icon__morph-block -m3" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <ul
                                                            className="nav-main__list -l3 js-nav__list--l3 js-to-show"
                                                            data-component-name="header-navigation-level-3"
                                                        >
                                                            <li className="nav-main__item -l3 -divider u-display-none@nav-desktop-view                                                         ">
                                                                <a
                                                                    href="/us/business-printing-services/comparison"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Our plans</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-printing-services/small-business-print-solutions"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Business Boost</div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-printing-services/corporate-print-solutions"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">
                                                                        Business Advanced
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="nav-main__item -l3                                                         ">
                                                                <a
                                                                    href="/us/business-printing-services/reseller-print-solutions"
                                                                    className="nav-main__link -l3 js-nav__link--l3"
                                                                >
                                                                    <div data-qa-name="heading">Reseller</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/business-printing-services/design-services"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Design Services
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/business-printing-services/business-form-page"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Get in touch
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/partner"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Partner with MOO
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/partner/realestate"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Real Estate Printing
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 -divider js-nav__item--l2">
                                                        <a
                                                            href="/us/eco"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Eco paper range
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://www.moo.com/blog/category/business-tips"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Business Tips
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a
                                                    href="https://www.moo.com/blog/"
                                                    className="nav-main__link -l1 js-nav__link--l1
                                  "
                                                >
                                                    The MOO Blog
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                            </li>
                                            <li className="nav-main__item -l1 js-nav__item--l1">
                                                <a

                                                    className={`nav-main__link -l1 js-nav__link--l1
                                   is-parent ${isOpen === "Help-FAQs" ? "is-selected" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter("Help-FAQs")}
                                                    onMouseLeave={handleMouseLeave}
                                                    onClick={() => handleClick("Help-FAQs")}
                                                >
                                                    Help &amp; FAQs
                                                    <div className="nav-chevron">
                                                        <div className="icon__morph -chevron-down">
                                                            <div className="icon__morph-block -m1" />
                                                            <div className="icon__morph-block -m2" />
                                                            <div className="icon__morph-block -m3" />
                                                        </div>
                                                    </div>
                                                    <div className="animated-underline__wrap" />
                                                </a>
                                                <ul
                                                    className={`nav-main__list -l2 js-nav__list--l2 ${isOpen === "Help-FAQs" ? "is-visible" : ""}`}
                                                    data-component-name="header-navigation-level-2"
                                                >
                                                    <div className="u-float-right u-1/2 u-display-none@until-large u-padding-horizontal-m u-paddingTop-xs">
                                                        <div className="layout layout--row-spacing u-display-flex">
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="https://www.moo.com/blog/category/case-studies"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:71bf795a-a4f7-4cdb-b7ac-256e21f69e10/use-case-navigation-help-FAQs0.jpg, /dam/jcr:71bf795a-a4f7-4cdb-b7ac-256e21f69e10/use-case-navigation-help-FAQs0.jpg 2x"
                                                                                                    alt="Case Studies"
                                                                                                    title="Case Studies"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:71bf795a-a4f7-4cdb-b7ac-256e21f69e10/use-case-navigation-help-FAQs0.jpg, /dam/jcr:71bf795a-a4f7-4cdb-b7ac-256e21f69e10/use-case-navigation-help-FAQs0.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Case Studies
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Case Studies
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        These businesses unleashed the power of
                                                                                        custom print and branded merch. Uncover
                                                                                        the success stories of brands that grew
                                                                                        with MOO.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="https://www.moo.com/blog/category/case-studies"
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
                                                            <div className="layout__item u-display-flex u-1/2">
                                                                <div
                                                                    className="tile -borderless"
                                                                    data-qa-name="tile-nav-slot"
                                                                >
                                                                    <div className="tile__body" data-qa-name="body">
                                                                        <div className="tile__media-wrap">
                                                                            <div className="tile__ratio-box u-ratio-2:1">
                                                                                <div className="tile__ratio-box-inner -nav-slot">
                                                                                    <a
                                                                                        href="/us/sample-packs"
                                                                                        className="tile__image-link js-tile-image-link js-ga4-click-track"
                                                                                        data-component-text=""
                                                                                    >
                                                                                        <figure className="tile__figure u-margin-0">
                                                                                            <picture>
                                                                                                <source
                                                                                                    media="only screen and (max-width: 64em)"
                                                                                                    srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                />
                                                                                                <img
                                                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                                                    data-srcset="/dam/jcr:e6c89673-fe4f-45d2-b9dd-0668223569b3/0836WF-TR-752x376-Business-Cards-Sample-Pack0.jpg, /dam/jcr:e6c89673-fe4f-45d2-b9dd-0668223569b3/0836WF-TR-752x376-Business-Cards-Sample-Pack0.jpg 2x"
                                                                                                    alt="Sample packs for all"
                                                                                                    title="Sample packs for all"
                                                                                                    className="tile__image ls-is-cached lazyloaded"
                                                                                                    data-qa-name="image"
                                                                                                    srcSet="/dam/jcr:e6c89673-fe4f-45d2-b9dd-0668223569b3/0836WF-TR-752x376-Business-Cards-Sample-Pack0.jpg, /dam/jcr:e6c89673-fe4f-45d2-b9dd-0668223569b3/0836WF-TR-752x376-Business-Cards-Sample-Pack0.jpg 2x"
                                                                                                />
                                                                                            </picture>
                                                                                            <figcaption className="u-visually-hidden">
                                                                                                Sample packs for all
                                                                                            </figcaption>
                                                                                        </figure>
                                                                                    </a>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="tile__text-wrap"
                                                                            data-qa-name="text-wrap"
                                                                        >
                                                                            <div
                                                                                className="tile__text-wrap-inner"
                                                                                data-qa-name="text-wrap-inner"
                                                                            >
                                                                                <div className="h__block u-marginBottom-xxxs">
                                                                                    <div
                                                                                        className="h__block"
                                                                                        data-qa-name="heading"
                                                                                    >
                                                                                        Sample packs for all
                                                                                    </div>
                                                                                </div>
                                                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                                                    <p>
                                                                                        Get a feel for MOO with a free Business
                                                                                        Card sample pack. Touch the premium
                                                                                        paper, marvel at the eye-catching
                                                                                        finishes and find what works for you.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="/us/sample-packs"
                                                                        className="js-ga4-click-track"
                                                                        data-qa-name="footer-link"
                                                                    >
                                                                        <div
                                                                            className="tile__footer cta-link__wrap"
                                                                            data-qa-name="footer"
                                                                        >
                                                                            <div className="cta-link -has-chevron">
                                                                                <span className="cta-link__text">
                                                                                    <span>Order yours</span>&nbsp;
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
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://support.moo.com/hc/en-us"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            All FAQs
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/help/faq/cost-calculator.html"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Pricing &amp; turnaround times
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://support.moo.com/hc/en-us/sections/200572464"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Artwork templates &amp; guidelines
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/sample-packs/free-sample-business-cards"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Order a sample
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://support.moo.com/hc/en-us/sections/200585404"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Where's my order?
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="https://support.moo.com/hc/en-us/articles/204288414"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Contact MOO
                                                        </a>
                                                    </li>
                                                    <li className="nav-main__item -l2 js-nav__item--l2">
                                                        <a
                                                            href="/us/partner"
                                                            className="nav-main__link -l2
                                              
                                              js-nav__link--l2"
                                                        >
                                                            Partner with MOO
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </span>
                                    </ul>
                                </nav>
                            </div>
                            <div className="overlay-screen -nav-tools js-nav__overlay-screen--tools" />
                            <div className="nav-main__tools-wrap">
                                <nav className="nav-main__nav -tools js-nav__nav--tools has-fouc">
                                    <ul
                                        className="nav-main__list"
                                        data-component-name="supernav-level-1"
                                    >
                                        <li className="nav-main__item -l1 -tools -user-greeting u-display-none js-header-user-greeting">
                                            <div className="nav-main__link -l1 -tools">
                                                Hello{" "}
                                                <span
                                                    className="js-supernav-user-greeting-first-name"
                                                    data-di-mask=""
                                                />
                                            </div>
                                        </li>
                                        <li className="nav-main__item -l1 -tools -country js-nav__item--country">
                                            <a

                                                className={`nav-main__link -l1 -tools -country is-parent js-nav__link--country ${isOpenMenu === "languages" ? "is-selected" : ""}`}
                                                data-component-name="supernav-level-1-country-selector"
                                                onMouseEnter={() => handleMouseEnters("languages")}
                                                onMouseLeave={handleMouseLeaves}
                                                onClick={() => handleClicks("languages")}
                                            >
                                                <svg
                                                    viewBox="0 0 17 12"
                                                    className="svg-icon -inline u-marginRight-xxxxs"
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
                                                <span>United States (English)</span>
                                            </a>
                                            <ul
                                                id="country-selector__list-l1"
                                                className={`nav-main__list -l2 -tools js-nav__list--l2 js-nav__list--country ${isOpenMenu === "languages" ? "is-visible" : ""}`}
                                                data-component-name="supernav-level-2-country-selector"
                                            >
                                                <div className="tooltip__caret-wrap">
                                                    <div className="tooltip__caret" />
                                                </div>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/au/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Australia
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/ca/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Canada
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/eu/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="nofollow"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Europe
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/fr/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                France
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/de/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Germany | Deutschland
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/it/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Italy | Italia
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/nl/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="nofollow"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Netherlands | Nederland
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/es/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                Spain | España
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/uk/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                United Kingdom
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div className="media-flex__body">
                                                                <div className="media-flex media-flex--small media-flex--rev media-flex--center">
                                                                    <div
                                                                        className="media-flex__body u-color-dark"
                                                                        data-qa-name="country-label"
                                                                    >
                                                                        United States (English)
                                                                    </div>
                                                                    <div className="media-flex__img u-lineHeight-0">
                                                                        <svg
                                                                            viewBox="0 0 48 48"
                                                                            className="svg-icon -small u-color-moogreen"
                                                                            role="presentation"
                                                                            aria-hidden="true"
                                                                            data-icon-id="ui--tick-xbold"
                                                                        >
                                                                            <path d="M20.399 39.353L5.111 24.065l2.828-2.829 12.46 12.46L42.12 11.975l2.829 2.828-24.55 24.55z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/es-us/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                United States (Español)
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/fr-us/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-nav-country__link--l2"
                                                        rel="alternate"
                                                    >
                                                        <div className="media-flex media-flex--small media-flex--center">
                                                            <div className="media-flex__img u-lineHeight-0">
                                                                <svg
                                                                    viewBox="0 0 17 12"
                                                                    className="svg-icon"
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
                                                            </div>
                                                            <div
                                                                className="media-flex__body"
                                                                data-qa-name="country-label"
                                                            >
                                                                United States (Français)
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-main__item -l1 -tools">
                                            <a
                                                href="/home/sample-packs"
                                                className="nav-main__link -l1 -tools -basic-link js-ga4-click-track"
                                            >
                                                Free Sample Packs
                                            </a>{" "}
                                        </li>
                                        <li className="nav-main__item -l1 -tools js-nav__item--account">
                                            <a
                                                onMouseEnter={() => handleMouseEnters("Account")}
                                                onMouseLeave={handleMouseLeaves}
                                                onClick={() => handleClicks("Account")}
                                                className={`nav-main__link -l1 -tools -account is-parent js-nav__link--account ${isOpenMenu === "Account" ? "is-selected" : ""}`}
                                                data-component-name="supernav-level-1-account"
                                            >
                                                Account
                                                <div className="nav-chevron">
                                                    <div className="icon__morph -chevron-down">
                                                        <div className="icon__morph-block -m1" />
                                                        <div className="icon__morph-block -m2" />
                                                        <div className="icon__morph-block -m3" />
                                                    </div>
                                                </div>
                                            </a>
                                            <ul
                                                className={`nav-main__list -l2 -tools js-nav__list--l2 js-nav__list--account ${isOpenMenu === "Account" ? "is-visible" : ""}`}
                                                data-component-name="supernav-level-2-account"
                                            >
                                                <div className="tooltip__caret-wrap">
                                                    <div className="tooltip__caret" />
                                                </div>
                                                <span className="js-hide-when-signed-in">
                                                    <li className="nav-main__item -l2 -divider js-header-sign-in">
                                                        <a
                                                            href="/us/account/signin.php"
                                                            className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                        >
                                                            Sign in
                                                        </a>
                                                    </li>
                                                </span>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/account/"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                    >
                                                        Overview
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/account/reorder.php"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                    >
                                                        Re-order
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/account/order-history.php"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                    >
                                                        Order History
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/account/unfinished-projects.php"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                    >
                                                        Saved projects
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/refer"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                        id="extole-header-placement"
                                                    >
                                                        Refer and Earn
                                                    </a>
                                                </li>
                                                <li className="nav-main__item -l2">
                                                    <a
                                                        href="/us/account/gift-cards.php"
                                                        className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                    >
                                                        Redeem Gift Cards
                                                    </a>
                                                </li>
                                                <span className="u-display-none js-show-when-signed-in">
                                                    <li className="nav-main__item -l2 -divider-above">
                                                        <a
                                                            href="/us/account/signout.php"
                                                            className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                        >
                                                            Sign out
                                                        </a>
                                                    </li>
                                                </span>
                                                <span className="js-hide-when-signed-in">
                                                    <li className="nav-main__item -l2 -divider-above js-header-user-remembered u-display-none">
                                                        <a
                                                            href="/us/account/signout.php"
                                                            className="nav-main__link -l2 -supernav-dropdown js-super-nav__link--l2"
                                                        >
                                                            Not{" "}
                                                            <span
                                                                className="js-supernav-user-remembered-first-name"
                                                                data-di-mask=""
                                                            />
                                                            ?
                                                        </a>
                                                    </li>
                                                </span>
                                            </ul>
                                        </li>
                                        <li
                                            className="nav-main__item -l1 -tools -sign-in js-header-sign-in"
                                            data-component-name="supernav-level-1-sign-in"
                                        >
                                            <a
                                                href="/us/account/signin.php"
                                                className="nav-main__link -l1 -tools -sign-in -basic-link js-header-sign-in-primary-link"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                        <li className="nav-main__item -l1 -tools">
                                            <a
                                                href="/us/cart/"
                                                className="nav-main__link -l1 -tools -cart js-nav__link--cart"
                                                data-component-name="supernav-level-1-cart"
                                            >
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="svg-icon -small -inline nav-main__cart-icon"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="ui--cart"
                                                >
                                                    <path d="M10.437 38.527a3.5 3.5 0 1 0 3.5-3.5 3.5 3.5 0 0 0-3.5 3.5zm5 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm16.255 0a3.5 3.5 0 1 0 3.5-3.5 3.5 3.5 0 0 0-3.5 3.5zm5 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zM10.1 32.655h28.852l3.365-20.87H8.762L7.339 2.96H0v2h5.636zm29.87-18.87l-2.721 16.87H11.8l-2.716-16.87z" />
                                                </svg>{" "}
                                                <span>Cart</span>
                                                <span className="nav-main__cart-num">
                                                    {" "}
                                                    (<span className="js-cart-count">0</span>)
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="search js-search" data-component-name="search">
                                    <form
                                        id="search"
                                        method="GET"
                                        acceptCharset="UTF-8"
                                        action="/us/search"
                                    >
                                        <div className="search__field-wrap">
                                            <input
                                                className="search__input js-search-input"
                                                type="search"
                                                name="query"
                                                id="query"
                                                placeholder="Search"
                                                autoComplete="off"
                                                required=""
                                            />
                                            <button
                                                className="search__btn u-padding-0 js-search-btn"
                                                disabled=""
                                            >
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    className="svg-icon -small"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    data-icon-id="ui--search"
                                                >
                                                    <path d="M46.076 44.662L33 31.59A15.93 15.93 0 1 0 31.59 33l13.072 13.076zM7.239 21.112a13.873 13.873 0 1 1 13.873 13.873A13.889 13.889 0 0 1 7.239 21.112z" />
                                                </svg>{" "}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="header__nav-toggle js-nav-toggle"
                                data-component-name="close-menu-icon"
                            >
                                <button type="button">
                                    <svg
                                        viewBox="0 0 48 48"
                                        className="svg-icon -medium"
                                        role="presentation"
                                        aria-hidden="true"
                                        data-icon-id="ui--close-xbold"
                                    >
                                        <path d="M39.64 10.79L36.772 8 24 21.131 11.228 8 8.36 10.79 21.21 24 8.36 37.21 11.228 40 24 26.869 36.772 40l2.868-2.79L26.79 24l12.85-13.21z" />
                                    </svg>{" "}
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="header__spacer js-header-spacer" />
                </div>
            </div>
        </div>




        <section
            className="marketing-banner band u-padding-0"
            style={{ backgroundColor: "#00AC73" }}
            data-module-name="marketing-banner"
            data-module-location="header"
        >
            <a href="/us/bundles" className="js-ga4-click-track">
                <div className="wrapper u-textAlign-center">
                    <div className="media marketing-banner__media-obj u-textAlign-left">
                        <div className="media__img marketing-banner__media-img">
                            <figure className="u-margin-0">
                                <picture>
                                    <source
                                        media="only screen and (min-width: 40.0625em)"
                                        srcSet="/.imaging/scale-png/dam/7a59536d-456e-4058-8ee2-beb184c8cd39/0821WF-MB-240x120.png, /dam/jcr:4f2479ec-10f6-4527-bcff-93afae5374f7/0821WF-MB-240x120.png 2x"
                                    />
                                    <img
                                        src="/.imaging/scale-png/dam/4a95e642-040a-44bd-be3c-2155f79780df/0821WF-MB-640x120-US-00AC73.png"
                                        srcSet="/.imaging/scale-png/dam/4a95e642-040a-44bd-be3c-2155f79780df/0821WF-MB-640x120-US-00AC73.png, /dam/jcr:a72d0bf5-9181-45f4-b64e-5fbf60c12b70/0821WF-MB-640x120-US-00AC73.png 2x"
                                        alt=""
                                        className="marketing-banner__image"
                                    />
                                </picture>
                            </figure>
                        </div>
                        <div className="media__body marketing-banner__media-body">
                            <p className="marketing-banner__text -color-light">
                                Save up to 20% with code BUNDLE when you order two or more branded
                                merchandise designs*
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </section>




    </>
}

export default header;