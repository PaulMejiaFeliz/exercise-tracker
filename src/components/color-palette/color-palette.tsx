import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'color-palette',
  styleUrl: 'color-palette.scss',
  shadow: true,
})
export class ColorPalette {
  render() {
    return (
      <Host>
        <div class="colors-display">
          <div class="colors-display__box colors-display__box--white">White</div>
          <div class="colors-display__box colors-display__box--black">Black</div>
          <div class="colors-display__box colors-display__box--grey-lightest">Lightest</div>
          <div class="colors-display__box colors-display__box--grey-lighter">Lighter</div>
          <div class="colors-display__box colors-display__box--grey-light">Light</div>
          <div class="colors-display__box colors-display__box--grey">Grey</div>
          <div class="colors-display__box colors-display__box--grey-dark">Dark</div>
          <div class="colors-display__box colors-display__box--grey-darker">Darker</div>
          <div class="colors-display__box colors-display__box--grey-darkest">Darkest</div>
          <div class="colors-display__box colors-display__box--primary-lightest">Lightest</div>
          <div class="colors-display__box colors-display__box--primary-lighter">Lighter</div>
          <div class="colors-display__box colors-display__box--primary-light">Light</div>
          <div class="colors-display__box colors-display__box--primary">Primary</div>
          <div class="colors-display__box colors-display__box--primary-dark">Dark</div>
          <div class="colors-display__box colors-display__box--primary-darker">Darker</div>
          <div class="colors-display__box colors-display__box--primary-darkest">Darkest</div>
          <div class="colors-display__box colors-display__box--secondary-lightest">Lightest</div>
          <div class="colors-display__box colors-display__box--secondary-lighter">Lighter</div>
          <div class="colors-display__box colors-display__box--secondary-light">Light</div>
          <div class="colors-display__box colors-display__box--secondary">Secondary</div>
          <div class="colors-display__box colors-display__box--secondary-dark">Dark</div>
          <div class="colors-display__box colors-display__box--secondary-darker">Darker</div>
          <div class="colors-display__box colors-display__box--secondary-darkest">Darkest</div>
        </div>
      </Host>
    );
  }
}
