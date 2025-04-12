export default function OpEdCard({ title, summary }) {
    return (
      <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    );
  }
  