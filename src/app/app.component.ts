import { Component } from '@angular/core';
import { HeaderComponent } from './header-component/header.component.component';
import { FooterComponent } from './footer-component/footer.component.component';
import { BookListComponent } from './book-list-component/book-list.component.component';
import { BookDetailComponent } from './book-detail-component/book-detail.component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BookListComponent, BookDetailComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion-Libreria';
}
