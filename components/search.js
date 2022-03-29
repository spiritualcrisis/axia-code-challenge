import AutoSuggest from "./searchList";
import React from "react";

const Search = ({
  dataWithoutSelectedApps,
  onSuggestionSelect,
  totalSelected,
}) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 mt-10 ">
        <button className="btn  bg-gradient-to-tr from-[#5a6eff] to-[#bd67ff] hover:bg-black mt-2 h-8 w-20 rounded text-white text-md font-normal bg-red-600">
          {`${totalSelected} of ${10}`}
        </button>
      </div>
      <h2 className="mb-2 mt-2 text-xl font-bold ">
        Lets add your internal tools
      </h2>
      <h6 className="text-base text-gray-500 text-md mb-2  ">
        Search to quickly add products your team today. You`&apos;`ll be able to
        add as many as you need later but for now lets add four.
      </h6>
      <AutoSuggest
        data={dataWithoutSelectedApps}
        onSelect={onSuggestionSelect}
      />
    </div>
  );
};

export default Search;
