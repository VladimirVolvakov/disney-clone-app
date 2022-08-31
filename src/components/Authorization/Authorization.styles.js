import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    content: "";
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const CallToAction = styled.div`
  width: 80%;
  max-width: 700px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTALogoOne = styled.img``;

export const CTALogoTwo = styled.img`
  width: 90%;
  margin-top: 10px;
`;

export const SignUpButton = styled.a`
  background-color: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  letter-spacing: 2.2px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  padding: 17px 0;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.3px;
  text-align: center;
`;