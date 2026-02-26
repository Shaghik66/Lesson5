import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

export default class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Header products={this.props.products} />
      </main>
    );
  }
}

// function App(props) {
//   return (
//     <main className="main">
//       <Header products={props.products}/>
//     </main>
//   );
// }

// export default App;
