import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = ({ }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch((err) => { console.log(err); })
    }, []);

    return (
        <div>
            <h2>List of Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
