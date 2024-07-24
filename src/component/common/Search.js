import React from "react";

const Search = ({ search, setSearch }) => {
	return (
		<div className="col-sm-3 mb-4">
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					className="form-control"
					type="search"
					role="searchbox"
					placeholder="Search employees by first name..."
					value={search}
					onChange={(e) =>
						setSearch(e.target.value)
					}></input>
			</form>
		</div>
	);
};

export default Search;