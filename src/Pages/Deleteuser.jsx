import React from 'react'
import axios from 'axios'

const Deleteuser = () => {

    const [email,setEmail] = React.useState('')

    const deleteUser = async() =>{
        try {
            const response = await axios.delete('http://localhost:3000/auth/deleteuser',{data:{email}})
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
        <h1>Delete User</h1>
        <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={deleteUser}>Delete</button >
    </div>
  )
}

export default Deleteuser