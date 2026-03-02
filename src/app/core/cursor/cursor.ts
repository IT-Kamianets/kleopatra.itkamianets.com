import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="cursor-dot" [ngClass]="{'cursor-hover': isHovering}"></div>
    <div class="cursor-ring" [ngClass]="{'cursor-hover': isHovering}"></div>
  `
})
export class Cursor implements OnInit, OnDestroy {
  isHovering = false;

  private mouseMoveHandler = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
  };

  private mouseOverHandler = (e: MouseEvent) => {
    const target = e.target as Element;
    const isInteractive = target.closest('a, button, .group, [role="button"]');
    this.isHovering = !!isInteractive;
  };

  ngOnInit(): void {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseover', this.mouseOverHandler);
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseover', this.mouseOverHandler);
  }
}
