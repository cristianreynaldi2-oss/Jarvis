import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ChatArea from "../components/chat/ChatArea";
import ChatInput from "../components/chat/ChatInput";
import Header from "../components/layout/Header";

function Home() {
  return (
    <MainLayout>
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <ChatArea />

        <ChatInput />
      </div>
    </MainLayout>
  );
}

export default Home;
