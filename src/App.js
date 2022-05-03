import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='5db2de97-6416-4d84-91ee-b5cb3fb0f8a9'
      userName='JS'
      userSecret='1234'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
