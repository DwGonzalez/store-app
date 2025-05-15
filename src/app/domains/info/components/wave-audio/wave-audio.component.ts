import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  @Input({ required: true }) audioUrl!: string;

  @ViewChild('audioWave', { static: true }) waveContainer!: ElementRef;

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.waveContainer.nativeElement,
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.ws.playPause();
  }
}
