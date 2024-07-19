import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>
        Welcome {user.name} & Your Password {user.password}
      </h2>
    </>
  );
}

export default Profile;
