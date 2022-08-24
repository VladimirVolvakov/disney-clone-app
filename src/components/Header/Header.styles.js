import styled from "styled-components";

export const NavigationBar = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 35px;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      margin-left: 3px;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

export const UserImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;