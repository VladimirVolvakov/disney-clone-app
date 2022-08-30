import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 50px calc(3.5vw + 5px);
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const MovieTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
`;

export const PlayButton = styled.button`
  height: 56px;
  border: none;
  border-radius: 4px;
  padding: 0 24px;
  font-size: 15px;
  letter-spacing: 1.8px;
  background: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const TrailerButton = styled.button`
  height: 56px;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 4px;
  padding: 0 24px;
  font-size: 15px;
  letter-spacing: 1.8px;
  color: rgb(249, 249, 249);
  background: rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const AddButton = styled.button`
  height: 44px;
  width: 44px;
  border: 2px solid rgb(249, 249, 249);
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    font-size: 30px;
    color: rgb(249, 249, 249);
  }
`;

export const GroupWatchButton = styled.button`
  height: 44px;
  width: 44px;
  border: 2px solid rgb(249, 249, 249);
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    font-size: 30px;
    color: rgb(249, 249, 249);
  }
`;

export const Subtitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  color: rgb(249, 249, 249);
  margin-top: 26px;
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.4;
  color: rgb(249, 249, 249);
  margin-top: 16px;
`;