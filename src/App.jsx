import "./App.css";
import Header from "./components/Header/Header";

function App(props) {
  return (
    <main className="main">
      <Header products={props.products}/>
    </main>
  );
}

export default App;
