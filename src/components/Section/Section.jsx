import React from "react";
import Products from "../Products/Products";
import "./Section.css"

export default class Section extends React.Component {
  render(){
  return (
    <header >
     
      <div className="productsContainer">
        {this.props.products.map((el) => {
          return <Products el={el} />;
        })}
      </div>
    </header>
  );}
}
