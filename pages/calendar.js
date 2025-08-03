
import TradingCalendar from "../components/TradingCalendar";

export default function CalendarPage() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "2rem" }}>
      <h1 style={{ color: "#38bdf8" }}>Trading Calendar</h1>
      <TradingCalendar />
    </div>
  );
}
