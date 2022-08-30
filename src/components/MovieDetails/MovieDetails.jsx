// Styles:
import { Container, Background, MovieTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton, Subtitle, Description } from "./MovieDetails.styles";

const MovieDetails = () => {
  return (
    <Container>
      <Background> 
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Background>
      <MovieTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
      </MovieTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Watch Movie Button" /> 
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Watch Trailer Button" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="Group Watch Button" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2018 • 7min • Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum saepe vero libero eveniet molestias aliquid eligendi molestiae, obcaecati quae, error doloribus fuga recusandae autem velit cumque itaque accusamus tempora optio illum earum modi, porro minima?
      </Description>
    </Container>
  );
};

export default MovieDetails;