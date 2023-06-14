import { Container, RowGrid, Button } from "@/components";
import { Header1, Header2 } from "@/assets";
import { countData } from "@/Fakerdata/index";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useParallax } from "react-scroll-parallax";
import {
  leftOption,
  btnOption,
  monitorOption,
} from "@/components/framer/header";
import Motion from "@/components/elements/Motion";
import "./style.scss";
export const Header = () => {
  const parallax = useParallax({
    speed: -10,
  });
  return (
    <div className="header">
      <Container>
        <RowGrid justify="space-between">
          <div className="header__text">
            <Motion variants={leftOption} transition={leftOption.transition}>
              <h1 className="header__title">
                Growing Beautiful Plants at Home
              </h1>
              <p className="header__parag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
                lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              </p>
            </Motion>

            <div className="header__paralax paralax">
              <Motion variants={btnOption} transition={btnOption.transition}>
                <Button>Learn More</Button>
              </Motion>
              <div className="paralax__image">
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                  <MouseParallaxChild factorX={1} factorY={2}>
                    <img src={Header2} alt="png" />
                  </MouseParallaxChild>
                </MouseParallaxContainer>
              </div>
            </div>

            <Motion
              variants={monitorOption}
              transition={monitorOption.transition}
            >
              <ul className="header__counts counts">
                {countData.map((item) => (
                  <li className="counts__item" key={item.id}>
                    <span className="counts__count">{item.count}</span>
                    <p className="counts__title">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Motion>
          </div>
          <div className="header__images">
            <div className="header__buttonAbs buttonAbs">
              <button className="buttonAbs__medua1">
                <span>
                  <span className="krug">
                    <span></span>
                  </span>
                  <span className="line"></span>
                </span>
                Cactus Thorn
              </button>
              <button className="buttonAbs__medua2">
                <span>
                  <span className="krug">
                    <span></span>
                  </span>
                  <span className="line"></span>
                </span>
                Cactus stem
              </button>
              <button className="buttonAbs__medua3">
                <span>
                  <span className="krug">
                    <span></span>
                  </span>
                  <span className="line"></span>
                </span>
                Plant Media
              </button>
            </div>
            <img ref={parallax.ref} src={Header1} alt="png" />
          </div>
        </RowGrid>
      </Container>
    </div>
  );
};
