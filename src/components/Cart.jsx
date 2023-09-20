import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/CartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
const dispatch = useDispatch();
  const removeFromCart = (id) =>{
    //dispatch a remove action
    dispatch(remove(id));
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
            <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
    
  ));

  return (
    <>
        <h1>Cart</h1>
        {cards}
    </>
  )
}

export default Cart;