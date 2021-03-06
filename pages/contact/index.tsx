import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../../data/clientInfo'
import Heading from '../../page-sections/heading-sections/simple-centered'
import Contact from '../../page-sections/contact/split-two-tone'

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
          boldText="Let's Talk Taxes."
          bodyText="Feel Free to give us a call or leave us a message in the form below. It goes directly to our inbox."
        />
        <Contact />
      </main>
    </div>
  )
}

export default Index
