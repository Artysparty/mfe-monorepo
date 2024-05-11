import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'wr-shell-root',
  standalone: true,
  imports: [ RouterOutlet, NgIf ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  get backBtnVisible(): boolean {
    return this.router.url !== '/';
  }

  constructor (private router: Router) {}

  navigateByUrl(url: string): void {
    this.router.navigateByUrl(`/${url}`);
  }
}
