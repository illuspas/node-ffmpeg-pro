const FFmpeg = require('..');

new FFmpeg()
  .Input('bbb.mp4', FFmpeg.NativeRate())
  .Output('rtmp://192.168.0.2/live/sss', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg')
  .then(code => {
    console.log('ffmpeg exit code', code);
  })
  .catch(e => {
    console.log('ffmpeg error', e)
  });
