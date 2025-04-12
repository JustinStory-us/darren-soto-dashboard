export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search bills, op-eds, or news..."
          className="border p-2 rounded w-full max-w-md"
        />
      </div>
    );
  }
  