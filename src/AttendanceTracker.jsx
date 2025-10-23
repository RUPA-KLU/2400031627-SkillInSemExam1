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
