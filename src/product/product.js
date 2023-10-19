import './product.css';
import img1 from './image 310.svg';
import img2 from './Rectangle 12.svg';
import img3 from './image 314.svg';
import img4 from './Rectangle 22.svg';
import img5 from './image 312.svg';
import img6 from './image 309.svg';
import img7 from './Rectangle 18.svg';
import img8 from './Rectangle 31.svg';
import img9 from './Rectangle 34.svg';
import { useState } from 'react';
import Cart from './cart_btn';
import { useCart } from 'react-use-cart';

const Product = () => {
    const {addItem, } = useCart()
    const initialStates = Array(6).fill(false); 
    const [isClickArray, setIsClickArray] = useState(initialStates);

  const handleClick = (index, product) => {
    const newIsClickArray = [...isClickArray];
    newIsClickArray[index] = !newIsClickArray[index];
    setIsClickArray(newIsClickArray);
    addItem(product)
  };
  const products =[
    {
        imgSrc: img1,
        imgHeader: 'Eggs',
        country: 'Nigeria',
        description: 'Edible Natural Color, Grade A',
        price: '#1200 per Crate',
        id: 1

    },
    {
        imgSrc: img2,
        imgHeader: 'Beans',
        country: 'Nigeria',
        description: 'Dried, Natural Color',
        price: '#900 per Cup',
        id: 2

    },
    {
        imgSrc: img3,
        imgHeader: 'Flowers',
        country: 'Nigeria',
        description: 'Fresh Natural Color, Grade A',
        price: '#5000 per Package',
        id: 3

    },
    {
        imgSrc: img4,
        imgHeader: 'Gaari',
        country: 'Nigeria',
        description: 'Dried, Natural Color, Grade A',
        price: '#900 per Cup',
        id: 4

    },
    {
        imgSrc: img5,
        imgHeader: 'Herbs',
        country: 'Africa',
        description: 'Organic fresh mixed herbs',
        price: '#6500 per Package',
        id: 5

    },
    {
        imgSrc: img6,
        imgHeader: 'Carrot',
        country: 'Nigeria',
        description: 'Fresh raw carrot fruit, Natural color, Grade A',
        price: '#5000 per Package',
        id: 6

    },
    {
        imgSrc: img7,
        imgHeader: 'Hibiscus',
        country: 'Nigeria',
        description: 'Dried raw hibiscus flower, Dark Red color, Grade A',
        price: '#1200 per bag',
        id: 7

    },
    {
        imgSrc: img8,
        imgHeader: 'Sesame',
        country: 'Africa',
        description: 'Free from damages with natural taste and smell',
        price: '#1500 per Cup',
        id: 8

    },
    {
        imgSrc: img9,
        imgHeader: 'Ginger',
        country: 'Nigeria',
        description: 'Fresh dried whole ginger root, Natural color Grade A',
        price: '#5000 per Package',
        id: 9

    }
]

  return (
    <div className="product">
      <h1 className="product-header">Our Products</h1>
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
            
             {/* <button className='product-btn' onClick={() => handleAddToCartClick(index)}>
                {productStates === false ? 
                  <Cart/>  
                : (
                    <p onClick={()=>addItem(product)}>Add to cart</p>
                )
            }
            </button>
            {productStates[index] ? (
              <Cart/>
            ) : (
              <button className='product-btn' onClick={() => handleAddToCartClick(index, product)}>
                Add to cart
              </button>
            )} */}
            {
                !isClickArray[product.id] ?  (<button onClick={()=> handleClick(product.id, product)}>Add to cart</button>):
                (
                    <button key={index}><span >
                    +</span> <span>1</span> 
                    <span>-</span></button>
                )
            }
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

