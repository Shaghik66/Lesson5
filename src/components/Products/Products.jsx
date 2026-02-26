import React from "react";
import "./Products.css";
import ProductButtons from "../ProductButtons/ProductButtons";

export default class Products extends React.Component {
  render() {
    return (
      <div className="productDiv">
        <h1 className="headerBoxTitle">{this.props.el.title}</h1>
        <img className="productImage" src={this.props.el.image} alt="" />
        <p className="headerBoxDescription">{this.props.el.description}</p>
        <p className="productPrice">{`${"Price"} ${this.props.el.price} ${"$"}` }</p>
        <div className="buttonContainer">
        <ProductButtons />
        </div>
      </div>
    );
  }
}
