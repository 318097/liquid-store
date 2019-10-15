import React from 'react'
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

import './auth.styles.scss';

const Auth = () => {
  return (
    <section>
      <SignIn />
      <SignUp/>
    </section>
  )
}

export default Auth;
