import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import './VideoDetail.css';

const videoData = {
  1: {
    id: 1,
    title: '我被炸粉丝冲了25万！！！！',
    thumbnail: 'https://picsum.photos/id/10/300/200',
    views: '318.8万',
    danmu: '1.8万',
    duration: '04:28',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' // 默认视频URL
  },
  2: {
    id: 2,
    title: '测试视频2',
    thumbnail: 'https://picsum.photos/id/11/300/200',
    views: '123.4万',
    danmu: '5.6千',
    duration: '03:15',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' // 默认视频URL
  },
  3: {
    id: 3,
    title: '测试视频3',
    thumbnail: 'https://picsum.photos/id/12/300/200',
    views: '456.7万',
    danmu: '2.3万',
    duration: '05:42',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' // 默认视频URL
  },
  4: {
    id: 4,
    title: '测试视频4',
    thumbnail: 'https://picsum.photos/id/13/300/200',
    views: '789.0万',
    danmu: '4.5万',
    duration: '02:30',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' // 默认视频URL
  }
};

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videoData[id];

  if (!video) {
    return (
      <div className="video-detail">
        <NavBar
          left={<LeftOutline onClick={() => navigate(-1)} />}
          title="视频详情"
        />
        <div className="video-not-found">视频不存在</div>
      </div>
    );
  }

  return (
    <div className="video-detail">
      <NavBar
        title="视频详情"
        onBack={() => navigate(-1)}
      >
        视频详情
      </NavBar>
      <div className="video-player-container">
        <video
          className="video-player"
          controls
          autoPlay
          src={video.videoUrl}
          poster={video.thumbnail}
        >
          您的浏览器不支持视频播放
        </video>
      </div>
      <div className="video-info">
        <h2 className="video-title">{video.title}</h2>
        <div className="video-stats">
          <span className="stat-item">播放量: {video.views}</span>
          <span className="stat-item">弹幕: {video.danmu}</span>
          <span className="stat-item">时长: {video.duration}</span>
        </div>
      </div>
      <div className="video-description">
        <h3>视频简介</h3>
        <p>这是一段测试视频，用于演示视频播放功能。</p>
      </div>
    </div>
  );
};

export default VideoDetail;