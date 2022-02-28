import type { NextPage } from 'next'
import Head from 'next/head'

import Heading from '../page-sections/heading-sections/simple-centered'
import Section from '../page-sections/content/two-column-small-with-image'
import WhatYouGet from '../page-sections/custom/services-what-you-get'

import clientInfo from '../data/clientInfo'

const Services: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{clientInfo.name}</title>
        <meta name="description" content={clientInfo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading heading="" boldText="We're More than Just Taxes" bodyText="" />
        <div className="py-4 lg:py-0" />

        <WhatYouGet />
      </main>
    </div>
  )
}

export default Services
