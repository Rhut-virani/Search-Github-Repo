import Head from 'next/head';
// import { useRouter } from 'next/router';
import client from '../../lib/apollo-client';
import { searchRepoQuery } from '../../lib/query';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Search from '../../components/Search';
import Repogrid from '../../components/Repogrid';
import UserInfo from '../../components/UserInfo';
import { Grid, Snackbar, Typography } from '@mui/material';
import styles from '../../styles/User.module.css';

const Respositories = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>{data?.name || 'Search Users'}</title>
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
        <Search />
        {data && (
          <Grid container item xs={12} justifyContent="space-around" mt={3}>
            <UserInfo user={data} />
            {data?.repositories?.nodes ? (
              <Grid
                container
                item
                xs={12}
                md={8}
                mt={3}
                justifyContent="center"
                className={styles.repositoryWrapper}
              >
                <Repogrid repositories={data.repositories.nodes} />
              </Grid>
            ) : (
              <Typography>No Repo Found</Typography>
            )}
          </Grid>
        )}
      </Grid>
      {error && (
        <Snackbar
          open={!!error}
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
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const results = await client.query({
    query: searchRepoQuery(params.username),
  });
  if (!!results.data.search.edges[0]) {
    return {
      props: {
        data: results.data.search.edges[0]?.node,
        error: null,
      },
    };
  } else {
    return {
      props: {
        data: null,
        error: 'No Users Found',
      },
    };
  }
}

export default Respositories;
