// File: src/pages/Home.jsx
import IntroSection from "../components/IntroSection";
import Testimonials from "../components/Testimonials";
import JourneyButton from "../components/JourneyButton";
import VideoSection from "../components/VideoSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="rounded-md mt-7">
      <Helmet>
      <title>Trading Masters India – Indias Best Online Stock Market Education Institute</title>
      <meta name="description" content="India’s only Institute for hands-on Trading. You won’t just learn the theory, but also get practical expertise to become a successful trader in 3 months." />
      <meta name="keywords" content="trading for beginners, learn trading, start trading, trading mentorship, online trading classes, stock market basics" />
    </Helmet>
      <IntroSection />
      <VideoSection />
      <JourneyButton />
      <Testimonials />
    </div>
  );
}
