import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// Define the type for a single Todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [data, setData] = useState<Todo[]>([]); // Use the Todo type instead of any[]
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
          params: {
            _page: page,
            _limit: 10,
          },
        });
        setData((prevData) => [...prevData, ...response.data]);
        if (response.data.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <>
      <div>
        <h1>UseEffect with Lazy Loading</h1>
        <table border={1} cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Todo Number</th>
              <th>Todo Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, index) => (
              <tr key={`${todo.id}-${index}`}>
                <td>{index + 1}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Completed ✅' : 'Pending ❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more data to load.</p>}
      </div>
    </>
  );
}

export default App;
