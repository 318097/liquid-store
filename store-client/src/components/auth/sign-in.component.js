import React, {useState, useEffect, Fragment} from 'react';

import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({id: userRef.id, ...snapShot.data()});
        });
      } else {
        setUser(null);
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
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="text"/><br/>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" /><br/>
        <input type="submit" value="Sign in" />
      </form>
        <button type="primary" onClick={signInWithGoogle}>Google Sign in</button>
    </div>
  )
}

export default SignIn
