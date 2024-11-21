import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa ';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.attributes.name ? (
    <FaPauseCircle className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle className="text-gray-300" onClick={handlePause} />
  );

export default PlayPause;
