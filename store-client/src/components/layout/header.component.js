import React from 'react'
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <div>
      <header>
        Liquid Store
      </header>
      <div>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Header);
