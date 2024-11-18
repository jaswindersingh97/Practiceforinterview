import React, { useEffect, useState } from 'react';

function SearchPage() {
  const [search, setSearch] = useState('');
  const [filterdata, setFilterData] = useState([]);
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilterData(
        data.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
      );
      console.log("testin")
    }, 1000);

    // Cleanup the timeout to avoid stale updates
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filterdata.length > 0 ? (
          filterdata.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
