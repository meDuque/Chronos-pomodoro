import { Link } from 'react-router'

interface RouterLinkProps extends React.ComponentProps<'a'> {
  children: React.ReactNode
  href: string
}

export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return (
    <>
      <Link to={href} {...props}>
        {children}
      </Link>
    </>
  )
}
