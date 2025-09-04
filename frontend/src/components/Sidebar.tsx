import {
  FiHome,
  FiTrendingUp,
  FiBookOpen,
  FiLayers,
  FiMenu,
} from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside className={`${ isOpen ? "w-64" : "w-20" } relative h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-8 w-6 h-6 bg-white border rounded-full flex items-center justify-center shadow"
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 space-y-2">
        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FiHome className="text-gray-600" />
          {isOpen && <span className="text-gray-700">Home</span>}
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md bg-indigo-50 text-indigo-600 cursor-pointer">
          <FiTrendingUp />
          {isOpen && <span>Dashboard</span>}
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FiBookOpen className="text-gray-600" />
          {isOpen && <span className="text-gray-700">Users</span>}
        </div>

        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FiLayers className="text-gray-600" />
          {isOpen && <span className="text-gray-700">Settings</span>}
        </div>
      </nav>
    </aside>
  );
}
