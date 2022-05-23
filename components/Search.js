import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/Search.module.css';

function Search({ searchUsers }) {
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(search);
  };
  return (
    <Grid container item xs={12} justifyContent="center" alignItems="center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        id="submit-form"
        className={styles.form}
      >
        <TextField
          fullWidth
          id="outlined-search"
          label="Enter Gthub Username"
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </Grid>
  );
}

export default Search;
