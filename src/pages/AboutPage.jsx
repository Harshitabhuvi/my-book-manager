// src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center mb-4">About This Project</h1>
      <p className="lead text-center mb-5">
        This simple React app demonstrates routing, components, and Bootstrap integration.
      </p>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Create Components</h5>
              <p className="card-text">Learn how to build reusable components in React.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Style Your App</h5>
              <p className="card-text">Use Bootstrap classes and custom CSS to make your app look great.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Build Projects</h5>
              <p className="card-text">Apply what you learn by building small real-world projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


