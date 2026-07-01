import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ChatArea from "../components/chat/ChatArea";
import Header from "../components/layout/Header";

function Home() {
  return (
    <MainLayout>
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <ChatArea />
      </div>
    </MainLayout>
  );
}

export default Home;
