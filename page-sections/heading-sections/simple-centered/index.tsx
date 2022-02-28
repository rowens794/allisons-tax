import Smile from '../../../components/svg-backgrounds/smile'

interface SectionProps {
  heading: string
  boldText: string
  bodyText: string
}

export default function Index({ heading, boldText, bodyText }: SectionProps) {
  return (
    <div className="relative pt-8 overflow-hidden bg-gradient-to-b from-primary-600 to-primary-500 sm:pt-16 lg:pt-24">
      <div className="relative z-20 px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
            {heading}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-primary-200 drop-shadow-md sm:text-5xl sm:tracking-tight lg:text-6xl">
            {boldText}
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-white drop-shadow-sm">
            {bodyText}
          </p>
        </div>
      </div>

      <div className="absolute z-10 w-64 h-64 rounded-full -right-32 -bottom-24 bg-primary-500 md:right-32 lg:h-96 lg:w-96"></div>
      <div className="absolute z-10 rounded-full -left-32 -bottom-64 h-96 w-96 bg-primary-400"></div>

      <div className="relative z-20">
        <Smile color="fill-white" />
      </div>
    </div>
  )
}
