import { Container, RowGrid } from "@/components/grid";
import "./style.scss";
import { About5, Star } from "@/assets";
import { Button } from "@/components";
export const Product = () => {
  return (
    <div className="product">
      <Container>
        <div className="product__top">
          <h2>Our Best Product</h2>
          <ul>
            <li>
              <a className="active" href="#">
                New Plants
              </a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>
        <RowGrid justify="space-between">
          <div className="product__item">
            <div className="product__item-image">
              <img src={About5} alt="png" />
            </div>
            <h4>Outdoor Plant</h4>
            <ul>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
            </ul>
            <span>$50.00</span>
          </div>
          <div className="product__item">
          <div className="product__item-image">
              <img src={About5} alt="png" />
            </div>
            <h4>Outdoor Plant</h4>
            <ul>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
            </ul>
            <span>$50.00</span>
          </div>
          <div className="product__item">
          <div className="product__item-image">
              <img src={About5} alt="png" />
            </div>
            <h4>Outdoor Plant</h4>
            <ul>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
            </ul>
            <span>$50.00</span>
          </div>
          <div className="product__item">
          <div className="product__item-image">
              <img src={About5} alt="png" />
            </div>
            <h4>Outdoor Plant</h4>
            <ul>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
              <li>
                <img src={Star} alt="svg" />
              </li>
            </ul>
            <span>$50.00</span>
          </div>
        </RowGrid>
        <div className="product__button">
          <Button>View All</Button>
        </div>
      </Container>
    </div>
  );
};
