import type { IStepProps } from '../Step'

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { Flex } from '../Flex'
import { Step } from '../Step'

const StyledFlex = styled(Flex)`
  & > :not(:last-child) {
    margin-right: ${themeGet('space.4')}px;
  }
`

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export type StepperProps = InferProps<typeof propTypes>
export interface IStepperProps extends StepperProps {
  children?: React.ReactNode
}

const Stepper: React.FC<IStepperProps> & {
  Step: React.FC<IStepProps>
} = ({ className, children, ...props }) => {
  return (
    <StyledFlex className={className} {...props}>
      {children}
    </StyledFlex>
  )
}

Stepper.displayName = 'Stepper'

Stepper.Step = Step

Stepper.propTypes = propTypes

Stepper.defaultProps = {
  className: '',
}

export default Stepper
