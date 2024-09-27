import "./product.css";
import { useProductstore } from "../store/productstore";
import { useCartStore } from "../store/cartstore";

const Product = () => {
  const { addItem, cart, updateItemQuantity, inCart } = useCartStore((state) => ({
    cart: state.cart,
    addItem: state.addItem,
    updateItemQuantity: state.updateItemQuantity,
    inCart: state.inCart,
  }));

  const { products } = useProductstore((state) => ({
    products: state.products,
  }));

  return (
    <div className="product">
      <p className="product-text">
        Discover all categories of our farm-to-table pricing and order fresh
        produce delivered straight to your doorstep, or visit us at the farm to
        have a closer look at our sustainable farming practices.
      </p>
      <div className="product-all">
        {products.map((product, index) => {
          const itemInCart = inCart(product.id);
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="product-flex">
              <img
                src={product.imgSrc}
                alt={`Product ${index + 1}`}
                className="product-flex-img"
              />
              <h1 className="product-flex-header">{product.imgHeader}</h1>
              <p className="product-flex-text">
                Origin:{" "}
                <span className="product-flex-span">{product.country}</span>
              </p>
              <p className="product-flex-text">
                Description:{" "}
                <span className="product-flex-span">{product.description}</span>
              </p>
              <p className="product-flex-text">
                Price:{" "}
                <span className="product-flex-span product-flex-span2">
                  {product.price}
                </span>
              </p>

              {itemInCart ? (
                <div className="product-flex-3">
                  <button
                    className="product-btn"
                    onClick={() =>
                      updateItemQuantity(cartItem.id, cartItem.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <p className="product-flex-3-text">{cartItem.quantity}</p>
                  <button
                    className="product-btn"
                    onClick={() =>
                      updateItemQuantity(cartItem.id, cartItem.quantity - 1)
                    }
                  >
                    -
                  </button>
                </div>
              ) : (
                  <button
                    className="product-btn"
                    onClick={() =>
                      addItem({
                        ...product,
                        quantity: 1,
                      })
                  }
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
