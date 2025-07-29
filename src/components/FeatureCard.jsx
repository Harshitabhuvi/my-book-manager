function FeatureCard({ title, description }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '1rem',
      flex: '1',
      minWidth: '250px',
      maxWidth: '300px'
    }}>
      <h3 style={{ color: '#2c3e50' }}>{title}</h3>
      <p style={{ color: '#555' }}>{description}</p>
    </div>
  );
}

export default FeatureCard;
