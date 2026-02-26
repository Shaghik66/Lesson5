import React from "react";
import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import "./Header.css"

export default class Header extends React.Component {
  render(){
  return (
    <header >
      <Nav />
      <div className="productsContainer">
        {this.props.products.map((el) => {
          return <Products el={el} />;
        })}
      </div>
    </header>
  );}
}
