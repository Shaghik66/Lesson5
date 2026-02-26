import React from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Nav from "./components/Nav/Nav";

export default class App extends React.Component {
  render() {
    return (
      <main className="main">
         <Nav />
        <Section products={this.props.products} />
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
