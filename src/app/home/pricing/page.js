const price = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="page-header col-12">
                    <h1>How much will my order cost?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="cost-calculator">
                        <div id="hiddenFormItems">
                            <div className="form-group accessory collapse">
                                <select className="accessorySelect">
                                    <optgroup label="Business Card Holders">
                                        <option value="showcase_businesscard_holder|1">
                                            ShowCase MOO Size Acrylic Holder{" "}
                                        </option>
                                        <option value="showcase_businesscard_us_holder|1">
                                            ShowCase Standard Size Acrylic Holder{" "}
                                        </option>
                                        <option value="showcase_businesscard_square_holder|1">
                                            ShowCase Square Acrylic Holder{" "}
                                        </option>
                                        <option value="leather_businesscard_holder|1">
                                            Leather and Brushed Steel Holder
                                        </option>
                                        <option value="gio_leather_businesscard_holder|1">
                                            The Giorgio Fedon Holder
                                        </option>
                                        <option value="slimcase_businesscard_holder|1">
                                            Slimcase Holder
                                        </option>
                                        <option value="slimcase_square_businesscard_holder|1">
                                            Square Slimcase Holder
                                        </option>
                                    </optgroup>
                                    <optgroup label="MiniCard holders">
                                        <option value="plastic_minicard_holder|1">
                                            MOO MiniCard holder
                                        </option>
                                    </optgroup>
                                    <optgroup label="Envelopes">
                                        <option value="splash_envelopes_standard|25">
                                            25 ColourSplash Envelopes for Greeting Cards
                                        </option>
                                        <option value="envelopes_standard|25">
                                            25 Small Envelopes
                                        </option>
                                        <option value="envelopes_small_luxe|25">
                                            25 Small Luxe Envelopes
                                        </option>
                                        <option value="envelopes_medium_standard|25">
                                            25 Medium Envelopes
                                        </option>
                                        <option value="envelopes_medium_quadplex|25">
                                            25 Medium Luxe Envelopes
                                        </option>
                                        <option value="number9_envelopes_standard_diamond_flap|25">
                                            25 #9 Diamond Flap Envelopes
                                        </option>
                                        <option value="number9_envelopes_standard_straight_flap|25">
                                            25 #9 Straight Flap Envelopes
                                        </option>
                                        <option value="number9_envelopes_luxe_diamond_flap|25">
                                            25 Luxe #9 Diamond Flap Envelopes
                                        </option>
                                        <option value="number9_envelopes_luxe_straight_flap|25">
                                            25 Luxe #9 Straight Flap Envelopes
                                        </option>
                                        <option value="number10_envelopes_standard_diamond_flap|25">
                                            25 #10 Diamond Flap Envelopes
                                        </option>
                                        <option value="number10_envelopes_standard_straight_flap|25">
                                            25 #10 Straight Flap Envelopes
                                        </option>
                                        <option value="number10_envelopes_luxe_diamond_flap|25">
                                            25 Luxe #10 Diamond Flap Envelopes
                                        </option>
                                        <option value="number10_envelopes_luxe_straight_flap|25">
                                            25 Luxe #10 Straight Flap Envelopes
                                        </option>
                                    </optgroup>
                                    <optgroup label="Notebooks">
                                        <option value="moo_notebook_medium_hardback|1">
                                            MOO Hardcover Notebook
                                        </option>
                                        <option value="moo_notebook_medium_softcover|1">
                                            Softcover Journal
                                        </option>
                                        <option value="moo_notebook_medium_bundle|1">
                                            Hard &amp; Softcover Duo
                                        </option>
                                        <option value="moo_notebook_medium_softcover_ltd_edition_moross|1">
                                            MOO x Aries Moross Journals
                                        </option>
                                    </optgroup>
                                    <optgroup label="Drinkware">
                                        <option value="moo_bottle|1">MOO Water Bottle</option>
                                    </optgroup>
                                    <optgroup label="Display Boxes">
                                        <option value="displaybox_notecard|1">
                                            Display Boxes Large
                                        </option>
                                        <option value="displaybox_businesscard|1">
                                            Display Boxes Medium
                                        </option>
                                        <option value="displaybox_square|1">
                                            Display Boxes Square
                                        </option>
                                    </optgroup>
                                </select>
                                <span className="printMultiplier input-group-addon">×</span>
                                <select className="accessoryQuantity"></select>
                                <select className="accessoryColour"></select>
                            </div>
                            <div className="form-group print collapse">
                                <select className="printSelect">
                                    <optgroup label="Business Cards ">
                                        <option value="businesscard_classic">
                                            Business Cards - Original, Matte or Gloss
                                        </option>
                                        <option value="businesscard_classic_rounded">
                                            Business Cards - Original, Rounded Corners, Matte or Gloss
                                        </option>
                                        <option value="businesscard_super">
                                            Business Cards - Super, High Gloss or Soft Touch{" "}
                                        </option>
                                        <option value="businesscard_super_rounded">
                                            Business Cards - Super, Rounded Corners, High Gloss or Soft
                                            Touch
                                        </option>
                                        <option value="businesscard_quadplex_black">
                                            Business Cards - Luxe{" "}
                                        </option>
                                        <option value="businesscard_quadplex_black_rounded">
                                            Business Cards - Luxe, Rounded Corners
                                        </option>
                                        <option value="businesscard_super_foil_gold">
                                            Business Cards - Gold Foil{" "}
                                        </option>
                                        <option value="businesscard_super_rounded_foil_gold">
                                            Business Cards - Gold Foil, Rounded Corners
                                        </option>
                                        <option value="businesscard_super_foil_silver">
                                            Business Cards - Silver Foil{" "}
                                        </option>
                                        <option value="businesscard_super_rounded_foil_silver">
                                            Business Cards - Silver Foil, Rounded Corners
                                        </option>
                                        <option value="businesscard_quadplex_white_letterpress">
                                            Business Cards - Letterpress{" "}
                                        </option>
                                        <option value="businesscard_super_spot_uv_2d">
                                            Business Cards - Spot Gloss or Raised Spot Gloss
                                        </option>
                                        <option value="businesscard_super_rounded_spot_uv_2d">
                                            Business Cards - Spot Gloss or Raised Spot Gloss, Rounded
                                            Corners{" "}
                                        </option>
                                        <option value="businesscard_cotton">
                                            Business Cards - Cotton
                                        </option>
                                        <option value="businesscard_cotton_rounded">
                                            Business Cards - Cotton, Rounded Corners
                                        </option>
                                    </optgroup>
                                    <optgroup label="Square Business Cards">
                                        <option value="businesscard_square_classic">
                                            Square Business Cards - Original, Matte or Gloss
                                        </option>
                                        <option value="businesscard_square_classic_rounded">
                                            Square Business Cards - Original, Rounded Corners, Matte or
                                            Gloss
                                        </option>
                                        <option value="businesscard_square_super">
                                            Square Business Cards - Super, High Gloss or Soft Touch{" "}
                                        </option>
                                        <option value="businesscard_square_super_rounded">
                                            Square Business Cards - Super, Rounded Corners, High Gloss or
                                            Soft Touch
                                        </option>
                                        <option value="businesscard_square_quadplex_black">
                                            Square Business Cards - Luxe{" "}
                                        </option>
                                        <option value="businesscard_square_quadplex_black_rounded">
                                            Square Business Cards - Luxe, Rounded Corners
                                        </option>
                                        <option value="businesscard_square_super_foil_gold">
                                            Square Business Cards - Gold Foil{" "}
                                        </option>
                                        <option value="businesscard_square_super_rounded_foil_gold">
                                            Square Business Cards - Gold Foil, Rounded Corners
                                        </option>
                                        <option value="businesscard_square_super_foil_silver">
                                            Square Business Cards - Silver Foil{" "}
                                        </option>
                                        <option value="businesscard_square_super_rounded_foil_silver">
                                            Square Business Cards - Silver Foil, Rounded Corners
                                        </option>
                                        <option value="businesscard_square_super_spot_uv_2d">
                                            Square Business Cards - Spot Gloss or Raised Spot Gloss
                                        </option>
                                        <option value="businesscard_square_super_rounded_spot_uv_2d">
                                            Square Business Cards - Spot Gloss or Raised Spot Gloss,
                                            Rounded Corners
                                        </option>
                                        <option value="businesscard_square_cotton">
                                            Square Business Cards - Cotton
                                        </option>
                                        <option value="businesscard_square_cotton_rounded">
                                            Square Business Cards - Cotton, Rounded Corners
                                        </option>
                                    </optgroup>
                                    <optgroup label="MiniCards">
                                        <option value="minicard_rounded">
                                            MiniCards - Original, Rounded Corners, Matte or Gloss
                                        </option>
                                        <option value="minicard_quadplex_black">
                                            MiniCards - Luxe
                                        </option>
                                        <option value="minicard">
                                            MiniCards - Original, Matte or Gloss
                                        </option>
                                    </optgroup>
                                    <optgroup label="Flyers">
                                        <option value="flyer_a6_gloss">Flyers - Small, Gloss</option>
                                        <option value="flyer_a6_matte">Flyers - Small, Matte</option>
                                        <option value="flyer_a6_pearlescent">
                                            Flyers - Small, Pearlescent
                                        </option>
                                        <option value="flyer_half_page_us_gloss">
                                            Flyers - Half Page, Gloss
                                        </option>
                                        <option value="flyer_half_page_us_matte">
                                            Flyers - Half Page, Matte
                                        </option>
                                        <option value="flyer_half_page_us_pearlescent">
                                            Flyers - Half Page, Pearlescent
                                        </option>
                                        <option value="flyer_us_letter_gloss">
                                            Flyers - US Letter, Gloss
                                        </option>
                                        <option value="flyer_us_letter_matte">
                                            Flyers - US Letter, Matte
                                        </option>
                                        <option value="flyer_us_letter_pearlescent">
                                            Flyers - US Letter, Pearlescent
                                        </option>
                                        <option value="flyer_square_gloss">
                                            Flyers - Square, Gloss
                                        </option>
                                        <option value="flyer_square_matte">
                                            Flyers - Square, Matte
                                        </option>
                                        <option value="flyer_square_pearlescent">
                                            Flyers - Square, Pearlescent
                                        </option>
                                        <option value="flyer_dl_us_gloss">Flyers - Long, Gloss </option>
                                        <option value="flyer_dl_us_matte">Flyers - Long, Matte</option>
                                        <option value="flyer_dl_us_pearlescent">
                                            Flyers - Long, Pearlescent
                                        </option>
                                    </optgroup>
                                    <optgroup label="Postcards">
                                        <option value="postcard_matte_single">
                                            Postcards - Small Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_super_single">
                                            Postcards - Small Super
                                        </option>
                                        <option value="postcard_quadplex_black">
                                            Postcards - Small Luxe
                                        </option>
                                        <option value="postcard_standard_matte_single">
                                            Postcards - Standard Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_standard_super_single">
                                            Postcards - Standard Super
                                        </option>
                                        <option value="postcard_standard_quadplex_black">
                                            Postcards - Standard Luxe
                                        </option>
                                        <option value="postcard_square_matte_single">
                                            Postcards - Square Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_square_super_single">
                                            Postcards - Square Super
                                        </option>
                                        <option value="postcard_square_quadplex_black">
                                            Postcards - Square Luxe
                                        </option>
                                        <option value="postcard_dl_us_matte_single">
                                            Postcards - Rack Card Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_dl_us_super_single">
                                            Postcards - Rack Card Super
                                        </option>
                                        <option value="postcard_dl_us_quadplex_black">
                                            Postcards - Rack Card Luxe
                                        </option>
                                        <option value="postcard_medium_matte_single">
                                            Postcards - Medium Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_medium_super_single">
                                            Postcards - Medium Super
                                        </option>
                                        <option value="postcard_medium_quadplex_black">
                                            Postcards - Medium Luxe
                                        </option>
                                        <option value="postcard_half_page_us_matte_single">
                                            Postcards - Half Page Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_half_page_us_super_single">
                                            Postcards - Half Page Super
                                        </option>
                                        <option value="postcard_half_page_us_quadplex_black">
                                            Postcards - Half Page Luxe
                                        </option>
                                        <option value="postcard_large_matte_single">
                                            Postcards - Large Original, Matte or Gloss
                                        </option>
                                        <option value="postcard_large_super_single">
                                            Postcards - Large Super
                                        </option>
                                        <option value="postcard_large_quadplex_black">
                                            Postcards - Large Luxe
                                        </option>
                                        <option value="postcard_a6_foil_gold">
                                            Postcards - Small Gold Foil
                                        </option>
                                        <option value="postcard_standard_foil_gold">
                                            Postcards - Standard Gold Foil
                                        </option>
                                        <option value="postcard_square_foil_gold">
                                            Postcards - Square Gold Foil
                                        </option>
                                        <option value="postcard_rack_foil_gold">
                                            Postcards - Rack Card Gold Foil
                                        </option>
                                        <option value="postcard_medium_foil_gold">
                                            Postcards - Medium Gold Foil
                                        </option>
                                        <option value="postcard_half_page_foil_gold">
                                            Postcards - Half Page Gold Foil
                                        </option>
                                        <option value="postcard_large_foil_gold">
                                            Postcards - Large Gold Foil
                                        </option>
                                        <option value="postcard_a6_foil_silver">
                                            Postcards - Small Silver Foil
                                        </option>
                                        <option value="postcard_standard_foil_silver">
                                            Postcards - Standard Silver Foil
                                        </option>
                                        <option value="postcard_square_foil_silver">
                                            Postcards - Square Silver Foil
                                        </option>
                                        <option value="postcard_rack_foil_silver">
                                            Postcards - Rack Card Silver Foil
                                        </option>
                                        <option value="postcard_medium_foil_silver">
                                            Postcards - Medium Silver Foil
                                        </option>
                                        <option value="postcard_half_page_foil_silver">
                                            Postcards - Half Page Silver Foil
                                        </option>
                                        <option value="postcard_large_foil_silver">
                                            Postcards - Large Silver Foil
                                        </option>
                                    </optgroup>
                                    <optgroup label="Notecards">
                                        <option value="notecard_quadplex_black">
                                            Notecards - Luxe
                                        </option>
                                    </optgroup>
                                    <optgroup label="Greeting Cards">
                                        <option value="holidaycard">Greeting Cards</option>
                                    </optgroup>
                                    <optgroup label="Stickers">
                                        <option value="sticker_book">StickerBooks</option>
                                        <option value="sticker_round">Round Stickers</option>
                                        <option value="sticker_rectangular">
                                            Rectangular Stickers
                                        </option>
                                        <option value="return_address_labels">
                                            Return Address Labels
                                        </option>
                                        <option value="sticker_large_round">
                                            Large Round Stickers
                                        </option>
                                        <option value="sticker_large_rectangular">
                                            Large Rectangular Stickers
                                        </option>
                                    </optgroup>
                                    <optgroup label="Letterhead">
                                        <option value="letterhead_us_letter_classic">
                                            Letterhead - Original
                                        </option>
                                        <option value="letterhead_us_letter_luxe">
                                            Letterhead - Luxe
                                        </option>
                                    </optgroup>
                                </select>
                                <span className="input-group-addon">×</span>
                                <select className="printQuantity"></select>
                            </div>
                        </div>
                        <h2 className="underline-dotted">Cost Calculator</h2>
                        <div className="panel panel-default cost-calculator">
                            <div className="panel-body">
                                <form className="form">
                                    <label htmlFor="select">I want a pack of:</label>
                                    <div id="productItems">
                                        <div className="form-group print">
                                            <select className="printSelect" style={{ display: "none" }}>
                                                <optgroup label="Business Cards ">
                                                    <option value="businesscard_classic">
                                                        Business Cards - Original, Matte or Gloss
                                                    </option>
                                                    <option value="businesscard_classic_rounded">
                                                        Business Cards - Original, Rounded Corners, Matte or
                                                        Gloss
                                                    </option>
                                                    <option value="businesscard_super">
                                                        Business Cards - Super, High Gloss or Soft Touch{" "}
                                                    </option>
                                                    <option value="businesscard_super_rounded">
                                                        Business Cards - Super, Rounded Corners, High Gloss or
                                                        Soft Touch
                                                    </option>
                                                    <option value="businesscard_quadplex_black">
                                                        Business Cards - Luxe{" "}
                                                    </option>
                                                    <option value="businesscard_quadplex_black_rounded">
                                                        Business Cards - Luxe, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_super_foil_gold">
                                                        Business Cards - Gold Foil{" "}
                                                    </option>
                                                    <option value="businesscard_super_rounded_foil_gold">
                                                        Business Cards - Gold Foil, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_super_foil_silver">
                                                        Business Cards - Silver Foil{" "}
                                                    </option>
                                                    <option value="businesscard_super_rounded_foil_silver">
                                                        Business Cards - Silver Foil, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_quadplex_white_letterpress">
                                                        Business Cards - Letterpress{" "}
                                                    </option>
                                                    <option value="businesscard_super_spot_uv_2d">
                                                        Business Cards - Spot Gloss or Raised Spot Gloss
                                                    </option>
                                                    <option value="businesscard_super_rounded_spot_uv_2d">
                                                        Business Cards - Spot Gloss or Raised Spot Gloss,
                                                        Rounded Corners{" "}
                                                    </option>
                                                    <option value="businesscard_cotton">
                                                        Business Cards - Cotton
                                                    </option>
                                                    <option value="businesscard_cotton_rounded">
                                                        Business Cards - Cotton, Rounded Corners
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Square Business Cards">
                                                    <option value="businesscard_square_classic">
                                                        Square Business Cards - Original, Matte or Gloss
                                                    </option>
                                                    <option value="businesscard_square_classic_rounded">
                                                        Square Business Cards - Original, Rounded Corners, Matte
                                                        or Gloss
                                                    </option>
                                                    <option value="businesscard_square_super">
                                                        Square Business Cards - Super, High Gloss or Soft Touch{" "}
                                                    </option>
                                                    <option value="businesscard_square_super_rounded">
                                                        Square Business Cards - Super, Rounded Corners, High
                                                        Gloss or Soft Touch
                                                    </option>
                                                    <option value="businesscard_square_quadplex_black">
                                                        Square Business Cards - Luxe{" "}
                                                    </option>
                                                    <option value="businesscard_square_quadplex_black_rounded">
                                                        Square Business Cards - Luxe, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_square_super_foil_gold">
                                                        Square Business Cards - Gold Foil{" "}
                                                    </option>
                                                    <option value="businesscard_square_super_rounded_foil_gold">
                                                        Square Business Cards - Gold Foil, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_square_super_foil_silver">
                                                        Square Business Cards - Silver Foil{" "}
                                                    </option>
                                                    <option value="businesscard_square_super_rounded_foil_silver">
                                                        Square Business Cards - Silver Foil, Rounded Corners
                                                    </option>
                                                    <option value="businesscard_square_super_spot_uv_2d">
                                                        Square Business Cards - Spot Gloss or Raised Spot Gloss
                                                    </option>
                                                    <option value="businesscard_square_super_rounded_spot_uv_2d">
                                                        Square Business Cards - Spot Gloss or Raised Spot Gloss,
                                                        Rounded Corners
                                                    </option>
                                                    <option value="businesscard_square_cotton">
                                                        Square Business Cards - Cotton
                                                    </option>
                                                    <option value="businesscard_square_cotton_rounded">
                                                        Square Business Cards - Cotton, Rounded Corners
                                                    </option>
                                                </optgroup>
                                                <optgroup label="MiniCards">
                                                    <option value="minicard_rounded">
                                                        MiniCards - Original, Rounded Corners, Matte or Gloss
                                                    </option>
                                                    <option value="minicard_quadplex_black">
                                                        MiniCards - Luxe
                                                    </option>
                                                    <option value="minicard">
                                                        MiniCards - Original, Matte or Gloss
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Flyers">
                                                    <option value="flyer_a6_gloss">
                                                        Flyers - Small, Gloss
                                                    </option>
                                                    <option value="flyer_a6_matte">
                                                        Flyers - Small, Matte
                                                    </option>
                                                    <option value="flyer_a6_pearlescent">
                                                        Flyers - Small, Pearlescent
                                                    </option>
                                                    <option value="flyer_half_page_us_gloss">
                                                        Flyers - Half Page, Gloss
                                                    </option>
                                                    <option value="flyer_half_page_us_matte">
                                                        Flyers - Half Page, Matte
                                                    </option>
                                                    <option value="flyer_half_page_us_pearlescent">
                                                        Flyers - Half Page, Pearlescent
                                                    </option>
                                                    <option value="flyer_us_letter_gloss">
                                                        Flyers - US Letter, Gloss
                                                    </option>
                                                    <option value="flyer_us_letter_matte">
                                                        Flyers - US Letter, Matte
                                                    </option>
                                                    <option value="flyer_us_letter_pearlescent">
                                                        Flyers - US Letter, Pearlescent
                                                    </option>
                                                    <option value="flyer_square_gloss">
                                                        Flyers - Square, Gloss
                                                    </option>
                                                    <option value="flyer_square_matte">
                                                        Flyers - Square, Matte
                                                    </option>
                                                    <option value="flyer_square_pearlescent">
                                                        Flyers - Square, Pearlescent
                                                    </option>
                                                    <option value="flyer_dl_us_gloss">
                                                        Flyers - Long, Gloss{" "}
                                                    </option>
                                                    <option value="flyer_dl_us_matte">
                                                        Flyers - Long, Matte
                                                    </option>
                                                    <option value="flyer_dl_us_pearlescent">
                                                        Flyers - Long, Pearlescent
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Postcards">
                                                    <option value="postcard_matte_single">
                                                        Postcards - Small Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_super_single">
                                                        Postcards - Small Super
                                                    </option>
                                                    <option value="postcard_quadplex_black">
                                                        Postcards - Small Luxe
                                                    </option>
                                                    <option value="postcard_standard_matte_single">
                                                        Postcards - Standard Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_standard_super_single">
                                                        Postcards - Standard Super
                                                    </option>
                                                    <option value="postcard_standard_quadplex_black">
                                                        Postcards - Standard Luxe
                                                    </option>
                                                    <option value="postcard_square_matte_single">
                                                        Postcards - Square Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_square_super_single">
                                                        Postcards - Square Super
                                                    </option>
                                                    <option value="postcard_square_quadplex_black">
                                                        Postcards - Square Luxe
                                                    </option>
                                                    <option value="postcard_dl_us_matte_single">
                                                        Postcards - Rack Card Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_dl_us_super_single">
                                                        Postcards - Rack Card Super
                                                    </option>
                                                    <option value="postcard_dl_us_quadplex_black">
                                                        Postcards - Rack Card Luxe
                                                    </option>
                                                    <option value="postcard_medium_matte_single">
                                                        Postcards - Medium Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_medium_super_single">
                                                        Postcards - Medium Super
                                                    </option>
                                                    <option value="postcard_medium_quadplex_black">
                                                        Postcards - Medium Luxe
                                                    </option>
                                                    <option value="postcard_half_page_us_matte_single">
                                                        Postcards - Half Page Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_half_page_us_super_single">
                                                        Postcards - Half Page Super
                                                    </option>
                                                    <option value="postcard_half_page_us_quadplex_black">
                                                        Postcards - Half Page Luxe
                                                    </option>
                                                    <option value="postcard_large_matte_single">
                                                        Postcards - Large Original, Matte or Gloss
                                                    </option>
                                                    <option value="postcard_large_super_single">
                                                        Postcards - Large Super
                                                    </option>
                                                    <option value="postcard_large_quadplex_black">
                                                        Postcards - Large Luxe
                                                    </option>
                                                    <option value="postcard_a6_foil_gold">
                                                        Postcards - Small Gold Foil
                                                    </option>
                                                    <option value="postcard_standard_foil_gold">
                                                        Postcards - Standard Gold Foil
                                                    </option>
                                                    <option value="postcard_square_foil_gold">
                                                        Postcards - Square Gold Foil
                                                    </option>
                                                    <option value="postcard_rack_foil_gold">
                                                        Postcards - Rack Card Gold Foil
                                                    </option>
                                                    <option value="postcard_medium_foil_gold">
                                                        Postcards - Medium Gold Foil
                                                    </option>
                                                    <option value="postcard_half_page_foil_gold">
                                                        Postcards - Half Page Gold Foil
                                                    </option>
                                                    <option value="postcard_large_foil_gold">
                                                        Postcards - Large Gold Foil
                                                    </option>
                                                    <option value="postcard_a6_foil_silver">
                                                        Postcards - Small Silver Foil
                                                    </option>
                                                    <option value="postcard_standard_foil_silver">
                                                        Postcards - Standard Silver Foil
                                                    </option>
                                                    <option value="postcard_square_foil_silver">
                                                        Postcards - Square Silver Foil
                                                    </option>
                                                    <option value="postcard_rack_foil_silver">
                                                        Postcards - Rack Card Silver Foil
                                                    </option>
                                                    <option value="postcard_medium_foil_silver">
                                                        Postcards - Medium Silver Foil
                                                    </option>
                                                    <option value="postcard_half_page_foil_silver">
                                                        Postcards - Half Page Silver Foil
                                                    </option>
                                                    <option value="postcard_large_foil_silver">
                                                        Postcards - Large Silver Foil
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Notecards">
                                                    <option value="notecard_quadplex_black">
                                                        Notecards - Luxe
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Greeting Cards">
                                                    <option value="holidaycard">Greeting Cards</option>
                                                </optgroup>
                                                <optgroup label="Stickers">
                                                    <option value="sticker_book">StickerBooks</option>
                                                    <option value="sticker_round">Round Stickers</option>
                                                    <option value="sticker_rectangular">
                                                        Rectangular Stickers
                                                    </option>
                                                    <option value="return_address_labels">
                                                        Return Address Labels
                                                    </option>
                                                    <option value="sticker_large_round">
                                                        Large Round Stickers
                                                    </option>
                                                    <option value="sticker_large_rectangular">
                                                        Large Rectangular Stickers
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Letterhead">
                                                    <option value="letterhead_us_letter_classic">
                                                        Letterhead - Original
                                                    </option>
                                                    <option value="letterhead_us_letter_luxe">
                                                        Letterhead - Luxe
                                                    </option>
                                                </optgroup>
                                            </select>
                                            <div
                                                className="chosen-container chosen-container-single"
                                                style={{ width: 404 }}
                                                title=""
                                            >
                                                <a className="chosen-single" tabIndex={-1}>
                                                    <span>Business Cards - Original, Matte or Gloss</span>
                                                    <div>
                                                        <b />
                                                    </div>
                                                </a>
                                                <div className="chosen-drop">
                                                    <div className="chosen-search">
                                                        <input type="text" autoComplete="off" />
                                                    </div>
                                                    <ul className="chosen-results" />
                                                </div>
                                            </div>
                                            <span className="input-group-addon">×</span>
                                            <select className="printQuantity" style={{ display: "none" }}>
                                                <option value="1|50" selected="">
                                                    50 cards
                                                </option>
                                                <option value="2|50">100 cards</option>
                                                <option value="3|50">150 cards</option>
                                                <option value="1|200">200 cards</option>
                                                <option value="2|200">400 cards</option>
                                                <option value="3|200">600 cards</option>
                                                <option value="4|200">800 cards</option>
                                                <option value="5|200">1000 cards</option>
                                                <option value="6|200">1200 cards</option>
                                                <option value="8|200">1600 cards</option>
                                                <option value="10|200">2000 cards</option>
                                                <option value="15|200">3000 cards</option>
                                                <option value="20|200">4000 cards</option>
                                                <option value="25|200">5000 cards</option>
                                                <option value="30|200">6000 cards</option>
                                                <option value="40|200">8000 cards</option>
                                            </select>
                                            <div
                                                className="chosen-container chosen-container-single"
                                                style={{ width: 251 }}
                                                title=""
                                            >
                                                <a className="chosen-single" tabIndex={-1}>
                                                    <span>50 cards</span>
                                                    <div>
                                                        <b />
                                                    </div>
                                                </a>
                                                <div className="chosen-drop">
                                                    <div className="chosen-search">
                                                        <input type="text" autoComplete="off" />
                                                    </div>
                                                    <ul className="chosen-results" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addItem">
                                        <a
                                            id="addPrintProduct"
                                            data-webdriver-automation-id="add-print-product"
                                        >
                                            Add another print product
                                        </a>
                                    </div>
                                    <div className="addItem">
                                        <a
                                            id="addAccessory"
                                            data-webdriver-automation-id="add-accessory"
                                        >
                                            Add an accessory
                                        </a>
                                    </div>
                                    <div id="deliverTo" className="form-group">
                                        <p>Delivering To</p>
                                        <select
                                            name="country"
                                            id="ddlShippingCountry"
                                            style={{ display: "none" }}
                                        >
                                            <option value="GBR">United Kingdom</option>
                                            <option value="USA">United States</option>
                                            <option value="ALB">Albania</option>
                                            <option value="AND">Andorra</option>
                                            <option value="AGO">Angola</option>
                                            <option value="AIA">Anguilla</option>
                                            <option value="ATG">Antigua and Barbuda</option>
                                            <option value="ARG">Argentina</option>
                                            <option value="ARM">Armenia</option>
                                            <option value="ABW">Aruba</option>
                                            <option value="ACS">Ascension Island</option>
                                            <option value="AUS">Australia</option>
                                            <option value="AUT">Austria</option>
                                            <option value="AZE">Azerbaijan</option>
                                            <option value="BHS">Bahamas</option>
                                            <option value="BHR">Bahrain</option>
                                            <option value="BGD">Bangladesh</option>
                                            <option value="BRB">Barbados</option>
                                            <option value="BEL">Belgium</option>
                                            <option value="BLZ">Belize</option>
                                            <option value="BEN">Benin</option>
                                            <option value="BMU">Bermuda</option>
                                            <option value="BTN">Bhutan</option>
                                            <option value="BOL">Bolivia</option>
                                            <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BIH">Bosnia and Herzegovina</option>
                                            <option value="BWA">Botswana</option>
                                            <option value="BRA">Brazil</option>
                                            <option value="BRN">Brunei Darussalam</option>
                                            <option value="BGR">Bulgaria</option>
                                            <option value="BFA">Burkina Faso</option>
                                            <option value="BDI">Burundi</option>
                                            <option value="KHM">Cambodia</option>
                                            <option value="CMR">Cameroon</option>
                                            <option value="CAN">Canada</option>
                                            <option value="CPV">Cape Verde</option>
                                            <option value="CYM">Cayman Islands</option>
                                            <option value="CAF">Central African Republic</option>
                                            <option value="TCD">Chad</option>
                                            <option value="CHL">Chile</option>
                                            <option value="CHN">China</option>
                                            <option value="COL">Colombia</option>
                                            <option value="COM">Comoros</option>
                                            <option value="COG">Congo</option>
                                            <option value="COD">
                                                Congo, the Democratic Republic of the
                                            </option>
                                            <option value="CRI">Costa Rica</option>
                                            <option value="CIV">Cote D'Ivoire</option>
                                            <option value="HRV">Croatia</option>
                                            <option value="CUW">Curaçao</option>
                                            <option value="CYP">Cyprus</option>
                                            <option value="CZE">Czech Republic</option>
                                            <option value="DNK">Denmark</option>
                                            <option value="DJI">Djibouti</option>
                                            <option value="DMA">Dominica</option>
                                            <option value="DOM">Dominican Republic</option>
                                            <option value="ECU">Ecuador</option>
                                            <option value="EGY">Egypt</option>
                                            <option value="SLV">El Salvador</option>
                                            <option value="GNQ">Equatorial Guinea</option>
                                            <option value="ERI">Eritrea</option>
                                            <option value="EST">Estonia</option>
                                            <option value="ETH">Ethiopia</option>
                                            <option value="FRO">Faroe Islands</option>
                                            <option value="FJI">Fiji</option>
                                            <option value="FIN">Finland</option>
                                            <option value="FRA">France</option>
                                            <option value="GUF">French Guiana</option>
                                            <option value="PYF">French Polynesia</option>
                                            <option value="GAB">Gabon</option>
                                            <option value="GMB">Gambia</option>
                                            <option value="GEO">Georgia</option>
                                            <option value="DEU">Germany</option>
                                            <option value="GHA">Ghana</option>
                                            <option value="GIB">Gibraltar</option>
                                            <option value="GRC">Greece</option>
                                            <option value="GRL">Greenland</option>
                                            <option value="GRD">Grenada</option>
                                            <option value="GLP">Guadeloupe</option>
                                            <option value="GTM">Guatemala</option>
                                            <option value="GIN">Guinea</option>
                                            <option value="GNB">Guinea-Bissau</option>
                                            <option value="GUY">Guyana</option>
                                            <option value="HTI">Haiti</option>
                                            <option value="HND">Honduras</option>
                                            <option value="HKG">Hong Kong</option>
                                            <option value="HUN">Hungary</option>
                                            <option value="ISL">Iceland</option>
                                            <option value="IND">India</option>
                                            <option value="IDN">Indonesia</option>
                                            <option value="IRQ">Iraq</option>
                                            <option value="IRL">Ireland</option>
                                            <option value="ISR">Israel</option>
                                            <option value="ITA">Italy</option>
                                            <option value="JAM">Jamaica</option>
                                            <option value="JPN">Japan</option>
                                            <option value="JOR">Jordan</option>
                                            <option value="KAZ">Kazakhstan</option>
                                            <option value="KEN">Kenya</option>
                                            <option value="KIR">Kiribati</option>
                                            <option value="KOR">Korea, Republic of</option>
                                            <option value="KWT">Kuwait</option>
                                            <option value="KGZ">Kyrgyzstan</option>
                                            <option value="LAO">Lao People's Democratic Republic</option>
                                            <option value="LVA">Latvia</option>
                                            <option value="LBN">Lebanon</option>
                                            <option value="LSO">Lesotho</option>
                                            <option value="LBR">Liberia</option>
                                            <option value="LIE">Liechtenstein</option>
                                            <option value="LTU">Lithuania</option>
                                            <option value="LUX">Luxembourg</option>
                                            <option value="MAC">Macao</option>
                                            <option value="MKD">
                                                Macedonia, the Former Yugoslav Republic of
                                            </option>
                                            <option value="MDG">Madagascar</option>
                                            <option value="MWI">Malawi</option>
                                            <option value="MYS">Malaysia</option>
                                            <option value="MDV">Maldives</option>
                                            <option value="MLI">Mali</option>
                                            <option value="MLT">Malta</option>
                                            <option value="MTQ">Martinique</option>
                                            <option value="MRT">Mauritania</option>
                                            <option value="MUS">Mauritius</option>
                                            <option value="MEX">Mexico</option>
                                            <option value="MDA">Moldova, Republic of</option>
                                            <option value="MNG">Mongolia</option>
                                            <option value="MSR">Montserrat</option>
                                            <option value="MAR">Morocco</option>
                                            <option value="MOZ">Mozambique</option>
                                            <option value="NAM">Namibia</option>
                                            <option value="NPL">Nepal</option>
                                            <option value="NLD">Netherlands</option>
                                            <option value="NCL">New Caledonia</option>
                                            <option value="NZL">New Zealand</option>
                                            <option value="NIC">Nicaragua</option>
                                            <option value="NER">Niger</option>
                                            <option value="NOR">Norway</option>
                                            <option value="OMN">Oman</option>
                                            <option value="PAK">Pakistan</option>
                                            <option value="PAN">Panama</option>
                                            <option value="PNG">Papua New Guinea</option>
                                            <option value="PRY">Paraguay</option>
                                            <option value="PER">Peru</option>
                                            <option value="POL">Poland</option>
                                            <option value="PRT">Portugal</option>
                                            <option value="QAT">Qatar</option>
                                            <option value="MNE">Republic of Montenegro</option>
                                            <option value="SRB">Republic of Serbia</option>
                                            <option value="REU">Reunion</option>
                                            <option value="ROU">Romania</option>
                                            <option value="RWA">Rwanda</option>
                                            <option value="KNA">Saint Kitts and Nevis</option>
                                            <option value="LCA">Saint Lucia</option>
                                            <option value="VCT">Saint Vincent and the Grenadines</option>
                                            <option value="WSM">Samoa</option>
                                            <option value="SMR">San Marino</option>
                                            <option value="SAU">Saudi Arabia</option>
                                            <option value="SEN">Senegal</option>
                                            <option value="SYC">Seychelles</option>
                                            <option value="SLE">Sierra Leone</option>
                                            <option value="SGP">Singapore</option>
                                            <option value="SXM">Sint Maarten (Dutch part)</option>
                                            <option value="SVK">Slovakia</option>
                                            <option value="SVN">Slovenia</option>
                                            <option value="SLB">Solomon Islands</option>
                                            <option value="ZAF">South Africa</option>
                                            <option value="ESP">Spain</option>
                                            <option value="LKA">Sri Lanka</option>
                                            <option value="SUR">Suriname</option>
                                            <option value="SWZ">Swaziland</option>
                                            <option value="SWE">Sweden</option>
                                            <option value="CHE">Switzerland</option>
                                            <option value="TWN">Taiwan</option>
                                            <option value="TJK">Tajikistan</option>
                                            <option value="TZA">Tanzania, United Republic of</option>
                                            <option value="THA">Thailand</option>
                                            <option value="TGO">Togo</option>
                                            <option value="TON">Tonga</option>
                                            <option value="TTO">Trinidad and Tobago</option>
                                            <option value="TUN">Tunisia</option>
                                            <option value="TUR">Turkey</option>
                                            <option value="TKM">Turkmenistan</option>
                                            <option value="TCA">Turks and Caicos Islands</option>
                                            <option value="TUV">Tuvalu</option>
                                            <option value="UGA">Uganda</option>
                                            <option value="UKR">Ukraine</option>
                                            <option value="ARE">United Arab Emirates</option>
                                            <option value="URY">Uruguay</option>
                                            <option value="UZB">Uzbekistan</option>
                                            <option value="VUT">Vanuatu</option>
                                            <option value="VNM">Viet Nam</option>
                                            <option value="VGB">Virgin Islands, British</option>
                                            <option value="YEM">Yemen</option>
                                            <option value="ZMB">Zambia</option>
                                        </select>
                                        <div
                                            className="chosen-container chosen-container-single"
                                            style={{ width: 310 }}
                                            title=""
                                            id="ddlShippingCountry_chosen"
                                        >
                                            <a className="chosen-single" tabIndex={-1}>
                                                <span>India</span>
                                                <div>
                                                    <b />
                                                </div>
                                            </a>
                                            <div className="chosen-drop">
                                                <div className="chosen-search">
                                                    <input type="text" autoComplete="off" />
                                                </div>
                                                <ul className="chosen-results" />
                                            </div>
                                        </div>
                                        <span
                                            id="divShippingStateCAN"
                                            className="stateSelectorContainer collapse"
                                            style={{ display: "none" }}
                                        >
                                            <select
                                                name="stateCAN"
                                                id="stateCAN"
                                                className="stateSelector"
                                                style={{ display: "none" }}
                                            >
                                                <option value="--">--</option>
                                                <option value="AB">AB</option>
                                                <option value="BC">BC</option>
                                                <option value="MB">MB</option>
                                                <option value="NB">NB</option>
                                                <option value="NL">NL</option>
                                                <option value="NS">NS</option>
                                                <option value="NT">NT</option>
                                                <option value="NU">NU</option>
                                                <option value="ON">ON</option>
                                                <option value="PE">PE</option>
                                                <option value="QC">QC</option>
                                                <option value="SK">SK</option>
                                                <option value="YT">YT</option>
                                            </select>
                                            <div
                                                className="chosen-container chosen-container-single"
                                                style={{ width: "10%" }}
                                                title=""
                                                id="stateCAN_chosen"
                                            >
                                                <a className="chosen-single" tabIndex={-1}>
                                                    <span>--</span>
                                                    <div>
                                                        <b />
                                                    </div>
                                                </a>
                                                <div className="chosen-drop">
                                                    <div className="chosen-search">
                                                        <input type="text" autoComplete="off" />
                                                    </div>
                                                    <ul className="chosen-results" />
                                                </div>
                                            </div>
                                        </span>
                                        <span
                                            id="divShippingStateUSA"
                                            className="stateSelectorContainer collapse"
                                            style={{ display: "none" }}
                                        >
                                            <select
                                                name="stateUSA"
                                                id="stateUSA"
                                                className="stateSelector"
                                                style={{ display: "none" }}
                                            >
                                                <option value="--">--</option>
                                                <option value="AA">AA</option>
                                                <option value="AE">AE</option>
                                                <option value="AK">AK</option>
                                                <option value="AL">AL</option>
                                                <option value="AP">AP</option>
                                                <option value="AR">AR</option>
                                                <option value="AS">AS</option>
                                                <option value="AZ">AZ</option>
                                                <option value="CA">CA</option>
                                                <option value="CO">CO</option>
                                                <option value="CT">CT</option>
                                                <option value="DC">DC</option>
                                                <option value="DE">DE</option>
                                                <option value="FL">FL</option>
                                                <option value="FM">FM</option>
                                                <option value="GA">GA</option>
                                                <option value="GU">GU</option>
                                                <option value="HI">HI</option>
                                                <option value="IA">IA</option>
                                                <option value="ID">ID</option>
                                                <option value="IL">IL</option>
                                                <option value="IN">IN</option>
                                                <option value="KS">KS</option>
                                                <option value="KY">KY</option>
                                                <option value="LA">LA</option>
                                                <option value="MA">MA</option>
                                                <option value="MD">MD</option>
                                                <option value="ME">ME</option>
                                                <option value="MH">MH</option>
                                                <option value="MI">MI</option>
                                                <option value="MN">MN</option>
                                                <option value="MO">MO</option>
                                                <option value="MP">MP</option>
                                                <option value="MS">MS</option>
                                                <option value="MT">MT</option>
                                                <option value="NC">NC</option>
                                                <option value="ND">ND</option>
                                                <option value="NE">NE</option>
                                                <option value="NH">NH</option>
                                                <option value="NJ">NJ</option>
                                                <option value="NM">NM</option>
                                                <option value="NV">NV</option>
                                                <option value="NY">NY</option>
                                                <option value="OH">OH</option>
                                                <option value="OK">OK</option>
                                                <option value="OR">OR</option>
                                                <option value="PA">PA</option>
                                                <option value="PR">PR</option>
                                                <option value="PW">PW</option>
                                                <option value="RI">RI</option>
                                                <option value="SC">SC</option>
                                                <option value="SD">SD</option>
                                                <option value="TN">TN</option>
                                                <option value="TX">TX</option>
                                                <option value="UT">UT</option>
                                                <option value="VA">VA</option>
                                                <option value="VI">VI</option>
                                                <option value="VT">VT</option>
                                                <option value="WA">WA</option>
                                                <option value="WI">WI</option>
                                                <option value="WV">WV</option>
                                                <option value="WY">WY</option>
                                            </select>
                                            <div
                                                className="chosen-container chosen-container-single"
                                                style={{ width: "10%" }}
                                                title=""
                                                id="stateUSA_chosen"
                                            >
                                                <a className="chosen-single" tabIndex={-1}>
                                                    <span>--</span>
                                                    <div>
                                                        <b />
                                                    </div>
                                                </a>
                                                <div className="chosen-drop">
                                                    <div className="chosen-search">
                                                        <input type="text" autoComplete="off" />
                                                    </div>
                                                    <ul className="chosen-results" />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div id="divShippingPostcode" className="form-group collapse">
                                        <p>Delivery Zipcode</p>
                                        <input
                                            id="ddlShippingPostcode"
                                            className="form-control"
                                            maxLength={5}
                                        />
                                    </div>
                                    <div className="buttons clearfix">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            id="calculate"
                                            data-webdriver-automation-id="calculate-button"
                                        >
                                            Calculate
                                        </button>
                                        <div
                                            id="loadingSpinner"
                                            className="calculatorSpinner collapse"
                                            style={{ display: "none" }}
                                        >
                                            <img alt="Loading..." src="/images/80px_spinner.gif" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="noshipping panel-body" style={{ display: "none" }}>
                                <p>
                                    We're sorry but we cannot ship to the destination you've selected.
                                </p>
                            </div>
                            <div className="results panel-body" style={{ overflow: "hidden" }}>
                                <div id="delivery-results" className="table-scroll">
                                    <h2>Delivery options and prices</h2>
                                    <p />
                                    <p className="turnaround-note">
                                        Next day shipping is only available on certain products, if
                                        ordering before 2pm EST.&nbsp;Delivery options are dependent on
                                        the time of the order so may vary slightly from those seen here.
                                        MOO business days are Monday to Friday, excluding bank holidays.
                                        Please note, Next Day Delivery on Business Cards is not
                                        available with any Gloss finishes and is limited on Luxe paper
                                        to black and white seam colours only.
                                    </p>
                                    <table
                                        className="standard"
                                        data-webdriver-automation-id="cost-table"
                                    >
                                        <thead>
                                            <tr>
                                                <th className="turnaround">Delivery Options</th>
                                                <th className="subtotal">Delivery Cost</th>
                                                <th className="shippingtotal">Product Cost</th>
                                                <th className="tax" style={{ display: "none" }}>
                                                    <div className="taxTooltip">
                                                        <span
                                                            title=""
                                                            data-original-title=""
                                                            data-container="body"
                                                            data-toggle="tooltip"
                                                            data-placement="right"
                                                            data-content="By ordering goods from MOO you hereby authorize our licensed customs broker to act on your behalf as your agent with the Canada Border Service Agency, to clear goods through customs, account for all duties and taxes owing and handle any returns and subsequent refunds on your behalf. You understand, waive and transfer your right to receive any refunds of duties and taxes from our licensed customs broker as our agent and understand that duties and taxes will be returned directly to you by MOO."
                                                            className="tooltip-anchor popover-tooltip"
                                                        ></span>
                                                    </div>
                                                    <div className="worldTaxTitle"> Sales Tax </div>
                                                    <div className="canadaTaxTitle"> Handling Fee </div>
                                                    <div className="taxQuantity" />
                                                </th>
                                                <th className="grandtotal">Order Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>3 business days</td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$47.50</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$22.00</span>
                                                    </span>
                                                </td>
                                                <td className="grandTotalPrice">
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$69.50</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6 business days</td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$37.50</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$22.00</span>
                                                    </span>
                                                </td>
                                                <td className="grandTotalPrice">
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$59.50</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>19 business days</td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$16.50</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$22.00</span>
                                                    </span>
                                                </td>
                                                <td className="grandTotalPrice">
                                                    <span className="price-with-tax">
                                                        <span className="price-actual">$38.50</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    id="shop-collection-results"
                                    className="table-scroll"
                                    style={{ display: "none" }}
                                >
                                    <h2>Shop Collection</h2>
                                    <p>
                                        Collect your order from the <a href="/us/shop/">MOO shop</a> in
                                        Shoreditch, London
                                    </p>
                                    <table
                                        className="standard"
                                        data-webdriver-automation-id="collection-table"
                                    >
                                        <thead>
                                            <tr>
                                                <th className="turnaround">Collection</th>
                                                <th className="subtotal">Delivery Cost</th>
                                                <th className="shippingtotal">Product Cost</th>
                                                <th className="tax" style={{ display: "none" }}>
                                                    <div className="taxTooltip">
                                                        <span
                                                            title=""
                                                            data-original-title=""
                                                            data-container="body"
                                                            data-toggle="tooltip"
                                                            data-placement="right"
                                                            data-content="By ordering goods from MOO you hereby authorize our licensed customs broker to act on your behalf as your agent with the Canada Border Service Agency, to clear goods through customs, account for all duties and taxes owing and handle any returns and subsequent refunds on your behalf. You understand, waive and transfer your right to receive any refunds of duties and taxes from our licensed customs broker as our agent and understand that duties and taxes will be returned directly to you by MOO."
                                                            className="tooltip-anchor popover-tooltip"
                                                        ></span>
                                                    </div>
                                                    <div className="worldTaxTitle"> Sales Tax </div>
                                                    <div className="canadaTaxTitle"> Handling Fee </div>
                                                    <div className="taxQuantity" />
                                                </th>
                                                <th className="grandtotal">Order Total</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <p />
                                <div id="divProductButtons" className="buttons clearfix">
                                    <p></p>
                                    <h2 className="underline-dotted">Get started now</h2>
                                    <a
                                        href="https://www.moo.com/us/business-cards"
                                        className="button button-medium button-coloured businesscard_classic businesscard_green businesscard_rounded businesscard_classic_rounded"
                                        style={{ display: "inline-block" }}
                                    >
                                        Make Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/greeting-cards"
                                        className="button button-medium button-coloured holidaycard_classic holidaycard"
                                        style={{ display: "none" }}
                                    >
                                        Make Greeting Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/minicards"
                                        className="button button-medium button-coloured minicard_classic minicard minicard_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make MiniCards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/postcards"
                                        className="button button-medium button-coloured postcard_classic postcard postcard_matte_single postcard_medium_matte_single"
                                        style={{ display: "none" }}
                                    >
                                        Make Postcards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/stickers/stickerbooks"
                                        className="button button-medium button-coloured sticker_classic sticker_book"
                                        style={{ display: "none" }}
                                    >
                                        Make StickerBooks
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/stickers/rectangular"
                                        className="button button-medium button-coloured sticker_label_classic sticker_rectangular"
                                        style={{ display: "none" }}
                                    >
                                        Make Rectangular Stickers/Labels
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/stickers/round"
                                        className="button button-medium button-coloured sticker_round_classic sticker_round"
                                        style={{ display: "none" }}
                                    >
                                        Make Round Stickers/Labels
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/luxe"
                                        className="button button-medium button-coloured businesscard_quadplex_black businesscard_quadplex_black_rounded"
                                        style={{ display: "none" }}
                                    >
                                        Make Luxe Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/minicards"
                                        className="button button-medium button-coloured minicard_quadplex_black"
                                        style={{ display: "none" }}
                                    >
                                        Make Luxe Mini Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/postcards/luxe"
                                        className="button button-medium button-coloured postcard_quadplex_black postcard_medium_quadplex_black"
                                        style={{ display: "none" }}
                                    >
                                        Make Luxe Postcards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/flyers/half-page"
                                        className="button button-medium button-coloured flyer_half_page_us_matte flyer_half_page_us_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make 1/2 Page Flyers
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/flyers/long"
                                        className="button button-medium button-coloured flyer_dl_us_matte flyer_dl_us_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make 1/3 Page Flyers
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/flyers/small"
                                        className="button button-medium button-coloured flyer_a6_matte flyer_a6_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make Small Flyers
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/flyers/square"
                                        className="button button-medium button-coloured flyer_square_matte flyer_square_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make Square Flyers
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/flyers/us-letter"
                                        className="button button-medium button-coloured flyer_us_letter_matte flyer_us_letter_gloss"
                                        style={{ display: "none" }}
                                    >
                                        Make US Letter Flyers
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/letterhead"
                                        className="button button-medium button-coloured letterhead_us_letter_classic"
                                        style={{ display: "none" }}
                                    >
                                        Make US Letter Letterheads
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/letterhead"
                                        className="button button-medium button-coloured letterhead_us_letter_luxe"
                                        style={{ display: "none" }}
                                    >
                                        Make Luxe US Letter Letterheads
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/square"
                                        className="button button-medium button-coloured businesscard_square_classic businesscard_square_green businesscard_square_green_rounded"
                                        style={{ display: "none" }}
                                    >
                                        Make Square Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/square"
                                        className="button button-medium button-coloured businesscard_square_quadplex_black businesscard_square_quadplex_black_rounded"
                                        style={{ display: "none" }}
                                    >
                                        Make Square Luxe Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/letterpress"
                                        className="button button-medium button-coloured businesscard_quadplex_white_letterpress"
                                        style={{ display: "none" }}
                                    >
                                        Make Letterpress Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards"
                                        className="button button-medium button-coloured businesscard_nfc"
                                        style={{ display: "none" }}
                                    >
                                        Make NFC Business Cards+
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/super"
                                        className="button button-medium button-coloured businesscard_super_gloss_rounded businesscard_super_gloss businesscard_super_rounded businesscard_super"
                                        style={{ display: "none" }}
                                    >
                                        Make Super Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards"
                                        className="button button-medium button-coloured businesscard_square_super businesscard_square_super_rounded businesscard_square_super_gloss businesscard_square_super_gloss_rounded"
                                        style={{ display: "none" }}
                                    >
                                        Make Square Super Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/finishes"
                                        className="button button-medium button-coloured businesscard_super_foil_gold businesscard_super_rounded_foil_gold"
                                        style={{ display: "none" }}
                                    >
                                        Make Tailored Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/business-cards/finishes"
                                        className="button button-medium button-coloured businesscard_square_super_foil_gold businesscard_square_super_rounded_foil_gold businesscard_square_super_rounded_spot_uv_2d businesscard_square_super_spot_uv_2d"
                                        style={{ display: "none" }}
                                    >
                                        Make Tailored Square Business Cards
                                    </a>
                                    <a
                                        href="https://www.moo.com/us/luxe-notecards"
                                        className="button button-medium button-coloured notecard_quadplex_black"
                                        style={{ display: "none" }}
                                    >
                                        Make Notecards
                                    </a>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default price;