import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as ToneJS from 'tone';
import {MatSelectChange, MatSliderChange} from '@angular/material';
import {ISynthOptions} from './models/options';
import {ChartConfiguration, ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {KnobComponent} from 'ng2-knob';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit,AfterViewInit {
  synth: any;
  notes: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  octaves: number[] = [1, 2, 3, 4, 5, 6];
  msdown: boolean = false;
  attack: number = 0;
  decay: number = 0;
  sustain: number = 0;
  release: number = 0;
  min: number = 0;
  max: number = 1;
  step: number = 0.1;
  isDisableADSR: boolean = false;

  synths: Array<ISynth> = [
    {
      id: 0,
      value: 'AMSynth',
      viewValue: 'AMSynth'
    },
    {
      id: 1,
      value: 'FMSynth',
      viewValue: 'FMSynth'
    },
    {
      id: 2,
      value: 'DuoSynth',
      viewValue: 'DioSynth'
    },
    {
      id: 3,
      value: 'PolySynth',
      viewValue: 'PolySynth'
    },
    {
      id: 4,
      value: 'MonoSynth',
      viewValue: 'MonoSynth'
    },
    {
      id: 5,
      value: 'PluckSynth',
      viewValue: 'PluckSynth'
    },
    {
      id: 6,
      value: 'Sampler',
      viewValue: 'Sampler'
    }
  ];
  public lineChartData: ChartDataSets[] = [

    {
      data: [this.attack, this.decay, this.sustain, this.release],
      label: 'Series A',
      fill: '#fff',
     backgroundColor: '#ffffff'
    },
  ];
  public lineChartLabels: Label[] = ['Attack', 'Decay', 'Sustain', 'Release'];
  public lineChartOptions: ChartConfiguration ={
    options:
      {

        elements: {
          rectangle:{
            borderColor: '#ffffff'
          },
          point: {
            borderColor: '#ffffff'
          },
          arc:{
            borderColor: '#ffffff'
          }
        },
        legend:{

          labels:{
            fontColor:'#ffffff',

          }
        },
        layout:{
          padding:20
        },

      },


  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#fff',
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderWidth:1,
      pointBackgroundColor: '#ffffff',
      pointStyle: '50',
      borderCapStyle: '#ffffff',

    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {
    // @ts-ignore
  }

  ngOnInit() {
    this.synth = new ToneJS.Synth().toMaster();
    this.setSynthVolume();


  }
  ngAfterViewInit() {

  }

  play(note) {
    if (this.isDisableADSR) {
      this.synth.triggerAttackRelease(note, '4n');
    }
  }

  onChangeSynth(event: MatSelectChange) {
    this.isDisableADSR = true;
    switch (event.value) {
      case 'AMSynth':
        this.synth = new ToneJS.AMSynth(this.setOptions).toMaster();
        const options: ISynthOptions = this.setOptions();
        this.setOptionsToLocalStorage(options);
        break;
      case 'FMSynth':
        this.synth = new ToneJS.FMSynth(this.setOptions).toMaster();
        break;
      case 'DuoSynth':
        this.synth = new ToneJS.DuoSynth(this.setOptions).toMaster();
        break;
      case 'PolySynth':
        this.synth = new ToneJS.PolySynth(10, ToneJS.Synth).toMaster();
        break;
      case 'PluckSynth':
        this.synth = new ToneJS.PluckSynth().toMaster();
        break;
    }
  }

  setOptionsToLocalStorage(options) {
    localStorage.setItem('options', JSON.stringify(options));
  }

  setSynthVolume() {
    this.synth.output.volume.input.value = 0.5;
  }

  setOptions(): ISynthOptions {
    return {
      harmonicity: 3,
      detune: 0,
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: this.attack,
        decay: this.decay,
        sustain: this.sustain,
        release: this.release
      },
      modulation: {
        type: 'square'
      },
      modulationEnvelope: {
        attack: 0.5,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    };


  }

  onAttackChange(event: number) {
    this.attack = event;
    this.synth.envelope.attack = this.attack;


  }

  setDataForChart() {
    this.lineChartData.forEach((chart) => {
      chart.data = [this.attack, this.decay, this.sustain, this.release];
    });
  }

  onDecayChange(event: number) {
    this.decay = event;
    this.synth.envelope.decay = this.decay;
  }

  onSustainChange(event: number) {
    this.sustain = event;
    this.synth.envelope.sustain = this.sustain;
  }

  onReleaseChange(event: number) {
    this.release = event;
    this.synth.envelope.release = this.release;

  }

  onSelect(event: any) {
    console.log(event);
  }

  onChange(event: any, adsr: number) {
    switch (adsr) {
      case 1:
        this.attack = event.value;
        this.setDataForChart();
        break;
      case 2:
        this.decay = event.value;
        this.setDataForChart();
        break;
      case 3:
        this.sustain = event.value;
        this.setDataForChart();
        break;
      case 4:
        this.release = event.value;
        this.setDataForChart();
        break;
    }
  }
}

interface ISynth {
  id: number;
  value: string;
  viewValue: string;
}
