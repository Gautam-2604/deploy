
import React from 'react'
import {client} from "db/client"

export default async function Home(){
  const user = await client.user.findFirst()
  return(
    <div>
      {user?.username}
    </div>
  )
}
