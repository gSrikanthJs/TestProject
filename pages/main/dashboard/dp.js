import React from 'react';
import Head from 'next/head';
import Page from '../../../app/hoc/customPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";
const DP = dynamic(() => import('../../../routes/main/dashboard/DP'),{
  loading: () => <CircularProgress />,
});

export default Page(() => (
  <React.Fragment>
    <Head>
      <title>Digital Patashala</title>
    </Head>
    <React.Fragment>
      <DP/>
    </React.Fragment>
  </React.Fragment>
));
