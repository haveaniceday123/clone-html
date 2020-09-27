const Stream = require('node-rtsp-stream');
stream = new Stream({
  name: '1',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9999,
});

