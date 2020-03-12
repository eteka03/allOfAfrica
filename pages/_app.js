
import React from 'react'
import fetch from 'isomorphic-unfetch'

import {UserAgentProvider} from '@quentin-sommer/react-useragent'

//components
import Layout from '../components/Layout'

import '../styles.scss'



/* this component  is used to detect the browser on reuest send to browser
and to make page responsive */
const PageWrapper = Comp =>
  class extends React.Component {
    /*
     * Need to use args.ctx
     * See https://github.com/zeit/next.js#custom-document
     */
    static async getInitialProps (args) {
      return {
        ua: args.ctx.req
          ? args.ctx.req.headers['user-agent']
          : navigator.userAgent,
          
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
    
      }
    }

    render () {
      const {ua, ...props} = this.props
      
      return (
        <UserAgentProvider ua={ua}>
          <Comp {...props} />
        </UserAgentProvider>
      )
    }
  }





// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
      <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}


export default PageWrapper(MyApp)