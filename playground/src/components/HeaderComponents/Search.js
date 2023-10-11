import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
    return (
        <div>
            <input type="text" placeholder="Search"></input>
            <button>
                <AiOutlineSearch size={24}/>
            </button>
        </div>
    )
}

export default Search
