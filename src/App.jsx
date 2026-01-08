import { useContext, useEffect, useId, useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { FiltersContext } from "./context/filters";
function App() {
  const [products, setProducts] = useState(initialProducts);

  var allCategories = products
    .map((e) => e.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const { filters, setFilters } = useContext(FiltersContext);

  const minPriceId = useId();
  const categoryId = useId();
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label htmlFor={minPriceId}>Precio mínimo:</label>
        <input
          type="range"
          name="minPrice"
          id={minPriceId}
          onChange={handleChangeMinPrice}
          min={0}
          value={filters.minPrice}
          max={2000}
        />
        <p>{filters.minPrice}</p>
        <p> - </p>
        <p>2000</p>
      </div>
      <select
        name="categories"
        id={categoryId}
        onChange={handleChangeCategory}
        value={filters.category}
      >
        {allCategories &&
          allCategories.map((categ) => <option value={categ}>{categ}</option>)}
      </select>

      <Products products={filteredProducts} />
    </main>
  );
}

export default App;
