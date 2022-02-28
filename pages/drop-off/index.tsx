import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../../data/clientInfo'
import Heading from '../../page-sections/heading-sections/simple-centered'
import Contact from '../../page-sections/contact/split-two-tone-w-map'

const Index: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{clientInfo.name}</title>
        <meta name="description" content={clientInfo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading
          heading=""
          boldText="Are you dropping off Tax Info?"
          bodyText="Stop by the office anytime from 8am-6pm M-F and dropoff your tax info with the receptionist."
        />
        <Contact />
      </main>
    </div>
  )
}

export default Index
