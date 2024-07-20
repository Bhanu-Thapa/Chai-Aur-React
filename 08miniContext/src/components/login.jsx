import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  function handel(e) {
    e.preventDefault();
    setUser({ name, password });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {'   '}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handel}>SUMBIT</button>
    </>
  );
}

export default Login;
