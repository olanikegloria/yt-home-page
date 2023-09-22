import React, { useEffect, useState } from 'react';
import { FetchFromApi } from '../FetchFromApi';
import VideoDetails from './VideoDetails';
import './video.css';

const RenderVideo = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        FetchFromApi(`search?part=snippet&q=`)
            .then((data) => setVideos(data))
    }, []);
    
    console.log(videos.items)
    return (
        <>
          <div className="render-video">
            {videos.items ? (
                videos.items.map((item) => (
                    <VideoDetails key={item.id.videoId} videoItem={item} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </>
    );
}

export default RenderVideo;

