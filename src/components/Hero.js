import heroImg from "../assets/hero.png";
import handgloves1 from "../assets/handgloves1.png";
import BackgroundCarousel from "./BackgroundCarousel";
import Bestow from "./Bestow";
import SoftTouch from "./SoftToch";
import Diamond from "./Diamond";
import Description from "./Description";
import Testimonial from "./Testamonial";
import glouseimage2 from "../AdminPanel/images/glouseimage2.jpg";
import glouseimage3 from "../AdminPanel/images/glouseimage3.jpg";



export default function Hero() {
  const carouselImages = [glouseimage3, glouseimage2, handgloves1];

  return (
    <>
      <BackgroundCarousel images={carouselImages} />
      <Description />
      <Bestow />
      <SoftTouch />
      <Diamond />
      <Testimonial />
    </>
  );
}
