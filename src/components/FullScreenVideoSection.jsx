import { useState, useRef } from 'react';
import { Play, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FullScreenVideoSection = ({ videoUrl, posterImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false); // Unmute when user clicks play
        videoRef.current.muted = false;
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        className="w-full h-[700px] object-cover cursor-pointer"
        autoPlay
        muted={isMuted}
        loop={true}
        playsInline
        poster={posterImage}
        onEnded={handleVideoEnded}
        onClick={handleVideoClick}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-8 left-8 text-white">
        <Link 
          to={`/in-plan/projekt-zagreb-rudes`}
          className="flex items-center gap-3 text-5xl font-medium text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer group"
        >
          Projekt Zagreb - Rudeš
          <svg 
            className="w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FullScreenVideoSection;