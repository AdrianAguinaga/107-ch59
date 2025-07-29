// imports
import { useState } from "react";
import DataService from "../services/DataService";
// logic
function Catalog() {
  //State to store the products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(True);
  // load catalog fuction
  const loadCatalog = async () => {
    try {
      setLoading(True);
      const prods = await DataService.getProducts();
      setProducts(prods);
    } catch (error) {
      console.error("Error loading products", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="catalog">
      <h2>Here goes the products</h2>
    </div>
  );
}
// export
export default Catalog;
