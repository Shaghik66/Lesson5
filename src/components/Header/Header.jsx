import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import "./Header.css"

export default function Header(props) {
  return (
    <header >
      <Nav />
      <div className="productsContainer">
        {props.products.map((el) => {
          return <Products el={el} />;
        })}
      </div>
    </header>
  );
}
