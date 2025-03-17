'use client';

import { useEffect, useState } from "react";
import postcardData from '@/app/assets/Allproducts.json';
const cardDetails = () => {
    const [productId, setProductId] = useState(null);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedPostcard = localStorage.getItem("selectedPostcard");
        if (storedPostcard) {
            setProductId(JSON.parse(storedPostcard));
        }
    }, []);

    useEffect(() => {
        if (productId !== null) {
            // Find the matching product in JSON data
            const selectedProduct = postcardData.find((item) => item.id === productId);
            setProduct(selectedProduct);
            
            // Logging inside useEffect to ensure latest state update
            console.log("Selected Product:", selectedProduct);
        }
    }, [productId]);


    return <>
        <main id="main-content" className="u-outline-none">
            <section
                id="product-options-module"
                className="band -module u-backgroundColor-white product-options-module js-component"
                data-module-name="product-options-module"
                data-module-index={1}
            >
                <div className="product-options-module__inner-wrap is-in-view">
                    <div className="wrapper">
                        <div className="layout u-display-flex u-flexDirection-column u-flexDirection-row@medium">
                            <div className="layout__item u-5/12@medium u-1/2@large">
                                <div className="product-options-module__sticky-ui u-clearfix js-product-options-sticky-ui">
                                    <div className="u-marginBottom-xl u-marginBottom-m@medium u-cancel-wrapper-padding@until-medium">
                                        <div
                                            id="js-product-options-product-image-ratio-box"
                                            className="product-images__ratio-box has-multiple-images"
                                            data-component-name="product-images"
                                        >
                                            <div id="js-product-images" className="u-fill">
                                                <div
                                                    id="js-product-options-images-skeleton"
                                                    className="product-images__skeleton u-fill u-display-none"
                                                >
                                                    <div className="u-ratio-1:1 u-backgroundColor-neutralTint" />
                                                    <div className="product-images__slider -nav product-images__nav-slider-wrap u-display-none@until-medium u-hide-when-js-disabled">
                                                        <div className="layout layout--tiny slick-list">
                                                            <div className="layout__item u-1/4 slick-slide">
                                                                <div className="u-ratio-1:1">
                                                                    <div className="u-fill u-backgroundColor-neutralTint" />
                                                                </div>
                                                            </div>
                                                            <div className="layout__item u-1/4 slick-slide">
                                                                <div className="u-ratio-1:1">
                                                                    <div className="u-fill u-backgroundColor-neutralTint" />
                                                                </div>
                                                            </div>
                                                            <div className="layout__item u-1/4 slick-slide">
                                                                <div className="u-ratio-1:1">
                                                                    <div className="u-fill u-backgroundColor-neutralTint" />
                                                                </div>
                                                            </div>
                                                            <div className="layout__item u-1/4 slick-slide">
                                                                <div className="u-ratio-1:1">
                                                                    <div className="u-fill u-backgroundColor-neutralTint" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="u-hide-when-js-enabled">
                                                    <img
                                                        srcSet="/.imaging/po-product-320x320/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 320w, /.imaging/po-product-524x524/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 524w, /.imaging/po-product-683x683/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 683w, /.imaging/po-product-817x817/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 817w, /.imaging/po-product-987x987/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 987w, /.imaging/po-product-1152x1152/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 1152w"
                                                        sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                        alt="Five Original Postcards in various sizes "
                                                        className="u-fill"
                                                        fetchPriority="high"
                                                    />
                                                </div>
                                                <div
                                                    className="slick-slider product-images__slider -main slick-initialized"
                                                    dir="ltr"
                                                >
                                                    <div className="u-center-transform-y u-zIndex-1 slick-arrow slick-prev slick-disabled">
                                                        <button
                                                            className="btn -disc -ghost-light is-disabled"
                                                            disabled=""
                                                            data-qa-name="arrow-left"
                                                        >
                                                            <svg className="svg-icon" viewBox="0 0 48 48">
                                                                <path d="M28.654 9.57L14.224 24l14.43 14.429 2.121-2.121L18.467 24l12.308-12.309-2.121-2.121z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="slick-list">
                                                        <div
                                                            className="slick-track"
                                                            style={{ width: 2008, opacity: 1 }}
                                                        >
                                                            <div
                                                                data-index={0}
                                                                className="slick-slide slick-active slick-current"
                                                                tabIndex={-1}
                                                                aria-hidden="false"
                                                                style={{
                                                                    outline: "none",
                                                                    width: 502,
                                                                    position: "relative",
                                                                    left: 0,
                                                                    opacity: 1,
                                                                    transition: "opacity 500ms, visibility 500ms"
                                                                }}
                                                            >
                                                                <div>
                                                                    <div
                                                                        className="product-images__image-wrap u-display-block u-position-relative"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            width: "100%",
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div className="u-backgroundColor-neutralTint">
                                                                            <div
                                                                                className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                data-qa-name="product-images-image-wrapper"
                                                                            >
                                                                                <img
                                                                                    data-qa-name="magnolia-generated-static-image"
                                                                                    srcSet="/.imaging/po-product-320x320/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 320w, /.imaging/po-product-524x524/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 524w, /.imaging/po-product-683x683/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 683w, /.imaging/po-product-817x817/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 817w, /.imaging/po-product-987x987/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 987w, /.imaging/po-product-1152x1152/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 1152w"
                                                                                    sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                    alt="Five Original Postcards in various sizes "
                                                                                    className="u-fill"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                data-index={1}
                                                                className="slick-slide"
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                                style={{
                                                                    outline: "none",
                                                                    width: 502,
                                                                    position: "relative",
                                                                    left: "-502px",
                                                                    opacity: 0,
                                                                    transition: "opacity 500ms, visibility 500ms"
                                                                }}
                                                            >
                                                                <div>
                                                                    <div
                                                                        className="product-images__image-wrap u-display-block u-position-relative"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            width: "100%",
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div className="u-backgroundColor-neutralTint">
                                                                            <div
                                                                                className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                data-qa-name="product-images-image-wrapper"
                                                                            >
                                                                                <img
                                                                                    data-qa-name="magnolia-generated-static-image"
                                                                                    srcSet="/.imaging/po-product-320x320/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 320w, /.imaging/po-product-524x524/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 524w, /.imaging/po-product-683x683/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 683w, /.imaging/po-product-817x817/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 817w, /.imaging/po-product-987x987/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 987w, /.imaging/po-product-1152x1152/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 1152w"
                                                                                    sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                    alt="Original Postcards matte corner close- up"
                                                                                    className="u-fill"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                data-index={2}
                                                                className="slick-slide"
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                                style={{
                                                                    outline: "none",
                                                                    width: 502,
                                                                    position: "relative",
                                                                    left: "-1004px",
                                                                    opacity: 0,
                                                                    transition: "opacity 500ms, visibility 500ms"
                                                                }}
                                                            >
                                                                <div>
                                                                    <div
                                                                        className="product-images__image-wrap u-display-block u-position-relative"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            width: "100%",
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div className="u-backgroundColor-neutralTint">
                                                                            <div
                                                                                className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                data-qa-name="product-images-image-wrapper"
                                                                            >
                                                                                <img
                                                                                    data-qa-name="magnolia-generated-static-image"
                                                                                    srcSet="/.imaging/po-product-320x320/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 320w, /.imaging/po-product-524x524/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 524w, /.imaging/po-product-683x683/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 683w, /.imaging/po-product-817x817/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 817w, /.imaging/po-product-987x987/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 987w, /.imaging/po-product-1152x1152/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 1152w"
                                                                                    sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                    alt="Original Postcards at another angle"
                                                                                    className="u-fill"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                data-index={3}
                                                                className="slick-slide"
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                                style={{
                                                                    outline: "none",
                                                                    width: 502,
                                                                    position: "relative",
                                                                    left: "-1506px",
                                                                    opacity: 0,
                                                                    transition: "opacity 500ms, visibility 500ms"
                                                                }}
                                                            >
                                                                <div>
                                                                    <div
                                                                        className="product-images__image-wrap u-display-block u-position-relative"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            width: "100%",
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div className="u-backgroundColor-neutralTint">
                                                                            <div
                                                                                className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                data-qa-name="product-images-image-wrapper"
                                                                            >
                                                                                <img
                                                                                    data-qa-name="magnolia-generated-static-image"
                                                                                    srcSet="/.imaging/po-product-320x320/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 320w, /.imaging/po-product-524x524/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 524w, /.imaging/po-product-683x683/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 683w, /.imaging/po-product-817x817/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 817w, /.imaging/po-product-987x987/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 987w, /.imaging/po-product-1152x1152/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 1152w"
                                                                                    sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                    alt="A pair of hands holding a set of Original Postcards "
                                                                                    className="u-fill"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="u-center-transform-y u-zIndex-1 slick-arrow slick-next">
                                                        <button
                                                            className="btn -disc -ghost-light"
                                                            data-qa-name="arrow-right"
                                                        >
                                                            <svg className="svg-icon" viewBox="0 0 48 48">
                                                                <path d="M19.346 9.57l-2.121 2.121L29.533 24 17.225 36.308l2.121 2.121L33.775 24 19.346 9.57z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-images__nav-slider-wrap">
                                                    <div className="slick-slider product-images__slider -nav slick-initialized">
                                                        <div className="slick-list">
                                                            <div
                                                                className="slick-track"
                                                                style={{
                                                                    width: 512,
                                                                    opacity: 1,
                                                                    transform: "translate3d(0px, 0px, 0px)"
                                                                }}
                                                            >
                                                                <div
                                                                    data-index={0}
                                                                    className="slick-slide slick-active slick-current"
                                                                    tabIndex={-1}
                                                                    aria-hidden="false"
                                                                    style={{ outline: "none", width: 128 }}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="product-images__image-wrap u-display-block u-position-relative"
                                                                            data-qa-name="thumbnail"
                                                                            tabIndex={-1}
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="u-backgroundColor-neutralTint">
                                                                                <div
                                                                                    className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                    data-qa-name="product-images-image-wrapper"
                                                                                >
                                                                                    <img
                                                                                        data-qa-name="magnolia-generated-static-image"
                                                                                        srcSet="/.imaging/po-product-320x320/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 320w, /.imaging/po-product-524x524/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 524w, /.imaging/po-product-683x683/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 683w, /.imaging/po-product-817x817/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 817w, /.imaging/po-product-987x987/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 987w, /.imaging/po-product-1152x1152/dam/bf731ecc-a206-4773-b20a-3611cd5f9657/0337WF-PO-1920x1920-original-postcards0.jpg 1152w"
                                                                                        sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                        alt="Five Original Postcards in various sizes "
                                                                                        className="u-fill"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index={1}
                                                                    className="slick-slide slick-active"
                                                                    tabIndex={-1}
                                                                    aria-hidden="false"
                                                                    style={{ outline: "none", width: 128 }}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="product-images__image-wrap u-display-block u-position-relative"
                                                                            data-qa-name="thumbnail"
                                                                            tabIndex={-1}
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="u-backgroundColor-neutralTint">
                                                                                <div
                                                                                    className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                    data-qa-name="product-images-image-wrapper"
                                                                                >
                                                                                    <img
                                                                                        data-qa-name="magnolia-generated-static-image"
                                                                                        srcSet="/.imaging/po-product-320x320/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 320w, /.imaging/po-product-524x524/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 524w, /.imaging/po-product-683x683/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 683w, /.imaging/po-product-817x817/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 817w, /.imaging/po-product-987x987/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 987w, /.imaging/po-product-1152x1152/dam/6055574d-628f-4993-b159-c9e5f69fd3ec/0337WF-PO-1920x1920-original-postcards-matte0.jpg 1152w"
                                                                                        sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                        alt="Original Postcards matte corner close- up"
                                                                                        className="u-fill"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index={2}
                                                                    className="slick-slide slick-active"
                                                                    tabIndex={-1}
                                                                    aria-hidden="false"
                                                                    style={{ outline: "none", width: 128 }}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="product-images__image-wrap u-display-block u-position-relative"
                                                                            data-qa-name="thumbnail"
                                                                            tabIndex={-1}
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="u-backgroundColor-neutralTint">
                                                                                <div
                                                                                    className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                    data-qa-name="product-images-image-wrapper"
                                                                                >
                                                                                    <img
                                                                                        data-qa-name="magnolia-generated-static-image"
                                                                                        srcSet="/.imaging/po-product-320x320/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 320w, /.imaging/po-product-524x524/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 524w, /.imaging/po-product-683x683/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 683w, /.imaging/po-product-817x817/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 817w, /.imaging/po-product-987x987/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 987w, /.imaging/po-product-1152x1152/dam/f30cc625-7027-4ca8-906d-fb1604fcd06b/0337WF-PO-1920x1920-original-postcards-corners0.jpg 1152w"
                                                                                        sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                        alt="Original Postcards at another angle"
                                                                                        className="u-fill"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index={3}
                                                                    className="slick-slide slick-active"
                                                                    tabIndex={-1}
                                                                    aria-hidden="false"
                                                                    style={{ outline: "none", width: 128 }}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="product-images__image-wrap u-display-block u-position-relative"
                                                                            data-qa-name="thumbnail"
                                                                            tabIndex={-1}
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="u-backgroundColor-neutralTint">
                                                                                <div
                                                                                    className="product-images__image-ratio-box u-ratio-1:1 product-images__fade-enter-done"
                                                                                    data-qa-name="product-images-image-wrapper"
                                                                                >
                                                                                    <img
                                                                                        data-qa-name="magnolia-generated-static-image"
                                                                                        srcSet="/.imaging/po-product-320x320/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 320w, /.imaging/po-product-524x524/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 524w, /.imaging/po-product-683x683/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 683w, /.imaging/po-product-817x817/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 817w, /.imaging/po-product-987x987/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 987w, /.imaging/po-product-1152x1152/dam/6eaf4b76-7cb7-41fc-8520-b691ff18da60/0337WF-PO-1920x1920-original-postcards-irl0.jpg 1152w"
                                                                                        sizes="(min-width: 76.5625em) 576px, (min-width: 64.0625em) 46.4vw, (min-width: 40.0625em) 36.9vw, 100vw"
                                                                                        alt="A pair of hands holding a set of Original Postcards "
                                                                                        className="u-fill"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout layout--row-spacing u-display-none@until-medium">
                                        <div className="layout__item u-1/2@large" data-qa-name="usp">
                                            <a
                                                href="/us/about/moo-promise"
                                                className="js-ga4-click-track"
                                                data-component-name="filler-block"
                                            >
                                                <div className="filler-block">
                                                    <div className="filler-block__content u-padding-0">
                                                        <div className="media-flex media-flex--small">
                                                            <div className="media-flex__img">
                                                                <img
                                                                    src="/dam/jcr:06b51357-f16f-410d-9c70-29aaf562f6ad/MOO-Icon-Promise0.svg"
                                                                    alt="The MOO promise"
                                                                    title="The MOO promise"
                                                                    className="filler-block__image"
                                                                />
                                                            </div>
                                                            <div className="media-flex__body u-marginTop-xxxxs">
                                                                <div className="h__block">The MOO promise</div>
                                                                <p>
                                                                    We move heaven and earth so you are happy with
                                                                    your order!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>{" "}
                                        </div>
                                        <div className="layout__item u-1/2@large" data-qa-name="usp">
                                            <a
                                                href="/us/about/printfinity"
                                                className="js-ga4-click-track"
                                                data-component-name="filler-block"
                                            >
                                                <div className="filler-block">
                                                    <div className="filler-block__content u-padding-0">
                                                        <div className="media-flex media-flex--small">
                                                            <div className="media-flex__img">
                                                                <img
                                                                    src="/dam/jcr:d411fa3d-9dfe-4fcf-881f-e76b915e7393/MOO-Icon-Printfinity0.svg"
                                                                    alt="Variety at no extra cost"
                                                                    title="Variety at no extra cost"
                                                                    className="filler-block__image"
                                                                />
                                                            </div>
                                                            <div className="media-flex__body u-marginTop-xxxxs">
                                                                <div className="h__block">
                                                                    Variety at no extra cost
                                                                </div>
                                                                <p>
                                                                    Print a different design on every Postcard for
                                                                    FREE.
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
                            <div className="layout__item u-7/12@medium u-1/2@large product-options-module__options-col u-paddingLeft-xl@large u-last-child-margin-bottom-0">
                                <header
                                    className="product-options-module__section u-marginTop-s@medium u-marginTop-l@large"
                                    data-qa-name="product-options-module-header"
                                    data-component-name="product-options-module-header"
                                >
                                    <div className="u-marginBottom-l">
                                        <div className="u-marginBottom-xs">
                                            <div className="media-flex media-flex--small media-flex--rev">
                                                <div className="media-flex__body">
                                                    <h1 className="h3" data-qa-name="heading">
                                                        Original Postcards
                                                    </h1>
                                                </div>
                                                <div className="media-flex__img u-lineHeight-0">
                                                    <div
                                                        className="pill u-color-white u-marginTop-xxxxs@medium"
                                                        style={{ backgroundColor: "#FFFFFF" }}
                                                    ></div>{" "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h6 u-marginBottom-xxs">
                                            16–17 pt paper thickness | Available in matte or gloss
                                        </div>
                                        <p className="p__large">
                                            <span className="u-fontFamily-secondaryMedium">25</span>{" "}
                                            postcards from{" "}
                                            <span
                                                className="u-fontFamily-secondaryMedium"
                                                data-qa-name="price"
                                            >
                                                $21.00
                                            </span>
                                        </p>
                                        <div
                                            className="trust-pilot"
                                            data-component-name="trust-pilot--stars--number-of-reviews"
                                        >
                                            <div className="u-display-inlineBlock u-verticalAlign-middle u-marginRight-xxs u-margin-vertical-xxxs">
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
                                                </ul>
                                            </div>
                                            <div className="u-display-inlineBlock u-verticalAlign-middle">
                                                <a
                                                    href="https://www.trustpilot.com/review/www.moo.com"
                                                    className="cta-link js-ga4-click-track"
                                                >
                                                    <span className="cta-link__text">
                                                        <span>605 reviews</span>
                                                    </span>
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="h5">Premium as standard</h2>
                                        <div
                                            className="p read-more js-read-more rmjs-1"
                                            data-read-more-config='{
                              "label": "Show more",
                              "viewports": [
                                  {
                                      "alias": "smallDown",
                                      "lines": 5
                                  },
                                  {
                                      "alias": "mediumOnly",
                                      "lines": 5
                                  },
                                  {
                                      "alias": "largeUp",
                                      "lines": 12
                                  }
                              ]
                          }'
                                            style={{ height: "auto", maxHeight: "none" }}
                                        >
                                            <p>
                                                Great quality AND great value. Whether in gloss or matte,
                                                our entry-level Postcard paper packs a punch.
                                            </p>
                                            <ul>
                                                <li>Our “feel good” premium paper</li>
                                                <li>In your choice of 2 finishes:</li>
                                                <li>
                                                    <strong>Matte:</strong> shine-free, so no glare
                                                </li>
                                                <li>
                                                    <strong>Gloss:</strong> makes Postcard colors really “pop”
                                                </li>
                                                <li>Coat both sides for extra protection</li>
                                                <li>For writing on, leave one side uncoated</li>
                                                <li>16–17 pt paper thickness</li>
                                                <li>Available in 7 Postcard sizes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div
                                    id="js-product-options"
                                    className="u-last-child-margin-bottom-0"
                                >
                                    <fieldset className="product-options-module__section">
                                        <legend
                                            className="h5 u-marginBottom-xs u-transitionProperty-color u-transitionDuration-s"
                                            id="radiogroup-size"
                                        >
                                            Choose your size
                                        </legend>
                                        <div
                                            className="layout layout--tiny layout--row-spacing-tiny u-display-flex u-flexWrap-wrap"
                                            role="radiogroup"
                                            aria-labelledby="radiogroup-size"
                                        >
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_6"
                                                        name="size"
                                                        tabIndex={0}
                                                        aria-describedby="size_6_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={6}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_6"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-a6-526x325.jpg"
                                                                alt="A6 postcard for a store opening"
                                                                title="A6 postcard for a store opening"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Small
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                4.13” x 5.83”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_6_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Small</div>
                                                        <div>4.13” x 5.83”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_14"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_14_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={14}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_14"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-standard-526x325.jpg"
                                                                alt="Standard-size postcard with food photography"
                                                                title="Standard-size postcard with food photography"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Standard
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                4” x 6”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_14_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Standard</div>
                                                        <div>4” x 6”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_9"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_9_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={9}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_9"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-square-526x325.jpg"
                                                                alt="Square postcard with food photography"
                                                                title="Square postcard with food photography"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Square
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                4.72” x 4.72”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_9_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Square</div>
                                                        <div>4.72” x 4.72”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_11"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_11_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={11}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_11"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-rack_cards-526x325.jpg"
                                                                alt="Rack postcard with food photography"
                                                                title="Rack postcard with food photography"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Rack Cards
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                3.67” x 8.5”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_11_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Rack Cards</div>
                                                        <div>3.67” x 8.5”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_8"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_8_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={8}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_8"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-medium-526x325.jpg"
                                                                alt="Medium postcard for store opening"
                                                                title="Medium postcard for store opening"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Medium
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                5” x 7”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_8_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Medium</div>
                                                        <div>5” x 7”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_13"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_13_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={13}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_13"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-half_page-526x325.jpg"
                                                                alt="Half-page postcard with food photography"
                                                                title="Half-page postcard with food photography"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Half Page
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                5.5” x 8.5”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_13_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Half Page</div>
                                                        <div>5.5” x 8.5”</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2 u-1/3@medium-to-large">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="size_15"
                                                        name="size"
                                                        tabIndex={-1}
                                                        aria-describedby="size_15_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={15}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="size_15"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/sizes/postcards-large-526x325.jpg"
                                                                alt="Large postcard for store opening"
                                                                title="Large postcard for store opening"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Large
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                6” x 9”
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="size_15_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Large</div>
                                                        <div>6” x 9”</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                style={{
                                                    visibility: "hidden",
                                                    position: "absolute",
                                                    height: 90,
                                                    width: 200
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset className="product-options-module__section u-visually-hidden">
                                        <div>
                                            <input
                                                type="text"
                                                name="paper"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                readOnly=""
                                                defaultValue={8}
                                            />
                                        </div>
                                        <div className="">
                                            <div
                                                style={{
                                                    visibility: "hidden",
                                                    position: "absolute",
                                                    height: 90,
                                                    width: 200
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset className="product-options-module__section">
                                        <legend
                                            className="h5 u-marginBottom-xs u-transitionProperty-color u-transitionDuration-s"
                                            id="radiogroup-laminatedSides"
                                        >
                                            Choose your coating
                                        </legend>
                                        <div
                                            className="layout layout--tiny layout--row-spacing-tiny u-display-flex u-flexWrap-wrap"
                                            role="radiogroup"
                                            aria-labelledby="radiogroup-laminatedSides"
                                        >
                                            <div className="u-position-relative u-display-flex layout__item u-1/2">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="laminatedSides_1"
                                                        name="laminatedSides"
                                                        tabIndex={0}
                                                        aria-describedby="laminatedSides_1_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={1}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="laminatedSides_1"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/laminated-sides/postcards-coated_back-526x251.jpg"
                                                                alt="Postcard coated on the back only, with a logo and a handwritten note on the front"
                                                                title="Postcard coated on the back only, with a logo and a handwritten note on the front"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Coated on the back only
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                The front will be uncoated – you’ll be able to write
                                                                on it with a pen.
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="laminatedSides_1_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Coated on the back only</div>
                                                        <div>
                                                            The front will be uncoated – you’ll be able to write
                                                            on it with a pen.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="laminatedSides_2"
                                                        name="laminatedSides"
                                                        tabIndex={-1}
                                                        aria-describedby="laminatedSides_2_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={2}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="laminatedSides_2"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/laminated-sides/postcards-coated-526x251.jpg"
                                                                alt="Postcard coated on both sides, with pictures and a logo on the front"
                                                                title="Postcard coated on both sides, with pictures and a logo on the front"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Coated on both sides
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                This means you won’t be able to write on your
                                                                postcards with a pen.
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="laminatedSides_2_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Coated on both sides</div>
                                                        <div>
                                                            This means you won’t be able to write on your
                                                            postcards with a pen.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                style={{
                                                    visibility: "hidden",
                                                    position: "absolute",
                                                    height: 90,
                                                    width: 200
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset className="product-options-module__section">
                                        <legend
                                            className="h5 u-marginBottom-xs u-transitionProperty-color u-transitionDuration-s"
                                            id="radiogroup-laminate"
                                        >
                                            Choose your finish
                                        </legend>
                                        <div
                                            className="layout layout--tiny layout--row-spacing-tiny u-display-flex u-flexWrap-wrap"
                                            role="radiogroup"
                                            aria-labelledby="radiogroup-laminate"
                                        >
                                            <div className="u-position-relative u-display-flex layout__item u-1/2">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="laminate_5"
                                                        name="laminate"
                                                        tabIndex={0}
                                                        aria-describedby="laminate_5_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={5}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="laminate_5"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/laminates/postcards-matte-526x251.jpg"
                                                                alt="Matte postcard on blue background"
                                                                title="Matte postcard on blue background"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Matte
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                With a smooth feel. Shine-free so no glare.
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="laminate_5_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Matte</div>
                                                        <div>With a smooth feel. Shine-free so no glare.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="u-position-relative u-display-flex layout__item u-1/2">
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1 has-image"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="laminate_6"
                                                        name="laminate"
                                                        tabIndex={-1}
                                                        aria-describedby="laminate_6_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue={6}
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="laminate_6"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__image-wrap u-marginBottom-xs">
                                                            <img
                                                                src="https://www.moo.com/static-assets/product-images/470a0393153fba295db8ff4c1bd514591a9ec246/laminates/postcards-gloss-526x251.jpg"
                                                                alt="Glossy postcard on blue background"
                                                                title="Glossy postcard on blue background"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-image"
                                                            />
                                                        </div>
                                                        <div className="u-last-child-margin-bottom-0">
                                                            <div
                                                                className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="radio-heading"
                                                            >
                                                                Gloss
                                                            </div>
                                                            <p
                                                                className="tile-radio-button__text u-wordBreak-breakWord"
                                                                aria-hidden="true"
                                                                data-qa-name="text"
                                                            >
                                                                Eye-catchingly shiny. Makes color photos pop.
                                                            </p>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="laminate_6_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div>Gloss</div>
                                                        <div>Eye-catchingly shiny. Makes color photos pop.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                style={{
                                                    visibility: "hidden",
                                                    position: "absolute",
                                                    height: 90,
                                                    width: 200
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset className="product-options-module__section u-visually-hidden">
                                        <div>
                                            <input
                                                type="text"
                                                name="corners"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                readOnly=""
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="">
                                            <div
                                                style={{
                                                    visibility: "hidden",
                                                    position: "absolute",
                                                    height: 90,
                                                    width: 200
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <div className="u-marginBottom-l">
                                        <div className="h5 u-marginBottom-xs">Choose your quantity</div>
                                        <table
                                            className="table u-position-relative u-marginBottom-0"
                                            data-component-name="quantity-pricing-table"
                                        >
                                            <thead data-qa-name="quantity-prices-thead">
                                                <tr>
                                                    <th style={{ width: "30%" }}>Quantity</th>
                                                    <th className="u-display-none@until-medium">
                                                        Price per postcard
                                                    </th>
                                                    <th>Pack price</th>
                                                </tr>
                                            </thead>
                                            <tbody data-qa-name="quantity-prices-tbody">
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        25
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.84
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $21.00
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row is-selected is-focused"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={0}
                                                        />
                                                        50
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.74
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $37.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $42.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        100
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.58
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $58.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $84.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                        <div>
                                                            <div
                                                                className="pill -small -denim u-marginTop-xxxxs"
                                                                data-qa-name="pill"
                                                            >
                                                                RECOMMENDED
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        250
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.38
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $95.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $210.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        500
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.28
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $142.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $420.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        1000
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.18
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $181.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $840.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="quantity-price-row"
                                                >
                                                    <td data-qa-name="quantity">
                                                        <input
                                                            type="radio"
                                                            className="u-visually-hidden js-quantity-pricing-radio"
                                                            tabIndex={-1}
                                                        />
                                                        2500
                                                    </td>
                                                    <td
                                                        className="u-display-none@until-medium"
                                                        data-qa-name="unit-price"
                                                    >
                                                        $0.15
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $367.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $2100.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="quantity-pricing-table__row"
                                                    data-qa-name="show-more-quantities"
                                                >
                                                    <td colSpan="100%">
                                                        <div className="u-display-flex u-justifyContent-spaceBetween u-alignItems-center">
                                                            <span>Show more quantities</span>
                                                            <svg className="-small svg-icon" viewBox="0 0 48 48">
                                                                <path d="M24 29.086l-13-13L9.586 17.5 24 31.914 38.414 17.5 37 16.086l-13 13z" />
                                                            </svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot data-qa-name="quantity-prices-tfoot">
                                                <tr>
                                                    <td colSpan="100%">
                                                        <span>
                                                            For more pricing info, see our{" "}
                                                            <a
                                                                href="/us/help/faq/cost-calculator.html"
                                                                className="js-ga4-click-track"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                Shipping and Cost Calculator
                                                            </a>
                                                            .
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="u-marginTop-xxs">
                                            <div
                                                className="u-paddingBottom-s notification -information -small has-icon is-visible"
                                                data-qa-name="notification"
                                                data-testid="notification-information"
                                                role="status"
                                            >
                                                <div className="media-flex media-flex--small">
                                                    <div className="media-flex__img notification__icon">
                                                        <svg className="svg-icon" viewBox="0 0 48 48">
                                                            <path d="M24-.023A24.023 24.023 0 1 0 48.023 24 24.051 24.051 0 0 0 24-.023zm0 46.046A22.023 22.023 0 1 1 46.023 24 22.047 22.047 0 0 1 24 46.023z" />
                                                            <path d="M23 22h2v12h-2z" />
                                                            <circle cx={24} cy={16} r={2} />
                                                        </svg>
                                                    </div>
                                                    <div className="media-flex__body notification__text-wrap">
                                                        <div
                                                            className="media-flex media-flex--rev media-flex--small u-media-flex-stack@until-xlarge"
                                                            style={{ paddingTop: 2 }}
                                                        >
                                                            <div className="media-flex__body notification__text-wrap">
                                                                <p className="notification__text u-marginBottom-xxxs">
                                                                    Bulk shouldn’t cost the earth. Meet Eco
                                                                </p>
                                                                <p />
                                                                <p>
                                                                    Order in bulk from our new Eco range, and save big
                                                                    on your next order of postcards. Email&nbsp;
                                                                    <a href="mailto:inquiries@moo.com">
                                                                        inquiries@moo.com
                                                                    </a>
                                                                    &nbsp; or call{" "}
                                                                    <a href="tel:+1 401-484-0988">+1 401-484-0988</a>{" "}
                                                                    to get started.
                                                                </p>
                                                                <p />
                                                            </div>
                                                            <div className="media-flex__img">
                                                                <a
                                                                    href="/us/eco"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="btn -ghost-dark -small"
                                                                    data-qa-name="mbs-cta"
                                                                >
                                                                    Learn more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="u-marginBottom-l"
                                        data-component-name="options-summary"
                                    >
                                        <div className="u-marginBottom-xs">
                                            <div className="h5">Summary</div>
                                        </div>
                                        <table
                                            className="table -horizontal-borders -border-top -col-1-heading u-marginBottom-0"
                                            data-qa-name="options-summary"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td data-qa-name="size-name">Size</td>
                                                    <td data-qa-name="size-value">-</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="paper-name">Paper</td>
                                                    <td data-qa-name="paper-value">Original</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="laminatedSides-name">Coating</td>
                                                    <td data-qa-name="laminatedSides-value">-</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="laminate-name">Finish</td>
                                                    <td data-qa-name="laminate-value">-</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="corners-name">Corners</td>
                                                    <td data-qa-name="corners-value">Square</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="quantity-name">Quantity</td>
                                                    <td data-qa-name="quantity-value">50</td>
                                                </tr>
                                                <tr>
                                                    <td data-qa-name="price-name" className="u-fontSize-l">
                                                        Price
                                                    </td>
                                                    <td data-qa-name="price-value" className="u-fontSize-l">
                                                        <span>
                                                            <span
                                                                className="u-fontFamily-secondaryMedium"
                                                                data-qa-name="price"
                                                            >
                                                                $37.00
                                                            </span>
                                                            <span>
                                                                &nbsp;
                                                                <s
                                                                    className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                    data-qa-name="strikethrough-price"
                                                                >
                                                                    $42.00
                                                                </s>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="product-options-module__section u-marginBottom-xxxxs">
                                        <div
                                            className="h5 u-marginBottom-xs"
                                            id="radiogroup-buildflow"
                                            data-qa-name="buildflow-options-heading"
                                        >
                                            How would you like to design your postcards?
                                        </div>
                                        <div
                                            className="layout layout--tiny layout--row-spacing-tiny u-display-flex u-flexWrap-wrap"
                                            role="radiogroup"
                                            aria-labelledby="radiogroup-buildflow"
                                        >
                                            <div
                                                className="u-position-relative u-display-flex layout__item
  u-1/3@medium-to-large"
                                            >
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="buildflow_designTemplateHub"
                                                        name="buildflow"
                                                        tabIndex={0}
                                                        aria-describedby="buildflow_designTemplateHub_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue="designTemplateHub"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="buildflow_designTemplateHub"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__buildflow-media-flex media-flex">
                                                            <div className="media-flex__img">
                                                                <div
                                                                    className="u-marginBottom-xs tile-radio-button__svg-image-wrap
  u-flex-center-content -design-templates"
                                                                >
                                                                    <svg
                                                                        className="tile-radio-button__svg-image svg-icon"
                                                                        viewBox="0 0 157.3 124.85"
                                                                    >
                                                                        <path
                                                                            d="M13,67.34h0v40.25H73.28V67.3H13Zm58.66,38.05-.54.54H66.36l5.26-5.31Zm0-5.68-6.18,6.22H58.73L71.62,93Zm0-7.63-13.8,13.85H51.19L71.62,85.41Zm0-7.59L50.28,105.93H43.56L71.62,77.83Zm0-7.59-29,29H36L71.62,70.24Zm0-7.92v.33L35.1,105.93H28.39L65.28,69Zm-7.25,0L27.48,105.93H20.8L57.65,69ZM14.63,69h4.23l-4.23,4.19Zm0,5.1L19.77,69h6.67L14.63,80.81Zm0,7.63L27.35,69H34L14.63,88.4Zm0,7.59L34.94,69h6.67l-27,27Zm0,7.59L42.52,69H49.2L14.63,103.61Zm0,7.63L50.11,69h6.63L19.89,105.93H14.63Z"
                                                                            fill="#384044"
                                                                        />
                                                                        <path
                                                                            d="M84.06,107.59h60.36V67.3H84.06ZM85.72,69h57v37h-57Z"
                                                                            fill="#384044"
                                                                        />
                                                                        <path
                                                                            d="M73.24,17.26H12.89V57.56H73.24ZM71.58,55.9h-57v-37h57Z"
                                                                            fill="#384044"
                                                                        />
                                                                        <path
                                                                            d="M84.1,17.3h0V57.56h60.36V17.26H84.1Zm58.66,38.1-.5.5h-4.77l5.26-5.26Zm0-5.68-6.18,6.18h-6.72L142.76,43Zm0-7.67L129,55.9h-6.63l20.44-20.48Zm0-7.54L121.41,55.9h-6.72l28.06-28.11Zm0-7.63-29,29h-6.63l35.61-35.65Zm0-7.92v.37L106.24,55.9H99.52L136.41,19Zm-7.25,0L98.61,55.9H91.94L128.83,19ZM85.76,19H90l-4.23,4.23Zm0,5.14L90.9,19h6.72L85.76,30.82Zm0,7.63L98.53,19h6.63L85.76,38.4Zm0,7.59L106.07,19h6.72l-27,27Zm0,7.59L113.7,19h6.63L85.76,53.62Zm0,7.63L121.24,19h6.67L91,55.9H85.76Z"
                                                                            fill="#384044"
                                                                        />
                                                                        <polygon
                                                                            points="27.48 105.93 64.37 69 57.65 69 20.8 105.93 27.48 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="14.63 69 14.63 73.18 18.85 69 14.63 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="71.08 105.93 71.62 105.39 71.62 100.63 66.36 105.93 71.08 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="35.1 105.93 71.62 69.33 71.62 69 65.28 69 28.39 105.93 35.1 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="27.35 69 14.63 81.72 14.63 88.4 34.03 69 27.35 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="42.65 105.93 71.62 76.91 71.62 70.24 36.02 105.93 42.65 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="42.52 69 14.63 96.89 14.63 103.61 49.2 69 42.52 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="34.94 69 14.63 89.31 14.63 95.98 41.61 69 34.94 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="56.74 69 50.11 69 14.63 104.52 14.63 105.93 19.89 105.93 56.74 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="57.82 105.93 71.62 92.08 71.62 85.41 51.19 105.93 57.82 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="19.77 69 14.63 74.09 14.63 80.81 26.44 69 19.77 69"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="65.45 105.93 71.62 99.71 71.62 93 58.73 105.93 65.45 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="106.07 18.96 85.76 39.32 85.76 45.99 112.79 18.96 106.07 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="136.58 55.9 142.76 49.72 142.76 42.96 129.87 55.9 136.58 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="106.24 55.9 142.76 19.34 142.76 18.96 136.41 18.96 99.52 55.9 106.24 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="85.76 18.96 85.76 23.19 89.99 18.96 85.76 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="98.61 55.9 135.5 18.96 128.83 18.96 91.94 55.9 98.61 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="128.95 55.9 142.76 42.05 142.76 35.42 122.32 55.9 128.95 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="113.78 55.9 142.76 26.88 142.76 20.25 107.15 55.9 113.78 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="121.41 55.9 142.76 34.51 142.76 27.79 114.69 55.9 121.41 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="142.26 55.9 142.76 55.4 142.76 50.63 137.49 55.9 142.26 55.9"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="127.92 18.96 121.24 18.96 85.76 54.53 85.76 55.9 91.02 55.9 127.92 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="113.7 18.96 85.76 46.9 85.76 53.62 120.33 18.96 113.7 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="98.53 18.96 85.76 31.73 85.76 38.4 105.16 18.96 98.53 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="50.28 105.93 71.62 84.5 71.62 77.83 43.56 105.93 50.28 105.93"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <polygon
                                                                            points="90.9 18.96 85.76 24.1 85.76 30.82 97.61 18.96 90.9 18.96"
                                                                            fill="#d3d9dd"
                                                                        />
                                                                        <path
                                                                            d="M142.76,69h-57v37h57Zm-31.55,5.8a4.19,4.19,0,0,1,3-1.2,4.11,4.11,0,0,1,4.19,4.19,4.19,4.19,0,0,1-1.2,3,4.14,4.14,0,0,1-3,1.2A4.11,4.11,0,0,1,110,77.74,4.14,4.14,0,0,1,111.21,74.76ZM128.33,97.1H100.06V95.44h28.27Zm0-4.06H100.06V91.38h28.27Z"
                                                                            fill="#fff"
                                                                        />
                                                                        <path
                                                                            d="M14.54,55.9h57v-37h-57ZM38.17,41.35H66.44V43H38.17Zm0,4.1H66.44v1.66H38.17ZM20.39,24.81a4,4,0,0,1,3-1.29,4.09,4.09,0,0,1,3,1.29,4.05,4.05,0,0,1,1.2,3,4.14,4.14,0,0,1-1.2,3,4.23,4.23,0,0,1-3,1.2,4.18,4.18,0,0,1-4.27-4.19A4,4,0,0,1,20.39,24.81Z"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="100.06"
                                                                            y="91.38"
                                                                            width="28.27"
                                                                            height="1.66"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                        <path
                                                                            d="M23.41,32a4.23,4.23,0,0,0,3-1.2,4.14,4.14,0,0,0,1.2-3,4.05,4.05,0,0,0-1.2-3,4.09,4.09,0,0,0-3-1.29,4.32,4.32,0,0,0-4.27,4.27A4.18,4.18,0,0,0,23.41,32Z"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                        <rect
                                                                            x="38.17"
                                                                            y="41.35"
                                                                            width="28.27"
                                                                            height="1.66"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                        <rect
                                                                            x="100.06"
                                                                            y="95.44"
                                                                            width="28.27"
                                                                            height="1.66"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                        <rect
                                                                            x="38.17"
                                                                            y="45.45"
                                                                            width="28.27"
                                                                            height="1.66"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                        <path
                                                                            d="M114.24,82a4.14,4.14,0,0,0,3-1.2,4.19,4.19,0,0,0,1.2-3,4.11,4.11,0,0,0-4.19-4.19,4.19,4.19,0,0,0-3,1.2,4.14,4.14,0,0,0-1.2,3A4.11,4.11,0,0,0,114.24,82Z"
                                                                            fill="#b1b9c2"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="media-flex__body">
                                                                <div className="u-last-child-margin-bottom-0">
                                                                    <div
                                                                        className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                        data-qa-name="radio-heading"
                                                                    >
                                                                        Use our templates
                                                                    </div>
                                                                    <div className="list-default__parent tile-radio-button__text u-wordBreak-breakWord u-last-child-margin-bottom-0">
                                                                        <ul>
                                                                            <li>Looking for inspiration</li>
                                                                            <li>Want simple customization</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="buildflow_designTemplateHub_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="u-position-relative u-display-flex layout__item
  u-1/3@medium-to-large"
                                            >
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="buildflow_designYourOwn"
                                                        name="buildflow"
                                                        tabIndex={-1}
                                                        aria-describedby="buildflow_designYourOwn_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue="designYourOwn"
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="buildflow_designYourOwn"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__buildflow-media-flex media-flex">
                                                            <div className="media-flex__img">
                                                                <div
                                                                    className="u-marginBottom-xs tile-radio-button__svg-image-wrap
  u-flex-center-content -design-your-own"
                                                                >
                                                                    <svg
                                                                        className="tile-radio-button__svg-image svg-icon"
                                                                        viewBox="0 0 157.3 124.84"
                                                                    >
                                                                        <polygon
                                                                            points="23.91 101.28 23.91 23.3 133.88 23.3 133.88 96.14 141.55 99.08 141.55 67.33 137.32 67.33 137.32 57.21 141.55 57.21 141.55 19.66 137.32 19.66 137.32 15.34 83.85 15.34 83.85 19.66 73.78 19.66 73.78 15.34 20.26 15.34 20.26 19.66 16.03 19.66 16.03 57.21 20.26 57.21 20.26 67.33 16.03 67.33 16.03 104.88 20.26 104.88 20.26 109.03 73.78 109.03 73.78 104.88 83.85 104.88 83.85 109.03 131.44 109.03 128.49 101.28 23.91 101.28"
                                                                            fill="none"
                                                                        />
                                                                        <path
                                                                            d="M154.2,103.89l-11-4.19V67.33h4.27V57.21h-4.27V19.65h4.27V9.54H137.32v4.15H83.85V9.54H73.78v4.15H20.26V9.54H10.15V19.65h4.23V57.21H10.15V67.33h4.23v37.56H10.15V115H20.26v-4.31H73.78V115H83.85v-4.31H132.1l4.23,11.15,5.93-5.93,7.46,7.5,6.22-6.09-7.63-7.54Zm-8.37-45v6.8H139v-6.8ZM139,11.2h6.84V18H139Zm-63.55,0h6.76V18H75.43ZM11.8,18V11.2h6.8V18Zm0,47.67v-6.8h6.8v6.8Zm6.8,47.67H11.8v-6.8h6.8Zm63.59,0H75.43v-6.8h6.76ZM83.85,109v-4.15H73.78V109H20.26v-4.15H16V67.33h4.23V57.21H16V19.65h4.23V15.34H73.78v4.31H83.85V15.34h53.47v4.31h4.23V57.21h-4.23V67.33h4.23V99.08l-7.67-2.94V23.3h-110v78H128.49l2.94,7.75Zm44-9.41H25.57V25H132.23V95.51l-7-2.69Zm25.7,17.66-3.86,3.81-7.46-7.54L137,118.85l-3.44-9.08a.87.87,0,0,0-.17-.41l-3.48-9.08a.47.47,0,0,0-.08-.25l-1.66-4.35,4.6,1.78a.22.22,0,0,0,.12,0L142,101a.39.39,0,0,0,.21.08l9,3.44-5.26,5.26Z"
                                                                            fill="#394145"
                                                                        />
                                                                        <rect
                                                                            x="11.8"
                                                                            y="11.2"
                                                                            width="6.8"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="75.43"
                                                                            y="11.2"
                                                                            width="6.76"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="11.8"
                                                                            y="58.87"
                                                                            width="6.8"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="138.98"
                                                                            y="11.2"
                                                                            width="6.84"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="11.8"
                                                                            y="106.54"
                                                                            width="6.8"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <path
                                                                            d="M132.23,25H25.57V99.62H127.87l-2.61-6.8,7,2.69ZM104,67.33H53.59V65.67H104Zm0-8.46H53.59V57.21H104Z"
                                                                            fill="#fff"
                                                                        />
                                                                        <path
                                                                            d="M151.21,104.51l-9-3.44A.39.39,0,0,1,142,101l-9.12-3.48a.22.22,0,0,1-.12,0l-4.6-1.78,1.66,4.35a.47.47,0,0,1,.08.25l3.48,9.08a.87.87,0,0,1,.17.41l3.44,9.08,5.31-5.31,7.46,7.54,3.86-3.81-7.63-7.5Z"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="138.98"
                                                                            y="58.87"
                                                                            width="6.84"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="75.43"
                                                                            y="106.54"
                                                                            width="6.76"
                                                                            height="6.8"
                                                                            fill="#fff"
                                                                        />
                                                                        <rect
                                                                            x="53.59"
                                                                            y="57.21"
                                                                            width="50.45"
                                                                            height="1.66"
                                                                            fill="#a2b4b9"
                                                                        />
                                                                        <rect
                                                                            x="53.59"
                                                                            y="65.67"
                                                                            width="50.45"
                                                                            height="1.66"
                                                                            fill="#a2b4b9"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="media-flex__body">
                                                                <div className="u-last-child-margin-bottom-0">
                                                                    <div
                                                                        className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                        data-qa-name="radio-heading"
                                                                    >
                                                                        Design here online
                                                                    </div>
                                                                    <div className="list-default__parent tile-radio-button__text u-wordBreak-breakWord u-last-child-margin-bottom-0">
                                                                        <ul>
                                                                            <li>Already have your logo</li>
                                                                            <li>Customize every detail</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="buildflow_designYourOwn_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="u-position-relative u-display-flex layout__item
  u-1/3@medium-to-large"
                                            >
                                                <div
                                                    className="tile-radio-button__wrap u-position-relative u-display-flex u-flex-grow-1"
                                                    data-qa-name="radio-container"
                                                >
                                                    <input
                                                        type="radio"
                                                        id="buildflow_fullUpload"
                                                        name="buildflow"
                                                        tabIndex={-1}
                                                        aria-describedby="buildflow_fullUpload_description"
                                                        className="tile-radio-button__input"
                                                        data-qa-name="radio-input"
                                                        defaultValue="fullUpload"
                                                    />
                                                    <label
                                                        className="tile-radio-button__label u-flex-grow-1 u-height-100 u-borderRadius-s u-padding-s"
                                                        htmlFor="buildflow_fullUpload"
                                                        data-qa-name="radio-label"
                                                    >
                                                        <div className="tile-radio-button__buildflow-media-flex media-flex">
                                                            <div className="media-flex__img">
                                                                <div
                                                                    className="u-marginBottom-xs tile-radio-button__svg-image-wrap
  u-flex-center-content -full-upload"
                                                                >
                                                                    <svg
                                                                        className="tile-radio-button__svg-image svg-icon"
                                                                        viewBox="0 0 157.3 124.85"
                                                                    >
                                                                        <path
                                                                            d="M141.16,47.46a36,36,0,0,0-11.32-7.83A12.93,12.93,0,0,0,130,37.8a17.14,17.14,0,0,0-5.06-12.44v0a17.09,17.09,0,0,0-12.27-5A16.92,16.92,0,0,0,101.9,24a41.12,41.12,0,0,0-26.7-9.24A41.72,41.72,0,0,0,44.82,27.19a36.81,36.81,0,0,0-6,7.71l0,0a38.53,38.53,0,0,0-6.14,17.91,27.77,27.77,0,0,0-19,8.41h0a38.09,38.09,0,0,0-3.9,5.06,27.75,27.75,0,0,0-4.35,15.3,28.41,28.41,0,0,0,8.25,20.27h0a28.53,28.53,0,0,0,20.48,8.33h81.87a35.41,35.41,0,0,0,25.08-10.69,35.66,35.66,0,0,0,10.69-26A35.66,35.66,0,0,0,141.16,47.46ZM140,98.28a33.82,33.82,0,0,1-24,10.2H34.21a27,27,0,0,1-19.32-7.83v0A26.28,26.28,0,0,1,7.1,81.54a26,26,0,0,1,4.1-14.38,36.71,36.71,0,0,1,3.72-4.84l0,0,0,0h0a26.16,26.16,0,0,1,18.58-7.89l.75,0,.08-.75a36.81,36.81,0,0,1,5.89-17.87l0,0A35.16,35.16,0,0,1,46,28.35a40.11,40.11,0,0,1,29.22-12,39.56,39.56,0,0,1,26.16,9.29l.54.41.54-.41A15.17,15.17,0,0,1,112.64,22a15.38,15.38,0,0,1,11.07,4.52h0a15.65,15.65,0,0,1,4.56,11.28,10.59,10.59,0,0,1-.21,2.2l-.12.66.62.25a35.29,35.29,0,0,1,21.6,32.54A34.05,34.05,0,0,1,140,98.28Z"
                                                                            fill="#394145"
                                                                        />
                                                                        <polygon
                                                                            points="63.12 59.15 65.49 61.47 77.01 49.99 77.01 85.35 80.33 85.35 80.33 49.99 91.85 61.43 94.17 59.11 78.67 43.65 63.12 59.15"
                                                                            fill="#394145"
                                                                        />
                                                                        <path
                                                                            d="M140,48.62a34.22,34.22,0,0,0-11.4-7.71l-.62-.25.12-.66a10.59,10.59,0,0,0,.21-2.2,15.65,15.65,0,0,0-4.56-11.28h0A15.38,15.38,0,0,0,112.64,22a15.17,15.17,0,0,0-10.2,3.65l-.54.41-.54-.41a39.56,39.56,0,0,0-26.16-9.29A40.11,40.11,0,0,0,46,28.35a35.16,35.16,0,0,0-5.72,7.38l0,0a36.81,36.81,0,0,0-5.89,17.87l-.08.75-.75,0a26.16,26.16,0,0,0-18.58,7.89,36.71,36.71,0,0,0-3.72,4.84A26,26,0,0,0,7.1,81.54a26.28,26.28,0,0,0,7.79,19.07v0a27,27,0,0,0,19.32,7.83H116a34.83,34.83,0,0,0,34.16-35A34.05,34.05,0,0,0,140,48.62ZM91.83,61.43,80.31,50V85.35H77V50L65.47,61.47,63.1,59.15l15.54-15.5,15.5,15.46Z"
                                                                            fill="#fff"
                                                                        />
                                                                        <path d="M78.63,62.34l0,0h0Z" fill="#fff" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="media-flex__body">
                                                                <div className="u-last-child-margin-bottom-0">
                                                                    <div
                                                                        className="h__block tile-radio-button__text u-wordBreak-breakWord"
                                                                        data-qa-name="radio-heading"
                                                                    >
                                                                        Upload a full design
                                                                    </div>
                                                                    <div className="list-default__parent tile-radio-button__text u-wordBreak-breakWord u-last-child-margin-bottom-0">
                                                                        <ul>
                                                                            <li>Have a complete design</li>
                                                                            <li>Have your own designer</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <div
                                                        id="buildflow_fullUpload_description"
                                                        className="u-visually-hidden"
                                                        data-qa-name="aria-description"
                                                        aria-hidden="true"
                                                    >
                                                        <div />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-options-cta__sticky u-padding-vertical-s u-paddingBottom-0@medium is-disabled">
                                        <div className="product-options-cta__price-wrap">
                                            <div className="product-options-cta__price-container u-display-flex u-justifyContent-spaceBetween">
                                                <span
                                                    className="u-fontSize-m"
                                                    data-qa-name="quantity-of-item"
                                                >
                                                    <span className="u-fontFamily-secondaryMedium">50</span>{" "}
                                                    postcards
                                                </span>
                                                <span>
                                                    <span>
                                                        <span
                                                            className="u-fontFamily-secondaryMedium"
                                                            data-qa-name="price"
                                                        >
                                                            $37.00
                                                        </span>
                                                        <span>
                                                            &nbsp;
                                                            <s
                                                                className="u-fontSize-80 u-color-light u-fontFamily-secondary"
                                                                data-qa-name="strikethrough-price"
                                                            >
                                                                $42.00
                                                            </s>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <span data-qa-name="product-options-cta-link-wrapper">
                                            <a
                                                href="#"
                                                className="btn -width-100 is-disabled u-pointerEvents-none"
                                                data-qa-name="product-options-cta"
                                            >
                                                Start making
                                            </a>
                                        </span>
                                    </div>
                                    <div className="u-display-none@medium u-padding-vertical-s u-paddingBottom-0@medium">
                                        <div className="btn fade-then-hide" />
                                    </div>
                                    <div
                                        data-qa-name="po-cta-notification"
                                        className="cta-notification-wrapper"
                                    >
                                        <div
                                            style={{
                                                visibility: "hidden",
                                                position: "absolute",
                                                height: 90,
                                                width: 200
                                            }}
                                        />
                                    </div>
                                    <div className="cta-notification-wrapper">
                                        <div
                                            style={{
                                                visibility: "hidden",
                                                position: "absolute",
                                                height: 100,
                                                width: 200
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper u-display-none@medium u-marginTop-s">
                    <div className="layout layout--row-spacing">
                        <div className="layout__item u-1/2@large" data-qa-name="usp">
                            <a
                                href="/us/about/moo-promise"
                                className="js-ga4-click-track"
                                data-component-name="filler-block"
                            >
                                <div className="filler-block">
                                    <div className="filler-block__content u-padding-0">
                                        <div className="media-flex media-flex--small">
                                            <div className="media-flex__img">
                                                <img
                                                    src="/dam/jcr:06b51357-f16f-410d-9c70-29aaf562f6ad/MOO-Icon-Promise0.svg"
                                                    alt="The MOO promise"
                                                    title="The MOO promise"
                                                    className="filler-block__image"
                                                />
                                            </div>
                                            <div className="media-flex__body u-marginTop-xxxxs">
                                                <div className="h__block">The MOO promise</div>
                                                <p>
                                                    We move heaven and earth so you are happy with your order!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>{" "}
                        </div>
                        <div className="layout__item u-1/2@large" data-qa-name="usp">
                            <a
                                href="/us/about/printfinity"
                                className="js-ga4-click-track"
                                data-component-name="filler-block"
                            >
                                <div className="filler-block">
                                    <div className="filler-block__content u-padding-0">
                                        <div className="media-flex media-flex--small">
                                            <div className="media-flex__img">
                                                <img
                                                    src="/dam/jcr:d411fa3d-9dfe-4fcf-881f-e76b915e7393/MOO-Icon-Printfinity0.svg"
                                                    alt="Variety at no extra cost"
                                                    title="Variety at no extra cost"
                                                    className="filler-block__image"
                                                />
                                            </div>
                                            <div className="media-flex__body u-marginTop-xxxxs">
                                                <div className="h__block">Variety at no extra cost</div>
                                                <p>Print a different design on every Postcard for FREE.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>{" "}
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="guide"
                className="band -module tabs-module js-tabs-module js-component is-tabs"
                data-module-name="tabs-module"
                data-module-index={2}
            >
                <div
                    className="wrapper tabs-module__wrapper js-tabs-wrapper"
                    style={{ height: 458 }}
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
                                <span>Small</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Small
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/6c1f4c9c-54ee-47d8-a25a-b3dd8a4ac7ac/CRB-5292-design-guidelines-PC-Small-A6.png"
                                                        srcSet="/.imaging/scale-png/dam/6c1f4c9c-54ee-47d8-a25a-b3dd8a4ac7ac/CRB-5292-design-guidelines-PC-Small-A6.png, /dam/jcr:c422bb21-e516-4448-994a-e6bd2a49bb36/CRB-5292-design-guidelines-PC-Small-A6.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 4.29” x 5.98”
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 4.13” x 5.83”
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 3.97” x 5.66”
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075140071/US-Small-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075140011/US-Small-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074907652/US-Small-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074907712/US-Small-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-us/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Standard</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Standard
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/c504781a-511a-4f43-abe0-bef87b751dc6/CRB-5292-design-guidelines-PC-Standard.png"
                                                        srcSet="/.imaging/scale-png/dam/c504781a-511a-4f43-abe0-bef87b751dc6/CRB-5292-design-guidelines-PC-Standard.png, /dam/jcr:9ee9192a-ac07-45e9-a65e-fa4acc086301/CRB-5292-design-guidelines-PC-Standard.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 6.16" x 4.16"
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 6" x 4"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 5.84" x 3.84"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075144891/US-Standard-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075144811/US-Standard-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074912452/US-Standard-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075144851/US-Standard-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Square</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Square
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/e9d1e9b1-2dd3-473c-b002-92140d5dcaa0/CRB-5292-design-guidelines-PC-SQ.png"
                                                        srcSet="/.imaging/scale-png/dam/e9d1e9b1-2dd3-473c-b002-92140d5dcaa0/CRB-5292-design-guidelines-PC-SQ.png, /dam/jcr:dcb238bd-c1a1-4a87-a91b-46ccab2d3b24/CRB-5292-design-guidelines-PC-SQ.png 2x"
                                                        alt="Guidelines"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 4.88" x 4.88"
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 4.72" x 4.72"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 4.56" x 4.56"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074915012/US-Square-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075147651/US-Square-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074914972/US-Square-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074914992/US-Square-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Rack Cards</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Rack Cards
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/b11c5afe-dedc-48c6-9189-170293d07622/CRB-5292-design-guidelines-PC-ThirdPage.png"
                                                        srcSet="/.imaging/scale-png/dam/b11c5afe-dedc-48c6-9189-170293d07622/CRB-5292-design-guidelines-PC-ThirdPage.png, /dam/jcr:297d12ec-642e-455d-9392-8f19ce2979e8/CRB-5292-design-guidelines-PC-ThirdPage.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 3.82" x 8.66"
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 3.67" x 8.5"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 3.5" x 8.34"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074915632/US-Rack-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074915592/US-Rack-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074915552/US-Rack-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074915612/US-Rack-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Medium</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Medium
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/1aa19fd8-30dd-4e59-b4d6-20b5a03c6dc2/CRB-5292-design-guidelines-PC-Medium.png"
                                                        srcSet="/.imaging/scale-png/dam/1aa19fd8-30dd-4e59-b4d6-20b5a03c6dc2/CRB-5292-design-guidelines-PC-Medium.png, /dam/jcr:80311b1f-1d3f-4b54-9ac3-364f64d694f9/CRB-5292-design-guidelines-PC-Medium.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 5.15" x 7.15"
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 5" x 7"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 4.84" x 6.84"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075142191/US-Medium-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075142151/US-Medium-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074909752/US-Medium-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074909812/US-Medium-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Half Page</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Half Page
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/6accfca6-0a1f-4c8f-8a90-6e7b4eb0449a/CRB-5292-design-guidelines-PC-HalfPage.png"
                                                        srcSet="/.imaging/scale-png/dam/6accfca6-0a1f-4c8f-8a90-6e7b4eb0449a/CRB-5292-design-guidelines-PC-HalfPage.png, /dam/jcr:e7393529-c033-4e28-93be-20090e322c60/CRB-5292-design-guidelines-PC-HalfPage.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 5.66" x 8.66"
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 5.5" x 8.5"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 5.34” x 8.34"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075148851/US-Half-page-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360075148831/US-Half-page-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916612/US-Half-page-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916632/US-Half-page-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className="tabs-module__item js-tab-item" role="presentation">
                            <a href="#" className="tabs-module__link js-tab-link" role="tab">
                                <span>Large</span>
                                <div className="nav-chevron">
                                    <div className="icon__morph -chevron-down">
                                        <div className="icon__morph-block -m1" />
                                        <div className="icon__morph-block -m2" />
                                        <div className="icon__morph-block -m3" />
                                    </div>
                                </div>
                            </a>
                            <div className="tabs-module__link -measure js-tab-link-measure">
                                Large
                            </div>
                            <section
                                className="tabs-module__content js-tab-content"
                                role="tabpanel"
                            >
                                <div
                                    className="layout artwork-guidelines"
                                    data-component-name="design-guidelines"
                                >
                                    <div className="layout__item u-3/4@large">
                                        <div className="layout">
                                            <div className="layout__item">
                                                <header className="u-marginBottom-m">
                                                    <div className="u-marginBottom-xxxs">
                                                        <h2
                                                            className="tabs-module__heading"
                                                            data-qa-name="heading"
                                                        >
                                                            Original Postcards Design Guidelines
                                                        </h2>
                                                    </div>
                                                </header>
                                            </div>
                                            <div className="layout__item u-1/3@medium">
                                                <figure className="artwork-guidelines__figure u-marginBottom-0@medium">
                                                    <img
                                                        src="/.imaging/scale-png/dam/64dcea3d-af63-4ef3-bfb9-be50b0aecaca/CRB-5292-design-guidelines-PC-Large.png"
                                                        srcSet="/.imaging/scale-png/dam/64dcea3d-af63-4ef3-bfb9-be50b0aecaca/CRB-5292-design-guidelines-PC-Large.png, /dam/jcr:19d2456e-f175-4262-96fc-622940c89ef5/CRB-5292-design-guidelines-PC-Large.png 2x"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="layout__item u-2/3@medium u-7/12@large u-paddingTop-m@medium">
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -bleedarea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--bleed-area"
                                                        >
                                                            <path d="M2 39h44V9H2zm2-28h40v26H4z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Bleed Area: 6.16” x 9.16”
                                                        </h6>
                                                        <p>
                                                            Make sure that your background extends to fill the
                                                            bleed to avoid your Postcards having white edges when
                                                            trimmed.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -trim artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--trim-area"
                                                        >
                                                            <path d="M5 41h2v-4h34v4h2v-4h4v-2h-4V13h4v-2h-4V7h-2v4H7V7H5v4H1v2h4v22H1v2h4zm2-28h34v22H7z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Trim: 6" x 9"
                                                        </h6>
                                                        <p>This is where we aim to cut your cards.</p>
                                                    </div>
                                                </div>
                                                <div className="media media--small u-marginBottom-m">
                                                    <div className="media__img">
                                                        <svg
                                                            viewBox="0 0 48 48"
                                                            className="svg-icon -large -safearea artwork-guidelines__icon"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            data-icon-id="ui--safe-area"
                                                        >
                                                            <path d="M44 37h-2v2h4v-4h-2v2zm-10.308 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm-8.308 0h5.539v2h-5.539zM8.77 37h5.539v2H8.77zM6 37H4v-2H2v4h4v-2zM2 25.573h2v6.285H2zm0-9.427h2v6.285H2zm2-5.143h2v-2H2v4h2v-2zm29.692-2h5.539v2h-5.539zm-24.923 0h5.539v2H8.769zm16.615 0h5.539v2h-5.539zm-8.307 0h5.539v2h-5.539zm24.923 2h2v2h2v-4h-4v2zm2 14.57h2v6.285h-2zm0-9.427h2v6.285h-2z" />
                                                        </svg>{" "}
                                                    </div>
                                                    <div className="media__body">
                                                        <h6 className="u-fontFamily-primaryMedium">
                                                            Safe Area: 5.84" x 8.84"
                                                        </h6>
                                                        <p>
                                                            Make sure any important aspects of your design such as
                                                            text and logos are inside of the safe area, otherwise
                                                            they may be cut off.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layout__item u-1/4@large u-marginTop-m u-marginTop-0@large">
                                        <div className="tabs-module__heading u-marginBottom-m">
                                            Download a design template
                                        </div>
                                        <div className="panel u-marginBottom-m u-paddingTop-xs">
                                            <div className="panel__body u-paddingBottom-xs artwork-guidelines__file-types-container">
                                                <ul className="file-types__list list-bare u-textAlign-center u-remove-inline-block-white-space">
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916192/US-Large-Postcard.psd.zip"
                                                            className="file-types__link -psd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="photoshop"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="psd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Photoshop
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916152/US-Large-Postcard.ai.zip"
                                                            className="file-types__link -ai js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="illustrator"
                                                        >
                                                            <div className="file-types__file" data-file-type="ai">
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Illustrator
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916132/US-Large-Postcard.idml.zip"
                                                            className="file-types__link -indd js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="indesign"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="indd"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    InDesign
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                    <li className="file-types__item">
                                                        <a
                                                            href="https://support.moo.com/hc/article_attachments/360074916172/US-Large-Postcard.jpg.zip"
                                                            className="file-types__link -jpg js-ga4-click-track"
                                                            data-component-name="file-type"
                                                            data-component-text="jpeg"
                                                        >
                                                            <div
                                                                className="file-types__file"
                                                                data-file-type="jpg"
                                                            >
                                                                <div className="file-types__icon-mask">
                                                                    <svg
                                                                        viewBox="0 0 48 48"
                                                                        className="svg-icon -small u-center-transform-x"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        data-icon-id="ui--download"
                                                                    >
                                                                        <path d="M10 42h28v2H10zM23 4.008v28.649L11.844 21.97l-1.384 1.444L24 36.385l13.54-12.971-1.384-1.444L25 32.657V4.008h-2z" />
                                                                    </svg>{" "}
                                                                </div>
                                                                <div className="file-types__label u-margin-0">
                                                                    Jpeg
                                                                </div>
                                                            </div>
                                                        </a>{" "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="u-textAlign-center u-margin-0">
                                            For more help, read our{" "}
                                            <a href="https://support.moo.com/hc/en-gb/sections/200570950">
                                                Artwork Guidelines
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                id=""
                className="band -module intercom-module u-backgroundColor-white js-component"
                data-module-name="intercom-module"
                data-module-index={3}
            >
                <div className="wrapper u-padding-0@until-medium">
                    <div className="u-position-relative">
                        <div className="intercom-module__ratio-box">
                            <div className="u-position-absolute u-top-0">
                                <picture>
                                    <source
                                        media="only screen and (min-width: 64.0625em)"
                                        srcSet="/.imaging/scale/dam/eac958cf-ffc1-4e12-8945-66a8cabd9662/0836WF-IC-2352x578-All-Products-Sample-Pack.jpg, /dam/jcr:89fb9cf3-8516-447a-af62-8689cd2a90d8/0836WF-IC-2352x578-All-Products-Sample-Pack.jpg 2x"
                                    />
                                    <source
                                        media="only screen and (min-width: 40.0625em)"
                                        srcSet="/.imaging/scale/dam/50ecbebd-ff9a-468f-9a61-7bdb4d94718e/0836WF-IC-1952x500-All-Products-Sample-Pack.jpg, /dam/jcr:8c3c1b76-3478-4880-8450-3193dddb861b/0836WF-IC-1952x500-All-Products-Sample-Pack.jpg 2x"
                                    />
                                    <img
                                        src="/.imaging/scale/dam/a598109f-f681-41f9-835c-f891e2613b1a/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg"
                                        srcSet="/.imaging/scale/dam/a598109f-f681-41f9-835c-f891e2613b1a/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg, /dam/jcr:e27654ad-2c63-4c67-9f6b-2b83812e40ab/0836WF-IC-1280x960-All-Products-Sample-Pack.jpg 2x"
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
                                        href="/us/sample-packs/all-products-sample-pack"
                                        className="btn -ghost-light u-margin-vertical-xxxs u-margin-horizontal-xxxs@small u-display-none@until-large js-ga4-click-track"
                                    >
                                        Get your sample pack
                                    </a>
                                    <a
                                        href="/us/sample-packs/all-products-sample-pack"
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
                id="overview"
                className="
  band
      -module
  u-backgroundColor-white
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={4}
            >
                <div className="wrapper js-tile-rack-wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Great quality AND great value</h2>
                            <p className="p__lead">
                                Whether you're printing gloss or matte Postcards, our entry-level
                                paper packs a punch.
                            </p>
                        </header>
                    </div>
                    <div className="">
                        <div className="layout layout--row-spacing u-display-flex u-flexWrap-wrap">
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
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
                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                            data-srcset="/.imaging/scale/dam/84d33a13-da2c-4927-8cdf-02e86c6beaa8/CRB-5326-PROMO-PC-Original-USP-1-752x564.jpg, /dam/jcr:172dc1fa-967d-4462-b7ca-f2fdc25b80e3/CRB-5326-PROMO-PC-Original-USP-1-752x564.jpg 2x"
                                                            alt="Surprisingly affordable"
                                                            title="Surprisingly affordable"
                                                            className="tile__image lazyload"
                                                            data-qa-name="image"
                                                        />
                                                        <figcaption
                                                            className="u-visually-hidden"
                                                            data-qa-name="figcaption"
                                                        >
                                                            Surprisingly affordable
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Surprisingly affordable
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>16–17 pt paper thickness</li>
                                                        <li>A premium paper for less</li>
                                                        <li>
                                                            Also in{" "}
                                                            <a href="https://www.moo.com/us/business-cards/original-options">
                                                                Business Cards
                                                            </a>{" "}
                                                            and{" "}
                                                            <a href="https://www.moo.com/us/letterhead">
                                                                Letterhead
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
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
                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                            data-srcset="/.imaging/scale/dam/841ed808-a601-4ce6-a8fc-a4ac3eddd0a6/CRB-5326-PROMO-PC-Original-USP-2-752x564.jpg, /dam/jcr:9e405c69-b3f6-4753-bfac-b991808d44a9/CRB-5326-PROMO-PC-Original-USP-2-752x564.jpg 2x"
                                                            alt="Available in matte or gloss"
                                                            title="Available in matte or gloss"
                                                            className="tile__image lazyload"
                                                            data-qa-name="image"
                                                        />
                                                        <figcaption
                                                            className="u-visually-hidden"
                                                            data-qa-name="figcaption"
                                                        >
                                                            Available in matte or gloss
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Available in matte or gloss
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Matte Postcards are shine free, so no glare</li>
                                                        <li>Gloss Postcards make colors really “pop”</li>
                                                        <li>Both come at no extra cost</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tile-rack__tile-wrap block__wrap-mob layout__item -animate u-display-flex u-1/3@medium">
                                <div
                                    className="tile
    u-textAlign-left
    
    "
                                    data-component-name="tile"
                                    data-qa-name="tile"
                                >
                                    <div className="tile__body" data-qa-name="body">
                                        <div className="tile__media-wrap">
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
                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                            data-srcset="/.imaging/scale/dam/9a554b5d-9ed2-4a19-bbdb-ee294f63e6c9/CRB-5326-PROMO-PC-Original-USP-3-752x564.jpg, /dam/jcr:0d8bf3a6-48e9-4000-beda-34e55d23c565/CRB-5326-PROMO-PC-Original-USP-3-752x564.jpg 2x"
                                                            alt="Versatile coating options"
                                                            title="Versatile coating options"
                                                            className="tile__image lazyload"
                                                            data-qa-name="image"
                                                        />
                                                        <figcaption
                                                            className="u-visually-hidden"
                                                            data-qa-name="figcaption"
                                                        >
                                                            Versatile coating options
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>{" "}
                                        </div>
                                        <div className="tile__text-wrap" data-qa-name="text-wrap">
                                            <div
                                                className="tile__text-wrap-inner"
                                                data-qa-name="text-wrap-inner"
                                            >
                                                <div className="u-marginBottom-xxxs">
                                                    <h3 className="h__block" data-qa-name="heading">
                                                        Versatile coating options
                                                    </h3>
                                                </div>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Coat both sides for extra protection</li>
                                                        <li>Leave one side uncoated to write on</li>
                                                        <li>Or get that "traditional" Postcard feel</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="shopBySize"
                className="band -module size-module        u-backgroundColor-neutralTint
 js-size-module js-component"
                data-module-name="size-module"
                data-module-index={5}
            >
                <div className="wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">Shop by size</h2>
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&paperType=postcard&productType=postcard"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/61921e02-897e-4729-b6b0-ba7f8025f774/CRB-5326-PROMO-PC-size-module-Small2.png, /dam/jcr:1447479e-df55-4ce7-b441-214a1cd52324/CRB-5326-PROMO-PC-size-module-Small2.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&paperType=postcard&productType=postcard"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Small</span>&nbsp;
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_standard"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/3910bdda-3e4a-41b7-9d23-b48c11fbc8c7/CRB-5326-PROMO-PC-size-module-Standard0.png, /dam/jcr:d6a2d883-1747-4353-9111-0ce12ed62857/CRB-5326-PROMO-PC-size-module-Standard0.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_standard"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Standard</span>&nbsp;
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_square"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/a8c19f6d-c8ce-4ebb-8bb0-2276e2fb32cc/CRB-5326-PROMO-PC-size-module-SQ0.png, /dam/jcr:d626308e-8360-4c69-8b33-b4c28b4e45f4/CRB-5326-PROMO-PC-size-module-SQ0.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_square"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Square</span>&nbsp;
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_dl_us"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/9eeb0bd5-6cfb-45ed-b17a-1fdfa5dc7bcd/CRB-5326-PROMO-PC-size-module-Third-page1.png, /dam/jcr:03c97002-b044-41d9-a4fe-5b7cc92c0b14/CRB-5326-PROMO-PC-size-module-Third-page1.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_dl_us"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Rack Cards</span>&nbsp;
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
                data-module-index={6}
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&paperType=postcard&productType=postcard_medium"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/32054e89-c876-4408-9de4-130ad0e50c4c/CRB-5326-PROMO-PC-size-module-Medium4.png, /dam/jcr:bf30e62f-572d-412b-bcb9-1d89dce8c57d/CRB-5326-PROMO-PC-size-module-Medium4.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=singlemattelam&paperType=postcard&productType=postcard_medium"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Medium</span>&nbsp;
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_half_page_us"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/e1139d3b-5e4d-4b6b-ae30-259f650f26cf/CRB-5326-PROMO-PC-size-module-Half-page0.png, /dam/jcr:1f022ca3-3be0-4f49-9ff4-9fc3cbaac189/CRB-5326-PROMO-PC-size-module-Half-page0.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_half_page_us"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Half Page</span>&nbsp;
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
                                    href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_large"
                                    className="size-block__image-wrap js-ga4-click-track"
                                    tabIndex={-1}
                                >
                                    <div className="u-overflow-hidden">
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-srcset="/.imaging/scale-png/dam/e6bd1b53-1cff-4557-a81d-b55f7419dbc8/CRB-5326-PROMO-PC-size-module-Large0.png, /dam/jcr:2f5a6aa9-87ef-4483-bb4b-c1ae81792903/CRB-5326-PROMO-PC-size-module-Large0.png 2x"
                                            alt=""
                                            className="size-block__image lazyload"
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
                                        href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&origPaperType=classic&paperType=classic&productType=postcard_large"
                                        className="cta-link -has-chevron u-width-100 u-paddingTop-xs js-ga4-click-track"
                                    >
                                        <span className="cta-link__text">
                                            <span>Start making Large</span>&nbsp;
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
                id="mooDesigns"
                className="band -module biwt-module        u-backgroundColor-white
 u-padding-0@medium u-marginTop-0@medium js-component"
                data-module-name="background-image-with-text-module"
                data-module-index={7}
            >
                <div className="biwt__media-wrap-outer u-marginBottom-m u-marginBottom-0@medium">
                    <div className="wide-media__wrap -stacking@until-medium">
                        <picture>
                            <source
                                media="only screen and (min-width: 40.0625em)"
                                srcSet="/.imaging/scale/dam/e075b0ad-513e-4ae9-9e79-ccb73a800add/CRB-5326-PROMO-PC-BIWT-medium-up-3840x1000-Original0.jpg, /dam/jcr:7e81ff01-867c-4a84-ae71-9aa1e5ea29cb/CRB-5326-PROMO-PC-BIWT-medium-up-3840x1000-Original0.jpg 2x"
                            />
                            <img
                                src="/.imaging/scale/dam/6e59f1ec-2fba-4552-9754-c56731f4cd24/CRB-5326-PROMO-PC-BIWT-small-down-1216x912-Original0.jpg"
                                srcSet="/.imaging/scale/dam/6e59f1ec-2fba-4552-9754-c56731f4cd24/CRB-5326-PROMO-PC-BIWT-small-down-1216x912-Original0.jpg, /dam/jcr:4286b7f3-7f3f-4e4f-b08e-5fa7cb2ece1d/CRB-5326-PROMO-PC-BIWT-small-down-1216x912-Original0.jpg 2x"
                                alt=""
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
                                    <h2 className="h__module">
                                        Easy-to-customize professional templates
                                    </h2>
                                    <p>
                                        For design inspiration, check out our customizable templates.
                                        Available for Small and Medium Postcards.
                                    </p>
                                    <div className="module-header__cta-wrap u-display-block">
                                        <a
                                            href="/us/design-templates/postcards/?finishingOption=square_corners&laminate=mattelam&paperType=classic&productType=postcard_medium"
                                            className="cta-link -has-chevron js-ga4-click-track"
                                            data-overlay-id="background-image-with-text-module-buildflow"
                                        >
                                            <span className="cta-link__text">
                                                <span>Browse MOO designs</span>&nbsp;
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
                            data-sku="PP254,PP388,PP389,PP390,PP391,PP402,PP403,PP404,PP405,PP352,PP289,PP353,PP290,PP354,PP291,PP355,PP292,PP416,PP417,PP418,PP419,PP239,PP240,PP241,PP242,PP251,PP252,PP253"
                            data-review-languages="en"
                            style={{ position: "relative" }}
                        >
                            <iframe
                                title="Customer reviews powered by Trustpilot"
                                loading="auto"
                                src="https://widget.trustpilot.com/trustboxes/5717796816f630043868e2e8/index.html?templateId=5717796816f630043868e2e8&businessunitId=4aa6d5d8000064000504b8c3#locale=en-US&styleHeight=350px&styleWidth=100%25&theme=light&sku=PP254%2CPP388%2CPP389%2CPP390%2CPP391%2CPP402%2CPP403%2CPP404%2CPP405%2CPP352%2CPP289%2CPP353%2CPP290%2CPP354%2CPP291%2CPP355%2CPP292%2CPP416%2CPP417%2CPP418%2CPP419%2CPP239%2CPP240%2CPP241%2CPP242%2CPP251%2CPP252%2CPP253&reviewLanguages=en"
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
                data-module-index={8}
            >
                <div className="wrapper">
                    <div className="layout">
                        <div className="layout__item u-1/4@large">
                            <header
                                className="module-header list-default__parent u-last-child-margin-bottom-0 u-marginBottom-0@large js-module-header"
                                data-component-name="module-header"
                            >
                                <h2 className="h__module">Original Postcards - Inspiration</h2>
                                <p className="p__lead">
                                    Get some big ideas, brand inspiration and tips to grow your
                                    business with matte or glossy Postcards.
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
                                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                        data-srcset="/.imaging/scale/dam/2d58cd5d-972d-4727-8c1f-cfa862dceaab/blog-postcard-sizes.jpg, /dam/jcr:56ae341f-683e-4425-b354-fae585e281b9/blog-postcard-sizes.jpg 2x"
                                                                        alt="The ultimate guide to Postcard sizes and dimensions"
                                                                        title="The ultimate guide to Postcard sizes and dimensions"
                                                                        className="tile__image lazyload"
                                                                        data-qa-name="image"
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
                                                                    <span>Continue reading</span>&nbsp;
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
                                                            <span>Continue reading</span>&nbsp;
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
                                                        href="https://www.moo.com/blog/inspiration/3-ways-postcards-can-delight-your-customers"
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
                                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                        data-srcset="/.imaging/scale/dam/f2cffb5f-172d-4679-83b6-bcb795735941/Postcards-3-ways-postcards-can-delight-your-customers.jpg, /dam/jcr:b02f32d9-dec7-4835-9fca-b674c9d6288b/Postcards-3-ways-postcards-can-delight-your-customers.jpg 2x"
                                                                        alt="3 reasons to choose Postcards"
                                                                        title="3 reasons to choose Postcards"
                                                                        className="tile__image lazyload"
                                                                        data-qa-name="image"
                                                                    />
                                                                    <figcaption
                                                                        className="u-visually-hidden"
                                                                        data-qa-name="figcaption"
                                                                    >
                                                                        3 reasons to choose Postcards
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
                                                                3 reasons to choose Postcards
                                                            </h3>
                                                        </div>
                                                        <div className="list-default__parent u-last-child-margin-bottom-0">
                                                            <p>
                                                                When it comes to promoting, Flyers often get all the
                                                                glory. But what about Postcards? Meet 3 brands who
                                                                used the humble Postcard in big ways.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/3-ways-postcards-can-delight-your-customers"
                                                        className="tile__horizontal-footer-link js-ga4-click-track"
                                                        data-qa-name="horizontal-footer-link"
                                                    >
                                                        <div
                                                            className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                            data-qa-name="horizontal-footer"
                                                        >
                                                            <div className="cta-link -has-chevron">
                                                                <span className="cta-link__text">
                                                                    <span>Continue reading</span>&nbsp;
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
                                                href="https://www.moo.com/blog/inspiration/3-ways-postcards-can-delight-your-customers"
                                                className="js-ga4-click-track"
                                                data-qa-name="footer-link"
                                            >
                                                <div
                                                    className="tile__footer cta-link__wrap"
                                                    data-qa-name="footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Continue reading</span>&nbsp;
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
                                                        href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards-and-flyers"
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
                                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                        data-srcset="/.imaging/scale/dam/49d95363-9f60-4d04-b75b-f5145566a245/Postcards-Flyers-use-case-lifestyle-feature.jpg, /dam/jcr:527e62f3-b9e9-4a29-82be-7a1f863c8081/Postcards-Flyers-use-case-lifestyle-feature.jpg 2x"
                                                                        alt="5 smart ways to use Postcards"
                                                                        title="5 smart ways to use Postcards"
                                                                        className="tile__image lazyload"
                                                                        data-qa-name="image"
                                                                    />
                                                                    <figcaption
                                                                        className="u-visually-hidden"
                                                                        data-qa-name="figcaption"
                                                                    >
                                                                        5 smart ways to use Postcards
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
                                                                5 smart ways to use Postcards
                                                            </h3>
                                                        </div>
                                                        <div className="list-default__parent u-last-child-margin-bottom-0">
                                                            <p>
                                                                Discover some fun ways to put your new Original
                                                                Postcard designs to use. Plus, some tips for
                                                                choosing the right postcard size!
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards-and-flyers"
                                                        className="tile__horizontal-footer-link js-ga4-click-track"
                                                        data-qa-name="horizontal-footer-link"
                                                    >
                                                        <div
                                                            className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                            data-qa-name="horizontal-footer"
                                                        >
                                                            <div className="cta-link -has-chevron">
                                                                <span className="cta-link__text">
                                                                    <span>Continue reading</span>&nbsp;
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
                                                href="https://www.moo.com/blog/inspiration/creative-ways-to-use-postcards-and-flyers"
                                                className="js-ga4-click-track"
                                                data-qa-name="footer-link"
                                            >
                                                <div
                                                    className="tile__footer cta-link__wrap"
                                                    data-qa-name="footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Continue reading</span>&nbsp;
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

                className="
  band
      -module
  u-backgroundColor-white
  
  
  js-component
    "
                data-module-name="tile-rack-title-top"
                data-module-index={9}
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
                                                href="/us/postcards/super"
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
                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                        data-srcset="/dam/jcr:6e4c38bb-023f-41ce-8889-904f3db21920/0702WF-TR-752x376-Super-Postcards.jpg, /dam/jcr:6e4c38bb-023f-41ce-8889-904f3db21920/0702WF-TR-752x376-Super-Postcards.jpg 2x"
                                                        alt="Super Postcards"
                                                        title="Super Postcards"
                                                        className="tile__image lazyload"
                                                        data-qa-name="image"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Super Postcards
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
                                                        Super Postcards
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
                                                                $31.00
                                                            </span>
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>Strong, non-bendy and durable paper&nbsp;</li>
                                                        <li>18pt paper thickness&nbsp;&nbsp;</li>
                                                        <li>Velvety-feel, Soft Touch finish</li>
                                                        <li>Add extra shine with Gold or Silver Foil</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/postcards/super"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Super Postcards</span>&nbsp;
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
                                        href="/us/postcards/super"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Super Postcards</span>&nbsp;
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
                                                href="/us/business-cards/luxe"
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
                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                        data-srcset="/dam/jcr:932b0435-01f2-43d4-8995-886877d7e3e1/0702WF-TR-752x376-Luxe-Business-Cards.jpg, /dam/jcr:932b0435-01f2-43d4-8995-886877d7e3e1/0702WF-TR-752x376-Luxe-Business-Cards.jpg 2x"
                                                        alt="Luxe Business Cards"
                                                        title="Luxe Business Cards"
                                                        className="tile__image lazyload"
                                                        data-qa-name="image"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Luxe Business Cards
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
                                                        Luxe Business Cards
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
                                                                $41.00
                                                            </span>
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="list-default__parent u-last-child-margin-bottom-0">
                                                    <ul>
                                                        <li>
                                                            Mohawk Superfine paper with a pop of color in the
                                                            middle
                                                        </li>
                                                        <li>
                                                            Extra-impactful 32pt paper that’s four layers thick
                                                        </li>
                                                        <li>
                                                            Natural, tactile texture, feels great to hold and
                                                            write on
                                                        </li>
                                                        <li>Your choice of eight different seam colors</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/business-cards/luxe"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Luxe Business Cards</span>&nbsp;
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
                                        href="/us/business-cards/luxe"
                                        className="js-ga4-click-track"
                                        data-qa-name="footer-link"
                                    >
                                        <div
                                            className="tile__footer cta-link__wrap"
                                            data-qa-name="footer"
                                        >
                                            <div className="cta-link -has-chevron">
                                                <span className="cta-link__text">
                                                    <span>Shop Luxe Business Cards</span>&nbsp;
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
                                                href="/us/business-cards/original"
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
                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                        data-srcset="/dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg, /dam/jcr:3c2f9b55-5793-4545-9074-f6bfd407f9e4/0702WF-TR-752x376-Original-Business-Cards.jpg 2x"
                                                        alt="Original Business Cards"
                                                        title="Original Business Cards"
                                                        className="tile__image lazyload"
                                                        data-qa-name="image"
                                                    />
                                                    <figcaption
                                                        className="u-visually-hidden"
                                                        data-qa-name="figcaption"
                                                    >
                                                        Original Business Cards
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
                                                        Original Business Cards
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
                                                        <li>Our feel-good premium paper&nbsp;</li>
                                                        <li>
                                                            16pt thick – thicker than your average business card
                                                        </li>
                                                        <li>
                                                            Available in two free finishes: matte or gloss&nbsp;
                                                        </li>
                                                        <li>In MOO, Standard, Square and MiniCard sizes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a
                                                href="/us/business-cards/original"
                                                className="tile__horizontal-footer-link js-ga4-click-track"
                                                data-qa-name="horizontal-footer-link"
                                            >
                                                <div
                                                    className="tile__text-wrap-inner tile__horizontal-footer cta-link__wrap u-paddingTop-0"
                                                    data-qa-name="horizontal-footer"
                                                >
                                                    <div className="cta-link -has-chevron">
                                                        <span className="cta-link__text">
                                                            <span>Shop Original Business Cards</span>&nbsp;
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
                                                    <span>Shop Original Business Cards</span>&nbsp;
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
                id={0}
                className="band -module         u-backgroundColor-neutralTint
 js-faq-module js-component"
                data-module-index={10}
            >
                <div className="wrapper">
                    <div className="u-textAlign-center">
                        <header
                            className="module-header list-default__parent u-last-child-margin-bottom-0  js-module-header"
                            data-component-name="module-header"
                        >
                            <h2 className="h__module">FAQs - Original Postcards</h2>
                        </header>
                    </div>
                    <div className="faq-module__faq-container list-default__parent">
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                What Postcard sizes do you offer?
                            </h3>
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
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                Why should I choose Original Postcards?
                            </h3>
                            <p>
                                Original paper gives your <a href="/us/postcards">Postcards</a> a
                                premium look and feel that draws people in - for less. With
                                Original, you can create matte or glossy Postcards and choose to
                                coat one or both sides: you're the boss. All MOO Postcards are also
                                double-sided and full color, and you can print up to 25 different
                                designs per pack for FREE.
                            </p>
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                How much do Original Postcards cost?
                            </h3>
                            <p>
                                That will depend on the size, finish and turnaround time you choose.
                                To get an accurate quote in seconds, give our{" "}
                                <a href="https://www.moo.com/help/faq/cost-calculator.html">
                                    online cost calculator
                                </a>
                                &nbsp;a go.
                            </p>
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                What are the available finishes for Original Postcards?
                            </h3>
                            <ul>
                                <li>
                                    <strong>Matte Postcards</strong> (16pt): shine free, so no glare.
                                    And you can write on it, too.
                                </li>
                                <li>
                                    <strong>Gloss Postcards</strong> (17pt): eye-catchingly shiny to
                                    make colors more vibrant.
                                </li>
                            </ul>
                        </div>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                Do you do any other Postcard paper stocks?
                            </h3>
                            <p>
                                Yes, you can also print <a href="/us/postcards">Postcards</a> on:
                            </p>
                        </div>
                        <ul>
                            <li>
                                <a href="/us/postcards/super">Super</a> (18pt): impressively strong
                                and silky to touch, available with{" "}
                                <a href="/us/postcards/gold-and-silver-foil">
                                    silver or gold foil special finishes
                                </a>
                            </li>
                            <li>
                                <a href="/us/postcards/luxe">Luxe</a> (32pt): beautifully textured
                                and impressively thick, with a colored edge
                            </li>
                        </ul>
                        <div className="faq-module__heading-wrap">
                            <h3 className="h__block faq-module__heading u-marginBottom-xxxs js-faq-module-heading">
                                How can I design my Original Postcards?
                            </h3>
                            <ul>
                                <li>Customize a blank design</li>
                                <li>Upload a complete design</li>
                                <li>
                                    Use our templates if you're creating{" "}
                                    <a href="/us/postcards/small">Small</a> or{" "}
                                    <a href="/us/postcards/medium">Medium</a> Postcards
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </>
}

export default cardDetails;