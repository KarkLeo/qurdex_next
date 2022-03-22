// ===== Head =====

import { SpriteIconId } from '../src/components/Sprite/sprite.config'

export const head = {
  title: 'Development and support of the web apps',
  text: 'Reasonable ideas which work. Stunning design which impresses. Reliable functionality which showcases quality. Quardex team is here for you to bring your ideas to life!',
} as const

// ===== Counter =====

interface Count {
  count: number
  text: string
  percent: boolean
}

export const counter: Count[] = [
  {
    count: 60,
    text: 'Completed projects',
    percent: false,
  },
  {
    count: 100,
    text: 'Job success on UpWork',
    percent: true,
  },
  {
    count: 7,
    text: 'Domains we major in',
    percent: false,
  },
  {
    count: 1001,
    text: 'Cool guys',
    percent: true,
  },
]

// ===== Services =====

export interface ServicesItem {
  title: string
  text: string
  imgId: SpriteIconId
}

export const services: {
  title: string
  items: ServicesItem[]
} = {
  title: 'Services',
  items: [
    {
      title: 'Business analysis',
      text: 'The right development Process starts from the analysis of your concept, research and creating project documentation. We are tough guys in creating a project strategy, building an appropriate for building well-designed and scalable projects. Our goal is creating software, which easy to maintain and enhance. We remember that the future starts now and envisage the future risks and perspectives of your project clicks.',
      imgId: 'analis',
    },
    {
      title: 'Web design',
      text: "We create the design which conveys your business ideas and guides the users the desired way. Our designers exactly know the difference between definitions 'beautiful' and 'handy'. For this reason, we are taking care not only about the stunning look of your website but logical user' way and an opportunity to find needed info in a couple of clicks.",
      imgId: 'design',
    },
    {
      title: 'Web development',
      text: 'Our team will be glad to create the website for any domain just starting with your concept. Whether you need, simple website for placing the main information about your business or complex commercial project, we’ll implement your concept in the most reliable and reasonable way.',
      imgId: 'development',
    },
    {
      title: 'Support',
      text: "Our team is ready to implement any needed improvements to your project. It'll be our pleasure to add new features, optimize the existing functionality, eliminate the bugs and make your software more modern and appealing to users.",
      imgId: 'support',
    },
    {
      title: 'Parsers',
      text: "Interesting, catchy content - from selling articles to item description texts. Author's articles, news, announcements – all together they will not only animate and transform the site, but also increase the conversion. We will create the necessary web pages and fill them with life.",
      imgId: 'parsers',
    },
    {
      title: 'Cloud solutions',
      text: 'Selection of the perfect domain name of the company to reflect the essence of your business. Having a fast and volume hosting for regular operation of even huge websites. We are responsible for all the work of your site on our servers.',
      imgId: 'cloud',
    },
  ],
}

// ===== Portfolio =====

export const portfolio = {
  title: 'Portfolio',
  subtitle: 'When the work speaks for itself',
  button: 'View',
} as const

// ===== Process =====

export interface ProcessItem {
  title: string
  imgId: SpriteIconId
}

export const process: {
  title: string
  items: ProcessItem[]
} = {
  title: 'We’ll go with you step-by step With YOU',
  items: [
    {
      title: '1. Analysis and research',
      imgId: 'step-analis',
    },
    {
      title: '2. Creating the technical documentation',
      imgId: 'step-documentation',
    },
    {
      title: '3. Design',
      imgId: 'step-design',
    },
    {
      title: '4. Development',
      imgId: 'step-development',
    },
    {
      title: '5. Quality assurance',
      imgId: 'step-quality',
    },
    {
      title: '6. Preview version',
      imgId: 'step-preview',
    },
    {
      title: '7. Work on feedback',
      imgId: 'step-feedback',
    },
    {
      title: '8. Deployment',
      imgId: 'step-development',
    },
    {
      title: '9. Onboarding',
      imgId: 'step-onboarding',
    },
  ],
}

// ===== Order =====

export interface OrderField {
  type: 'text' | 'email' | 'textarea'
  name: string
  placeholder: string
}

export const order: {
  title: string
  subtitle: string
  fields: OrderField[]
  button: string
} = {
  title: 'Are you ready to order a\u00A0website?',
  subtitle:
    'Book design of any website in the company Quardex, and get wonderful gift — a\u00A0promotion up\u00A0to\u00A03\u00A0months, absolutely for\u00A0free! Get ready for\u00A0new\u00A0challenges! Request a\u00A0free calculation of\u00A0the\u00A0cost\u00A0right\u00A0now&#58;',
  fields: [
    {
      name: 'userName',
      type: 'text',
      placeholder: 'Your name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Your email',
    },
    {
      name: 'question',
      type: 'textarea',
      placeholder: 'Your question is...',
    },
  ],
  button: 'Order',
}

// ===== Solutions =====

export interface SolutionPart {
  name: string
  items: SpriteIconId[]
}

export const solutions: SolutionPart[] = [
  {
    name: 'Graphical tools',
    items: ['photoshop', 'illustrator', 'adobexd', 'figma'],
  },
  {
    name: 'Frontend',
    items: [
      'html',
      'css',
      'js',
      'sass',
      'webpack',
      'react',
      'redux',
      'vue',
      'gatsbyjs',
      'less',
      'pug',
      'bootstrap',
      'gulp',
    ],
  },
  {
    name: 'Management tools',
    items: ['redmine', 'basecamp', 'asana', 'trello', 'slack'],
  },
  {
    name: 'Backend',
    items: ['laravel', 'php', 'mysql', 'mongodb', 'node'],
  },
  {
    name: 'Content Management System',
    items: ['wordpress', 'opencart', 'modx', 'drupal', 'joomla'],
  },
  {
    name: 'Payment systems',
    items: ['stripe', 'paypal'],
  },
  {
    name: 'Version Control System',
    items: ['git', 'bitbucket', 'github', 'gitlab'],
  },
]
