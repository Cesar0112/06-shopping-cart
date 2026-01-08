import "./Products.css";
import { AddToCartIcon } from "./Icons";

export default function Products({ products }) {
  return (
    <main className="products">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <div>
                <h3>{p.title}</h3>
                <strong>${p.price}</strong>
              </div>
              <div>
                <img src={p.thumbnail} alt={p.title} />
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
