import React, { ComponentType } from 'react'
import { accounts } from '../scripts/account'

type profileProps = {
    orders: ComponentType
}

const Profile = ({orders: Orders}:profileProps) => {
  return (
    <section>
          <div>
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
         </div>
               <Orders/>
    </section>
  )
}

export default Profile
