// Gentle wooden wick crackle ambient sound synthesizer using Web Audio API
class CandleSoundManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.scheduleCrackle();
  }

  private scheduleCrackle() {
    if (!this.isPlaying || !this.ctx) return;

    // Trigger subtle wood-wick pop/crackle
    const timeToNext = 120 + Math.random() * 450;
    this.timer = window.setTimeout(() => {
      this.playSingleCrackle();
      this.scheduleCrackle();
    }, timeToNext);
  }

  private playSingleCrackle() {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Pinkish/filtered noise burst
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99765 * b0 + white * 0.0990460;
        b1 = 0.96300 * b1 + white * 0.1472500;
        b2 = 0.86650 * b2 + white * 0.4030000;
        output[i] = (b0 + b1 + b2) * 0.04 * (1 - i / bufferSize);
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400 + Math.random() * 1800;
      filter.Q.value = 3.0;

      const gain = this.ctx.createGain();
      gain.gain.value = 0.03 + Math.random() * 0.08;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch {
      // Audio fallback silent
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const candleSound = new CandleSoundManager();
