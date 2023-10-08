import { useState, useEffect } from "react";
import {
  addUser,
  deleteUserById,
  getUsers,
  updateUserById,
} from "../../services/usingAxios";

import "./componentB.css";

const ComponentB = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log("Users List by Axios:", response.data);
    setUsers(response.data);
  };

  const addNewUser = async () => {
    const payload = {
      name: "John Doe",
      username: "john.d",
      email: "john.doe@example.com",
      address: {
        street: "First Avenue",
        suite: "#7",
        city: "Chennai",
        zipcode: "92998-387411",
        geo: {
          lat: "-37.3169",
          lng: "81.2496",
        },
      },
      phone: "+91-1234567890",
      website: "john-doe.com",
      company: {
        name: "XYZ",
        catchPhrase: "an MNC Company",
        bs: "e-commerce",
      },
    };

    const response = await addUser(payload);
    console.log("New User Added By Axios: ", response.data);
    // setUsers((users) => [...users, newUser]);
  };

  const updateExistingUser = async () => {
    const payload = {
      name: "John Doe",
      username: "john.d",
      email: "john.doe@example.com",
      address: {
        street: "First Avenue",
        suite: "#7",
        city: "Chennai",
        zipcode: "92998-387411",
        geo: {
          lat: "-37.3169",
          lng: "81.2496",
        },
      },
      phone: "+91-1234567890",
      website: "john-doe.com",
      company: {
        name: "XYZ",
        catchPhrase: "an MNC Company",
        bs: "e-commerce",
      },
    };

    const response = await updateUserById(1, payload);
    console.log("Updated User By Axios: ", response.data);
  };

  const deleteUser = async () => {
    const response = await deleteUserById(1);
    console.log("Deleted User By Axios: ", response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    console.log("Users: ", users);
  }, [users]);

  return (
    <div>
      <h1>API Calls using Axios</h1>
      <p>axios is a third-party npm library to handle API Calls</p>
      <button onClick={addNewUser}>Add a new user</button>
      <button onClick={updateExistingUser}>Update an user</button>
      <button onClick={deleteUser}>Delete an user</button>

      <div className="users-container">
        <h2>Users</h2>
        {users.map((user, index) => (
          <div className="user" key={index}>
            <div className="name">Name: {user.name}</div>
            <div className="email">Email: {user.email}</div>
            <div className="website">Website: {user.website}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentB;
