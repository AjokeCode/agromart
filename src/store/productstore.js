import img1 from '../product/image 310.svg';
import img2 from '../product/Rectangle 12.svg';
import img3 from '../product/image 314.svg';
import img4 from '../product/Rectangle 22.svg';
import img5 from '../product/image 312.svg';
import img6 from '../product/image 309.svg';
import img7 from '../product/Rectangle 18.svg';
import img8 from '../product/Rectangle 31.svg';
import img9 from '../product/Rectangle 34.svg';

import { create } from "zustand";

export const useProductstore = create((set)=>({
    products: [
        {
            imgSrc: img1,
            imgHeader: 'Eggs',
            country: 'Nigeria',
            description: 'Edible Natural Color, Grade A',
            price: 1200,
            id: 1
    
        },
        {
            imgSrc: img2,
            imgHeader: 'Beans',
            country: 'Nigeria',
            description: 'Dried, Natural Color',
            price: 9000,
            id: 2
    
        },
        {
            imgSrc: img3,
            imgHeader: 'Flowers',
            country: 'Nigeria',
            description: 'Fresh Natural Color, Grade A',
            price: 5000,
            id: 3
    
        },
        {
            imgSrc: img4,
            imgHeader: 'Gaari',
            country: 'Nigeria',
            description: 'Dried, Natural Color, Grade A',
            price: 900,
            id: 4
    
        },
        {
            imgSrc: img5,
            imgHeader: 'Herbs',
            country: 'Africa',
            description: 'Organic fresh mixed herbs',
            price: 6500,
            id: 5
    
        },
        {
            imgSrc: img6,
            imgHeader: 'Carrot',
            country: 'Nigeria',
            description: 'Fresh raw carrot fruit, Natural color, Grade A',
            price: 5000,
            id: 6
    
        },
        {
            imgSrc: img7,
            imgHeader: 'Hibiscus',
            country: 'Nigeria',
            description: 'Dried raw hibiscus flower, Dark Red color, Grade A',
            price: 1200,
            id: 7
    
        },
        {
            imgSrc: img8,
            imgHeader: 'Sesame',
            country: 'Africa',
            description: 'Free from damages with natural taste and smell',
            price: 1500,
            id: 8
    
        },
        {
            imgSrc: img9,
            imgHeader: 'Ginger',
            country: 'Nigeria',
            description: 'Fresh dried whole ginger root, Natural color Grade A',
            price: 5000,
            id: 9
    
        }]
}))