import styled from "styled-components";
// Slider:
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0, 0, 0 / 69%) 0 26px 30px -10px, rgb(0, 0, 0 / 73%) 0 16px 10px -10px;
    transition-duration: 0.3s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }  
`;