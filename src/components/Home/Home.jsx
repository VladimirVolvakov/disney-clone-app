// Components:
import ImageSlider from "../ImageSlider/ImageSlider";
import ContentHubs from "../ContentHubs/ContentHubs";
import Movies from "../Movies/Movies";
// Styles:
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <ContentHubs />
      <Movies />
    </Container>
  );
};

export default Home;