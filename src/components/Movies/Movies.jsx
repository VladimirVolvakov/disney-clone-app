// Styles:
import { Container, Content, Wrap } from "./Movies.styles";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PImnFKTwUfGQzaiodWIYeTgqrVLeuIHKnw&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PImnFKTwUfGQzaiodWIYeTgqrVLeuIHKnw&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PImnFKTwUfGQzaiodWIYeTgqrVLeuIHKnw&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PImnFKTwUfGQzaiodWIYeTgqrVLeuIHKnw&usqp=CAU" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;