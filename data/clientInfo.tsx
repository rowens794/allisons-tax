interface ClientInfo {
  name: string
  street: string | null
  cityState: string | null
  phone: string | null
  email: string | null
  gtagID: string
  metaDesc: string
  social: {
    platform: string
    href: string
    icon: Function
  }[]
}

const clientInfo: ClientInfo = {
  name: `Allison's Tax & Financial Services`,
  street: '455 Main St',
  cityState: 'Wellsville OH 43968',
  phone: '(330) 532-3074',
  email: 'allisonstax@sbcglobal.net',
  gtagID: 'XX-XXXXXXXX',
  metaDesc:
    'Get your taxes prepared by a lisenced CPA and maximize your tax refund.',
  social: [],
}

export default clientInfo
