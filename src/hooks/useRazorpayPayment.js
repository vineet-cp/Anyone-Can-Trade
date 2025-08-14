// src/hooks/useRazorpayPayment.js
import { useRazorpay } from "react-razorpay";
import { useNavigate } from "react-router-dom";

const useRazorpayPayment = () => {
  const { Razorpay } = useRazorpay();
  const navigate = useNavigate();

  const triggerPayment = async (form, type) => {
    try {
      // Step 1: Create work order + Razorpay order
      const res = await fetch("http://35.154.64.133:8080/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      localStorage.setItem("paymentId", JSON.stringify(data.paymentId));

      if (!data) {
        alert("Failed to get payment details");
        return;
      }
      console.log("data", data);

      // Step 2: Configure Razorpay popup
      const options = {
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        key: "rzp_test_62EadctnuJDqab",
        prefill: {
          email: form.email,
          contact: form.phoneNumber,
          name: form.name,
        },
        handler: async function (response) {
          console.log(response);
          // Step 3: Verify payment with backend
          const verifyRes = await fetch(
            "http://35.154.64.133:8080/api/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              }),
            }
          );

          const finalRes = await verifyRes.json();

          if (finalRes.status !== "failure") {
            alert("Payment successful and verified");
            if (type === "mastery") {
              navigate("/trading-form/mastery", {
                state: { paymentId: data.paymentId, courseType: type },
              });
            } else if( type === "yodha") {
              navigate("/trading-form/yodha", {
                state: { paymentId: data.paymentId, courseType: type },
              });
            }else{
              alert("Payment Successfull")
            }
          } else {
            alert("Payment verification failed");
          }
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return { triggerPayment };
};

export default useRazorpayPayment;
