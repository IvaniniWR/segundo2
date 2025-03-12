import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import {  BookDetailComponent} from '../book-detail-component/book-detail.component.component'; // Importar componente

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.component.html',
  styleUrl: './book-list.component.component.css',
  standalone:true,
  imports: [CommonModule, BookDetailComponent] // Agregar CommonModule
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  selectedBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  selectBook(book: any) {
    this.selectedBook = book;
  }
}
