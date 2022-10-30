const FFmpeg = require('..');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('hls/bbb.m3u8', FFmpeg.Copy(), { 'hls_time': 10, 'hls_list_size': 3, 'hls_flags': 'delete_segments' })
  .Run('/usr/local/bin/ffmpeg', FFmpeg.OverWriteOutput());
