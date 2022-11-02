const FFmpeg = require('..');

new FFmpeg()
  .Logs((data) => {
    console.log('capture logs:', data)
  })
  .Input('bbb.mp4', FFmpeg.NativeRate())
  .Output('rtmp://192.168.0.2/live/sss', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg')
