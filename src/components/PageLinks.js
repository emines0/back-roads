import React from 'react'
import { pagesLinks } from '../data'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pagesLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
