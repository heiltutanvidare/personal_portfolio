import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const { defaultDescription, image, defaultTitle, siteUrl } = site.siteMetadata

  const seo = {
    title: `${title} | ${defaultTitle}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet htmlAttributes={{ lang: "nn" }} title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultDescription: description
        image
        defaultTitle: title
        siteUrl: url
      }
    }
  }
`
