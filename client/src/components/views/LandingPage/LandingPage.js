import { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  useEffect(() => {
    axios
      .get('/api/hello') // server/index.js app.get
      .then((response) => console.log(response.data));
  }, []);

  return <div>LandingPage</div>;
};

export default LandingPage;
