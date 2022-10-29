const FFmpeg = require('..');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('bbb.mp4')
  .Run('/usr/local/bin/ffmpeg', FFmpeg.OverWriteOutput());
