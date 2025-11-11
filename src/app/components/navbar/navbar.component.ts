import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  menuOpen = false;
  hideNavButtons = false;
  private lastScrollTop = 0;
  private readonly scrollThreshold = 20;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.setBodyScroll(!this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;
    this.setBodyScroll(true);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    const isScrollingDown = currentScroll > this.lastScrollTop;

    if (isScrollingDown && currentScroll > this.scrollThreshold) {
      this.hideNavButtons = true;
    } else {
      this.hideNavButtons = false;
    }

    this.lastScrollTop = Math.max(currentScroll, 0);
  }

  ngOnDestroy() {
    this.setBodyScroll(true);
  }

  private setBodyScroll(enable: boolean) {
    document.body.style.overflow = enable ? '' : 'hidden';
  }
}
