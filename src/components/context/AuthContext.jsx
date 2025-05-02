import React, { useState } from 'react'

export const AuthContext = ({children}) => {
    const [user, setUser]=useState(() => {
        const session =localStorage.getItem('user');

        return session ?JSON.parse(session):null;

    });
    const login=(username,password) => {

    }



  return (
    <div>AuthContext</div>
  )
}
