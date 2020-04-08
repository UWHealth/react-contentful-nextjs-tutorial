import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import theme from '../styles/theme'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {

  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️ 5 min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
