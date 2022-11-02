const FFmpeg = require('..');

async function run() {
  try {
    const ff = new FFmpeg()
      .Input('bbb.mp4', FFmpeg.NativeRate())
      .Output('rtmp://192.168.0.2/live/sss', FFmpeg.Copy(), FFmpeg.Format('flv'));
    const code = await ff.Run('/usr/local/bin/ffmpeg');
    console.log('ffmpeg exit code', code);
  } catch (error) {
    console.log('ffmpeg error', error);
  }
}

run();
