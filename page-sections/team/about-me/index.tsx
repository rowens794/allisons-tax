import Image from 'next/image'

export default function Example() {
  return (
    <section id="about" className="bg-white">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 space-y-12 lg:grid-cols-2">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet the Developer
            </h2>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              I'm Ryan. I'm a web developer who loves working on web based
              projects with business owners. After many conversations with folks
              who've had bad experiences with high priced web design shops, I
              decided to build a service that truly aligns the incentives of the
              business owner and the web developer. To acheieve this, I build
              websites with no upfront fees and instead create partnerships with
              my customers with no long term commitments.
            </p>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              This pricing strategy allows my target customers (small
              businesses) to make a quick decision on getting a professionally
              designed website up without a multi-thousand dollar commitment. Of
              course, that leaves me in the position of covering the upfront
              development costs, so I want to stay in business I better deliver
              on creating a high quality website.
            </p>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              While I do a lot of work on the web now-a-days, that hasn't always
              been the case. I spent about a decade as an investment manager at
              a large national back. That experience taught me to think about
              solving business problems, which is exactly that state of mind I
              bring to every client engagement.
            </p>
          </div>
          <ul
            role="list"
            className="flex justify-center mx-auto space-y-16 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            <li>
              <div className="space-y-6">
                <Image
                  className="w-40 h-40 mx-auto rounded-full xl:h-56 xl:w-56"
                  src="/images/headshot.jpeg"
                  alt="Ryan Owens"
                  height={224}
                  width={224}
                />

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="inline-block">Ryan Owens</h3>
                    <a
                      href="https://www.linkedin.com/in/ryan-james-owens/"
                      className="inline-block ml-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <p className="text-primary-600">Web Developer</p>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
                    <li></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
