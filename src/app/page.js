import LandingPage from "@/component/landing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/index.css";
import "./page.css";

export default function Home() {
  return (
    <div id="__next">
      <div>
        <LandingPage />
      </div>
    </div>
  );
}
