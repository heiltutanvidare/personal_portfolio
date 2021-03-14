import { useStaticQuery, graphql } from "gatsby"

/*
 ** Get contact info from backend and export
 ** as hook to be reused in components and pages
 */

export const useContactData = () => {
  const { allStrapiContact } = useStaticQuery(
    graphql`
      {
        allStrapiContact {
          nodes {
            email
            github
            instagram
            linkedin
            phone
          }
        }
      }
    `
  )
  return allStrapiContact.nodes[0]
}
