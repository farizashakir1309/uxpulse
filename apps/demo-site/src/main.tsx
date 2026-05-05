import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🚀 UXPulse is Running</h1>
      <p>Frontend is mounted correctly</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
