import React from 'react'
import { InlineWidget } from 'react-calendly'
import tailwindTheme from '../../../tailwind.config'

type Props = { urlString: string }

export default function index({ urlString }: Props) {
  return (
    <div className="overflow-hidden overflow-y-clip">
      <InlineWidget
        url={urlString}
        styles={{
          height: '1000px',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: tailwindTheme.theme.colors.primary['700'].replace(
            '#',
            ''
          ),
          textColor: tailwindTheme.theme.colors.gray['700'].replace('#', ''),
        }}
      />
    </div>
  )
}
