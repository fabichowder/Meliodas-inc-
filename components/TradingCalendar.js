
import React from "react";

const data = {
  "2025-08-01": 350,
  "2025-08-02": -120,
  "2025-08-03": 0,
  "2025-08-04": 560,
  "2025-08-05": -80,
  "2025-08-06": 0,
  "2025-08-07": 210
};

const TradingCalendar = () => {
  const today = new Date();
  const currentMonth = today.toISOString().slice(0, 7); // "YYYY-MM"
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1rem", padding: "1rem" }}>
      {[...Array(daysInMonth).keys()].map((i) => {
        const day = String(i + 1).padStart(2, "0");
        const dateKey = `${currentMonth}-${day}`;
        const value = data[dateKey];

        let color = "#888";
        if (value > 0) color = "#00ff88"; // green
        else if (value < 0) color = "#ff4444"; // red

        return (
          <div key={dateKey} style={{
            border: "1px solid #333",
            padding: "0.5rem",
            textAlign: "center",
            backgroundColor: "#111",
            color
          }}>
            <strong>{day}</strong>
            <div>{value !== undefined ? `$${value}` : "-"}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TradingCalendar;
