import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./config/ScrollToTop";

import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./config/routes";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import InPlan from "./pages/InPlan";
import InPlanDetails from "./pages/InPlanDetails";
import InConstruction from "./pages/InConstruction";
import InConstructionDetails from "./pages/InConstructionDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import CookieBanner from "./components/CookieBanner";
import { initConsentFromStorage } from "./utils/consent";

function App() {
  const location = useLocation();

  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [navBarColor, setNavBarColor] = useState("white");

  const closeMobileMenu = () => setOpen(false);

  useEffect(() => {
    // If the user previously chose, sync that with GTM on startup
    initConsentFromStorage();
  }, []);

  /** Initialize Lenis once */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    // Track scroll position
    lenis.on("scroll", ({ scroll }) => {
      setScrollY(scroll);
    });

    // Animation loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [location]);

  return (
    <>
      <NavBar scrollY={scrollY} isOpen={isOpen} setOpen={setOpen} location={location.pathname} navColor={navBarColor} />

      <div className="bg-white" id="main-container">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.IN_PLAN} element={<InPlan />} />
          <Route path={ROUTES.IN_PLAN_DETAILS} element={<InPlanDetails />} />
          <Route path={ROUTES.IN_CONSTRUCTION} element={<InConstruction />} />
          <Route path={ROUTES.IN_CONSTRUCTION_DETAILS} element={<InConstructionDetails />} />
          <Route path={ROUTES.BLOG} element={<BlogPage />} />
          <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {isOpen && (
          <AnimatePresence>
            <MobileMenu closeMenu={closeMobileMenu} />
          </AnimatePresence>
        )}

        <div className="-z-10">
        <Footer />
        </div>
        <ScrollToTop />
      </div>
      <CookieBanner />
    </>
  );
}

export default App;
