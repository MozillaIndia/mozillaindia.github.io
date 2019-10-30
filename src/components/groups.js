import React from 'react'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaMeetup,
  FaTelegramPlane,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa'

const Groups = ({ name, data, description, icon }) => (
  <div className="tile is-ancestor is-vertical">
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent is-vertical">
            <p className="title">{name}</p>
            {description}
          </div>
          <div className="columns is-multiline">
            {data.edges.map(({ node }) => (
              <div className="column is-4" key={node.id}>
                <div className="tile is-child box">
                  <p className="subtitle">{node.name}</p>
                  {node.website ? (
                    <a href={node.website}>
                      <span className="icon-tile">
                        <FaGlobe size="25" color="#0088cc" />
                      </span>
                    </a>
                  ) : null}
                  {node.telegram ? (
                    <a href={node.telegram}>
                      <span className="icon-tile">
                        <FaTelegramPlane size="25" color="#0088cc" />
                      </span>
                    </a>
                  ) : null}
                  {node.twitter ? (
                    <a href={node.twitter}>
                      <span className="icon-tile">
                        <FaTwitterSquare size="25" color="#1da1f2" />
                      </span>
                    </a>
                  ) : null}
                  {node.github ? (
                    <a href={node.github}>
                      <span className="icon-tile">
                        <FaGithub size="25" color="#000" />
                      </span>
                    </a>
                  ) : null}
                  {node.instagram ? (
                    <a href={node.instagram}>
                      <span className="icon-tile">
                        <FaInstagram size="25" color="#000" />
                      </span>
                    </a>
                  ) : null}
                  {node.facebook ? (
                    <a href={node.facebook}>
                      <span className="icon-tile">
                        <FaFacebookSquare size="25" color="#1da1f2" />
                      </span>
                    </a>
                  ) : null}
                  {node.meetup ? (
                    <a href={node.meetup}>
                      <span className="icon-tile">
                        <FaMeetup size="25" color="#1da1f2" />
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Groups
