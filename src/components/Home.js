import React from "react";
import Styled from "styled-components";
import Section from "./Section";
import Header from "./Header";

function Home() {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Cost less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Learn More"
      />
      <Section
        title="Powerwall"
        description=""
        backgroundImg="Homepage-Powerwall-Desktop.webp"
        leftBtnText="Custon Order"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="Homepage-Accessories-Desktop-NA-APAC.webp"
        leftBtnText="Custon Order"
      />
    </Container>
  );
}

export default Home;

const Container = Styled.div`

height: 100vh;
`;
