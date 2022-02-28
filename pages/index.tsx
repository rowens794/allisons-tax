import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'

import Hero from '../page-sections/heros/with-semi-circle-bottom'

const Home: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white ">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Hero
          heading1="Do you want a bigger refund?"
          heading2="Let our tax pro help you get it."
          image="/images/hero-mock-hq.jpg"
          alt="Custom built Websites"
          intro="In a year full of tax law changes, we've kept up to make sure you get every credit and deduction that your eligible for."
          ctaText="Book an Appointment"
          ctaLink="/contact"
        />
      </main>
    </div>
  )
}

export default Home
