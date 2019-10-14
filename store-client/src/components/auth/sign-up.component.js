import React, { useState, Fragment } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { name })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSignUp}>
        <input value={name} onChange={e => setName(e.target.value)} type="text" /><br />
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" /><br />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" /><br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default SignUp
