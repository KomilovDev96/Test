import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import { Container } from "@/components";
import { product, product2, avatar, Question } from "@/assets";
import { Button } from "@/components";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
export const Comments = () => {
  return (
    <div className="commnets">
      <Container>
        <div className="commnets__block">
          <div className="commnets__say">
            <h2>What Our Customers Says</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu, tempor, accumsan sit amet nunc cursus. Nec tristique
                        at in erat lectus mas sa diam. Lectus elit, nulla
                        elementum fringilla at.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu, tempor, accumsan sit amet nunc cursus. Nec tristique
                        at in erat lectus mas sa diam. Lectus elit, nulla
                        elementum fringilla at.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu, tempor, accumsan sit amet nunc cursus. Nec tristique
                        at in erat lectus mas sa diam. Lectus elit, nulla
                        elementum fringilla at.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="commnets__image">
            <img src={product} alt="png" />
          </div>
        </div>
        <div className="commnets__subscr">
          <div className="commnets__titleSub">
            <h2>Subscribe Our Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
              tempor, accumsan sit amet nunc cursus.
            </p>
            <div className="commnets__inpt">
              <input type="text" placeholder="Enter mail..." />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="commnets__imagSub">
            <img src={product2} alt="png" />
          </div>
        </div>
      </Container>
    </div>
  );
};
