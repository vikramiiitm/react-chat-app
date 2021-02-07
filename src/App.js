import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
const App = () =>{
  return (
    <ChatEngine 
      height="100vh"
      projectID='
      c327c701-f124-4b89-9f82-21c5717e845c'
      userName='vikram'
      userSecret='asdf'
      renderChatFeed={(chatAppProps) =><ChatFeed { ... chatAppProps} />}/>
  )
}

export default App;
