import React from 'react'
import { connect } from 'react-redux';
import { Button } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { toggleCartVisibility } from '../../store/cart/cart.actions';
import './cart.styles.scss';

const CartContainer = styled.div`
  padding: 5px;
  border: 1px solid black;
  position: absolute;
  height: 300px;
  width: 200px;
  right: 0;
  background: white;
  display: ${({ cartVisibility }) => cartVisibility ? 'block' : 'none'}
`

const ItemRow = styled.div`
  margin: 5px 0;
  padding: 10px;
  background: lightgrey;
  display: flex;
  .name{
    flex-grow: 1;
  }
`

const Card = ({ history, dispatch, cartVisibility, cart }) => {
  const handleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartVisibility());
  };

  return (
    <CartContainer cartVisibility={cartVisibility} className="cart">
      {cart.length ? cart.map(item => (
        <ItemRow key={item._id}>
          <div className="name">
            {item.name}
          </div>
          <div>
            &#10006; {item.quantity}
          </div>
        </ItemRow>
      )) :
        <p>Cart is empty</p>
      }
      <Button onClick={handleClick} block>Checkout</Button>
    </CartContainer>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartVisibility: cart.cartVisibility,
  cart: cart.cart
});

export default withRouter(connect(mapStateToProps)(Card))
