import React from 'react'

import SocialLink from './social-link'

const Group = ({ node: { name, id, links } }) => (
  <div className="group box" key={id}>
    <div className="groupName subtitle">{name}</div>
    {links.map(SocialLink)}
  </div>
)

export default Group
