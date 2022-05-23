import Head from 'next/head';
import Router from 'next/router';
import client from '../../lib/apollo-client';
import { searchRepoQuery } from '../../lib/query';
import { useState } from 'react';
import Nav from '../../components/Nav';
import Search from '../../components/Search';
import Repogrid from '../../components/Repogrid';
import UserInfo from '../../components/UserInfo';
import { Grid, Snackbar, Typography } from '@mui/material';
import styles from '../../styles/User.module.css';

const Respositories = ({ data }) => {
  const [userData, setUserData] = useState(data);
  const [error, setError] = useState(null);
  const repositories = userData.repositories?.nodes;

  const searchUsers = async (search) => {
    const result = await fetch('/api/searchuser', {
      method: 'post',
      body: search,
    });
    const { data, error } = await result.json();
    if (!error) {
      setUserData(data.edges[0]?.node);
      Router.push(`/user/${search}`);
    } else {
      setError(error);
    }
  };

  return (
    <>
      <Head>
        <title>{userData.name}</title>
      </Head>
      <Nav />
      <Grid
        container
        item
        xs={12}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        p={3}
      >
        <Search searchUsers={searchUsers} />
        <Grid container item xs={12} justifyContent="center" mt={3}>
          <UserInfo user={userData} />
          {repositories ? (
            <Grid
              container
              item
              xs={12}
              md={8}
              mt={3}
              justifyContent="flex-start"
              className={styles.repositoryWrapper}
            >
              <Repogrid repositories={repositories} />
            </Grid>
          ) : (
            <Typography>No Repo Found</Typography>
          )}
          <Snackbar
            open={!!error}
            autoHideDuration={2000}
            onClose={() => {
              setError(null);
            }}
            message={error}
            ContentProps={{
              classes: {
                root: styles.snack,
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const results = await client.query({
    query: searchRepoQuery(params.username),
  });

  return {
    props: {
      data: results.data.search.edges[0]?.node,
    },
  };
}

export default Respositories;
