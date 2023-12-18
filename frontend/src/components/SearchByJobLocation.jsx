import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchByJobLocation = ({ onSearch }) => {
 
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch2 = () => {
      onSearch(searchTerm);
    };
  
    return (
      <div className="mt-5 container col-4">
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search By Location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-bar'
          />
          <Button variant="primary" onClick={handleSearch2}>
            Search
          </Button>
        </InputGroup>
      </div>
    )
}

export default SearchByJobLocation
