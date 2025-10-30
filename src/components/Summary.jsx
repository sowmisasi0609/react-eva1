import React from "react";

function Summary({ selectedMethod }) {
  return (
    <div>
      <h2>Order Summary</h2>
      {selectedMethod ? (
        <p>
          <strong>Selected Payment Method:</strong> {selectedMethod}
        </p>
      ) : (
        <p style={{ color: "gray" }}>No payment method selected yet.</p>
      )}
    </div>
  );
}

export default Summary;
