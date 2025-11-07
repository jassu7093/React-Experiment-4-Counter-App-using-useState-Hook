// src/components/StudentList.js
import React from "react";

const StudentList = () => {
  const students = [
    { name: "Riya", marks: 90 },
    { name: "John", marks: 45 },
    { name: "Sara", marks: 76 },
    { name: "Amit", marks: 30 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📋 Conditional Rendering & Lists Example</h2>
      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "50%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td
                style={{
                  color: student.marks >= 50 ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {student.marks >= 50 ? "Pass ✅" : "Fail ❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditional Message */}
      <div style={{ marginTop: "30px" }}>
        {students.length > 0 ? (
          <h4>Total Students: {students.length}</h4>
        ) : (
          <h4>No student data available ❌</h4>
        )}
      </div>
    </div>
  );
};

export default StudentList;
