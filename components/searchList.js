import React, { useState, useEffect } from "react";

const SearchList = ({ data, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    const newSuggestions = data.filter((item) => {
      if (wordEntered.length === 0) return true;
      if (item.name.toLowerCase().startsWith(wordEntered.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (newSuggestions.length > 0) {
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [wordEntered, data]);

  const showSuggestions = wordEntered.length > 0 && suggestions.length > 0;

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          className="w-full mb-2 bg-[#edf2f6] rounded-sm border border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Serach for any software"
          value={wordEntered}
          onChange={(e) => {
            setWordEntered(e.target.value);
          }}
        />
      </div>

      <div className="dataResult">
        <ul>
          {showSuggestions &&
            suggestions.map((item) => {
              return (
                <li
                  className="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600"
                  onClick={() => {
                    onSelect(item);
                  }}
                  key={item.name}
                >
                  <h4>{item.name} </h4>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
