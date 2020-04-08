import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import theme from '../styles/theme'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${theme.colors.tertiary};
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.secondary};
    &:hover {
      background: ${theme.colors.secondary};
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.sys.id}>
          <Link href="/tag/[slug]" as={`/tag/${tag.fields.slug}`} passHref ><a>{tag.fields.title}</a></Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
