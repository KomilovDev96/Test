import { Container, RowGrid } from "@/components";
import "./style.scss";
import { footer, Instagram, Facebook } from "@/assets";
export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__title">
          <h2>Follow Us on Instagram</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accu msan sit amet nunc cursus. Nec tristique at in erat lectus
          </p>
        </div>
        <RowGrid>
          <ul className="footer__itemsCol">
            <li>
                <div className="footer__absol">
                    <img src={Instagram} alt="svg" />
                </div>
                <img src={footer} alt="png" />
            </li>
            <li>
                <div className="footer__absol">
                    <img src={Instagram} alt="svg" />
                </div>
                <img src={footer} alt="png" />
            </li>
            <li>
                <div className="footer__absol">
                    <img src={Instagram} alt="svg" />
                </div>
                <img src={footer} alt="png" />
            </li>
            <li>
                <div className="footer__absol">
                    <img src={Instagram} alt="svg" />
                </div>
                <img src={footer} alt="png" />
            </li>
            <li>
                <div className="footer__absol">
                    <img src={Instagram} alt="svg" />
                </div>
                <img src={footer} alt="png" />
            </li>
          </ul>
        </RowGrid>
        <div className="footer__bottom">
            <div className="footer__left">
                <h4>Plant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.</p>
                <ul>
                    <li><img src={Facebook} alt="svg" /></li>
                    <li><img src={Facebook} alt="svg" /></li>
                    <li><img src={Facebook} alt="svg" /></li>
                </ul>
            </div>
            <div className="footer__right">
                <div className="footer__menuTitle">
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Help & Support</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div className="footer__menuTitle">
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Help & Support</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div className="footer__menuTitle">
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Help & Support</li>
                        <li>Product</li>
                    </ul>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};


