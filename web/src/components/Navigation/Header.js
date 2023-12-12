import React, { useState, useLayoutEffect } from "react";
// import MicroModal from "micromodal";

import PromoBar from "../Navigation/PromoBar";
// import UtilityNav from "../Header/UtilityNav";
import MainNav from "../Navigation/MainNav";

const Header = ({ headerStyle, headerLinkColor, headerHasBorder }) => {
  // determine if page has scrolled
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useLayoutEffect(() => {
    const siteNavigation = document.querySelector("#site-navigation"),
      promoBar = document.querySelector("#promo-bar"),
      utilityNavigation = document.querySelector("#utlity-navigation"),
      mainNavigation = document.querySelector("#main-navigation"),
      offcanvasNavigation = document.querySelector("#offcanvas-navigation"),
      bodyContent = document.querySelector("#body-content");

    const handleLoad = () => {
      // calculate #offcanvas-navigation menu offset top
      offcanvasNavigation.style.top =
        siteNavigation.offsetHeight + mainNavigation.offsetHeight + "px";
      if (promoBar) {
        bodyContent.style.paddingTop = promoBar.offsetHeight + "px";
      }
    };

    const handleResize = () => {
      // calculate #offcanvas-navigation offset top on resize
      offcanvasNavigation.style.top =
        siteNavigation.offsetHeight + mainNavigation.offsetHeight + "px";
      if (promoBar) {
        bodyContent.style.paddingTop = promoBar.offsetHeight + "px";
      }
    };

    const handleScroll = () => {
      let isScrolled;

      if (utilityNavigation !== null && promoBar !== null) {
        isScrolled =
          window.scrollY >
          utilityNavigation.offsetHeight + promoBar.offsetHeight;
      } else if (promoBar !== null) {
        isScrolled = window.scrollY > promoBar.offsetHeight;
      } else if (utilityNavigation !== null) {
        isScrolled = window.scrollY > utilityNavigation.offsetHeight;
      } else {
        isScrolled = window.scrollY > 0;
      }

      if (isScrolled) {
        setScrolled(true);
        // recalculate #offcanvas-navigation offset top on scroll
        offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";

        // recalculate #body-content offset top on scroll
        if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
          // bodyContent.style.paddingTop = promoBar.offsetHeight + "px";
          // bodyContent.style.paddingTop = null;
        } else {
          bodyContent.style.paddingTop = mainNavigation.offsetHeight + "px";
          bodyContent.style.marginTop = null;
        }
      } else {
        setScrolled(false);

        // calculate #offcanvas-navigation menu offset top
        offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";

        // recalculate #body-content offset top on scroll
        if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
          // bodyContent.style.marginTop = "-" + mainNavigation.offsetHeight + "px";
          bodyContent.style.marginTop = null;
          // bodyContent.style.paddingTop = null;
        } else {
          // bodyContent.style.paddingTop = null;
          bodyContent.style.marginTop = null;
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    if (document.readyState === "complete") {
      handleLoad();
      // if (document.cookie.indexOf("closedPopup") === -1) {
      //   MicroModal.show("modal-promo", {
      //     openTrigger: "data-modal-open",
      //     closeTrigger: "data-modal-close",
      //     disableFocus: true,
      //     disableScroll: true,
      //     awaitOpenAnimation: true,
      //     awaitCloseAnimation: true,
      //   });
      // }
    } else {
      window.addEventListener("load", handleLoad, { passive: true });
    }

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, [scrolled, headerStyle]);

  return (
    <div id="site-navigation" className="z-30 fixed left-0 w-full">
      <PromoBar />
      {/* <UtilityNav /> */}
      <MainNav
        scrolled={scrolled}
        headerStyle={headerStyle}
        headerLinkColor={headerLinkColor}
        headerHasBorder={headerHasBorder}
      />
    </div>
  );
};
export default Header;
