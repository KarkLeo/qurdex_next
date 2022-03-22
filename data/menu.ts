interface MenuItem {
  name: string
  href: string
  submenu?: MenuItem[]
}

const menu: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
    submenu: [
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Order', href: '#order' },
      { name: 'Technologies', href: '#technologies' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
]

export default menu
