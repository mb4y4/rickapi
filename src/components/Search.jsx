import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-start justify-center w-full">
      <input className=" border border-gray-300 rounded p-2"
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}
