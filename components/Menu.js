import React from 'react'
//import Link from 'next/link'
import Link from '../utils/ActiveLink'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import theme from '../styles/theme'

const Header = styled.header`
  background: ${theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: darkgray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${theme.colors.text};
    &:hover {
      color: white;
    }
  }

  a.active {
    color: red;
  }
`

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(l => (
          <li key={l.name}>
              <Link href={l.slug} as={l.slug}>
              <a>{l.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
