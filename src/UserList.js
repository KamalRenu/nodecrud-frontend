import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
    const [userList, setUserList] = useState([])
    useEffect(async () => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://nodecruduserlist.herokuapp.com/users");
            setUserList(userData.data)
        } catch (error) {
            console.log(error);
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to delete?")
            if (result) {
                await axios.delete(`https://nodecruduserlist.herokuapp.com/user/${id}`)
                fetchUsers()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>User List</h3>
                </div>
                <div className='col-lg-6 text-end'>
                    <Link to="/create-user"><button className='btn btn-primary'>Create User</button></Link>
                </div>
            </div>
            <table className="table table-striped">
                <tbody>
                    {
                        userList.map((user) => {
                            return <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit-user/${user._id}`}><button className='btn btn-sm btn-primary'>Edit</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserList;
