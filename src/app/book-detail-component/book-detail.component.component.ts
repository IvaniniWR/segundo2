import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.component.html',
  styleUrl: './book-detail.component.component.css',
  standalone:true,
  imports: [CommonModule] // Agregar esto
})
export class BookDetailComponent {
  @Input() book: any;
}
