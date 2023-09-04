import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './detailStyles.css';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState ()

    useEffect (()=> {setProduct(products.find(product => product.id === parseInt(id))); console.log(id, "Hola mundo");},[id])

    
    


    if (!product) {
        return (
        <div>
            <button className='btn' onClick={() => { navigate('/index'); }}>Volver Atrás</button>
            <h1>Producto no Encontrado</h1>
        </div>
        )
    }

    return (
        <div className='div'>
            <button className='btn' onClick={() => { navigate('/index'); }}>Volver Atrás</button>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} />
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <p>{product.details}</p>
        </div>
    );
};

export default ProductDetail;