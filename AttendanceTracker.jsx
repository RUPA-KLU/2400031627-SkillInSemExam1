// AttendanceTracker.jsx
// Experiment: State Management in Attendance Tracker using React

import React, { useState } from "react";

const AttendanceTracker = () => {
  const students = ["Navadeep", "Lalith Adithya", "Tharun", "Vera Reddy"];
  const [present, setPresent] = useState([]);

  const handleAttendance = (name) => {
    setPresent((prev) =>
      prev.includes(name)
        ? prev.filter((student) => student !== name)
        : [...prev, name]
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Attendance Tracker</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li key={student}>
            <label>
              <input
                type="checkbox"
                checked={present.includes(student)}
                onChange={() => handleAttendance(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <h3>Total Present: {present.length}</h3>
    </div>
  );
};

export default AttendanceTracker;

/*
-----------------------------------------
Analysis:
This React program uses the useState hook to manage attendance dynamically.
Students can be marked present or absent by checking boxes.

Output:
Attendance Tracker
☐ Navadeep
☐ Lalith Adithya
☐ Tharun
☐ Vera Reddy
Total Present: 0

After selecting:
☑ Navadeep
☑ Tharun
Total Present: 2

Result:
The program successfully manages attendance using state in React and displays the total count dynamically.
-----------------------------------------
*/
