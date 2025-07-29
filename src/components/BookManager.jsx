import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BookForm from './BookForm.jsx';
import BookList from './BookList.jsx';
import {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} from '../api/bookService.js';
import bookImage from '../assets/BookMangement_img.jpg';

const BookManager = () => {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      toast.error('Failed to fetch books');
      console.error('Fetch error:', error);
    }
  };

  const handleAddOrUpdate = async (book) => {
    try {
      if (book._id) {
        await updateBook(book._id, book);
        toast.success('Book updated');
      } else {
        await createBook(book);
        toast.success('Book added');
      }
      setBookToEdit(null);
      fetchBooks();
    } catch (error) {
      toast.error('Failed to save book');
    }
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      toast.success('Book deleted');
      fetchBooks();
    } catch (error) {
      toast.error('Failed to delete book');
    }
  };

  const filteredBooks = books.filter((book) =>
    (book.title + book.author).toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={darkMode ? 'bg-dark text-light p-4 min-vh-100' : 'bg-light text-dark p-4 min-vh-100'}>
      {/* ✅ Banner Image */}
      <div className="mb-4 text-center">
        <img
          src={bookImage}
          alt="Book Manager"
          style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>

      <Container fluid>
        <Row className="mb-4 align-items-center">
          <Col><h2>📚 Book Manager</h2></Col>
          <Col className="text-end">
            <Form.Check
              type="switch"
              id="dark-mode-switch"
              label="Dark Mode"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Col>
        </Row>

        {/* ✅ Form Section */}
        <BookForm onSubmit={handleAddOrUpdate} bookToEdit={bookToEdit} />

        {/* ✅ Search */}
        <Form.Control
          type="text"
          placeholder="🔍 Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3"
        />

        {/* ✅ Table Section */}
        <BookList books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} darkMode={darkMode} />
      </Container>
    </div>
  );
};

export default BookManager;
