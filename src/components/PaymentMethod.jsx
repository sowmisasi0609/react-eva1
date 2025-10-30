import React from "react";

function PaymentMethod({ selectedMethod, setSelectedMethod }) {
  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div>
      <h2>Select Payment Method</h2>

      <div style={styles.option}>
        <input
          type="radio"
          id="cod"
          name="payment"
          value="Cash on Delivery"
          checked={selectedMethod === "Cash on Delivery"}
          onChange={handleChange}
        />
        <label htmlFor="cod">Cash on Delivery</label>
      </div>

      <div style={styles.option}>
        <input
          type="radio"
          id="upi"
          name="payment"
          value="UPI"
          checked={selectedMethod === "UPI"}
          onChange={handleChange}
        />
        <label htmlFor="upi">UPI</label>
      </div>

      <div style={styles.option}>
        <input
          type="radio"
          id="card"
          name="payment"
          value="Debit/Credit Card"
          checked={selectedMethod === "Debit/Credit Card"}
          onChange={handleChange}
        />
        <label htmlFor="card">Debit/Credit Card</label>
      </div>
    </div>
  );
}

const styles = {
  option: {
    margin: "10px 0",
  },
};

export default PaymentMethod;
