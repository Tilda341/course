import React from "react";
import ReactDOM from "react-dom";
const movie = {
  title: "Awarenge:Infinity War",
  vote_arrage: 8.5,
  image: "https://cdn1.ozone.ru/multimedia/c650/1024224252.jpg",
  overview:
    " As the Avenges and their allies have continued to protect the world from threats"
};
function Image(props) {
  console.log("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItems props=", props);
//   const {
//     data: { title, vote_arrage, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_arrage}</p>
//     </div>
//   );
// }
class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_arrage, image }
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_arrage}</p>
      </div>
    );
  }
}
function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
