import "./Card.css";

function Card(props) {
  const customcssclassname = "card " + props.className;
  return <div className={customcssclassname}>{props.children}</div>;
}

export default Card;
