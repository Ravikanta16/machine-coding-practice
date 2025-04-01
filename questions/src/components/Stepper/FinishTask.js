import { useState } from "react";
// import {Data} from './Data'
const Data = [
  {
    name: "Customer Info",
    component: "Provide your contact details.",
  },
  {
    name: "Shipping Info",
    component: "Enter your Shipping address.",
  },
  {
    name: "Payment",
    component: "Complete Payment for your order.",
  },
  {
    name: "Delivered",
    component: "Your order has been delivered.",
  },
];
const FinishTask = () => {
  const [current, setCurrent] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [status, setStatus] = useState("active");

  const handleNext = () => {
    setCurrent((prev) => {
      if (current === Data.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const ActiveComponent = () => {
    return Data[current - 1].component;
  };

  const getBackgroundColor = (index) => {
    if (current > index + 1) return "green";
    else if (current === index + 1) return "blue";
    return "lightgray";
  };
  const getContentToDisplay = (index) => (
        current > index + 1 ? "tick" : index + 1
  )

  return (
    <div style={{ justifyItems: "center", alignItems: "center" }}>
      <h1>Checkout</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        {Data.map((step, index) => {
          return (
            <div
              key={step.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "30px",
                  color: "white",
                  width: "30px",
                  borderRadius: "50%",
                  backgroundColor: getBackgroundColor(index),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {getContentToDisplay(index)}
              </div>
              <div style={{ fontSize: "14px" }}>{step.name}</div>
            </div>
          );
        })}
      </div>
      <div style={{}}>
        <ActiveComponent />
        <button onClick={handleNext} style={{ borderRadius: "5px" }}>
          {current === Data.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FinishTask;
