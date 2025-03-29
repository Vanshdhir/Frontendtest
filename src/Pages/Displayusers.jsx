import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Displayusers = () => {
  const [_id, setId] = useState('');
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);


  useEffect(() => {
    displayUser()
  }, [])

  const displayUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/fetchuser', { _id })
      console.log(response)
      setUsers(response.data)

    } catch (error) {
      console.error(error)
      setUsers([])
    }
  }

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
  }
  const handleChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };


  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:3000/auth/updateuser/${editingUser._id}`, editingUser)
      setEditingUser(null)
      Displayusers()

    } catch (error) {
      console.error(error);

    }
  }

  return (
    // <div>
    //   <h1>Display User</h1>
    //   <input type="text" placeholder='Enter id' value={_id} onChange={(e) => setId(e.target.value)} />
    //   <button onClick={displayUser}>Fetch</button >
    //   <div>
    //     <h2>Details</h2>
    //     <p>ID: {user?._id}</p>
    //     <p>email: {user?.email}</p>
    //   </div>
    // </div>
    <div>
      <h1>Details</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  {editingUser && editingUser._id === user._id ? (
                    <input
                      type="text"
                      name="email"
                      value={editingUser.email}
                      onChange={handleChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser && editingUser._id === user._id ? (
                    <button onClick={updateUser}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(user)}>Edit</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>



      </table>
    </div>
  )
}

export default Displayusers