import { useEffect, useState } from 'react';
import './App.css';
import Authservice from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    Authservice.getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>{loading ? null : <h1 className="text-green-600 ">Mega Blog</h1>}</>;
}

export default App;
