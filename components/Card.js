import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
// import Img from 'gatsby-image'
import theme from '../styles/theme'

const removemarkdown = require('remove-markdown')

const CardPost = styled.li`
  position: relative;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${theme.colors.tertiary};
  }
`
const StyledA = styled.a`
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${theme.colors.text};
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: ${theme.colors.text};
    }
      .nextjs-image-wrapper {
        height: 0;
        padding-bottom: 60%;
        position: relative;
        overflow: hidden;
        @media screen and (min-width: ${theme.responsive.small}) {
          padding-bottom: ${props => (props.featured ? '40%' : '60%')};
        }
    
    }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`

const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
//heroImage && body &&
const Card = ({ slug, heroImage, title, publishDate, contentful_id, body,...props }) => {
  return (
    <>
      {(
        <CardPost featured={props.featured}>
          <Link href="/post/[slug]/[contentful_id]" as={`/post/${slug}/${contentful_id}`} passHref >
            <StyledA featured={props.featured}>
              <div className='nextjs-image-wrapper'>
                <img src={heroImage.fields.file.url}  />
              </div>
              <Title>{title}</Title>
              <Date>{publishDate}</Date>
              <ReadingTime>
                # min read
              </ReadingTime>
              <Excerpt>{removemarkdown(body).substring(0,80)} ...</Excerpt>
            </StyledA>
          </Link>
        </CardPost>
      )}
    </>
  )
}

export default Card
