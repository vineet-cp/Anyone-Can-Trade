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
      <title>Any One Can Trade | Start Your Trading Journey Today</title>
      <meta name="description" content="Join Any One Can Trade to kickstart your trading journey with expert mentorship and tailored courses. Perfect for beginners and aspiring traders." />
      <meta name="keywords" content="trading for beginners, learn trading, start trading, trading mentorship, online trading classes, stock market basics" />
    </Helmet>
      <IntroSection />
      <VideoSection />
      <Testimonials />
      <JourneyButton />
    </div>
  );
}
