class BooksController < ApplicationController
    def index
        book = Book.all
        render json: {status: 200, book: book}
    end

    def show
        found_book = Book.find(params[:id])
        render json: {status: 200, book: found_book}
    end

    def create
        book = Book.new(book_params)

        if book.save
            render(status: 201, json: {book: book})
        else 
            render(status: 422, json: {book: book})
        end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        render(json: {book: book})
    end

    def destroy
        book = Book.destroy(params[:id])
        render(status:204)
    end



    private

    def book_params
        params.require(:book).permit(:title, :author, :genre, :publisher, :publisher_date)
    end
end