import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/Search.module.css';
import { useRouter } from 'next/router';

function Search() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/user/${search}`);
      setSearch('');
    }
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
          label="Enter Github Username"
          type="search"
          required
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
