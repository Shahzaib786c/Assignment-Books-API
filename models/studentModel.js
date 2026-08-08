let Books =
    [
        {
            id: 1, title: "Peer-e-Kamil", author: "Umera Ahmed"
        },
        {
            id: 2, title: "Alipur Ka Eli", author: "Mumtaz Mufti"
        },
        {
            id: 3, title: "Jannat Kay Pattay", author: "Nimra Ahmed"
        },
        {
            id: 4, title: "Shahab Nama", author: "Qudrat Ullah Shahab"
        },
        {
            id: 5, title: "Raja Gidh", author: "Bano Qudsia"
        }
    ];

export function findAll() {
    return Books;
}

export function findById(id) {
    return Books.find((b) => b.id === id);
}

export function create(Book) {
    Books.push(Book);
    return Book;
}

export function update(id, data) {
    const Book = Books.find((b) => b.id === id);
    if (!Book) return null;
    if (data.title) Book.title = data.title;
    if (data.author) Book.author = data.author;
    return Book;
}

export function remove(id) {
    const Book = Books.find((b) => b.id === id);
    if (!Book) return null;
    Books = Books.filter((b) => b.id !== id);
    return Book;
}
