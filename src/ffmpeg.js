/*
 * Copyright (C) 2022 Chen Mingliang. All Rights Reserved.
 *
 */

const { spawn } = require('child_process');

class ffmpeg {
  constructor() {
    this.args = [];
  }

  /**
   * 输入
   * @param {string} url 输入流或文件地址
   * @param  {...Object} args 输入参数
   */
  Input(url, ...args) {
    args.forEach(arg => {
      for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
          const element = arg[key];
          this.args.push('-' + key);
          if (element) {
            this.args.push(element);
          }
        }
      }
    });
    this.args.push('-i');
    this.args.push(url);
    return this;
  }

  /**
   * 输出
   * @param {string} url 输出流或文件地址
   * @param  {...Object} args 输出参数
   */
  Output(url, ...args) {
    args.forEach(arg => {
      for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
          const element = arg[key];
          this.args.push('-' + key);
          if (element) {
            this.args.push(element);
          }
        }
      }
    });
    this.args.push(url);
    return this;
  }

  /**
   * 运行命令
   * @param {string} binpath ffmpeg可执行程序路径
   * @param  {...Object} args 运行参数
   */
  Run(binpath, ...args) {
    return new Promise((resolve, reject) => {
      args.forEach(arg => {
        for (const key in arg) {
          if (Object.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            this.args.push('-' + key);
            if (element) {
              this.args.push(element);
            }
          }
        }
      });
      this.ffmpeg_exec = spawn(binpath, this.args);
      this.ffmpeg_exec.on('error', (e) => {
        reject(e);
      });

      this.ffmpeg_exec.stdout.on('data', (data) => {
        console.log(`${data}`);
      });

      this.ffmpeg_exec.stderr.on('data', (data) => {
        console.log(`${data}`);
      });

      this.ffmpeg_exec.on('close', (code) => {
        resolve(code);
      });
    });
  }

  Quit() {
    this.ffmpeg_exec.stdin.write('q');
  }

  Kill() {
    this.ffmpeg_exec.kill();
  }

  /**
   * 以原视频帧率输入
   */
  static NativeRate() {
    return { 're': null };
  }

  /**
   * 设置输出格式
   * @param {String} fmt format
   */
  static Format(fmt) {
    return { 'f': fmt };
  }

  /**
   * 改变视频分辨率,只有在重编码时才生效
   * @param {Number} w width
   * @param {Number} h height
   */
  static Size(w, h) {
    return { 's': w + 'x' + h };
  }

  /**
   * 改变视频帧率,只有在重编码时才生效
   * @param {Number} fps 帧率
   */
  static FrameRate(fps) {
    return { 'r': fps };
  }

  /**
   * 改变音频采样率
   * @param {Number} ar 音频采样
   */
  static SampleRate(sr) {
    return { 'ar': sr };
  }

  /**
   * 改变音频声道数
   * @param {Number} ch 音频声道
   */
  static Channels(ch) {
    return { 'ac': ch };
  }

  /**
   * 流循环模式
   * @param {Number} v 模式
   */
  static StreamLoop(v) {
    return { 'stream_loop': v };
  }

  /**
   * 设置日志打印等级
   * @param {Number} level 等级
   */
  static LogLevel(level) {
    return { 'v': level };
  }

  /**
   * 覆盖输出
   */
  static OverWriteOutput() {
    return { 'y': null };
  }

  static Copy() {
    return { 'c': 'copy' };
  }

  static CopyAudio() {
    return { 'c:a': 'copy' };
  }

  static CopyVideo() {
    return { 'c:v': 'copy' };
  }

  /**
   * 音频编码参数
   * @param {String} codec 音频编码器
   * @param {Number} bitrate 音频比特率
   * @param {String} profile 音频profile, aac_he\aac_he_v2
   */
  static AudioCodec(codec, bitrate, profile) {
    const ac = { 'c:a': codec };
    if (bitrate) {
      Object.assign(ac, { 'b:a': bitrate });
    }
    if (profile) {
      Object.assign(ac, { 'profile:a': profile });
    }
    return ac;
  }

  /**
   * 视频编码参数
   * @param {String} codec 视频编码器
   * @param {Number} bitrate 视频比特率
   * @param {String} profile 视频profile
   * @param {String} preset x264 preset
   * @param {String} tune x264 tune
   */
  static VideoCodec(codec, bitrate, profile, preset, tune) {
    const vc = { 'c:v': codec };
    if (bitrate) {
      Object.assign(vc, { 'b:v': bitrate });
    }
    if (profile) {
      Object.assign(vc, { 'profile:v': profile });
    }
    if (preset) {
      Object.assign(vc, { 'preset': preset });
    }
    if (tune) {
      Object.assign(vc, { 'tune': tune });
    }
    return vc;
  }
}

module.exports = ffmpeg;
