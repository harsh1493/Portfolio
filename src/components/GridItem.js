import React from 'react'

const GridItem = (props) => {
   const {link,title,desc,imgUrl}=props;
  return (
    <li>
    <a href={link} target="_blank" className="profile">
      <h2 className="profile__name">{title}</h2>
      <p>{desc}</p>
      <img alt="Anita Simmons" src={imgUrl} />
    </a>
  </li>
  )
}

export default GridItem