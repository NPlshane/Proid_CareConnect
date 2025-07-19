
import {
  Heart,
  MessageCircle,
  Calendar,
  Brain,
  ArrowLeft,
  Clock,
  Smile,
  Plus,
  Minus,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const [textZoom, setTextZoom] = useState(3);

  const adjustTextSize = (increment) => {
    setTextZoom((prev) => {
      const newZoom = increment ? Math.min(prev + 1, 5) : Math.max(prev - 1, 1);
      return newZoom;
    });
  };

  const features = [
    {
      title: 'Daily Checkup',
      description: 'Track your mood & wellness',
      icon: Heart,
      path: '/checkup',
    },
    {
      title: 'Chats & Calls',
      description: 'Connect with family & doctors',
      icon: MessageCircle,
      path: '/chat',
    },
    {
      title: 'Events',
      description: 'Local events & activities',
      icon: Calendar,
      path: '/events',
    },
    {
      title: 'Bookings',
      description: 'Your upcoming appointments',
      icon: Clock,
      path: '/appointments',
    },
    {
      title: 'Foods',
      description: 'Foods near you',
      icon: Smile,
      path: '/food-map',
    },
    {
      title: 'Games',
      description: 'Keep your mind sharp',
      icon: Brain,
      path: '/games',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF3DD] pb-24 font-[Quicksand]">
      {/* Header */}
      <header className="bg-[#5E6472] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ArrowLeft size={28} className="text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">CareConnect</h1>
              <p className="text-white/80 text-lg">GOOD MORNING</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <div className="text-slate-800 text-sm font-semibold">Text Size</div>
            <div className="flex items-center justify-center space-x-2 mt-1">
              <button
                onClick={() => adjustTextSize(false)}
                className="w-6 h-6 bg-slate-300 rounded text-slate-800"
                disabled={textZoom === 1}
              >
                -
              </button>
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-slate-800 font-bold">
                {textZoom}
              </div>
              <button
                onClick={() => adjustTextSize(true)}
                className="w-6 h-6 bg-slate-300 rounded text-slate-800"
                disabled={textZoom === 5}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="bg-[#5E6472] text-white rounded-3xl mx-4 mt-6 p-6">
        <h2 className="text-xl font-bold mb-4">Today's Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#AED9E0] rounded-2xl p-4 text-center">
            <MessageCircle size={32} className="mx-auto mb-1 text-[#5E6472]" />
            <p className="text-2xl font-bold text-[#5E6472]">4</p>
            <p className="text-sm text-[#5E6472]">Chats</p>
          </div>
          <div className="bg-[#B8F2E6] rounded-2xl p-4 text-center">
            <Heart size={32} className="mx-auto mb-1 text-red-400" />
            <p className="text-xl font-bold text-[#5E6472]">Good</p>
            <p className="text-sm text-[#5E6472]">Mood</p>
          </div>
          <div className="bg-[#AED9E0] rounded-2xl p-4 text-center">
            <Calendar size={32} className="mx-auto mb-1 text-[#5E6472]" />
            <p className="text-2xl font-bold text-[#5E6472]">2</p>
            <p className="text-sm text-[#5E6472]">Events</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-4 mt-6">
        <h2 className="text-2xl font-bold text-[#5E6472] mb-4">Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map(({ title, description, icon: Icon, path }) => (
            <Link to={path} key={title} className="bg-[#B8F2E6] rounded-2xl p-4 border border-[#5E6472] shadow">
              <div className="flex space-x-3">
                <div className="p-2 bg-[#5E6472] rounded-xl">
                  <Icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#5E6472] font-bold text-lg">{title}</h3>
                  <p className="text-[#5E6472] text-sm opacity-80">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Medication + Event */}
      <section className="mx-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFD6A5] rounded-2xl p-5 border border-orange-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#5E6472] font-bold text-lg">Medication Reminder</h3>
            <div className="p-2 bg-orange-400 rounded-xl">
              <Clock size={20} className="text-white" />
            </div>
          </div>
          <div className="bg-orange-100 rounded-xl p-3 border border-orange-300">
            <p className="text-[#5E6472] font-bold">Blood Pressure Pills</p>
            <p className="text-sm text-[#5E6472]">Take with breakfast</p>
            <p className="text-sm font-bold text-[#5E6472]">8:00AM</p>
          </div>
        </div>
        <div className="bg-[#DDBDD5] rounded-2xl p-5 border border-purple-300">
          <h3 className="text-[#5E6472] font-bold text-lg mb-2">Upcoming Events</h3>
          <div className="bg-purple-100 rounded-xl p-3 border border-purple-300">
            <p className="text-[#5E6472] font-bold">Tai Chi Class</p>
            <p className="text-sm text-[#5E6472]">Bedok CC</p>
            <p className="text-sm font-bold text-[#5E6472]">7:00AM</p>
          </div>
        </div>
      </section>

      {/* Emergency Button */}
      <section className="mx-4 mt-6 bg-red-200 p-6 rounded-3xl text-center border-t-4 border-red-400">
        <h3 className="text-red-700 text-xl font-bold mb-2">Emergency</h3>
        <p className="text-red-700 mb-4 text-sm">Need immediate help? Tap to call emergency services.</p>
        <button className="bg-red-500 text-white font-bold px-8 py-3 rounded-xl text-xl shadow-md">
          Call 911
        </button>
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-[#AED9E0] flex justify-around items-center p-4 rounded-t-3xl shadow-inner">
        <Link to="/" className="text-[#5E6472] text-center">
          <Smile size={24} />
          <p className="text-xs">Home</p>
        </Link>
        <Link to="/chat" className="text-[#5E6472] text-center">
          <MessageCircle size={24} />
          <p className="text-xs">Chats</p>
        </Link>
        <Link to="/appointments" className="text-[#5E6472] text-center">
          <Clock size={24} />
          <p className="text-xs">Bookings</p>
        </Link>
        <Link to="/food-map" className="text-[#5E6472] text-center">
          <Smile size={24} />
          <p className="text-xs">Food</p>
        </Link>
        <Link to="/games" className="text-[#5E6472] text-center">
          <Brain size={24} />
          <p className="text-xs">Games</p>
        </Link>
      </nav>
    </div>
  );
};

export default Index;
