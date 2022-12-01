import React from 'react'
import './Message.css'
// function Message({message,timestamp,user,userImage}) {
  function Message(props){
  const{message,timestamp,user,userImage} = props

  function FormatTimeZone(timestamp) {
    const data = new Date(timestamp)

    const mins = '0' + data.getMinutes()
    const hrs = '0' + data.getHours()
    const DD = '0' + data.getDay()
    const MM = '0' + (data.getMonth() + 1)
    const YY = '0' + data.getFullYear()

    return hrs.substr(-2)+ ':' + mins.substr(-2) + '----' + DD.substr(-2)+ '-' + MM.substr(-2) + '-' + YY.substr(-2)
  }
  return (
    <div className='message'>
      <img src={userImage} alt='' />
      <div className='message__info'>
      <div className='message__info__h4'>
      <h4>{user}</h4>
      <h4>{FormatTimeZone(timestamp.seconds)}</h4>
      </div>
       
        {/* <h4>{user} {new Date(timestamp?.toDate()).toUTCString()}</h4> */}
        <p>{message}</p>
      </div>
    </div>
  )
 }

export default Message
