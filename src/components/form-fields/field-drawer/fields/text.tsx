import React, { Fragment } from 'react'
import { IsRequired, Label, Placeholder, Size } from '../inputs'

export const Text: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
    </Fragment>
  )
}