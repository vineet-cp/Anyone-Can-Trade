// src/hooks/useRazorpayPayment.js
import { useRazorpay } from "react-razorpay";

const useRazorpayPayment = () => {
	const { Razorpay } = useRazorpay();

	const triggerPayment = async (form) => {
		try {
			// Step 1: Send user data to backend to create work order + Razorpay order
			const res = await fetch("http://localhost:8080/api/create-order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					"amount": 500,
					"currency": "INR",
					"receipt": "order_rcptid_11"
				}),
			});

			const data = await res.json();

			if (!data || !data) {
				alert("Failed to get payment details");
				return;
			}
			console.log("data",data)

			// Step 2: Configure Razorpay popup
			const options = {
				...data,
				// prefill: form,
				handler: async function (response) {
					// Step 3: Verify payment with backend
					await fetch("http://localhost:8080/api/verify-payment", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							razorpay_payment_id: response.razorpay_payment_id,
							razorpay_order_id: response.razorpay_order_id,
							razorpay_signature: response.razorpay_signature,
						}),
					});
					alert("Payment successful and verified");
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
