import React from 'react'
import { createContext } from 'react'
export const  UserDatacontext =   createContext()

const UserContext = (props) => {
  const user  = 'arman'

  return (
    <div>
      <UserDatacontext.Provider value={user}>
          {props.children}
      </UserDatacontext.Provider>
    </div>
  )
}

export default UserContext