import React, {useState, useContext} from 'react';
import './pstyles.css'
import { Counter } from './prodcounter';
import { Contexto } from '../../../App'
import { useNavigate, Link } from 'react-router-dom';

import acer from '../../../assets/img/acer-xyz.webp';
import asus from '../../../assets/img/asusrog.webp';
import iphone from '../../../assets/img/iphone13.jpg';
import mac from '../../../assets/img/macbook.webp';
import redmi from '../../../assets/img/redmi.jpg';
import samsung from '../../../assets/img/smart-tv.webp';


const Product = ({id, title, description, price, img, type }) => (
  <Link to={`/products/${id}`}>
    <div className="product">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className='price'>Precio: ${price}</p>
      <p hidden="true">{type}</p>
      <Counter/>
    </div>
  </Link>
);

export const products = [
  {
    id:1,
    img: acer,
    title: 'Laptop Acer XYZ',
    description: 'Potente laptop para tareas exigentes.',
    price: 240.999,
    type:'Laptop',
    details: 'Detalles de la laptop Acer XYZ es una potente laptop de trabajo donde tambien podrás jugar algunos juegos básicos, usar aplicaciones de Adobe y demás mientras no sea muy demandante.'
  },
  {
    id:2,
    img: asus,
    title: 'Laptop Asus Rog Strix Ryzen 7 5800u + RTX 3080',
    description: 'Potente laptop para Gaming.',
    price: 689.999,
    type:'Laptop',
    details: 'Una potente notebook gamer. Jugá donde quieras, stremeá, trabajá por varios años.'
  },
  {
    id:3,
    img: mac,
    title: 'Macbook Pro M1',
    description: 'Potente laptop para diseño.',
    price: 899.999,
    type:'Laptop',
    details: 'Una laptop apple, especial para diseñadores y creadores de contenido que busquen un estilo mas reservado y un sistema operativo mas agradable para este tipo de trabajo.'
  },
  {
    id:4,
    img: iphone,
    title: 'iPhone 13 Pro Max',
    description: 'El último smartphone de Apple con cámara avanzada.',
    price: 799.999,
    type:'Phone',
    details: 'Telefono para presumir buena economía, pero sin mayores prestaciones que la competencia.'
  },
  {
    id:5,
    img: redmi,
    title: 'Redmi Note 13 Pro 5G 6GB',
    description: 'Smartphone de Xiaomi',
    price: 299.999,
    type:'Phone',
    details: 'Grán teléfono, tiene todas las prestaciones que necesitas, una cámara de 50 MPX, 256GB de almacenamiento, una batería de 5100mAh, pero con algunos bugs.'
  },
  {
    id:6,
    img: samsung,
    title: 'Smart TV Samsung 85"',
    description: 'Pantalla grande con calidad de imagen 8K.',
    price: 699.999,
    type:'TV',
    details: 'TV Super Ultra HD para ver en extrema resolucion la gota de transpiracion de tu jugador favorito de fútbol.'
  },
];

export const ProductList = () => {

  const contextValue = useContext(Contexto);
  const navigate = useNavigate();

  const [filteredType, setFilteredType] = useState(''); // Estado del filtro
  

  const filteredProducts = filteredType
    ? products.filter(product => product.type === filteredType)
    : products;

  const handleFilter = type => {
    setFilteredType(type);
  };

  const redirectTo = route => {
    navigate(route);
  };

  return (
    
      <div className="filter-buttons">
        <div className="buttons">
          <button onClick={() => { handleFilter(''); redirectTo('/index'); }}>Mostrar Todo</button>
          <button onClick={() => { handleFilter('Laptop'); redirectTo('/index/laptops'); }}>Laptops</button>
          <button onClick={() => { handleFilter('Phone'); redirectTo('/index/phones'); }}>Celulares</button>
          <button onClick={() => { handleFilter('TV'); redirectTo('/index/tvs'); }}>TVs</button>
        </div>
        
        <div className="product-list">
          {filteredProducts.map(product => (
            <Product
              key={product.id} // Utiliza el 'id' como clave en lugar del índice
              id={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              type={product.type}
            />
          ))}
        </div>
      </div>
        
    );
  };
