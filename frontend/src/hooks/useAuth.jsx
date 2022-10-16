// custom hook to verify auth state;

import { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const response = await axios.get('/api/auth/is_logged_in');
      return response.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(data);
      }
    )();
  }, []);

  return { auth };
};
