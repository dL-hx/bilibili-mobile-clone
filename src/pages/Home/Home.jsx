import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar, TabBar, Button, Card, Image, Space, Input, Dialog, PullToRefresh, InfiniteScroll } from 'antd-mobile';
import { SearchOutline, BellOutline, AppOutline, VideoOutline, SearchOutline as SearchTabOutline, UserOutline, PlayOutline, MessageOutline, ExclamationCircleFill } from 'antd-mobile-icons';

import './Home.css';

const Home = () => {
  // 当前选中的分类
  const [activeCategory, setActiveCategory] = React.useState('首页');
  // 路由导航
  const navigate = useNavigate();
  // 搜索状态
  const [searchQuery, setSearchQuery] = React.useState('');
  // 视频数据
  const videoData = [
    {
      id: 1,
      title: '我被炸粉丝冲了25万！！！！',
      thumbnail: 'https://picsum.photos/id/10/300/200',
      views: '318.8万',
      danmu: '1.8万',
      duration: '04:28',
      category: '生活',
    },
    {
      id: 2,
      title: '【每天一遍】10分钟让胸肌减训练男女通用',
      thumbnail: 'https://picsum.photos/id/11/300/200',
      views: '92.7万',
      danmu: '1699',
      duration: '10:05',
      category: '生活',
    },
    {
      id: 3,
      title: '如何把50块一只的鸭子，做成1288的样子',
      thumbnail: 'https://picsum.photos/id/12/300/200',
      views: '174.4万',
      danmu: '1.2万',
      duration: '08:32',
      category: '生活',
    },
    {
      id: 4,
      title: '让男朋友装死躺在床上，骗女朋友进门，结果...',
      thumbnail: 'https://picsum.photos/id/13/300/200',
      views: '411.6万',
      danmu: '6696',
      duration: '03:15',
      category: '生活',
    },
    {
      id: 5,
      title: '谁买谁有病？',
      thumbnail: 'https://picsum.photos/id/14/300/200',
      views: '446.5万',
      danmu: '1.3万',
      duration: '06:45',
      category: '科技',
    },
    {
      id: 6,
      title: '超人叶问',
      thumbnail: 'https://picsum.photos/id/15/300/200',
      views: '179万',
      danmu: '2740',
      duration: '05:20',
      category: '动画',
    },
    {
      id: 7,
      title: '[5]快速通过关卡！你们说，有没有...',
      thumbnail: 'https://picsum.photos/id/16/300/200',
      views: '321万',
      danmu: '8900',
      duration: '07:12',
      category: '游戏',
    },
    {
      id: 8,
      title: '的时候会喊三、二、一？',
      thumbnail: 'https://picsum.photos/id/17/300/200',
      views: '256万',
      danmu: '1.1万',
      duration: '09:30',
      category: '生活',
    },
  ];

  // 分类标签
  const categories = ['首页', '动画', '番剧', '国创', '音乐', '舞蹈', '游戏', '科技', '生活', '鬼畜', '时尚', '广告'];

  // 底部导航
  const tabBarTabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'video',
      title: '视频',
      icon: <VideoOutline />,
    },
    {
      key: 'search',
      title: '搜索',
      icon: <SearchTabOutline />,
    },
    {
      key: 'profile',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  // 过滤后的视频数据
  const [filteredVideos, setFilteredVideos] = React.useState(videoData);
  // 加载状态
  const [refreshing, setRefreshing] = React.useState(false);
  // 是否有更多数据
  const [hasMore, setHasMore] = React.useState(true);
  // 当前页码
  const [currentPage, setCurrentPage] = React.useState(1);
  // 每页视频数量
  const pageSize = 8;

  // 统一的视频过滤函数
  const filterVideos = () => {
    let filtered = videoData;
    
    // 分类过滤：如果不是"首页"，则只显示对应分类的视频
    if (activeCategory !== '首页') {
      filtered = filtered.filter(video => video.category === activeCategory);
    }
    
    // 搜索过滤：如果有搜索词，则进一步过滤
    if (searchQuery) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredVideos(filtered);
  };

  // 添加useEffect钩子，当分类或搜索条件变化时自动过滤视频
  React.useEffect(() => {
    filterVideos();
  }, [activeCategory, searchQuery]);

  // 下拉刷新处理函数
  const onRefresh = async () => {
    setRefreshing(true);
    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    // 重置页码和视频数据
    setCurrentPage(1);
    filterVideos();
    setRefreshing(false);
  };

  // 上拉加载更多处理函数
  const onLoadMore = async () => {
    if (!hasMore || refreshing) return;
    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    // 加载下一页数据（当前为模拟数据，实际项目中应从服务器获取）
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    // 模拟没有更多数据的情况
    if (nextPage > 2) {
      setHasMore(false);
      return;
    }
    // 实际项目中，这里应该根据页码从服务器获取数据
    // 这里只是简单地复制现有数据作为模拟
    setFilteredVideos(prev => [...prev, ...videoData]);
  };

  // 处理搜索
  const handleSearch = () => {
    console.log('Search:', searchQuery);
    filterVideos();
  };

  // 处理下载按钮点击
  const handleDownload = () => {
    Dialog.alert({
      header: (
        <ExclamationCircleFill
          style={{
            fontSize: 64,
            color: 'var(--adm-color-warning)',
          }}
        />
      ),
      title: '下载提示',
      content: (
        <>
          <div>正在下载App中，请稍候...</div>
        </>
      ),
      confirmText: '我知道了',
    });
  };

  return (
    <div className="home-container">
      {/* 顶部导航栏 */}
      <div className="top-nav">
        <div className="logo-area">
          <span className="bilibili-logo">bilibili</span>
        </div>
        <div className="search-area">
          <div className="search-wrapper">
            <Input
              placeholder="请输入搜索的内容..."
              prefix={<SearchOutline />}
              className="search-input"
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
              onEnterPress={handleSearch}
            />
            <Button 
              className="search-button" 
              onClick={handleSearch}
              size="small"
            >
              搜索
            </Button>
          </div>
        </div>
        <div className="user-area">
          <Button size="small" className="download-btn" onClick={handleDownload}>下载App</Button>
          <BellOutline className="bell-icon" />
        </div>
      </div>

      {/* 分类标签 */}
      <div className="category-tabs">
        <div className="category-tabs-container">
          {categories.map((cat) => (
            <div 
              key={cat} 
              className={`category-tab ${cat === activeCategory ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                // 当切换到首页时，清除搜索条件
                if (cat === '首页') {
                  setSearchQuery('');
                }
                // filterVideos()会通过useEffect自动调用
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* 视频内容区域 */}
      <div className="video-content">
        <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
          <div className="video-grid">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id} 
                className="video-card"
                onClick={() => navigate(`/video/${video.id}`)}
              >
              <div className="video-thumbnail">
                <Image
                  src={video.thumbnail}
                  fit="cover"
                  className="thumbnail-img"
                />
                <div className="play-icon-overlay">
                  <PlayOutline className="play-icon" />
                </div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h4 className="video-title">{video.title}</h4>
                <div className="video-stats">
                  <span className="stat-item">
                    <PlayOutline className="stat-icon" />
                    {video.views}
                  </span>
                  <span className="stat-item">
                    <MessageOutline className="stat-icon" />
                    {video.danmu}
                  </span>
                </div>
              </div>
            </Card>
            ))}
          </div>
          <InfiniteScroll 
            loadMore={onLoadMore} 
            hasMore={hasMore} 
            threshold={50}
          />
        </PullToRefresh>
      </div>

      {/* 打开App提示 */}
      <div className="app-prompt">
        <div className="prompt-content">
          <span className="prompt-text">打开App，看你感兴趣的视频</span>
          <Button size="small" color="primary" className="prompt-btn">立即打开</Button>
        </div>
      </div>

      {/* 底部导航栏 */}
      <TabBar tabs={tabBarTabs} defaultValue="home" className="bottom-tabbar" />
    </div>
  );
};

export default Home;