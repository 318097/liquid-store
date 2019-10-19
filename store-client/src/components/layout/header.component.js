import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon, Badge } from 'antd';

import Cart from '../cart/cart.component';
import { toggleCartVisibility } from '../../store/cart/cart.actions';
import { selectCartItemsCount } from '../../store/cart/cart.selectors';

const StyledHeader = styled.header`
  padding: 0 10px;
  background: rgb(216, 216, 216);
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2{
    flex-grow: 1;
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const Header = ({ currentUser, cartTotalCount, dispatch }) => {
  return (
    <StyledHeader>
      <h2>
        Liquid Store
      </h2>
      <nav>
        <Icon style={{ fontSize: '20px', color: currentUser ? 'green' : 'white' }} type="user" />
        <div style={{ position: 'relative' }}>
          <Badge style={{ fontSize: '10px', backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} count={cartTotalCount}>
            <Icon style={{ fontSize: '20px' }} type="shopping-cart" onClick={() => dispatch(toggleCartVisibility())} />
          </Badge>
          <Cart />
        </div>
      </nav>
    </StyledHeader>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartTotalCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(Header);
