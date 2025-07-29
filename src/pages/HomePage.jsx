// src/pages/HomePage.jsx
// src/pages/HomePage.jsx

import React from 'react';
import ExampleComponent from '../components/ExampleComponent';
import MessageFetcher from '../components/MessageFetcher';
import BookManager from '../components/BookManager.jsx';

const HomePage = () => {
  return (
    <div className="container-fluid my-5">
      {/* Welcome Header and Message */}
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to React Task 1</h1>
        <p className="lead">This is your first custom page!</p>
        <MessageFetcher />
      </div>

      {/* Three Info Cards */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Fast Learning</h5>
              <p className="card-text">
                React helps you build UIs quickly and efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Component-Based</h5>
              <p className="card-text">
                Design reusable components to build complex interfaces.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Developer Friendly</h5>
              <p className="card-text">
                Work with tools that boost productivity and maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Manager Section */}
      <hr className="my-5" />
      <div className="text-center">
        <h2 className="mb-4">📚 Welcome to Book Manager</h2>
        <BookManager />
      </div>
    </div>
  );
};

export default HomePage;

// export default HomePage;


// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import FeatureCard from '../components/FeatureCard';

// function HomePage() {
//   return (
//     <>
//       <Header />
//       <main style={{
//         padding: '2rem',
//         maxWidth: '1000px',
//         margin: '2rem auto',
//         textAlign: 'center'
//       }}>
//         <h2 style={{ color: '#34495e' }}>Welcome to React Task 1</h2>
//         <p style={{ color: '#555' }}>This is your first custom page!</p>

//         {/* New Feature Section */}
//         <section style={{
//           marginTop: '3rem',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center'
//         }}>
//           <FeatureCard
//             title="Create Components"
//             description="Learn how to build reusable components in React."
//           />
//           <FeatureCard
//             title="Style Your App"
//             description="Use inline styles or CSS to make your app look great."
//           />
//           <FeatureCard
//             title="Build Projects"
//             description="Apply what you learn by building small projects."
//           />
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default HomePage;


