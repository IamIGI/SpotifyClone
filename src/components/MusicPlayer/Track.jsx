import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => {
  const songData = activeSong.attributes;

  return (
    <div className="w-[30%] flex items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
        } hidden sm:block h-16 w-16 mr-4`}
      >
        <img
          src={songData?.artwork?.url}
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="w-[100%]">
        <p className="truncate text-white font-bold text-lg">
          {songData?.name ? songData.name : 'No active Song'}
        </p>
        <p className="truncate text-gray-300">
          {songData?.composerName ? songData.composerName : 'No active Song'}
        </p>
      </div>
    </div>
  );
};

export default Track;
