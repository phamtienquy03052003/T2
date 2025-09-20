// components/Sidebar.tsx
import React from 'react';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Tv, 
  Trophy,
  Settings,
  X,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  activeItem = 'home',
  onItemClick 
}) => {
  const [showRecent, setShowRecent] = React.useState(true);
  const [showCommunities, setShowCommunities] = React.useState(true);

  const feedItems: MenuItem[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'popular', label: 'Popular', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'all', label: 'All', icon: <div className="w-5 h-5 border border-current rounded"></div> },
  ];

  const topicItems: MenuItem[] = [
    { id: 'gaming', label: 'Gaming', icon: <Trophy className="w-5 h-5" /> },
    { id: 'sports', label: 'Sports', icon: <Trophy className="w-5 h-5" /> },
    { id: 'television', label: 'Television', icon: <Tv className="w-5 h-5" /> },
  ];

  const recentCommunities = [
    { name: 'r/reactjs', members: '245k', color: 'bg-blue-500' },
    { name: 'r/programming', members: '4.2M', color: 'bg-green-500' },
    { name: 'r/webdev', members: '892k', color: 'bg-purple-500' },
    { name: 'r/javascript', members: '2.1M', color: 'bg-yellow-500' },
  ];

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const renderMenuItem = (item: MenuItem) => (
    <button
      key={item.id}
      onClick={() => handleItemClick(item.id)}
      className={`w-full flex items-center px-3 py-2 text-left rounded hover:bg-gray-100 transition-colors text-sm ${
        activeItem === item.id ? 'bg-gray-100 font-medium' : 'text-gray-700'
      }`}
    >
      <div className="mr-3 text-gray-600">{item.icon}</div>
      <span>{item.label}</span>
    </button>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-20 left-0 h-full w-64 bg-white border-r border-gray-300 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
        lg:fixed lg:translate-x-0 lg:block lg:top-20 lg:h-[calc(100vh-4rem)]
        [scrollbar-width:thin] [scrollbar-color:transparent_transparent] hover:[scrollbar-color:rgba(0,0,0,0.2)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-400/50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200 lg:hidden">
          <span className="font-semibold text-gray-900">Menu</span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-3 space-y-4">
          {/* Feeds Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-3">
              Feeds
            </h3>
            <div className="space-y-1">
              {feedItems.map(renderMenuItem)}
            </div>
          </div>

          {/* Topics Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-3">
              Topics
            </h3>
            <div className="space-y-1">
              {topicItems.map(renderMenuItem)}
            </div>
          </div>

          {/* Recent Section */}
          <div>
            <button
              onClick={() => setShowRecent(!showRecent)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:bg-gray-100 rounded"
            >
              <span>Recent</span>
              {showRecent ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {showRecent && (
              <div className="space-y-1 mt-2">
                {recentCommunities.slice(0, 3).map((community, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(community.name)}
                    className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-100 rounded text-sm"
                  >
                    <div className={`w-6 h-6 ${community.color} rounded-full mr-3 flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {community.name.charAt(2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{community.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Communities Section */}
          <div>
            <button
              onClick={() => setShowCommunities(!showCommunities)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:bg-gray-100 rounded"
            >
              <span>Communities</span>
              {showCommunities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {showCommunities && (
              <div className="space-y-1 mt-2">
                <button className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-100 rounded text-sm">
                  <Plus className="w-4 h-4 mr-3 text-gray-500" />
                  <span className="text-gray-700">Create Community</span>
                </button>
                
                {recentCommunities.map((community, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(community.name)}
                    className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-100 rounded text-sm"
                  >
                    <div className={`w-6 h-6 ${community.color} rounded-full mr-3 flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {community.name.charAt(2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 truncate">{community.name}</p>
                      <p className="text-xs text-gray-500">{community.members} members</p>
                    </div>
                  </button>
                ))}
                
                <button className="w-full px-3 py-2 text-left text-sm text-blue-500 hover:bg-gray-100 rounded">
                  See more
                </button>
              </div>
            )}
          </div>

          {/* Resources Section */}
          <div className="pt-4 border-t border-gray-200">
            <div className="space-y-1">
              <button 
                onClick={() => handleItemClick('settings')}
                className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-100 rounded text-sm text-gray-700"
              >
                <Settings className="w-4 h-4 mr-3" />
                <span>Settings</span>
              </button>
            </div>
            
            {/* Footer Links */}
            <div className="mt-4 px-3 text-xs text-gray-500 space-y-1">
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <button className="hover:underline">User Agreement</button>
                <button className="hover:underline">Privacy Policy</button>
                <button className="hover:underline">Content Policy</button>
                <button className="hover:underline">Moderator Code of Conduct</button>
              </div>
              <p className="mt-2">Reddit, Inc. © 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;