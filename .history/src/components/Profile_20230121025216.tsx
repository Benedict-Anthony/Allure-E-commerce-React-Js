import React, { ComponentType, FC } from 'react'
import { accounts } from '../scripts/account'

type profileProps = {
    component:ComponentType
}

const Profile = () => {
  return (
    <section>
          <h2>my profile</h2>
          <div>
              {/* <img src="./images/beauty.jpg" alt="" /> */}
              <h1>Ughulu Benedict</h1>
              <p>benwebdev@gmail.com</p>
          </div>

        <aside>
              {accounts.map((item) => (
                  <div key={item.id}>
                      <p>{item.component}</p>
                      <span>{ item.description}</span>
                  </div>
              ))}
          </aside>
               
    </section>
  )
}

export default Profile
