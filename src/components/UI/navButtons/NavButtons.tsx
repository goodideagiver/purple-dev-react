import Link from 'next/link'

import styles from './navButtons.module.css'

type Props = {
  visibleButtonNames?: string[]
  onClick?: () => void
}

const NavButtons = ({ visibleButtonNames, onClick }: Props) => {
  let pagesUrls = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    {
      name: 'GitHub',
      url: 'https://github.com/goodideagiver',
      type: 'external',
    },
    { name: 'Contact', url: '/contact' },
  ]

  if (visibleButtonNames) {
    pagesUrls = pagesUrls.filter((page) =>
      visibleButtonNames.includes(page.name)
    )
  }

  const linkElements = pagesUrls.map((page, index) => {
    return (
      <li key={index}>
        {page.type !== 'external' ? (
          <Link href={page.url}>
            <a
              onClick={onClick}
              className={styles.button}
              style={{ animationDelay: index / 10 + 0.1 + 's' }}
            >
              {page.name}
            </a>
          </Link>
        ) : (
          <a
            style={{ animationDelay: index / 10 + 0.1 + 's' }}
            onClick={onClick}
            className={styles.button}
            href={page.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {page.name}
          </a>
        )}
      </li>
    )
  })

  return <>{linkElements}</>
}

export default NavButtons
