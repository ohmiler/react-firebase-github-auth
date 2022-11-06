import React from 'react'
import { useLogout } from "../hooks/useLogout"

function ProfileCard({ user }) {

    const { logout } = useLogout();

    return (
    <>
        <div>
            <img src={user.photoURL} />
            <p>
                Name: {user.displayName}
            </p>
            <p>
                Username: {user.reloadUserInfo.screenName}
            </p>
            <p>
                Email: {user.email}
            </p>
            <p>
                User ID: {user.uid}
            </p>
        </div>
        <hr />
        <button onClick={logout}>Log Out</button>
    </>
  )
}

export default ProfileCard