import { Container } from "@/components/grid";
import { ArrowLeft, About1, About2, About3, About4 } from "@/assets";
import { Button } from "@/components";
import "./style.scss";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export const About = () => {
  return (
    <div className="about">
      <Container>
        <div className="about__info">
          <div className="about__title">
            <h2>We have lots of plants collection for you and your family</h2>
            <a href="/">
              See all collection <img src={ArrowLeft} alt="svg" />
            </a>
          </div>
          <ul className="about__items">
            <li>
              <img src={About1} alt="png" />
            </li>
            <li>
              <img src={About2} alt="png" />
            </li>
            <li>
              <img src={About3} alt="png" />
            </li>
          </ul>
        </div>
        <div className="about__us us">
          <div className="us__image">
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
              <MouseParallaxChild factorX={1} factorY={2}>
                <img src={About4} alt="png" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
          <div className="us__title">
            <h5>About Us</h5>
            <h2>Continue to Develop to Became Global Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus.{" "}
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
