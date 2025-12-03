import React, { useState } from "react";
import "./Scheduling.css";

export default function Scheduling() {
  const [processes, setProcesses] = useState([
    { name: "P1", arrival: 0, burst: 0 },
  ]);
  const [results, setResults] = useState(null);
  const [gantt, setGantt] = useState([]);

  const addProcess = () => {
    const id = processes.length + 1;
    setProcesses([...processes, { name: `P${id}`, arrival: 0, burst: 0 }]);
  };

  const updateProcess = (index, field, value) => {
    const updated = [...processes];
    updated[index][field] = Number(value) || 0;
    setProcesses(updated);
  };

  const calculateFCFS = () => {
    let time = 0;
    let ganttData = [];
    let computed = processes
      .sort((a, b) => a.arrival - b.arrival)
      .map((p) => {
        if (time < p.arrival) time = p.arrival;
        const start = time;
        const finish = time + p.burst;
        ganttData.push({ name: p.name, start, end: finish });
        time = finish;
        return {
          ...p,
          CT: finish,
          TAT: finish - p.arrival,
          WT: finish - p.arrival - p.burst,
        };
      });

    const avgTAT = (computed.reduce((s, p) => s + p.TAT, 0) / computed.length || 0).toFixed(2);
    const avgWT = (computed.reduce((s, p) => s + p.WT, 0) / computed.length || 0).toFixed(2);

    setResults({ processes: computed, avgTAT, avgWT });
    setGantt(ganttData);
  };

  const reset = () => {
    setResults(null);
    setGantt([]);
    setProcesses([{ name: "P1", arrival: 0, burst: 0 }]);
  };

  return (
    <div className="page-container">

      {/* CAT AT THE TOP ON MOBILE */}
      <div className="cat-mobile-top">
        <div className="cat-container">
          <div className="glow-effect"></div>
          <img src="/catkun.jpg" alt="Cloyd's Cat" className="cat-photo" />
        </div>
      </div>

      {/* MAIN LAYOUT: Desktop = side-by-side, Mobile = content only (cat already shown above) */}
      <div className="scheduling-hero-grid">

        {/* Left: All Content */}
        <div className="scheduling-content">
          <div className="scheduling-wrapper">

            <h1 className="page-title">FCFS Scheduling Algorithm</h1>

            {/* Input Section */}
            <div className="glass-card input-section">
              <h2>Input Processes</h2>
              <div className="process-table">
                {processes.map((p, i) => (
                  <div key={i} className="process-row">
                    <span className="process-name">{p.name}</span>
                    <input
                      type="number"
                      value={p.arrival}
                      onChange={(e) => updateProcess(i, "arrival", e.target.value)}
                      placeholder="Arrival"
                    />
                    <input
                      type="number"
                      value={p.burst}
                      onChange={(e) => updateProcess(i, "burst", e.target.value)}
                      placeholder="Burst"
                    />
                  </div>
                ))}
              </div>

              <button className="add-btn" onClick={addProcess}>
                + Add Process
              </button>

              <div className="action-buttons">
                <button className="visualize-btn" onClick={calculateFCFS}>
                  Visualize
                </button>
                <button className="reset-btn" onClick={reset}>
                  Reset
                </button>
              </div>
            </div>

            {/* Gantt Chart */}
            {gantt.length > 0 && (
              <div className="glass-card gantt-section">
                <h2>Gantt Chart</h2>
                <div className="gantt-chart">
                  {gantt.map((block, i) => (
                    <div
                      key={i}
                      className={`gantt-block p${block.name}`}
                      style={{ width: `${(block.end - block.start) * 50}px` }}
                    >
                      <div className="gantt-label">{block.name}</div>
                      <div className="gantt-time">{block.start} → {block.end}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {results && (
              <div className="results-container">
                <div className="glass-card results-table-card">
                  <h2>Process Details</h2>
                  <table className="results-table">
                    <thead>
                      <tr>
                        <th>Process</th>
                        <th>AT</th>
                        <th>BT</th>
                        <th>CT</th>
                        <th>TAT</th>
                        <th>WT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.processes.map((p) => (
                        <tr key={p.name}>
                          <td>{p.name}</td>
                          <td>{p.arrival}</td>
                          <td>{p.burst}</td>
                          <td>{p.CT}</td>
                          <td>{p.TAT}</td>
                          <td>{p.WT}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="glass-card avg-card">
                  <h2>Averages</h2>
                  <div className="avg-item">
                    <span>Turnaround Time</span>
                    <strong>{results.avgTAT}</strong>
                  </div>
                  <div className="avg-item">
                    <span>Waiting Time</span>
                    <strong>{results.avgWT}</strong>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right: Cat (Desktop Only) */}
        <div className="cat-desktop">
          <div className="cat-container">
            <div className="glow-effect"></div>
            <img src="/catkun.jpg" alt="Cloyd's Cat" className="cat-photo" />
          </div>
        </div>

      </div>
    </div>
  );
}