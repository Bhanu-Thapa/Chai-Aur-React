import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  function handel(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="User Name"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handel}>Submit</button>
    </div>
  );
}

export default Login;
