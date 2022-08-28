// Components:
import ImageSlider from "../ImageSlider/ImageSlider";
import ContentHubs from "../ContentHubs/ContentHubs";
// Styles:
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <ContentHubs />
    </Container>
  );
};

export default Home;