import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SocialAggregator from "Components/social-aggregator"

function GetInvolved() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  return (
    <Container>
      <section>
        <h2>{frontmatter.firstSectionTitle}</h2>
        <p>{frontmatter.firstSectionDescription}</p>
      </section>
      <section>
        <h2>San Diego Tech Hub In Action</h2>
        <SocialAggregator />
      </section>
    </Container>
  )
}

export default GetInvolved

const query = graphql`
  query GETINVOLVED_QUERY {
    markdownRemark(frontmatter: { path: { eq: "get-involved" } }) {
      frontmatter {
        firstSectionTitle
        firstSectionDescription
      }
    }
  }
`

const Container = styled.main`
  max-width: 1400px;

  section {
    padding: 2rem;
  }

  @media(max-width: 450px) {
    width 100vw;
  }
`
