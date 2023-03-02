import kebabCase from 'lodash/kebabCase'
import { Box, Link } from 'pcln-design-system'
import React from 'react'

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export type TableOfContentsProps = {
  links: string[]
}

export const TableOfContents = ({ links }: TableOfContentsProps) => (
  <Box my={5}>
    <ul>
      {links.map((link) => {
        const id = kebabCase(link)
        return (
          <li key={id}>
            <Link onClick={() => scrollTo(id)}>{link}</Link>
          </li>
        )
      })}
    </ul>
  </Box>
)
