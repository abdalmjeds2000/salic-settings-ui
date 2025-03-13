import React, { Fragment } from 'react'
import { Label, Placeholder, Size, IsRequired, AllowCustomValue, SelectOptions } from '../inputs'

export const Select: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <SelectOptions />
      <IsRequired />
      <AllowCustomValue />
    </Fragment>
  )
}