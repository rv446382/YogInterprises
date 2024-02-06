import { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import "./production.css";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Production = () => {


    const dummyProducts = [
        {
            id: 1,
            name: 'Circular Saw',
            description: 'Stationary sanders, including stroke sanders, oscillating spindle sander.',
            price: 199,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A1ovGUg8RmgsStakhdXqQqxFORhd3nVt9g&usqp=CAU'
        },
        {
            id: 2,
            name: 'Band Saw',
            description: 'Heavy-duty band saw for cutting large logs.',
            price: 599.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A1ovGUg8RmgsStakhdXqQqxFORhd3nVt9g&usqp=CAU'
        },
        {
            id: 3,
            name: 'Chainsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 299.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A1ovGUg8RmgsStakhdXqQqxFORhd3nVt9g&usqp=CAU'
        },
        {
            id: 4,
            name: 'Buiscuitsaw',
            description: 'Stationary sanders, including stroke sanders, oscillating spindle sander.',
            price: 399.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBe4FOXwsrAPJQmbDOPQPG--oRK4ZYfjwqkV9H0_zuNpCy-8qgWDSFH7C_9zxHqs6GsA8&usqp=CAU'
        },
        {
            id: 5,
            name: 'Doublebandplanner',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 599.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A1ovGUg8RmgsStakhdXqQqxFORhd3nVt9g&usqp=CAU'
        },
        {
            id: 6,
            name: 'Chainsaw',
            description: 'Stationary sanders, including stroke sanders, oscillating spindle sander.',
            price: 199.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A1ovGUg8RmgsStakhdXqQqxFORhd3nVt9g&usqp=CAU'
        },
        {
            id: 7,
            name: 'mitersaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 99.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXTP9dGS7IMzB9VgattNNVELnt_BH4-NUow&usqp=CAU'
        },
        {
            id: 8,
            name: 'Jigsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 499.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRB0CrjiqX0aVJ_89ZY0KFGjcOHRFI2UvJg&usqp=CAU'
        },
        {
            id: 9,
            name: 'rotaryTool',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 299.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlybABvDAixhliiw5r_QI7TpZpH8d6sHusg&usqp=CAU'
        },
        {
            id: 10,
            name: 'jigsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 799.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXycsLkqLFIz3QwTw5_Hz2jBsXssQxs1C9A&usqp=CAU'
        },
        {
            id: 11,
            name: 'Chainsaw',
            description: 'Stationary sanders, including stroke sanders, oscillating spindle sander',
            price: 2099.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNBl_SpD32UgS58MX5dOu-w7pR22c12aD3ZG2cQfyLu1ItR4ZHPZFNoipRcXxtdlIiL8&usqp=CAU'
        },
        {
            id: 12,
            name: 'jointer',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 2989.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9Lw5VbakyCG94QrnTmldGnjEofBzGvi1UA&usqp=CAU'
        },
        {
            id: 13,
            name: 'woodlathe',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 1299.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9Lw5VbakyCG94QrnTmldGnjEofBzGvi1UA&usqp=CAU'
        },
        {
            id: 14,
            name: 'Chainsaw',
            description: 'classified by number of beam, loading system, saw carriage speed.',
            price: 99.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9Lw5VbakyCG94QrnTmldGnjEofBzGvi1UA&usqp=CAU'
        },
        {
            id: 15,
            name: 'grinder',
            description: 'classified by number of beam, loading system, saw carriage speed.',
            price: 29.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZKme0yBGvSHFRKbxpGgFys1bm3kTMPC-3A&usqp=CAU'
        },
        {
            id: 16,
            name: 'grinder',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 299,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZKme0yBGvSHFRKbxpGgFys1bm3kTMPC-3A&usqp=CAU'
        },
        {
            id: 17,
            name: 'panelsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 2909.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAYEMDsFLK2slYzTu9Yj8trRvx8D9SByNYA&usqp=CAU'
        },
        {
            id: 18,
            name: 'pinrouter',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 299.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAYEMDsFLK2slYzTu9Yj8trRvx8D9SByNYA&usqp=CAU'
        },
        {
            id: 19,
            name: 'Chainsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 209.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxZUwH56r9PjNqQj1Vn5VOvr8JEk2ICE_xg&usqp=CAU'
        },
        {
            id: 20,
            name: 'Tablesaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 2990.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxZUwH56r9PjNqQj1Vn5VOvr8JEk2ICE_xg&usqp=CAU'
        },
        {
            id: 21,
            name: 'Band',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 49.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0DtbLXsCUAR0pzp76P4UET4gXJKX6pPNfmX2dp-VpdkXrApT5Qnw2olRQe_W91JObrw&usqp=CAU'
        },
        {
            id: 22,
            name: 'Chainsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 59.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0DtbLXsCUAR0pzp76P4UET4gXJKX6pPNfmX2dp-VpdkXrApT5Qnw2olRQe_W91JObrw&usqp=CAU'
        },
        {
            id: 23,
            name: 'jigsaw',
            description: 'Gas-powered chainsaw for cutting trees and logs.',
            price: 899.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0DtbLXsCUAR0pzp76P4UET4gXJKX6pPNfmX2dp-VpdkXrApT5Qnw2olRQe_W91JObrw&usqp=CAU'
        },

    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = dummyProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const sortProducts = (order) => {
        const sortedProducts = [...filteredProducts];
        sortedProducts.sort((a, b) => {
            if (order === 'lowToHigh') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setFilteredProducts(sortedProducts);
    };

    const filterProductsByPrice = (minPrice, maxPrice) => {
        const filtered = dummyProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
        setFilteredProducts(filtered);
    };
    return (
        <div className='products'>
            <div className='searchInput'>
                <input
                    className='input'
                    type='text'
                    placeholder='Search items...'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button className='searchButton' onClick={handleSearch}>
                    <IoMdSearch />
                </button>
            </div>
            <div className="filterButtons">
                <button onClick={() => sortProducts('lowToHigh')}>Sort by Price: Low to High</button>
                <button onClick={() => sortProducts('highToLow')}>Sort by Price: High to Low</button>
                <button onClick={() => filterProductsByPrice(0, 300)}>Price: $0 - $300</button>
                <button onClick={() => filterProductsByPrice(301, 3000)}>Price: $301 - $3000</button>
            </div>
            <div className="product-list">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product">
                        <Link to={`/product/${product.id}`}> {/* Link to the product detail page */}
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button style={{ backgroundColor: "primaryColor", color: "Red" }}>Price: ${product.price}</button>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Production;