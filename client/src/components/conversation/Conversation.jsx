import WelcomeScreen from "./WelcomeScreen";
import MessageList from "./MessageList";

function Conversation({ messages, isTyping }) {
  if (messages.length === 0) {
    return <WelcomeScreen />;
  }

  return <MessageList messages={messages} isTyping={isTyping} />;
}

export default Conversation;
