import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Github Search</title>
        <meta
          name="description"
          content="Search a github user and their respositories"
        />
      </Head>
    </div>
  );
}
