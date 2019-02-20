import React, { Component } from 'react';
import Sound from 'react-sound';
import shufflesound from './mp3/shuffling-cards-5.mp3'
import failsound1 from './mp3/fail/fail-buzzer-02.mp3'
import failsound2 from './mp3/fail/fail-trombone-01.mp3'
import failsound3 from './mp3/fail/fail-trombone-02.mp3'
import failsound4 from './mp3/fail/bulb-horn-01.mp3'
import bellring from './mp3/small-bell-ring-01a.mp3'
import dreamharp from './mp3/dream-harp-03.mp3'

const failsounds = [failsound1, failsound2, failsound3, failsound4];

class ShuffleSound extends Component {
  render() {
    return (
      <Sound
      url={shufflesound}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      />
    );
  }
}

class FailSound extends Component {
  
  getArrayRandomElement = (arr) => {
    if (arr && arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  render() {
    return (
      <Sound
      url={this.getArrayRandomElement(failsounds)}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      volume={50}
      />
    );
  }
}

class BellSound extends Component {
  render() {
    return (
      <Sound
      url={bellring}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      />
    );
  }
}

class DoneSound extends Component {
  render() {
    return (
      <Sound
      url={dreamharp}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      />
    );
  }
}

export { ShuffleSound, FailSound, BellSound, DoneSound };