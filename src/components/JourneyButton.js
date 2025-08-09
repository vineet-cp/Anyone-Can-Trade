import { useNavigate } from "react-router-dom";

export default function JourneyButton() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-4">
      <button
        style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
        className="text-[#000000] px-24  py-3 rounded-full font-medium transition"
        onClick={() => navigate("/courses")}
      >
        Start Your Journey Now
      </button>
    </div>
  );
}
