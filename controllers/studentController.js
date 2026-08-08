import * as Book from "../models/studentModel.js";

export function getBooks(req, res) {
    res.status(200).json(Book.findAll());
}

export function getBook(req, res) {
    const book = Book.findById(Number(req.params.id));
    if (!book) {
        return res.status(404).json(
            {
                message: "Book is not available at this ID"
            });
    }
    res.status(200).json(book);
}

export function addBook(req, res) {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json(
            {
                message: "Book Title And Author are must Required"
            }
        );
    }

    const newBook = Book.create(
        {
            id: Date.now(),
            title,
            author
        }
    );
    res.status(201).json(newBook);
}

export function updateBook(req, res) {
    const book = Book.update(Number(req.params.id), req.body);
    if (!book) {
        return res.status(404).json(
            {
                message: "Book not found"
            }
        );
    }
    res.status(200).json(book);
}

export function deleteBook(req, res) {
    const book = Book.remove(Number(req.params.id));
    if (!book) {
        return res.status(404).json(
            {
                message: "Book not found"
            }
        );
    }
    res.status(200).json(
        {
            message: "Book deleted Permanently"

        });
}