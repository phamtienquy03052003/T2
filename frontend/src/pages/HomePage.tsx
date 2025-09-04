import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      <div className="flex pt-[56px]">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main content */}
        <main
          className={`flex-1 transition-all duration-300 px-4 ${
            sidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <div className="max-w-3xl mx-auto py-6">
            <div className="bg-white shadow rounded-md p-4 mb-4">
              <h2 className="font-bold">Bài viết 1</h2>
              <p>Nội dung bài viết...</p>
            </div>
            <div className="bg-white shadow rounded-md p-4">
              <h2 className="font-bold">Bài viết 2</h2>
              <p>Nội dung bài viết...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
