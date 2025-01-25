import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_BASE_URL);
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>React App</h1>
      <p>React app with TypeScript</p>
      {users.map((user: any) => {
        return(
          <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  )
}

export default App

