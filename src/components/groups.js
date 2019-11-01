import React from 'react'

import Group from './group'

const Groups = ({ name, data, description }) => (
  <div className="box">
    <p className="title has-text-centered">{name}</p>
    {description}
    <div className="groupsgroup">{data.edges.map(Group)}</div>
  </div>
)

export default Groups
