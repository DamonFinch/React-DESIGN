import React from 'react'
import styled from 'styled-components'

import { Flex, Box, Text, Image, Heading, getPaletteColor } from '..'
import { Hotels as HotelsIcon } from 'pcln-icons'

export default {
  title: 'Layout/Layout Examples',
}

export const Grid = () => (
  <Box p={4}>
    <Flex mx={-3}>
      <Box width={[1, 1 / 2]} px={3} mb={4}>
        <Box bg='background.light'>
          <Text>Hello</Text>
        </Box>
      </Box>
      <Box width={[1, 1 / 2]} px={3} mb={4}>
        <Box bg='background.light'>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Flex>
  </Box>
)

export const TwoColumn = () => (
  <Flex>
    <Box px={3} width={1 / 4}>
      <Box
        bg='background.light'
        style={{
          minHeight: '50vh',
        }}
      >
        <Text>Hello</Text>
      </Box>
    </Box>
    <Box px={3} width={3 / 4}>
      <Box
        bg='background.light'
        style={{
          minHeight: '50vh',
        }}
      >
        <Text>Hello</Text>
      </Box>
    </Box>
  </Flex>
)

export const Navbar = () => (
  <Flex p={2} alignItems='center' color='primary'>
    <HotelsIcon mr={2} />
    <Text bold mx={2}>
      Hello
    </Text>
    <Text mx={2}>Navbar</Text>
    <Text ml='auto' mr={2}>
      Right Side
    </Text>
  </Flex>
)

const cards = Array.from({ length: 12 }).map((n, i) => ({
  id: i,
  title: 'Hello' + i,
  text: 'Card',
  image: 'http://placehold.it/512x256/007aff',
}))

const Border = styled(Box)`
  border: 1px solid ${getPaletteColor('background.base')};
  border-radius: 3px;
`

const Card = ({ image, title, text }) => (
  <Border p={1}>
    <Image src={image} width='512' height='256' />
    <Heading fontSize={2} mt={1}>
      {title}
    </Heading>
    <Text fontSize={1}>{text}</Text>
  </Border>
)

export const TiledCards = () => (
  <Flex flexWrap='wrap'>
    {cards.map((card) => (
      <Box key={card.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
        <Card {...card} />
      </Box>
    ))}
  </Flex>
)
