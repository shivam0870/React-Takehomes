import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUserData(response.data.data); 
      setError(null);
    } catch (error) {
      alert("Error fetching user data: " + error.message); 
      setError("Error fetching user data");
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        <button onClick={() => fetchUserData(1)}>Load User 1</button>
        <button onClick={() => fetchUserData(2)}>Load User 2</button>
        <button onClick={() => fetchUserData(3)}>Load User 3</button>
        <button onClick={() => fetchUserData(100)}>Handle Error</button>
      </div>
      {error && <div>Error: {error}</div>}
      {userData && (
        <div>
          <h3>Email: {userData.email}</h3>
          <h3>Name: {`${userData.first_name} ${userData.last_name}`}</h3>
          <img src={userData.avatar} alt="User Avatar" />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
