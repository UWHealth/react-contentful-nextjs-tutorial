import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import theme from '../styles/theme'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.sizes.maxWidthCentered};
  a {
    background: ${theme.colors.primary};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink href="/post/[slug]/[contentful_id]" as={`/post/${props.previous.fields.slug}/${props.previous.sys.id}`} passHref >
            <a>&#8592; Prev</a>
          </PreviousLink>
        )}
        {props.next && (
          <NextLink href="/post/[slug]/[contentful_id]" as={`/post/${props.next.fields.slug}/${props.next.sys.id}`} passHref >
            <a>Next &#8594;</a>
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
