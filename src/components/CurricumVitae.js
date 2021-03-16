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
          <div key={edu.node.strapiId} className={styles.entry}>
            <p className={styles.study}>{edu.node.study}</p>
            <p className={styles.timeframe}>{edu.node.timeframe}</p>
            <p className={styles.school}>{edu.node.school}</p>
          </div>
        ))}

        <h3 className={styles.category}>Relevant arbeidserfaring</h3>
        {data.allStrapiJob.edges.map(job => (
          <div key={job.node.strapiId} className={styles.entry}>
            <p className={styles.position}>{job.node.position}</p>
            <p className={styles.timeframe}>{job.node.timeframe}</p>
            <p className={styles.company}>{job.node.company}</p>
          </div>
        ))}

        {/* <table>
          <thead>
            <tr>
              <th colSpan="3">Utdanning</th>
            </tr>
          </thead>
          <tbody>
            {data.allStrapiEdu.edges.map(edu => (
              <tr key={edu.node.strapiId}>
                <td>{edu.node.study}</td>
                <td>{edu.node.timeframe}</td>
                <td>{edu.node.school}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th colSpan="3">Relevant arbeidserfaring</th>
            </tr>
          </thead>
          <tbody>
            {data.allStrapiJob.edges.map(job => (
              <tr key={job.node.strapiId}>
                <td>{job.node.position}</td>
                <td>{job.node.timeframe}</td>
                <td>{job.node.company}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </section>
    )}
  ></StaticQuery>
)

export default CurricumVitae
