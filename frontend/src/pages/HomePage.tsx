// pages/HomePage.tsx
import React, { useState } from 'react';
import {Home, ArrowUp, ArrowDown, MessageSquare, Share, Bookmark, MoreHorizontal, TrendingUp, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import Register from '../components/Register';

type AuthMode = 'none' | 'login' | 'register';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  subreddit: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  timeAgo: string;
  image?: string;
  userVote?: 'up' | 'down' | null;
}

const HomePage: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('none');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Mock posts data
  const [posts] = useState<Post[]>([
    {
      id: '1',
      title: 'Just finished building my first React app with TypeScript!',
      content: 'After months of learning, I finally created something I\'m proud of. It\'s a simple todo app, but it works!',
      author: 'u/newcoder123',
      subreddit: 'r/webdev',
      upvotes: 1247,
      downvotes: 23,
      comments: 156,
      timeAgo: '3 hours ago',
      userVote: null
    },
    {
      id: '2',
      title: 'TIL that octopuses have three hearts and blue blood',
      content: 'Two hearts pump blood to the gills, while the third pumps blood to the rest of the body. The blue color comes from copper-based hemocyanin.',
      author: 'u/marine_biologist',
      subreddit: 'r/todayilearned',
      upvotes: 15420,
      downvotes: 234,
      comments: 892,
      timeAgo: '5 hours ago',
      userVote: 'up'
    },
    {
      id: '3',
      title: 'My cat figured out how to open doors and now nowhere is safe',
      content: 'Send help. She\'s taken over the house.',
      author: 'u/catlover2023',
      subreddit: 'r/cats',
      upvotes: 8934,
      downvotes: 67,
      comments: 445,
      timeAgo: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
      userVote: null
    },
    {
      id: '4',
      title: 'The sunset from my office window today',
      content: '',
      author: 'u/photographer99',
      subreddit: 'r/EarthPorn',
      upvotes: 23156,
      downvotes: 145,
      comments: 234,
      timeAgo: '1 hour ago',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      userVote: null
    }
  ]);

  // Auth handlers
  const openLogin = () => setAuthMode('login');
  const openRegister = () => setAuthMode('register');
  const closeAuth = () => setAuthMode('none');
  const switchToLogin = () => setAuthMode('login');
  const switchToRegister = () => setAuthMode('register');

  // Sidebar handlers
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
    console.log('Menu item clicked:', item);
  };

  // User handlers
  const handleLoginSuccess = (userData: any) => {
    setCurrentUser({
      id: '1',
      name: userData.name || 'User',
      email: userData.email
    });
    closeAuth();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveMenuItem('home');
    console.log('User logged out');
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="bg-white border border-gray-300 hover:border-gray-400 transition-colors">
      {/* Post Header */}
      <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-200">
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {post.subreddit.charAt(2).toUpperCase()}
            </span>
          </div>
          <span className="font-medium text-gray-900">{post.subreddit}</span>
          <span>•</span>
          <span>Posted by {post.author}</span>
          <span>•</span>
          <span>{post.timeAgo}</span>
        </div>
      </div>

      <div className="flex">
        {/* Vote buttons */}
        <div className="flex flex-col items-center py-2 px-2 bg-gray-50">
          <button className={`p-1 rounded hover:bg-gray-200 ${post.userVote === 'up' ? 'text-orange-500' : 'text-gray-400'}`}>
            <ArrowUp className="w-5 h-5" />
          </button>
          <span className={`text-xs font-bold py-1 ${post.userVote === 'up' ? 'text-orange-500' : post.userVote === 'down' ? 'text-blue-500' : 'text-gray-700'}`}>
            {formatNumber(post.upvotes - post.downvotes)}
          </span>
          <button className={`p-1 rounded hover:bg-gray-200 ${post.userVote === 'down' ? 'text-blue-500' : 'text-gray-400'}`}>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Post content */}
        <div className="flex-1 p-3">
          <h2 className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
            {post.title}
          </h2>
          
          {post.content && (
            <p className="text-gray-700 text-sm mb-3">{post.content}</p>
          )}

          {post.image && (
            <div className="mb-3">
              <img 
                src={post.image} 
                alt="Post content" 
                className="max-w-full h-auto rounded cursor-pointer hover:opacity-90"
                style={{ maxHeight: '400px' }}
              />
            </div>
          )}

          {/* Post actions */}
          <div className="flex items-center space-x-4 text-gray-500 text-xs">
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-1">
              <MessageSquare className="w-4 h-4" />
              <span>{formatNumber(post.comments)} Comments</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-1">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-1">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded px-2 py-1">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PopularCommunitiesWidget = () => (
    <div className="bg-white border border-gray-300 rounded mb-4">
      <div className="bg-gradient-to-r from-orange-400 to-red-400 h-12 rounded-t"></div>
      <div className="p-3">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-4 h-4 text-orange-500 mr-2" />
          <h3 className="font-semibold text-gray-900">Popular Communities</h3>
        </div>
        <div className="space-y-2">
          {[
            { name: 'r/reactjs', members: '245k', rank: 1 },
            { name: 'r/webdev', members: '892k', rank: 2 },
            { name: 'r/programming', members: '4.2M', rank: 3 },
            { name: 'r/javascript', members: '2.1M', rank: 4 },
          ].map((community) => (
            <div key={community.name} className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <span className="text-sm font-bold text-gray-500 w-4">{community.rank}</span>
                <div className="w-6 h-6 bg-blue-500 rounded-full mr-2 ml-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {community.name.charAt(2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium">{community.name}</span>
              </div>
              <div className="text-xs text-gray-500">{community.members}</div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded text-sm font-bold hover:bg-blue-600 transition-colors">
          View All
        </button>
      </div>
    </div>
  );

  const RedditPremiumWidget = () => (
    <div className="bg-white border border-gray-300 rounded mb-4">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <Award className="w-5 h-5 text-orange-500 mr-2" />
          <h3 className="font-semibold text-gray-900">Reddit Premium</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          The best Reddit experience, with monthly Coins
        </p>
        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded text-sm font-bold hover:bg-orange-600 transition-colors">
          Try Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header
        isAuthenticated={!!currentUser}
        userName={currentUser?.name}
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
        onToggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          activeItem={activeMenuItem}
          onItemClick={handleMenuItemClick}
        />
        
        {/* Content */}
        <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-5 lg:ml-[calc(128px+16rem)]">
          <div className="flex gap-6">
            {/* Main Feed */}
            <div className="flex-1 max-w-2xl">
              {/* Sort tabs */}
              <div className="bg-white border border-gray-300 rounded-t mb-0 sticky top-20 z-10">
                <div className="flex">
                  {['Best', 'Hot', 'New', 'Top', 'Rising'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${
                        tab === 'Best' 
                          ? 'text-blue-500 border-blue-500' 
                          : 'text-gray-500 border-transparent hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-0">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="hidden lg:block w-80">
              <PopularCommunitiesWidget />
              <RedditPremiumWidget />
              
              {/* Home sidebar */}
              <div className="bg-white border border-gray-300 rounded mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-12 rounded-t"></div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <Home className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold text-gray-900">Home</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Your personal Reddit frontpage. Come here to check in with your favorite communities.
                  </p>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded text-sm font-bold hover:bg-blue-600 transition-colors">
                      Create Post
                    </button>
                    <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded text-sm font-bold hover:bg-blue-50 transition-colors">
                      Create Community
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-xs text-gray-500 space-y-2 px-2">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <button className="hover:underline">Help</button>
                  <button className="hover:underline">Reddit Coins</button>
                  <button className="hover:underline">Reddit Premium</button>
                  <button className="hover:underline">Reddit Gifts</button>
                  <button className="hover:underline">Communities</button>
                  <button className="hover:underline">Reddiquette</button>
                  <button className="hover:underline">Advertise</button>
                  <button className="hover:underline">Blog</button>
                  <button className="hover:underline">Careers</button>
                  <button className="hover:underline">Press</button>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <button className="hover:underline">Terms</button>
                  <button className="hover:underline">Content Policy</button>
                  <button className="hover:underline">Privacy Policy</button>
                  <button className="hover:underline">Mod Policy</button>
                </div>
                <p className="pt-2">Reddit Inc © 2024. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modals */}
      {authMode === 'login' && (
        <Login 
          onClose={closeAuth} 
          onSwitchToRegister={switchToRegister}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      
      {authMode === 'register' && (
        <Register 
          onClose={closeAuth} 
          onSwitchToLogin={switchToLogin}
          onRegisterSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

export default HomePage;