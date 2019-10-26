import React from 'react'

const LinkedGroups = ({ name, data, description }) => (
  <div className="tile is-ancestor is-vertical">
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent is-vertical">
            <p className="title">{name}</p>
            {description}
          </div>
          <div className="columns is-multiline">
            {data.edges.map(({ node }, idx) => (
              <div className="column is-4" key={idx}>
                <div className="tile is-child box">
                  <p className="subtitle">{node.name}</p>
                  {node.links.map(({ type, link }, idxInner) => (
                    <a href={link} key={idxInner}>
                      {type}{' '}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LinkedGroups
