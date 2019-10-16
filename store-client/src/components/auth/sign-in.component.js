import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.actions';

import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignIn = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: userRef.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log('Sign in with email:', result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h3>Sign in</h3>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="text" /><br />
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" /><br />
        <input type="submit" value="Sign in" />
      </form>
      <button type="primary" onClick={signInWithGoogle}>Google Sign in</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignIn);
