// Styles:
import { Container, CallToAction, CTALogoOne, CTALogoTwo, SignUpButton, Description } from "./Authorization.styles";

const Authorization = () => {
  return (
    <Container>
      <CallToAction>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUpButton>
          GET ALL THERE
        </SignUpButton>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 09/26/2022, the price of Disney+
          and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CallToAction>
    </Container>
  );
};

export default Authorization;