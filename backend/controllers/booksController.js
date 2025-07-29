import Book from '../models/Book.js';


export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ _id: 1 });
    res.json(books);
  } catch (err) {
  console.log(err.message);
  res.status(500).json({ message: "Something went wrong!" });
}

};
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: 'Invalid book ID', error: err.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const newBook = new Book({ title, author, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: 'Bad request' });
  }
};
export const createBook = async (req, res) => {
  try {
    const { title, author, description, cover, rating, genre, year} = req.body;

    const newBook = new Book({
      title,
      author,
      description,
      cover,
      rating,
      genre,
      year,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err.message); // ✅ Now defined!
    res.status(500).json({ message: "Something went wrong!" });
  }
};
// ✅ Update a book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: 'Failed to update book', error: err.message });
  }
};

// ✅ Delete a book
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: 'Invalid book ID', error: err.message });
  }
};
// export default { getBooks, addBook };
