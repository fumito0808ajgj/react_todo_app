import React, { Component } from 'react';


const Search = (props) => (
  
<form className="siimple-form" onSubmit={props.filterList}>
<div className="siimple-form-field">
  <label className="siimple-label siimple--color-white">Search:</label>
  <input name="title" type="text" className="siimple-input"/>　
  <input type="submit" value="Search" className="siimple-btn siimple-btn--teal"/>
</div>
</form>
);

export default Search;