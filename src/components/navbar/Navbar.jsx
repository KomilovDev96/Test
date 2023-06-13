import { useState } from "react";
import { Button } from "../button/Button";
import { Container, RowGrid } from "../grid";
import { navbarData } from "@/Fakerdata/index";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./style.scss";
import { logoOption, rightOption } from "../framer/navbar";
import Motion from "../elements/Motion";
export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const Close = () => setClick(false);

  return (
    <nav className="navbar">
      <Container>
        <RowGrid justify="space-between" align="center">
          <Motion variants={logoOption} transition={logoOption.transition}>
            <a className="navbar__logo" href="/">
              Plant
            </a>
          </Motion>

          <div
            className={click ? "navbar__menuPosit active" : "navbar__menuPosit"}
          >
            <Motion variants={rightOption} transition={rightOption.transition}>
              <RowGrid className={"navbar__menu row"}>
                {navbarData.map((item) => (
                  <li key={item.id} className="navbar__item">
                    <a className="navbar__link" href="#">
                      {item.text}
                    </a>
                  </li>
                ))}
              </RowGrid>
            </Motion>
            <Motion variants={rightOption} transition={rightOption.transition}>
              <div className="navbar__sign">
                <a href="#">Login</a>
                <Button x="12px" y="16px">
                  Sing Up
                </Button>
              </div>
            </Motion>
          </div>
          <div className="navbar__icon" onClick={handleClick}>
            {click ? <GrClose /> : <FaBars />}
          </div>
        </RowGrid>
      </Container>
    </nav>
  );
};
