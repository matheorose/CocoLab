import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.revealOnScroll();
    window.addEventListener('scroll', this.revealOnScroll);
  }

  revealOnScroll(): void {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}
