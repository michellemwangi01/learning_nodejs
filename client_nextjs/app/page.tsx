"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { error } from "console";

const page = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  interface User {
    ID: number;
    name: string;
    age: string;
  }

  const onEdit = (user: User) => {
    console.log(user);
  };
  const onDelete = (user: User) => {
    console.log(user);
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    console.log(newUser);

    e.preventDefault();
    fetch("http://localhost:5000/users/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers([...users, data.newUser]);
        setNewUser({ name: "", age: "" }); // Reset form fields after adding user
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div style={{ display: "flex", margin: "auto" }}>
        <h2>Add User</h2>
        <form onSubmit={handleAddUser} style={{ color: "black" }} method="POST">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newUser.name}
              style={{
                border: "black 1px solid",
                margin: "1rem",
                borderRadius: "5px",
              }}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
              style={{
                border: "black 1px solid",
                margin: "1rem",
                borderRadius: "5px",
              }}
              required
            />
          </label>
          <button
            style={{
              backgroundColor: "#3331b5",
              color: "white",
              padding: "8px",
              borderRadius: "5px",
            }}
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>

      <h2>Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            .slice()
            .reverse()
            .map((user) => (
              <tr key={user.ID}>
                <td>{user.ID}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button className="edit-button" onClick={() => onEdit(user)}>
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDelete(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
