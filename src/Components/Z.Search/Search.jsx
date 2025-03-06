import { useState } from "react";
import "./Search.css"

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("")
  const handleInput= (e) => {
    const text = e.target.value;
    setSearchText(text)
    onSearch(text)
  };

  return (
    <div className="SearchDiv">
      <input type="text" placeholder="Search by location" value={searchText} onChange={handleInput} />
    </div>
  )
}
export default Search;