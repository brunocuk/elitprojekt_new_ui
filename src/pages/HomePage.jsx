import HeroSection from "../sections/HeroSection"
import LatestWork from "../sections/LatestWork"
import ServiceSection from "../sections/ServiceSection"
import SuccessStories from "../sections/SuccessStories"
import Testimonials from "../sections/Testimonials"
import BlogSection from "../sections/BlogSection"
import { Logo } from "../assets/icons";

const HomePage = () => {
  return (
    <div className="overflow-hidden bg-darkBackground w-full h-screen flex flex-col items-center justify-center">
      <Logo />
      <h1 className="text-textColorDark font-bold tracking-wide text-4xl pt-12 text-center">We're working on something amazing. <span className="text-ctaColorDark text-8xl"><br/>Stay tuned!</span></h1>
      <p className="text-textColorDark font-semibold text-xl pt-20">In the meantime you can contact us through email</p>
      <a href="mailto:hello@progmatiq.co" className="text-2xl font-bold text-ctaColorDark pt-6">hello@progmatiq.co</a>
      {/* <HeroSection />
      <LatestWork />
      <SuccessStories />
      <ServiceSection />
      <Testimonials />
      <BlogSection /> */}
    </div>
  )
}

export default HomePage
