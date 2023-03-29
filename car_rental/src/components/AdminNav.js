import React from 'react'

import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

export default function AdminNav() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handlelogout = () => {
    logout()
  }
  return (
    <header>
      <div className='container'>
       
          <h1>LOGO</h1>
        
        <nav>

          {user && (
            <>
              <div>
                <button onClick={handlelogout}>Log out</button>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
