import './../App.css';
import { useState, useEffect } from 'react';
import db from './../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionReference = collection(db, "users")

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionReference);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getUsers()

  }, [])
  
  return (
    <div className="App">
      {users.map((user) => {
        return (
        <div>
          {" "}
          <h1>Name: {user.name}</h1> 
          <h1>Age: {user.age}</h1> 
        </div>
        )})}
    </div>
  );
}

export default App;
