import WelcomeScreen from "./WelcomeScreen";
import MessageList from "./MessageList";

function Conversation({ messages }) {
  if (messages.length === 0) {
    return <WelcomeScreen />;
  }

  return <MessageList messages={messages} />;
}

export default Conversation;
