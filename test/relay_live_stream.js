const FFmpeg = require('..');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('rtmp://live.nodemedia.cn/live/sss', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg');
