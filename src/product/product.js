import './product.css';
import { useCart } from 'react-use-cart';
import { useProductstore } from '../store/productstore';
import { useState } from 'react';

const Product = () => {
  const [isclick, setIsClick] = useState(false)
    const {addItem} = useCart();
    const {
      items,
      updateItemQuantity,

    } = useCart()
    const {products} = useProductstore((state) =>({
      products: state.products
    }))
    const add =(e)=>{
      addItem(e);
      setIsClick(true)
    }
  return (
    <div className="product">
      <p className="product-text">
        Discover all categories of our farm-to-table pricing and order fresh produce delivered straight to your doorstep, or visit us at the farm to have a closer look at our sustainable farming practices.
      </p>
      <div className="product-all">
        {products.map((product, index) => (
          <div key={product.id} className='product-flex'>
            <img src={product.imgSrc} alt={`Product ${index + 1}`} className='product-flex-img' />
            <h1 className="product-flex-header">{product.imgHeader}</h1>
            <p className='product-flex-text'>Origin: <span className='product-flex-span'>{product.country}</span></p>
            <p className='product-flex-text'>Description: <span className='product-flex-span'>{product.description}</span></p>
            <p className='product-flex-text'>Price: <span className='product-flex-span product-flex-span2'>{product.price}</span></p>
            
            {
              !isclick ? (<button onClick={()=> add(product)}>Add to cart</button>) : (
                
                  items.map((item, index) =>(
                    <div key={index}>
                    <p onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</p>
                    <p onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>-</p>
                    </div>
                  ))
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

