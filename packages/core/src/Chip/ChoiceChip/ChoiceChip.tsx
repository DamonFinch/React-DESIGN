import React from 'react'
import PropTypes from 'prop-types'
import { SpaceProps, FontSizeProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'

const choiceChipProps = {
  ...propTypes.space,
  ...propTypes.fontSize,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  action: PropTypes.shape({
    Icon: PropTypes.node,
    title: PropTypes.string,
  }),
  Image: PropTypes.object,
  variation: PropTypes.oneOf(['outline', 'shadow']),
  topLabel: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  justifyContent: PropTypes.string,
}

export type Variations = 'outline' | 'shadow'

export interface IChoiceChipProps extends SpaceProps, FontSizeProps, React.HTMLAttributes<HTMLElement> {
  name?: string
  disabled?: boolean
  selected?: boolean
  label?: string
  value?: string | number
  variation?: Variations
  topLabel?: string
  borderRadius?: string
  width?: string
  justifyContent?: string
}

const ChoiceChip: React.FC<IChoiceChipProps> = ({
  id,
  name,
  disabled,
  selected,
  children,
  onClick,
  label,
  variation,
  width = 'auto',
  value,
  ...props
}) => (
  <ChipLabel htmlFor={id} width={width} {...props}>
    <ChipInput
      data-testid={id}
      name={name}
      value={value}
      type='radio'
      role='radio'
      id={id}
      disabled={disabled}
      checked={selected}
      onChange={onClick}
    />
    <ChipContent label={label} disabled={disabled} selected={selected} variation={variation} {...props}>
      {children}
    </ChipContent>
  </ChipLabel>
)

ChoiceChip.displayName = 'Chip'

ChoiceChip.propTypes = choiceChipProps
ChoiceChip.defaultProps = {
  color: 'primary',
  variation: 'outline',
}

export default ChoiceChip
