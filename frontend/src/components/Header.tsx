
// components/Header.tsx
import React from 'react';
import { Search, Plus, Bell, MessageSquare, Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onToggleSidebar: () => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isAuthenticated = false,
  userName,
  onLoginClick, 
  onRegisterClick,
  onToggleSidebar,
  onLogout
}) => {
  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>

            {/* Reddit Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">reddit</span>
            </div>

            {/* Popular/All dropdown (desktop) */}
            <div className="hidden lg:flex ml-4">
              <button className="flex items-center px-4 py-1 hover:bg-gray-100 rounded text-sm">
                <span className="font-medium">Popular</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Reddit"
                className="w-full pl-10 pr-4 py-1.5 bg-gray-100 border border-gray-300 rounded-full text-sm hover:bg-white hover:border-blue-500 focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            {!isAuthenticated ? (
              // Not logged in - Show auth buttons
              <div className="flex items-center space-x-2">
                <button
                  onClick={onLoginClick}
                  className="px-6 py-1.5 text-blue-500 font-bold text-sm border border-blue-500 rounded-full hover:bg-blue-50 transition-all"
                >
                  Log In
                </button>
                <button
                  onClick={onRegisterClick}
                  className="px-6 py-1.5 bg-blue-500 text-white font-bold text-sm rounded-full hover:bg-blue-600 transition-all"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              // Logged in - Show user actions
              <div className="flex items-center space-x-1">
                {/* Popular on desktop */}
                <div className="hidden lg:flex items-center space-x-1">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile create post */}
                <button className="lg:hidden p-2 hover:bg-gray-100 rounded">
                  <Plus className="w-5 h-5" />
                </button>

                {/* Notifications */}
                <button className="p-2 hover:bg-gray-100 rounded relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Messages */}
                <button className="p-2 hover:bg-gray-100 rounded relative">
                  <MessageSquare className="w-5 h-5" />
                </button>

                {/* User Menu */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 p-1 hover:bg-gray-100 rounded">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {userName ? userName.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-1 w-56 bg-white rounded border border-gray-300 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{userName || 'User'}</p>
                        <p className="text-xs text-gray-500">1 karma</p>
                      </div>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        My Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        User Settings
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Premium
                      </button>
                      <hr className="my-1" />
                      <button 
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;