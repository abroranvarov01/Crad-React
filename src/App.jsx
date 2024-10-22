import React, { useState, useEffect } from "react";
import Card from "./components/card";
import UserForm from "./components/form";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    });
  };

  const handleAddUser = (newUser) => {
    const newUserData = { id: nanoid(), ...newUser };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    }).then((response) => {
      response.json().then((data) => {
        setUsers([...users, data]);
      });
    });
  };

  const handleEditUser = (id, updatedData) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }).then((response) => {
      response.json().then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === id ? data : user))
        );
      });
    });
  };

  return (
    <div className="container">
      <UserForm onSubmit={handleAddUser} />
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <li key={user.id}>
            <Card
              name={user.name}
              username={user.username}
              id={user.id}
              onDelete={handleDelete}
              onEdit={handleEditUser}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
