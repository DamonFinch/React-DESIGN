import themeGet from '@styled-system/theme-get'
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion'
import { Close } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'

import type { ICloseButtonProps } from '..'
import { ComposedStyleFns } from '..'

export const closeButtonSizes = ['sm', 'md', 'lg'] as const
export type CloseButtonSize = (typeof closeButtonSizes)[number] | number
export type MotionButtonProps = HTMLMotionProps<'button'> & ICloseButtonProps

export const closeButtonIconSizes: Record<CloseButtonSize, number> = {
  sm: 20,
  md: 24,
  lg: 32,
}

export const closeButtonVariants = ['filled', 'white'] as const
export type CloseButtonVariant = (typeof closeButtonVariants)[number]
export const closeButtonVariantProps: Record<CloseButtonVariant, Omit<ICloseButtonProps, 'variant'>> = {
  filled: { bgColor: 'background.lightest', boxShadowSize: 'md' },
  white: { color: 'text.lightest' },
} as const

export const MotionButton: ForwardRefComponent<HTMLButtonElement, MotionButtonProps> = styled(motion.button)`
  all: unset;
  ${ComposedStyleFns}

  display: grid;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;
  border-sizing: border-box;
  position: relative;
  box-shadow: ${(props: MotionButtonProps) => themeGet(`shadows.${props.boxShadowSize}`)(props)};
  color: ${(props: MotionButtonProps) => themeGet(`palette.${props.color}`)(props)};
  background-color: ${(props: MotionButtonProps) => themeGet(`palette.${props.bgColor}`)(props)};

  &:focus-visible {
    outline: 2px solid ${(props: MotionButtonProps) => themeGet(`palette.${props.color}`)(props)};
  }
`

export const BackgroundAnimation: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'div'>> = styled(
  motion.div
)`
  height: 100%;
  width: 100%;
  background: black;
  border-radius: 100%;
  mix-blend-mode: multiply;
  position: absolute;
  opacity: 0.15;
`

type CloseIconProps = { size: CloseButtonSize } & React.SVGProps<SVGElement>
export const CloseIcon: ForwardRefComponent<SVGElement, CloseIconProps> = styled(Close)`
  width: ${({ size }: CloseIconProps) => (typeof size === 'number' ? size : closeButtonIconSizes[size])}px;
  z-index: 0;
  border-radius: 100%;
`
