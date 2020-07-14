export interface ISynthOptions {
  harmonicity: number;
  detune: number;
  oscillator: {
    type: string;
  };
  envelope: {
    attack: number,
    decay: number,
    sustain: number,
    release: number
  };
  modulation: {
    type: string
  };
  modulationEnvelope: {
    attack: number,
    decay: number,
    sustain: number,
    release: number
  };
}
