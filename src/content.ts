import browser from 'webextension-polyfill';

// TODO: Only run on tested / valid sites.

// TODO: Replace videoElement with proper elements from README

const trackWatchActivity = () => {
  const videoElement = document.querySelector('video');
  if (videoElement) {
    const videoData = {
      title: document.title,
      url: window.location.href,
      timestamp: Date.now(),
      duration: videoElement.duration
    };

    // Send the video data to the background script
    browser.runtime.sendMessage({
      type: 'watchActivity',
      data: videoData
    });
  }
};

// Track when the video starts playing
document.addEventListener('play', trackWatchActivity, true);
