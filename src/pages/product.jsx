import { useParams } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useState } from "react";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    price: 1000000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    price: 1500000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    name: "Sepatu Converse",
    price: 1200000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 4,
    name: "Sepatu Vans",
    price: 900000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 5,
    name: "Sepatu Puma",
    price: 1300000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 6,
    name: "Sepatu Reebok",
    price: 1100000,
    image: "/images/shoes.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];
const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Nike",
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (productName) => {
    setCart([
      ...cart,
      {
        name: productName,
        qty: 1,
      },
    ]);
  };
  return (
    <Fragment>
      <div className="bg-blue-600 flex justify-end h-20 text-white items-center px-10">
        Welcome back, {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart}></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
