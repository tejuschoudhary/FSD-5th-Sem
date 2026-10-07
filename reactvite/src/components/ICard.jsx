import React from "react";

function ICard({ data }) {
  return (
    <div
      style={{
        width: "300px",
        minHeight: "400px",
        padding: "25px",
        margin: "20px",
        boxSizing: "border-box",
        background: "#182333",
        color: "white",
        border: "2px solid #334155",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <img
        src={data.pic}
        alt="Student"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "4px solid #6366f1",
          marginBottom: "15px"
        }}
      />

      <h2 style={{ color: "#a5b4fc", fontSize: "18px" }}>
        Roll: {data.roll}
      </h2>

      <h2 style={{ color: "#e2e8f0", fontSize: "18px" }}>
        Name: {data.name}
      </h2>

      <h2 style={{ color: "#e2e8f0", fontSize: "18px" }}>
        Branch: {data.branch}
      </h2>

      <h2 style={{ color: "#e2e8f0", fontSize: "18px" }}>
        College: {data.college}
      </h2>
    </div>
  );
}

export default ICard;