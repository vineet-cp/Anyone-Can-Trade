// File: src/pages/Home.jsx
import IntroSection from "../components/IntroSection";
import Testimonials from "../components/Testimonials";
import JourneyButton from "../components/JourneyButton";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="rounded-md mt-7">
      <IntroSection />
      <VideoSection />
      <Testimonials />
      <JourneyButton />
    </div>
  );
}
