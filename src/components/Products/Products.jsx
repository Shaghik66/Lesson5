import "./Products.css";

export default function Products(props) {
  return (
    <div className="productDiv">
      <h1 className="headerBoxTitle">{props.el.title}</h1>
      <img className="productImage" src={props.el.image} alt="" />
      <p className="headerBoxDescription">{props.el.description}</p>
      <p>{`${"Price"} ${props.el.price} ${"$"}`}</p>
    </div>
  );
}
