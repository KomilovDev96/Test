import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import { Container } from "@/components";
import { product, product2, avatar, Question } from "@/assets";
import { Button } from "@/components";
import {
  titleOption,
  cardImgOption,
  leftOption,
  cardTextOption,
} from "@/components/framer/about";
import Motion from "@/components/elements/Motion";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
export const Comments = () => {
  return (
    <div className="commnets">
      <Container>
        <div className="commnets__block">
          <div className="commnets__say">
            <Motion variants={titleOption} transition={titleOption.transition}>
              <h2>What Our Customers Says</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
                lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              </p>
            </Motion>
            <Motion
              variants={cardImgOption}
              transition={cardImgOption.transition}
            >
              <div className="commnets__people">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="commnets__slide">
                      <div className="commnets__avatar">
                        <div className="commnets__avaIma">
                          <div className="commnets__ava">
                            <img src={avatar} alt="png" />
                          </div>
                          <div className="commnets__info">
                            <h4>Hasanul Islam</h4>
                            <h5>Marketing CEO</h5>
                          </div>
                        </div>
                        <div className="commnets__imgQuest">
                          <img src={Question} alt="svg" />
                        </div>
                      </div>
                      <div className="commnets__text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Eu, tempor, accumsan sit amet nunc cursus. Nec
                          tristique at in erat lectus mas sa diam. Lectus elit,
                          nulla elementum fringilla at.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="commnets__slide">
                      <div className="commnets__avatar">
                        <div className="commnets__avaIma">
                          <div className="commnets__ava">
                            <img src={avatar} alt="png" />
                          </div>
                          <div className="commnets__info">
                            <h4>Hasanul Islam</h4>
                            <h5>Marketing CEO</h5>
                          </div>
                        </div>
                        <div className="commnets__imgQuest">
                          <img src={Question} alt="svg" />
                        </div>
                      </div>
                      <div className="commnets__text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Eu, tempor, accumsan sit amet nunc cursus. Nec
                          tristique at in erat lectus mas sa diam. Lectus elit,
                          nulla elementum fringilla at.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="commnets__slide">
                      <div className="commnets__avatar">
                        <div className="commnets__avaIma">
                          <div className="commnets__ava">
                            <img src={avatar} alt="png" />
                          </div>
                          <div className="commnets__info">
                            <h4>Hasanul Islam</h4>
                            <h5>Marketing CEO</h5>
                          </div>
                        </div>
                        <div className="commnets__imgQuest">
                          <img src={Question} alt="svg" />
                        </div>
                      </div>
                      <div className="commnets__text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Eu, tempor, accumsan sit amet nunc cursus. Nec
                          tristique at in erat lectus mas sa diam. Lectus elit,
                          nulla elementum fringilla at.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Motion>
          </div>
          <div className="commnets__image">
            <Motion variants={leftOption} transition={leftOption.transition}>
              <img src={product} alt="png" />
            </Motion>
          </div>
        </div>
        <div className="commnets__subscr">
          <div className="commnets__titleSub">
            <Motion
              variants={cardTextOption}
              transition={cardTextOption.transition}
            >
              <h2>Subscribe Our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
                tempor, accumsan sit amet nunc cursus.
              </p>
              <div className="commnets__inpt">
                <input type="text" placeholder="Enter mail..." />
                <Button>Subscribe</Button>
              </div>
            </Motion>
          </div>
          <div className="commnets__imagSub">
            <Motion variants={leftOption} transition={leftOption.transition}>
              <img src={product2} alt="png" />
            </Motion>
          </div>
        </div>
      </Container>
    </div>
  );
};
