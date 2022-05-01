import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  scoped: true,
})
export class AppHeader {
  render() {
    return (
      <header class="header">
        <div class="header__logo-box">
          <img src="/assets/img/logo.png" alt="Exercise Tracker Logo" class="header__logo" />
        </div>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <stencil-route-link url="/" class="navigation__link">
                Home
              </stencil-route-link>
            </li>
            <li class="navigation__item">
              <stencil-route-link url="/" class="navigation__link">
                Components
              </stencil-route-link>
            </li>
            <li class="navigation__item navigation__item--active">
              <stencil-route-link url="/" class="navigation__link">
                Start
              </stencil-route-link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
