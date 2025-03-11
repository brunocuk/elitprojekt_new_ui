import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { Helmet } from "react-helmet";
import { lazy, useEffect, Suspense, useState } from "react";
import { ScrollToTop, NavBar, Footer, NavMenu } from "./components";
import {
  AboutUs,
  BlogDetails,
  Contact,
  HomePage,
  Services,
  Work,
} from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Apply the theme to the HTML element and save it to local storage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Progmatiq</title>
        </Helmet>
      </div>
      {/* <NavBar isOpen={isOpen} setOpen={setOpen} toggle={toggleTheme} theme={theme} /> */}
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.WORK} element={<Work />} />
        <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
      <AnimatePresence>
        {isOpen && <NavMenu setOpen={setOpen} toggle={toggleTheme} />}
      </AnimatePresence>
    </>
  );
}

export default App;
