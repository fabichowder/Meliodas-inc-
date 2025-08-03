export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#38bdf8' }}>Meliodas Inc Trading Dashboard</h1>
      <p>Track trading performance, discipline, and psychology insights.</p>
      <nav>
        <a href="/calendar" style={{ color: '#ff4444', marginRight: '1rem' }}>Trading Calendar</a>
        <a href="/screenshots" style={{ color: '#ff4444' }}>Trade Screenshots</a>
      </nav>
    </div>
  );
}
