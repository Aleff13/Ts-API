import type {BookType} from '../models/book'
import BookScheema from '../models/bookSchema'

class BookRepository {

    public async getAll() {
        const books = await BookScheema.scan().attributes(["id", "title", "author"]).exec()

        return books
    }

    public async createBook(book: BookType){
        const bookResult = await BookScheema.create(book)

        return bookResult
    }

    public async deleteBook(id: string) {
        const result = await BookScheema.delete(id)

        return result
    }

}

export default BookRepository