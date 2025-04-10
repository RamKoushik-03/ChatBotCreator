
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-heading">BotBuilder</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bot-primary">
                Home
              </Link>
              <Link to="/create" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bot-primary">
                Create Bot
              </Link>
              {/* <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bot-primary">
                Dashboard
              </Link> */}
              <Button className="gradient-button">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-bot-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bot-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bot-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Bot
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bot-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full gradient-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
