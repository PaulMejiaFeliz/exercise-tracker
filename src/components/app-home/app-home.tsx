import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <h1 class="heading-1">Exercise tracker</h1>
        <p class="paragraph u-margin-bottom-large">A tracker for exercise routines and weight lifting. This is an MVP for personal use.</p>
        <color-palette></color-palette>
      </div>
    );
  }
}
