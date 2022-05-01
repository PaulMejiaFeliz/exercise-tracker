import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  scoped: true,
})
export class AppFooter {
  render() {
    return (
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
    );
  }
}
