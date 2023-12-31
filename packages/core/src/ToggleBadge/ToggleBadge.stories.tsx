import React from 'react'

import { Button, ToggleBadge } from '..'
import { argTypes } from './ToggleBadge.stories.args'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'ToggleBadge',
  component: ToggleBadge,
  parameters: {
    docs: {
      description: {
        component: 'Use the <ToggleBadge /> component to render a primitive ToggleBadge.',
      },
    },
  },
  argTypes,
}

const Template = (args) => <ToggleBadge {...args}>ToggleBadge</ToggleBadge>

export const ToggleBadgeComponent = Template.bind({})

export const Selected = () => <ToggleBadge selected>Selected - Badge</ToggleBadge>
export const Unselected = () => <ToggleBadge>Un - Selected - Badge</ToggleBadge>

export const UnselectedWithDifferentBackgroundColor = () => (
  <ToggleBadge unSelectedBg='yellow'>Un - Selected - Badge</ToggleBadge>
)

export const AGroup = () => (
  <div>
    <ToggleBadge selected>Flight + Hotel</ToggleBadge>
    <ToggleBadge>Flight + Hotel + Car</ToggleBadge>
    <ToggleBadge>Flight + Car</ToggleBadge>
  </div>
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      dsRef.current.focus()
    }
    return (
      <>
        <div>
          <ToggleBadge selected>Flight + Hotel</ToggleBadge>
          <ToggleBadge ref={dsRef}>Flight + Hotel + Car</ToggleBadge>
          <ToggleBadge>Flight + Car</ToggleBadge>
        </div>
        <Button onClick={onClick} mt={4}>
          Click to focus second badge via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
