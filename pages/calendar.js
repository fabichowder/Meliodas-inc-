import TradingCalendar from '../components/TradingCalendar';

export default function CalendarPage() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#38bdf8' }}>Trading Calendar</h1>
      <TradingCalendar />
      <a href="/" style={{ color: '#ff4444', display: 'block', marginTop: '1rem' }}>Back to Home</a>
    </div>
  );
}
