const blog = () => {
    return <>
        <div id="page-content">
            <main className="main-content" id="content">
                <div className="wrapper page-content">
                    <div className="grid-x">
                        <div className="cell text-center">
                            <div className="page-content__width-limiter">
                                <h1>
                                    <a href="https://www.moo.com/blog/">The Drop </a>
                                </h1>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="filters-header">
                                <ul className="filters-header__list">
                                    <li className="filters-header__item">
                                        <button
                                            data-toggle="js-filters-header-categories"
                                            className="filters-header__button filters-header__button--icon-dropdown"
                                            aria-expanded="false"
                                            aria-controls="js-filters-header-categories"
                                        >
                                            Categories{" "}
                                        </button>
                                    </li>
                                    <li className="filters-header__item">
                                        <button
                                            data-toggle="js-filters-header-search"
                                            className="filters-header__button filters-header__button--icon-search"
                                            aria-expanded="false"
                                            aria-controls="js-filters-header-search"
                                        >
                                            Search{" "}
                                        </button>
                                    </li>
                                </ul>
                                <div className="filters-header__wrapper">
                                    <div
                                        className="filters-header__dropdown"
                                        id="js-filters-header-categories"
                                        data-toggler=".filters-header__dropdown--active"
                                        data-filters-header__dropdown--active="0vmpaz-filters-header__dropdown--active"
                                    >
                                        <nav className="post-filters">
                                            <ul id="menu-blog-menu" className="post-filters__list">
                                                <li
                                                    id="menu-item-14291"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14281 current_page_item menu-item-14291 post-filters__item"
                                                >
                                                    <a
                                                        href="https://www.moo.com/blog/"
                                                        aria-current="page"
                                                        className="post-filters__link"
                                                    >
                                                        Blog Home
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-26273"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26273 post-filters__item"
                                                >
                                                    <a
                                                        href="https://www.moo.com/blog/category/branding"
                                                        className="post-filters__link"
                                                    >
                                                        Branding
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-26274"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26274 post-filters__item"
                                                >
                                                    <a
                                                        href="https://www.moo.com/blog/category/inside-moo"
                                                        className="post-filters__link"
                                                    >
                                                        Inside MOO
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-28866"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28866 post-filters__item"
                                                >
                                                    <a
                                                        href="https://www.moo.com/blog/category/case-studies"
                                                        className="post-filters__link"
                                                    >
                                                        Case Studies
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-26276"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26276 post-filters__item"
                                                >
                                                    <a
                                                        href="https://www.moo.com/blog/category/inspiration"
                                                        className="post-filters__link"
                                                    >
                                                        Inspiration
                                                    </a>
                                                </li>
                                            </ul>{" "}
                                        </nav>
                                    </div>
                                    <div
                                        className="filters-header__dropdown"
                                        id="js-filters-header-search"
                                        data-toggler=".filters-header__dropdown--active"
                                        data-filters-header__dropdown--active="uo8ssq-filters-header__dropdown--active"
                                    >
                                        <form
                                            className="search-form"
                                            action="https://www.moo.com/blog/"
                                        >
                                            <label className="search-form__input-wrapper">
                                                <span className="screen-reader-text">
                                                    Search this site:{" "}
                                                </span>
                                                <input
                                                    className="search-form__input"
                                                    type="text"
                                                    name="s"
                                                    placeholder="Search..."
                                                    defaultValue=""
                                                    autoComplete="off"
                                                />
                                            </label>
                                            <button className="search-form__button" type="submit">
                                                <span className="screen-reader-text">Search </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    width={17}
                                                    data-inject-url="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-search-2024.svg"
                                                    className="inject-svg search-form__icon"
                                                >
                                                    <g
                                                        stroke="#07120c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit={10}
                                                        strokeWidth={2}
                                                    >
                                                        <path d="m15.1667 14.6667-2.6667-2.6667" />
                                                        <path d="m7.16665 12c2.94555 0 5.33335-2.3878 5.33335-5.33332s-2.3878-5.33334-5.33335-5.33334c-2.94552 0-5.33334 2.38782-5.33334 5.33334s2.38782 5.33332 5.33334 5.33332z" />
                                                        <path d="m4.5 6.66667c0-.70725.28095-1.38552.78105-1.88562s1.17837-.78105 1.88562-.78105" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="cell cell--full-width">
                            <section
                                className="section section--under-filters splide splide--slide splide--ltr splide--draggable is-active is-initialized"
                                aria-label="Top Posts"
                                id="splide01"
                                aria-roledescription="carousel"
                            >
                                <div className="splide__arrows splide__arrows--ltr">
                                    <button
                                        className="splide__arrow splide__arrow--prev"
                                        type="button"
                                        disabled=""
                                        aria-label="Previous slide"
                                        aria-controls="splide01-track"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 40 40"
                                            width={40}
                                            height={40}
                                            focusable="false"
                                        >
                                            <path d="m15 10 10 10-10 10" />
                                        </svg>
                                    </button>
                                    <button
                                        className="splide__arrow splide__arrow--next"
                                        type="button"
                                        aria-label="Next slide"
                                        aria-controls="splide01-track"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 40 40"
                                            width={40}
                                            height={40}
                                            focusable="false"
                                        >
                                            <path d="m15 10 10 10-10 10" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
                                    id="splide01-track"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                    aria-live="polite"
                                    aria-relevant="additions"
                                >
                                    <ul
                                        className="splide__list"
                                        id="splide01-list"
                                        role="presentation"
                                        style={{ transform: "translateX(0px)" }}
                                    >
                                        <li
                                            className="splide__slide is-active is-visible"
                                            id="splide01-slide01"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="1 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/b2b-trade-shows"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            fetchPriority="high"
                                                            width={673}
                                                            height={458}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/04/0662WF-April-May-Campaign-2024-Blog-Hero-1176x540-Events-To-Add-To-Your-Calendar-673x458.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Adobe Summit is one the main B2B trade shows to add to your calendar."
                                                            decoding="async"
                                                            srcSet="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/04/0662WF-April-May-Campaign-2024-Blog-Hero-1176x540-Events-To-Add-To-Your-Calendar-673x458.jpg 673w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/04/0662WF-April-May-Campaign-2024-Blog-Hero-1176x540-Events-To-Add-To-Your-Calendar-573x390.jpg 573w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/04/0662WF-April-May-Campaign-2024-Blog-Hero-1176x540-Events-To-Add-To-Your-Calendar-372x253.jpg 372w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/04/0662WF-April-May-Campaign-2024-Blog-Hero-1176x540-Events-To-Add-To-Your-Calendar-272x185.jpg 272w"
                                                            sizes="(max-width: 673px) 100vw, 673px"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                Ten of the best B2B trade shows to attend in 2025
                                                                and beyond{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>
                                                                    Discover ten of the best B2B trade shows this
                                                                    year.{" "}
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">March 11, 2025 </time>• 4 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide is-next"
                                            id="splide01-slide02"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="2 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/sell-your-brand"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            fetchPriority="high"
                                                            width={673}
                                                            height={458}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-673x458.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="A person holding MOO business cards and a postcard"
                                                            decoding="async"
                                                            srcSet="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-673x458.jpg 673w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-573x390.jpg 573w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-372x253.jpg 372w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-272x185.jpg 272w"
                                                            sizes="(max-width: 673px) 100vw, 673px"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                How to sell your brand in 30 seconds{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>
                                                                    Move people through a brand journey with the right
                                                                    pitch, print, and merch.
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">March 13, 2025 </time>• 3 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide"
                                            id="splide01-slide03"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="3 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/eco-friendly-office"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            fetchPriority="high"
                                                            width={673}
                                                            height={458}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Go-Green-Together-1-673x458.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt=""
                                                            decoding="async"
                                                            srcSet="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Go-Green-Together-1-673x458.jpg 673w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Go-Green-Together-1-573x390.jpg 573w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Go-Green-Together-1-372x253.jpg 372w, https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:auto/h:auto/q:90/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Go-Green-Together-1-272x185.jpg 272w"
                                                            sizes="(max-width: 673px) 100vw, 673px"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                How to create an eco-friendly office: building a
                                                                greener workplace together{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>
                                                                    Make sustainable practices part of your brand.
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">March 5, 2025 </time>• 3 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide"
                                            id="splide01-slide04"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="4 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/best-business-cards-trends"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/WF-1723500_Header-1176x540-1-673x458.jpg"
                                                            width={673}
                                                            height={458}
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20673%20458%22%20width%3D%22673%22%20height%3D%22458%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22673%22%20height%3D%22458%22%20fill%3D%22transparent%22%2F%3E%3C%2Fsvg%3E"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="All the best business cards in 2025."
                                                            decoding="async"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                What’s hot right now: design the best Business Cards
                                                                in 2025{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>
                                                                    The latest trends for designing the best Business
                                                                    Cards this year.
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">February 4, 2025 </time>• 2 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide"
                                            id="splide01-slide05"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="5 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/postcards-for-direct-mail"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/01/0854WF-Blog-Hero-1176x540-Direct-Mail-673x458.jpg"
                                                            width={673}
                                                            height={458}
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20673%20458%22%20width%3D%22673%22%20height%3D%22458%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22673%22%20height%3D%22458%22%20fill%3D%22transparent%22%2F%3E%3C%2Fsvg%3E"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt=""
                                                            decoding="async"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                IRL marketing: unlock the power of Postcards for
                                                                direct mail&nbsp;{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>Old-school marketing is back.</p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">January 23, 2025 </time>• 3 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide"
                                            id="splide01-slide06"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="6 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/gamification"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0854WF-Blog-Hero-1176x540-Gamifying-Workplaces-673x458.jpg"
                                                            width={673}
                                                            height={458}
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20673%20458%22%20width%3D%22673%22%20height%3D%22458%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22673%22%20height%3D%22458%22%20fill%3D%22transparent%22%2F%3E%3C%2Fsvg%3E"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Gamify the workplace blog."
                                                            decoding="async"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                Work hard, play hard: gamification in the workplace{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>Let the games begin.</p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">February 10, 2025 </time>• 4 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li
                                            className="splide__slide"
                                            id="splide01-slide07"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="7 of 7"
                                            style={{ marginRight: 30, width: "calc(100% + 0px)" }}
                                            aria-hidden="true"
                                        >
                                            <a
                                                href="https://www.moo.com/blog/inspiration/new-starter-kits"
                                                className="tile"
                                                tabIndex={-1}
                                            >
                                                <div className="grid-x grid-margin-x grid-margin-y">
                                                    <div className="medium-6 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:673/h:458/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/11/0813WF-Blog-Hero-1176x540-New-Starter-Kit-673x458.jpg"
                                                            width={673}
                                                            height={458}
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20673%20458%22%20width%3D%22673%22%20height%3D%22458%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22673%22%20height%3D%22458%22%20fill%3D%22transparent%22%2F%3E%3C%2Fsvg%3E"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Products in a MOO new starter kit"
                                                            decoding="async"
                                                        />{" "}
                                                    </div>
                                                    <div className="medium-6 cell tile__content">
                                                        <div>
                                                            <div className="tile__post-type" aria-hidden="true">
                                                                <img
                                                                    className="tile__post-type-icon"
                                                                    src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt=""
                                                                />
                                                                Article{" "}
                                                            </div>
                                                            <h2 className="tile__title tile__title--larger">
                                                                New starter kits: your recruitment secret weapon{" "}
                                                            </h2>
                                                            <div
                                                                className="tile__text tile__text--larger"
                                                                aria-hidden="true"
                                                            >
                                                                <p>
                                                                    New starter kits are the best way to make a great
                                                                    first impression.
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="tile__meta tile__meta--featured"
                                                                aria-hidden="true"
                                                            >
                                                                <div>
                                                                    <time dateTime="">December 5, 2024 </time>• 3 min
                                                                    read{" "}
                                                                </div>
                                                            </div>
                                                            <ul className="splide__pagination">
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page " />
                                                                </li>
                                                                <li role="presentation">
                                                                    <div className="splide__pagination__page is-active" />
                                                                </li>
                                                            </ul>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="cell">
                            <section className="section section--featured">
                                <header className="grid-x grid-margin-x">
                                    <div className="auto cell">
                                        <div className="section__header">
                                            <h2 className="section__title">Featured </h2>
                                        </div>
                                    </div>
                                </header>
                                <div className="grid-x grid-margin-x grid-margin-y--articles">
                                    <div className="medium-6 large-3 cell">
                                        <a
                                            href="https://www.moo.com/blog/inspiration/ballpoint-pens"
                                            className="tile"
                                        >
                                            <div className="grid-x grid-margin-x">
                                                <div className="small-12 cell">
                                                    <img
                                                        data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/09/0755WF-Blog-Hero-1176x540-Ballpoint-Pen-Is-For-Life-573x390.jpg"
                                                        width={573}
                                                        height={390}
                                                        src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/09/0755WF-Blog-Hero-1176x540-Ballpoint-Pen-Is-For-Life-573x390.jpg"
                                                        className="tile__image tile__image--mb wp-post-image"
                                                        alt="MOO's new Twist Pen in a variety of colours."
                                                        decoding="async"
                                                        data-opt-lazy-loaded="true"
                                                        data-opt-optimized-width={433}
                                                        data-opt-optimized-height={294}
                                                    />{" "}
                                                </div>
                                                <div className="small-12 cell">
                                                    <div className="tile__post-type" aria-hidden="true">
                                                        <img
                                                            className="tile__post-type-icon"
                                                            src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                        />
                                                        Article{" "}
                                                    </div>
                                                    <h2 className="tile__title">
                                                        How we reinvented the ballpoint pen (and created the
                                                        perfect gift){" "}
                                                    </h2>
                                                    <div className="tile__text" aria-hidden="true">
                                                        <p>
                                                            The MOO Twist Pen is beautiful, premium, and it makes
                                                            the perfect gift.
                                                        </p>
                                                    </div>
                                                    <div className="tile__meta" aria-hidden="true">
                                                        <time dateTime="">October 8, 2024 </time>• 2 min read{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="medium-6 large-3 cell">
                                        <a
                                            href="https://www.moo.com/blog/inspiration/how-to-build-a-challenger-team-in-2025"
                                            className="tile"
                                        >
                                            <div className="grid-x grid-margin-x">
                                                <div className="small-3 medium-12 cell">
                                                    <img
                                                        data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:272/h:185/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/0643-WF-March-blog-hero-272x185.png"
                                                        width={272}
                                                        height={185}
                                                        src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/0643-WF-March-blog-hero-272x185.png"
                                                        className="tile__image tile__image--mb wp-post-image"
                                                        alt="Person working on design ideas with a MOO Notebook."
                                                        decoding="async"
                                                        data-opt-lazy-loaded="true"
                                                        data-opt-optimized-width={433}
                                                        data-opt-optimized-height={294}
                                                    />{" "}
                                                </div>
                                                <div className="small-9 medium-12 cell">
                                                    <div className="tile__post-type" aria-hidden="true">
                                                        <img
                                                            className="tile__post-type-icon"
                                                            src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                        />
                                                        Article{" "}
                                                    </div>
                                                    <h2 className="tile__title">
                                                        How to build a challenger team in 2025{" "}
                                                    </h2>
                                                    <div className="tile__text" aria-hidden="true">
                                                        <p>
                                                            Learn how to create a team that’s ready to handle
                                                            whatever 2025 throws at them.
                                                        </p>
                                                    </div>
                                                    <div className="tile__meta" aria-hidden="true">
                                                        <time dateTime="">October 21, 2024 </time>• 3 min read{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="medium-6 large-3 cell">
                                        <a
                                            href="https://www.moo.com/blog/inspiration/10-inspirational-fonts-for-printing-business-cards"
                                            className="tile"
                                        >
                                            <div className="grid-x grid-margin-x">
                                                <div className="small-3 medium-12 cell">
                                                    <img
                                                        data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:272/h:185/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/0650WF-Best-BC-font-272x185.png"
                                                        width={272}
                                                        height={185}
                                                        src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/0650WF-Best-BC-font-272x185.png"
                                                        className="tile__image tile__image--mb wp-post-image"
                                                        alt="Best business cards fonts"
                                                        decoding="async"
                                                        data-opt-lazy-loaded="true"
                                                        data-opt-optimized-width={433}
                                                        data-opt-optimized-height={294}
                                                    />{" "}
                                                </div>
                                                <div className="small-9 medium-12 cell">
                                                    <div className="tile__post-type" aria-hidden="true">
                                                        <img
                                                            className="tile__post-type-icon"
                                                            src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                        />
                                                        Article{" "}
                                                    </div>
                                                    <h2 className="tile__title">
                                                        10 best business card fonts{" "}
                                                    </h2>
                                                    <div className="tile__text" aria-hidden="true">
                                                        <p>
                                                            Head-turning fonts that command attention for your
                                                            brand.
                                                        </p>
                                                    </div>
                                                    <div className="tile__meta" aria-hidden="true">
                                                        <time dateTime="">December 19, 2024 </time>• 6 min read{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="medium-6 large-3 cell">
                                        <a
                                            href="https://www.moo.com/blog/inside-moo/why-you-need-a-moo-designer"
                                            className="tile"
                                        >
                                            <div className="grid-x grid-margin-x">
                                                <div className="small-3 medium-12 cell">
                                                    <img
                                                        data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:272/h:185/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/07/0662WF-August-2-2024-Blog-Blog-Hero-1176x540-1-272x185.jpg"
                                                        width={272}
                                                        height={185}
                                                        src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/07/0662WF-August-2-2024-Blog-Blog-Hero-1176x540-1-272x185.jpg"
                                                        className="tile__image tile__image--mb wp-post-image"
                                                        alt=""
                                                        decoding="async"
                                                        data-opt-lazy-loaded="true"
                                                        data-opt-optimized-width={433}
                                                        data-opt-optimized-height={294}
                                                    />{" "}
                                                </div>
                                                <div className="small-9 medium-12 cell">
                                                    <div className="tile__post-type" aria-hidden="true">
                                                        <img
                                                            className="tile__post-type-icon"
                                                            src="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-article-2024-v2.svg"
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                        />
                                                        Article{" "}
                                                    </div>
                                                    <h2 className="tile__title">
                                                        Why you need a MOO designer in your life&nbsp;&nbsp;{" "}
                                                    </h2>
                                                    <div className="tile__text" aria-hidden="true">
                                                        <p>
                                                            Prepare to be wowed with design support from a MOO
                                                            business plan.{" "}
                                                        </p>
                                                    </div>
                                                    <div className="tile__meta" aria-hidden="true">
                                                        <time dateTime="">July 17, 2024 </time>• 3 min read{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div
                            id="aw-articles-block_c18ea5ce237043244e44711325613fb8"
                            className="block-aw-articles cell"
                        >
                            <div className="cell">
                                <section className="section">
                                    <header className="grid-x grid-margin-x">
                                        <div className="auto cell">
                                            <div className="section__header">
                                                <h2 className="section__title">Inspiration </h2>
                                            </div>
                                        </div>
                                        <div className="shrink cell">
                                            <a
                                                className="section__more"
                                                href="https://www.moo.com/blog/category/inspiration"
                                            >
                                                Read more{" "}
                                                <div className="screen-reader-text">Inspiration </div>
                                            </a>
                                        </div>
                                    </header>
                                    <div className="grid-x grid-margin-x grid-margin-y--articles">
                                        <div className="medium-6 cell">
                                            <a
                                                href="https://www.moo.com/blog/inspiration/sell-your-brand"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-573x390.jpg"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/0865WF-Blog-Hero-1176x540-Sell-Your-Brand-573x390.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="A person holding MOO business cards and a postcard"
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={433}
                                                            data-opt-optimized-height={294}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-12 cell">
                                                        <h2 className="tile__title">
                                                            How to sell your brand in 30 seconds{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                Move people through a brand journey with the right
                                                                pitch, print, and merch.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">March 13, 2025 </time>• 3 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-6 cell">
                                            <a
                                                href="https://www.moo.com/blog/inspiration/brochure-size-guide"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/03/0865WF-Blog-Hero-1176x540-Brochures-Guide-573x390.jpg"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/03/0865WF-Blog-Hero-1176x540-Brochures-Guide-573x390.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Standard brochure sizes."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={433}
                                                            data-opt-optimized-height={294}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            The ultimate guide to Brochure sizes{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                From bi-fold to tri-fold, the perfect format makes
                                                                your message land.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">March 12, 2025 </time>• 2 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            id="aw-articles-block_2bd3d5cb37325df3170459af67a487b9"
                            className="block-aw-articles cell"
                        >
                            <div className="cell">
                                <section className="section">
                                    <header className="grid-x grid-margin-x">
                                        <div className="auto cell">
                                            <div className="section__header">
                                                <h2 className="section__title">Branding </h2>
                                            </div>
                                        </div>
                                        <div className="shrink cell">
                                            <a
                                                className="section__more"
                                                href="https://www.moo.com/blog/category/branding"
                                            >
                                                Read more{" "}
                                                <div className="screen-reader-text">Branding </div>
                                            </a>
                                        </div>
                                    </header>
                                    <div className="grid-x grid-margin-x grid-margin-y--articles">
                                        <div className="medium-6 cell">
                                            <a
                                                href="https://www.moo.com/blog/branding/femme-lead"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/03/0833WF-MOO-Meets-Refresh-Blog-Hero-1176x540-Alexandra-Ciobotaru-573x390.jpg"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/03/0833WF-MOO-Meets-Refresh-Blog-Hero-1176x540-Alexandra-Ciobotaru-573x390.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Alexandra MOO Meets."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={433}
                                                            data-opt-optimized-height={294}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-12 cell">
                                                        <h2 className="tile__title">
                                                            Building a strong community and empowering women{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                Alexandra Ciobotaru on helping more women step into
                                                                leadership roles with confidence.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">March 11, 2025 </time>• 4 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-6 cell">
                                            <a
                                                href="https://www.moo.com/blog/branding/imperfect-design"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/The-beauty-of-imperfection-blog-hero_-573x390.png"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:433/h:294/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2025/02/The-beauty-of-imperfection-blog-hero_-573x390.png"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Uncoated BC"
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={433}
                                                            data-opt-optimized-height={294}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            The beauty of imperfection in the AI age{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>Discover why flaws make brands more relatable. </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">March 3, 2025 </time>• 5 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            id="aw-cta-block_49dd8aa13c8cc34b9f591f54854d6644"
                            className="block-aw-cta cell"
                        >
                            <div className="cta">
                                <h2 className="cta__title">Keep in touch </h2>
                                <div className="cta__text">
                                    <p>
                                        Get design inspiration, business tips and special offers
                                        straight to your inbox with our MOOsletter, out every two weeks.
                                    </p>
                                </div>
                                <a
                                    className="cta__button"
                                    href="https://bit.ly/2Bx8AAQ"
                                    target="_self"
                                >
                                    Sign me up{" "}
                                </a>
                            </div>
                        </div>
                        <div
                            id="aw-articles-block_4cb4b0219c846e7c167d69fabea3c17b"
                            className="block-aw-articles cell"
                        >
                            <div className="cell">
                                <section className="section">
                                    <header className="grid-x grid-margin-x">
                                        <div className="auto cell">
                                            <div className="section__header">
                                                <h2 className="section__title">Case Studies </h2>
                                            </div>
                                        </div>
                                        <div className="shrink cell">
                                            <a
                                                className="section__more"
                                                href="https://www.moo.com/blog/category/case-studies"
                                            >
                                                Read more{" "}
                                                <div className="screen-reader-text">Case Studies </div>
                                            </a>
                                        </div>
                                    </header>
                                    <div className="grid-x grid-margin-x grid-margin-y--articles">
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/case-studies/business-and-company-brochure-examples"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/BrochuresBlog_Header_1176x540-573x390.jpg"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/BrochuresBlog_Header_1176x540-573x390.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Business and Company Brochure Examples we've seen recently."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-12 cell">
                                                        <h2 className="tile__title">
                                                            Our favorite business and company Brochure
                                                            examples&nbsp;{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                Some of our favorite brochure designs our customers
                                                                are printing right now.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">December 4, 2024 </time>• 2 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/case-studies/femme-lead-case-study"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:372/h:253/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/11/Femme-Lead-blog-hero-1-372x253.png"
                                                            decoding="async"
                                                            width={372}
                                                            height={253}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/11/Femme-Lead-blog-hero-1-372x253.png"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Product ecosystem for Femme Lead."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            MOO x Femme Lead: merchandise with meaning{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>Create meaningful moments from the get-go.</p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">November 25, 2024 </time>• 3 min
                                                            read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/case-studies/ted-event-gifting"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:372/h:253/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/0814WF-Blog-Hero-1176x540-2-372x253.jpg"
                                                            decoding="async"
                                                            width={372}
                                                            height={253}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/0814WF-Blog-Hero-1176x540-2-372x253.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Person holding custom TED Notebook."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            MOO x TED: making events unforgettable, one gift at a
                                                            time{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>Gifting analog tools that spark ideas.</p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">November 2, 2024 </time>• 2 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            id="aw-articles-block_b97e38a2da966c047725ed7cb90a7d70"
                            className="block-aw-articles cell"
                        >
                            <div className="cell">
                                <section className="section">
                                    <header className="grid-x grid-margin-x">
                                        <div className="auto cell">
                                            <div className="section__header">
                                                <h2 className="section__title">Inside MOO </h2>
                                            </div>
                                        </div>
                                        <div className="shrink cell">
                                            <a
                                                className="section__more"
                                                href="https://www.moo.com/blog/category/inside-moo"
                                            >
                                                Read more{" "}
                                                <div className="screen-reader-text">Inside MOO </div>
                                            </a>
                                        </div>
                                    </header>
                                    <div className="grid-x grid-margin-x grid-margin-y--articles">
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/inside-moo/what-moosters-learnt-in-2024"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:573/h:390/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/0801WF-December-UK-What-MOOsters-learnt-in-2024-Blog-Hero-1176x540-Millie-573x390.jpg"
                                                            decoding="async"
                                                            width={573}
                                                            height={390}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/12/0801WF-December-UK-What-MOOsters-learnt-in-2024-Blog-Hero-1176x540-Millie-573x390.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Millie"
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-12 cell">
                                                        <h2 className="tile__title">
                                                            What MOOsters learnt in 2024&nbsp;{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                Discover what our biggest wins as a brand were this
                                                                year.{" "}
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">December 6, 2024 </time>• 5 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/inside-moo/quality-branded-merch"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:372/h:253/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/Quality-branded-merch-hero-372x253.png"
                                                            decoding="async"
                                                            width={372}
                                                            height={253}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/10/Quality-branded-merch-hero-372x253.png"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Quality branded merch from MOO, including a business card and stickers."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            MOO’s Chief People Officer on what makes quality
                                                            branded merch essential{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                How to support your employees with things they’ll
                                                                actually want to use.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">November 3, 2024 </time>• 3 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="medium-4 cell">
                                            <a
                                                href="https://www.moo.com/blog/inside-moo/how-to-customize-branded-merch"
                                                className="tile"
                                            >
                                                <div className="grid-x grid-margin-x">
                                                    <div className="small-3 medium-12 cell">
                                                        <img
                                                            data-opt-src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:372/h:253/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/09/0755WF-Blog-Hero-1176x540-1-New-Platform-372x253.jpg"
                                                            decoding="async"
                                                            width={372}
                                                            height={253}
                                                            src="https://mlyx2uz0zaat.i.optimole.com/cb:tThl.5002c/w:279/h:189/q:90/rt:fill/g:ce/f:best/https://www.moo.com/blog/wp-content/uploads/sites/2/2024/09/0755WF-Blog-Hero-1176x540-1-New-Platform-372x253.jpg"
                                                            className="tile__image tile__image--mb wp-post-image"
                                                            alt="Our new platform for custom branded merch being used on a phone."
                                                            data-opt-lazy-loaded="true"
                                                            data-opt-optimized-width={279}
                                                            data-opt-optimized-height={189}
                                                        />{" "}
                                                    </div>
                                                    <div className="small-9 medium-12 cell">
                                                        <h2 className="tile__title">
                                                            Q&amp;A: How to customize branded merch, with our Head
                                                            of UX{" "}
                                                        </h2>
                                                        <div className="tile__text" aria-hidden="true">
                                                            <p>
                                                                We sit down with our Head of UX for a
                                                                behind-the-scenes look at our new platform.
                                                            </p>
                                                        </div>
                                                        <div className="tile__meta" aria-hidden="true">
                                                            <time dateTime="">October 11, 2024 </time>• 3 min read{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            id="aw-social-block_7440bcd47bf58fcad3bf07881e8326ca"
                            className="block-aw-social cell"
                        >
                            <div className="cta cta--social">
                                <div className="grid-x grid-margin-x grid-center-x text-center">
                                    <div className="cell d-f grid-center-x">
                                        <ul className="socials">
                                            <li className="socials__item">
                                                <a
                                                    aria-label="instagram"
                                                    title="Instagram"
                                                    href="https://www.instagram.com/moo/"
                                                    className="socials__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        fill="none"
                                                        height={40}
                                                        viewBox="0 0 40 40"
                                                        width={40}
                                                        data-inject-url="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-social-instagram.svg"
                                                        decoding="async"
                                                        className="socials__icon inject-svg"
                                                    >
                                                        <clipPath id="a--inject-3">
                                                            <path d="m8 8h24v24h-24z" />
                                                        </clipPath>
                                                        <g clipPath="url(#a--inject-3)" fill="#07120c">
                                                            <path d="m20 10.1622c3.204 0 3.5836.012 4.8491.0698.7608.0089 1.5143.1487 2.2276.4135.5215.1921.9931.4989 1.38.8978.3989.3869.7057.8585.8978 1.38.2648.7133.4046 1.4668.4135 2.2276.0578 1.2655.0698 1.6451.0698 4.8491s-.012 3.5836-.0698 4.8491c-.0089.7608-.1487 1.5143-.4135 2.2276-.1997.5176-.5055.9877-.8978 1.38s-.8624.6981-1.38.8978c-.7133.2648-1.4668.4046-2.2276.4135-1.2655.0578-1.6451.0698-4.8491.0698s-3.5836-.012-4.8491-.0698c-.7608-.0089-1.5143-.1487-2.2276-.4135-.5215-.1921-.9931-.4989-1.38-.8978-.3989-.3869-.7057-.8585-.8978-1.38-.2648-.7133-.4046-1.4668-.4135-2.2276-.0578-1.2655-.0698-1.6451-.0698-4.8491s.012-3.5836.0698-4.8491c.0089-.7608.1487-1.5143.4135-2.2276.1921-.5215.4989-.9931.8978-1.38.3869-.3989.8585-.7057 1.38-.8978.7133-.2648 1.4668-.4046 2.2276-.4135 1.2655-.0578 1.6451-.0698 4.8491-.0698zm0-2.1622c-3.2585 0-3.6676.01418-4.9473.072-.9953.02057-1.9801.20904-2.9127.55745-.7979.30892-1.5225.7813-2.127 1.38685-.60461.6055-1.07587 1.3307-1.38355 2.1292-.34841.9326-.53688 1.9173-.55745 2.9127-.05782 1.2742-.072 1.6833-.072 4.9418s.01418 3.6676.072 4.9473c.02057.9953.20904 1.9801.55745 2.9127.30892.7979.7813 1.5225 1.38685 2.127.6055.6046 1.3307 1.0759 2.1292 1.3835.9326.3485 1.9173.5369 2.9127.5575 1.2742.0578 1.6833.072 4.9418.072s3.6676-.0142 4.9473-.072c.9953-.0206 1.9801-.209 2.9127-.5575.7979-.3089 1.5225-.7812 2.127-1.3868.6046-.6055 1.0759-1.3307 1.3835-2.1292.3485-.9326.5369-1.9173.5575-2.9127.0578-1.2742.072-1.6833.072-4.9418s-.0142-3.6676-.072-4.9473c-.0206-.9953-.209-1.9801-.5575-2.9127-.3089-.7979-.7812-1.5225-1.3868-2.127-.6055-.60461-1.3307-1.07587-2.1292-1.38355-.9326-.34841-1.9173-.53688-2.9127-.55745-1.2742-.05782-1.6833-.072-4.9418-.072z" />
                                                            <path d="m20 13.8374c-1.2189 0-2.4104.3614-3.4238 1.0386-1.0134.6771-1.8033 1.6396-2.2697 2.7656-.4664 1.1261-.5885 2.3652-.3507 3.5606s.8247 2.2935 1.6866 3.1553c.8618.8619 1.9599 1.4488 3.1553 1.6866s2.4345.1157 3.5606-.3507c1.126-.4664 2.0885-1.2563 2.7656-2.2697.6772-1.0135 1.0386-2.2049 1.0386-3.4238 0-1.6344-.6493-3.2018-1.805-4.3575s-2.7231-1.805-4.3575-1.805zm0 10.1629c-.7912 0-1.5647-.2346-2.2225-.6742-.6579-.4395-1.1706-1.0643-1.4734-1.7953-.3028-.7309-.382-1.5353-.2276-2.3113.1543-.776.5353-1.4888 1.0948-2.0482.5594-.5595 1.2722-.9405 2.0482-1.0948.776-.1544 1.5804-.0752 2.3113.2276.731.3028 1.3558.8155 1.7953 1.4734.4396.6578.6742 1.4313.6742 2.2224 0 1.061-.4215 2.0785-1.1717 2.8287s-1.7677 1.1717-2.8286 1.1717z" />
                                                            <path d="m26.4058 15.0341c.7953 0 1.44-.6448 1.44-1.44 0-.7953-.6447-1.44-1.44-1.44s-1.44.6447-1.44 1.44c0 .7952.6447 1.44 1.44 1.44z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="socials__item">
                                                <a
                                                    aria-label="facebook"
                                                    title="Facebook"
                                                    href="https://www.facebook.com/moo"
                                                    className="socials__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        height={40}
                                                        viewBox="0 0 40 40"
                                                        width={40}
                                                        data-inject-url="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-social-facebook.svg"
                                                        decoding="async"
                                                        className="socials__icon inject-svg"
                                                    >
                                                        <path
                                                            d="m17.398 32-.0344-10.9091h-4.3636v-4.3636h4.3636v-2.7273c0-4.0488 2.5073-6 6.1191-6 1.7301 0 3.217.1288 3.6503.18638v4.23122l-2.5049.0011c-1.9643 0-2.3447.9335-2.3447 2.3032v2.0054h5.7166l-2.1818 4.3636h-3.5348v10.9091z"
                                                            fill="#07120c"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="socials__item">
                                                <a
                                                    aria-label="LinkedIn"
                                                    title="LinkedIn"
                                                    href="https://www.linkedin.com/company/moo-com/"
                                                    className="socials__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit={2}
                                                        viewBox="0 0 40 40"
                                                        data-inject-url="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-social-linkedin.svg"
                                                        decoding="async"
                                                        width={40}
                                                        height={40}
                                                        className="socials__icon inject-svg"
                                                    >
                                                        <g
                                                            fillRule="nonzero"
                                                            transform="matrix(.0295655 0 0 .0295655 8.173802 8.173804)"
                                                        >
                                                            <path d="m186.219 257.368h-160.601c-7.128 0-12.903 5.778-12.903 12.903v515.943c0 7.128 5.775 12.903 12.903 12.903h160.601c7.128 0 12.904-5.775 12.904-12.903v-515.943c0-7.125-5.776-12.903-12.904-12.903z" />
                                                            <path d="m105.977.88c-58.436 0-105.977 47.489-105.977 105.861 0 58.397 47.541 105.904 105.977 105.904 58.389 0 105.891-47.51 105.891-105.904.003-58.372-47.502-105.861-105.891-105.861z" />
                                                            <path d="m594.72 244.545c-64.503 0-112.186 27.729-141.107 59.236v-33.51c0-7.125-5.776-12.903-12.903-12.903h-153.804c-7.128 0-12.903 5.778-12.903 12.903v515.943c0 7.128 5.775 12.903 12.903 12.903h160.25c7.128 0 12.903-5.775 12.903-12.903v-255.272c0-86.021 23.366-119.533 83.329-119.533 65.306 0 70.496 53.724 70.496 123.959v250.849c0 7.128 5.775 12.903 12.903 12.903h160.31c7.128 0 12.903-5.775 12.903-12.903v-283.004c0-127.91-24.39-258.668-205.28-258.668z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="socials__item">
                                                <a
                                                    aria-label="x"
                                                    title="X"
                                                    href="https://x.com/MOO"
                                                    className="socials__link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit={2}
                                                        viewBox="0 0 40 40"
                                                        data-inject-url="https://www.moo.com/blog/wp-content/themes/mooblog/dist/img/icon-social-x.svg"
                                                        decoding="async"
                                                        width={40}
                                                        height={40}
                                                        className="socials__icon inject-svg"
                                                    >
                                                        <path
                                                            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                                                            fillRule="nonzero"
                                                            transform="matrix(.0880401 0 0 .0880401 6.88642 8.07056)"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cell">
                                        <h2 className="cta__title cta__title--social">
                                            Stay in the loop with our social media{" "}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* #content */}
        </div>

    </>
}

export default blog;