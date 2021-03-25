import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as styles from "../styles/curricumVitae.module.css"

const CurricumVitae = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiJob(sort: { fields: strapiId, order: DESC }) {
          edges {
            node {
              strapiId
              timeframe
              position
              company
            }
          }
        }
        allStrapiEdu(sort: { fields: strapiId, order: DESC }) {
          edges {
            node {
              strapiId
              study
              timeframe
              school
            }
          }
        }
      }
    `}
    render={data => (
      <section className={styles.cv}>
        <h2>Curricum Vitae</h2>
        <h3 className={styles.category}>Utdanning</h3>
        {data.allStrapiEdu.edges.map(edu => (
          <div
            key={edu.node.strapiId}
            className={`${styles.entry} ${styles.edu}`}
          >
            <p>{edu.node.study}</p>
            <p className={styles.timeframe}>{edu.node.timeframe}</p>
            <p className={styles.school}>{edu.node.school}</p>
          </div>
        ))}

        <h3 className={styles.category}>Relevant arbeidserfaring</h3>
        {data.allStrapiJob.edges.map(job => (
          <div
            key={job.node.strapiId}
            className={`${styles.entry} ${styles.job}`}
          >
            <p>{job.node.position}</p>
            <p className={styles.timeframe}>{job.node.timeframe}</p>
            <p className={styles.company}>{job.node.company}</p>
          </div>
        ))}
      </section>
    )}
  ></StaticQuery>
)

export default CurricumVitae
