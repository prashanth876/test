import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setMainUser,setUsers} from "../Redux/Slices/States/userSlice"

const User = () => {

    const users = useSelector(state=> state.user.users)
    const dispatch = useDispatch()
    console.log(users);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setMainUser(user))
        setUser({
            name: "",
            email: "",
            password: ""
        })
        dispatch(setUsers(user))
    }

    return (
        <div>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' name="name" value={user.name} onChange={handleChange} />
                <input type="email" placeholder='Email' name="email" value={user.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name="password" value={user.password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default User