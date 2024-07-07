import React from 'react'
import {MultiChatSocket , MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic("32ca57aa-c888-4dba-8647-03a908cbfc2c",props.user.username,props.user.secret);

  return (
    <div style ={{height : "100vh"}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>
  )
}

export default ChatsPage;
