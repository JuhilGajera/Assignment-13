import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Add() {
    const [name, setName] = useState('')
    const [getName, setGetName] = useState('')
    const add = () => {
        axios.post('https://fakestoreapi.com/products', {
            title: name
        })
            .then((res) => {
                console.log(res);
                setGetName(res.data);
            })
            .catch((err) => { console.log(err) })
    }
    return (
        <div>
            <input type="text" placeholder='Enter new item' value={name} onChange={(event) => { setName(event.target.value) }} />
            <button onClick={add}>Submit</button>
        </div>
    )
}
