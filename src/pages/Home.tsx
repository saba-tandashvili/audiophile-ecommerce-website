import "./style.css";
import Header from "../components/Header";
import NewProduct from "../components/NewProduct";

export default function Home() {
  return (
    <div>
      <div className="header">
        <Header />
        <div className="new-product">
          <NewProduct />
        </div>
      </div>
    </div>
  );
}
