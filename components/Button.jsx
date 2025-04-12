export default function Button({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
      >
        {label}
      </button>
    );
  }
  