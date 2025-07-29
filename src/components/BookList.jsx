import React from 'react';
import { Table, Button, Image } from 'react-bootstrap';

const BookList = ({ books, onEdit, onDelete, darkMode }) => {
  return (
    <div>
      <h4 className="mb-3">📖 Book List</h4>
      <Table
        striped
        bordered
        hover
        responsive
        variant={darkMode ? 'dark' : 'light'}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center">
                No books found.
              </td>
            </tr>
          ) : (
            books.map((book, index) => (
              <tr key={book._id || index}>
                <td>{index + 1}</td>
                <td>
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={book.title}
                      rounded
                      width="60"
                      height="80"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.year}</td>
                <td>{book.rating}</td>
                <td style={{ maxWidth: '200px', whiteSpace: 'normal' }}>{book.description}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => onEdit(book)}
                    className="me-2"
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDelete(book._id)}
                  >
                    🗑️ Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
