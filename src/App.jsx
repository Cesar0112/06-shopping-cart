import { useEffect, useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
function App() {
  const [products, setProducts] = useState(initialProducts);

  var allCategories = products
    .map((e) => e.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  const handleChangeMinPrice = (e) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        minPrice: e.target.value,
      };

      return newFilters;
    });
  };
  const handleChangeCategory = (e) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        category: e.target.value,
      };

      return newFilters;
    });
  };
  useEffect(() => {
    const newFilteredProds = products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        product.category === filters.category
      );
    });
    setFilteredProducts(newFilteredProds);
  }, [filters.minPrice, products, filters.category]);

  return (
    <main>
      <h1>Shopping cart</h1>
      <h3>Filtros</h3>
      <input
        type="number"
        name="minPrice"
        id="minPrice"
        value={filters.minPrice}
        onChange={handleChangeMinPrice}
        min={0}
      />

      <select
        name="categories"
        id="categories"
        value={filters.category}
        onChange={handleChangeCategory}
      >
        {allCategories &&
          allCategories.map((categ) => <option value={categ}>{categ}</option>)}
      </select>

      <Products products={filteredProducts} />
    </main>
  );
}

export default App;
