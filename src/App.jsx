import './App.css';
import { useState } from 'react';
import Loading from './loading.component';
import TourList from './tour-list.component';
import { useEffect } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://course-api.com/react-tours-project'
      );
      const tours = await response.json();
      setTours(tours);
    } catch {
      alert('error with fetch');
    }
    setLoading(false);
  };

  return loading ? (
    <main>
      <Loading />
    </main>
  ) : (
    <main>
      <TourList tours={tours} />
    </main>
  );
};
export default App;
