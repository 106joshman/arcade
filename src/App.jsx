import "./App.css";
import Footer from "./container/footer";
import Header from "./container/header";
import Homepage from "./container/pageSection";

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
