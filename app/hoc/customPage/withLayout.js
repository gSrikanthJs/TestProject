import React from 'react';
import Layout from '../../core/DPLayout';

export default ComposedComponent => props => (
  <Layout>
    <ComposedComponent {...props} />
  </Layout>
);
