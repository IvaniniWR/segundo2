import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    { id: 1, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", description: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza en su lucha contra molinos de viento y su búsqueda de justicia." },
    { id: 2, title: "Crimen y Castigo", author: "Fiódor Dostoievski", description: "La historia de un joven estudiante que comete un asesinato y debe enfrentar las consecuencias morales y psicológicas de su acto." },
    { id: 3, title: "El Principito", author: "Antoine de Saint-Exupéry", description: "Un cuento filosófico que sigue las aventuras de un pequeño príncipe que viaja por distintos planetas y aprende valiosas lecciones de vida." },
    { id: 4, title: "Matar a un ruiseñor", author: "Harper Lee", description: "Una poderosa novela sobre la injusticia racial y la inocencia en el sur de Estados Unidos, narrada a través de los ojos de una niña." },
    { id: 5, title: "Los Juegos del Hambre", author: "Suzanne Collins", description: "En un futuro distópico, jóvenes deben luchar a muerte en un evento televisado organizado por el gobierno opresor de Panem." },
    { id: 6, title: "La Sombra del Viento", author: "Carlos Ruiz Zafón", description: "Un misterio literario que sigue a un joven que descubre un libro maldito y se adentra en la historia de su misterioso autor." },
    { id: 7, title: "Fundación", author: "Isaac Asimov", description: "Una de las obras maestras de la ciencia ficción, que sigue la historia de un matemático que predice la caída de un imperio galáctico y busca salvar el conocimiento humano." },
    { id: 8, title: "Drácula", author: "Bram Stoker", description: "La historia del legendario conde Drácula y la lucha de un grupo de personas por detener su reinado de terror." },
    { id: 9, title: "Orgullo y Prejuicio", author: "Jane Austen", description: "Una novela romántica sobre la lucha entre el amor y las diferencias sociales en la Inglaterra del siglo XIX." },
    { id: 10, title: "It", author: "Stephen King", description: "Un grupo de amigos enfrenta a un ser maligno que adopta la forma de un payaso y aterroriza su ciudad cada 27 años." }
  ];

  constructor() {}

  // Obtener todos los libros
  getBooks() {
    return this.books;
  }

  // Obtener un libro por ID
  getBookById(id: number) {
    return this.books.find(book => book.id === id);
  }

  // Agregar un nuevo libro
  addBook(title: string, author: string, description: string) {
    const newBook = {
      id: this.books.length + 1,
      title,
      author,
      description
    };
    this.books.push(newBook);
  }
}
