// Styles:
import { Carousel, Wrap } from "./ImageSlider.styles";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section>
      <Carousel { ...settings }>
        <Wrap>
          <img src="/images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-badag.jpg" alt="" />
        </Wrap>
      </Carousel>
    </section>
  );
};

export default ImageSlider;