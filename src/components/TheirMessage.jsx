import React from 'react';

const TheirMessage = ({lastMessage,message}) => {
   const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== lastMessage.sender.username
   return (
      <div>
         
      </div>
   );
}

export default TheirMessage;
