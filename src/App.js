import "./App.css";
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";

function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
