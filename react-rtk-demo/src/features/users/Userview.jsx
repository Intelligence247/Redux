import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';
const Userview = () => {
const user = useSelector((state) => state.user)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  console.log(user)
  return (
    <div style={{background: 'red',
    }}>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
     {!user.loading && user.error ? <div>Error: {user.error}</div>: null}
      {!user.loading && user.users.length ? (
        <ul>
          {
            user.users.map(user => (
              <li key={user.id}>{user.email}</li>
            ))
          }
        </ul>
      ):null } 
    </div>
  )
}

export default Userview

//  07068004724