import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as styles from "../styles/skills.module.css"

export default function Skills() {
  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiSkill {
            nodes {
              title
              strapiId
            }
          }
        }
      `}
      render={data => (
        <article className={styles.skills}>
          <h3>Andre relevante eigenskapar</h3>
          <ul className={styles.skillsContainer}>
            {data.allStrapiSkill.nodes.map(skill => (
              <li key={skill.strapiId}>{skill.title}</li>
            ))}
          </ul>
        </article>
      )}
    ></StaticQuery>
  )
}
