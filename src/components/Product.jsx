import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from "react-bootstrap/Alert";
import "./Product.css";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";

const Product = () => {

  const dispatch = useDispatch();

  const {data:products,status} = useSelector(state => state.products);
  // console.log(products);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    //   dispatch an action for fetchproducts
      dispatch(getProducts());

    //    fetch("https://fakestoreapi.com/products")
    //   .then(data => data.json())
    //   .then(result => setProducts(result));
  }, []);

  if(status === 'loading'){
    return <p>Loading....</p>
  }
  if (status === 'error'){
    return <Alert key="danger" variant="danger">Something Went Wrong!</Alert>
  }

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{marginBottom:"10px"}} >
      <Card   key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img  variant="top" src={product.image} style={{width:'100px', height:'130px', marginTop:"7px"}} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR :{product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
    
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row" >
        {cards}
      </div>
    </div>
  );

};

export default Product;
