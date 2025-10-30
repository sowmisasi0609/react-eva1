import { useState } from "react";
import PaymentMethod from "./components/PaymentMethod";
import Summary from "./components/Summary";

function App() {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <div style={styles.container}>
      <h1>💳 Payment Method Selection</h1>

      {/* Step 1: Select Payment Method */}
      <PaymentMethod
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />

      <hr style={{ margin: "20px 0" }} />

      {/* Step 2: Summary */}
      <Summary selectedMethod={selectedMethod} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    maxWidth: "600px",
    margin: "auto",
  },
};

export default App;

