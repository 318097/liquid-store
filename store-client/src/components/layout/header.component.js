import React from 'react'
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <header>
      <h2>
        Liquid Store
      </h2>
      <div>
        {currentUser ? currentUser.name : 'Not signed in'}
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Header);
