import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { products as productsJSON } from "../mocks/products.json";
export default function Products({ products }) {
  if (!products) products = productsJSON;
  return (
    <main className="products">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul style={{ display: "grid" }}>
          {products.map((p) => (
            <li key={p.id}>
              <h3>{p.title}</h3>
              <img src={p.thumbnail} alt={p.title} />
              <button>
                <AddToCartIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
