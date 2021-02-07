import MessageForm from './MessageForm'
import MyMessage from './MessageForm'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {

   const { chats, activeChat,userName, messages} = props;

   const chat = chats && chats[activeChat];

   const renderMessage = () =>{ 
      const keys = Object.keys(messages)
      return keys.map( (key,index)=> {
         const message = messages[key];
         const lastMessageKey = index === 0? null:keys[index-1];
         const isMyMessage = userName === message.sender.username;

         return (
            <div key= {`msg_${index}`} style={{width: "100%"}}>
               <div className="meassage-block">
                  {
                     isMyMessage 
                     ? <MyMessage message={message}/> 
                     : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                  }
               </div>
               <div className="read-reciepts" style={{marginRight:isMyMessage? '18px':'0px',marginLeft:isMyMessage ? '0px' : '68px'}}>
                  read-reciepts
               </div>

            </div>
         )
      })
   }

   if(!chat) return 'Loading ...';
   return(
      <div>
         <div className="chat-feed">
            <div className="chat-title-container">
               <div className="chat-title">{chat.title}</div>
               <div className="chat-sub-title">
                  {chat.people.map( (person)=> `${person.person.username}`)}
               </div>
            </div>
            {renderMessage()}
            <div style={{height:'100px'}}/>
            <div className="message-form-contaoner">
               <MessageForm { ... props} chatId={activeChat}/>
            </div>
         </div>
      </div>
   )
}

export default ChatFeed;