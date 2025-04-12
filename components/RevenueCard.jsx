export default function RevenueCard({ title, summary }) {
    return (
      <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    );
  }
  