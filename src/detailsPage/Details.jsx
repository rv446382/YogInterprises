import React, { useState, useEffect } from 'react';
import "./details.css";

const Details = ({ match }) => {
    const productId = match.params.id;
    const [product, setProduct] = useState(null);


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
        }
    ];

    useEffect(() => {
        // Fetch product details using productId (You can replace this with your own data-fetching logic)
        // Example:
        fetchProduct(productId);
    }, [productId]);

    const fetchProduct = async (id) => {
        try {
            // Make an API call or fetch product details from your data source
            const response = await fetch(`api/products/${id}`);
            const data = await response.json();
            setProduct(data); // Update state with product details
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Detail Page</h2>
            <p>Product ID: {productId}</p>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default Details;