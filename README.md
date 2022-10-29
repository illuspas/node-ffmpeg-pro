# node-ffmpeg-pro
Nodejs ffmpeg process caller

# example
## Relay Live Stream
```
const FFmpeg = require('node-ffmpeg-pro');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('rtmp://192.168.0.3', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg');
  
```

## Relay Live Stream Multiple Output
```
const FFmpeg = require('node-ffmpeg-pro');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('rtmp://192.168.0.3', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Output('rtmp://192.168.0.4', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Output('rtmp://192.168.0.5', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg');
  
```

## Save Live Stream
```
const FFmpeg = require('node-ffmpeg-pro');

new FFmpeg()
  .Input('rtmp://192.168.0.2/live/bbb')
  .Output('/path/to/save/bbb.mp4')
  .Run('/usr/local/bin/ffmpeg', FFmpeg.OverWriteOutput());

```

## File to Live Stream
```
const FFmpeg = require('node-ffmpeg-pro');

new FFmpeg()
  .Input('bbb.mp4', FFmpeg.NativeRate())
  .Output('rtmp://192.168.0.2/live/bbb', FFmpeg.Copy(), FFmpeg.Format('flv'))
  .Run('/usr/local/bin/ffmpeg')

```
