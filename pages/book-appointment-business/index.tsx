import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../../data/clientInfo'
import Heading from '../../page-sections/heading-sections/simple-centered'
import Book from '../../page-sections/book-time/calendly'

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
          boldText="Let's Get You in the Calendar"
          bodyText="You can book an appointment directly on this page or give us a call to book your appointment."
        />

        <div
          className="relative z-30 w-full mt-36 lg:mt-6"
          style={{ height: '600px' }}
        >
          <div className="absolute w-full overflow-hidden -top-48">
            <Book urlString="https://calendly.com/intellispect-1/60-minute-meeting" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index
