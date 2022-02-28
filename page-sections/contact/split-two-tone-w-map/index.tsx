import { MailIcon, PhoneIcon, HomeIcon } from '@heroicons/react/outline'
import clientInfo from '../../../data/clientInfo'

export default function Index() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="flex">
                  <HomeIcon
                    className="flex-shrink-0 w-6 h-6 mr-3 text-gray-400"
                    aria-hidden="true"
                  />
                  <div>
                    <p>{clientInfo.street}</p>
                    <p>{clientInfo.cityState}</p>
                  </div>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{clientInfo.phone}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{clientInfo.email}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="hidden max-w-lg mx-auto sm:block lg:max-w-none">
            <iframe
              width="600"
              height="400"
              scrolling="no"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=455%20Main%20Street%20Wellsville+(Allison's%20Tax)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://embed-map.org/">
              embedding google maps in website
            </a>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=50f783e28a3ab67381267c462959becef639e8dd"
            ></script>
          </div>
        </div>
      </div>
    </div>
  )
}
