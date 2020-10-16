import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../app/components/CircularProgress";
import React from "react";

const Metrics = dynamic(() => import('../../routes/main/Metrics'), {
  loading: () => <CircularProgress/>,
});


export default Page(() => (
  <>
    <Head>
      <title>Metrics</title>
    </Head>
    <>
      <Metrics/>
    </>
  </>
));
