import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { cv } from "../styles/curricumVitae.module.css"

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
      <section className={cv}>
        <h2>Curricum Vitae</h2>
        <table>
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
        </table>
      </section>
    )}
  ></StaticQuery>
)

export default CurricumVitae
