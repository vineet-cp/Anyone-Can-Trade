// src/hooks/useRazorpayPayment.js
import { useRazorpay } from "react-razorpay";

const useRazorpayPayment = () => {
	const { Razorpay } = useRazorpay();

	const triggerPayment = async (form, type) => {
		try {
			// Step 1: Send user data to backend to create work order + Razorpay order
			const res = await fetch("http://localhost:8080/api/create-order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					"amount": 999,
					"currency": "INR",
					"receipt": "order_rcptid_11"
				}),
			});

			const data = await res.json();

			if (!data) {
				alert("Failed to get payment details");
				return;
			}
			console.log("data",data)

			// Step 2: Configure Razorpay popup
			const options = {
				amount:data.amount,
				currency:data.currency,
				order_id:data.id,
				key:"rzp_test_62EadctnuJDqab",
				// prefill: form,
				handler: async function (response) {
					console.log(response)
					// Step 3: Verify payment with backend
					await fetch("http://localhost:8080/api/verify-payment", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							paymentId: response.razorpay_payment_id,
							orderId: data.id,
							razorpaySignature: response.razorpay_signature,
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
