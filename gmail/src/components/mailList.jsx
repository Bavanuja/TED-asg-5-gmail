import React from 'react'
import ReadMessage from './readMessage'
import UnreadMessage from './unreadMessage'

export default function MailList() {
  return (
    <div>
        <ReadMessage sender={"Arushan"} time={"4.14"} caption={"hiii"}/>
        <UnreadMessage sender={"Arushan"} time={"4.14"} caption={"hiii"}/>
    </div>
  )
}
