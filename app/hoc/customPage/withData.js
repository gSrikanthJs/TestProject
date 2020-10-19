import React, {Component} from 'react';
import {getCookie} from '../../../util/session';
import redirect from '../../../util/redirect';

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(context) {
      // const isLoggedIn = getCookie('user_id', context.req);
      // if (!isLoggedIn) {
      //   redirect(context, '/signin');
      // }
      return {isLoggedIn:true};
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
