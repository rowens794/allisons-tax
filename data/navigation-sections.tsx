import {
  PhoneIcon,
  BriefcaseIcon,
  IdentificationIcon,
  HomeIcon,
} from '@heroicons/react/outline'

const pageNav = [
  {
    title: 'Home',
    href: '/',
    type: 'link',
    icon: HomeIcon,
  },
  {
    title: 'Prices',
    href: '/#prices',
    type: 'link',
    icon: IdentificationIcon,
  },
  {
    title: 'Contact Us',
    href: '/contact',
    type: 'link',
    icon: BriefcaseIcon,
  },
  {
    title: 'Book Appointment',
    href: '/book-appointment',
    type: 'CTA',
    icon: PhoneIcon,
  },
]

export default pageNav
