import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayer = ({ url, className }) => {
	return (
		<div className={className}>
			<ReactPlayer
				url={url}
				playing
				loop
				muted
                width='100vw'
                height='100vh'
			/>
		</div>
	);
};

export default VideoPlayer;
