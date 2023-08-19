import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import type { ICloseButtonProps } from '..'
import { CloseButton, Flex, Grid, Text, paletteColors } from '..'
import { argTypes, defaultArgs } from './CloseButton.stories.args'

type CloseButtonStory = StoryObj<ICloseButtonProps>

export const Playground: CloseButtonStory = {
  render: (args) => <CloseButton {...args} />,
}

const templateColumns = Array.from(Array(6).keys()).map((x) => `repeat(${x + 1}, 1fr)`)
export const OnColors: CloseButtonStory = {
  render: (args) => (
    <Grid templateColumns={templateColumns} gap={3} overflow='hidden'>
      {paletteColors.map((x) => (
        <Flex key={x} alignItems='center' bg={x} p={3} overflow='auto' style={{ gap: '.25rem' }}>
          <CloseButton key={x} {...args} />
          <Text>{x}</Text>
        </Flex>
      ))}
    </Grid>
  ),
}

const meta: Meta<typeof CloseButton> = {
  title: 'CloseButton',
  component: CloseButton,
  args: defaultArgs,
  argTypes: argTypes,
}

export default meta
