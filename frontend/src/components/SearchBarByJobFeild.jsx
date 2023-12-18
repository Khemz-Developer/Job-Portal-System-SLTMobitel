
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mt-5 container col-4">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search By Job Feild"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <style jsx>{`
        .search-bar {
          border-radius: 0;
          border-right: 0;
        }

        .search-bar:focus {
          box-shadow: none;
          border-color: #ced4da;
        }

        .btn-primary {
          border-radius: 0;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
