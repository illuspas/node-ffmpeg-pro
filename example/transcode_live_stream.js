const { AudioCodec, SampleRate, Channels, VideoCodec, Size, FrameRate, OverWriteOutput } = require('..');
const FFmpeg = require('..');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('bbb.mp4', AudioCodec('aac', 64000), SampleRate(48000), Channels(1), VideoCodec('libx265', null, null, 'veryfast', null), Size(640, 360), FrameRate(12))
  .Run('/usr/local/bin/ffmpeg', OverWriteOutput());
