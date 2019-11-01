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

const getIconByType = ({ type }) => {
  switch (type) {
    case 'website':
      return <FaGlobe size="25" color="#0088cc" />
    case 'telegram':
      return <FaTelegramPlane size="25" color="#0088cc" />
    case 'twitter':
      return <FaTwitterSquare size="25" color="#1da1f2" />
    case 'github':
      return <FaGithub size="25" color="#000" />
    case 'instagram':
      return <FaInstagram size="25" color="#000" />
    case 'facebook':
      return <FaFacebookSquare size="25" color="#1da1f2" />
    case 'meetup':
      return <FaMeetup size="25" color="#1da1f2" />
    default:
      return <FaGlobe />
  }
}

const SocialLink = ({ type, link }) => (
  <a href={link}>
    <span className="icon-tile">{getIconByType({ type })}</span>
  </a>
)

export default SocialLink
