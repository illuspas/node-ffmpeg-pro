const FFmpeg = require('..');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('rtmp://192.168.0.3/live/bbb', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg');
