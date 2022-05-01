import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true,
})
export class AppFooter {
  render() {
    return (
      <Host>
        <footer class="footer">
          <div class="footer__logo-box">
            <img src="assets/img/footer-logo.png" alt="Exercise Tracker Logo" class="footer__logo" />
          </div>
          <p class="copyright">
            Copyright &copy; 2022 by{' '}
            <a href="#" class="copyright__link">
              Paul Mejia
            </a>
            . All rights reserved.
          </p>
        </footer>
      </Host>
    );
  }
}
