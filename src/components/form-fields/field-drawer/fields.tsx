import React, { Fragment } from 'react'
import { AllowCustomValue, DateFormats, DisabledBeforeToday, IsRequired, Label, Placeholder, SelectOptions, Size, Number as NumberInput } from './inputs'
import { dateFormatsOptions, dateTimeFormatsOptions, timeFormatsOptions } from '../../../utils/form-builder'

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

export const Textarea: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <NumberInput label='Number Of Lines' name='props.rows' />
      <Size />
      <IsRequired />
    </Fragment>
  )
}

export const Number: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
    </Fragment>
  )
}

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

export const MultiSelect: React.FC = () => {
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

export const LookupSelect: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
    </Fragment>
  )
}

export const Date: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <DateFormats options={dateFormatsOptions} />
      <DisabledBeforeToday />
      <IsRequired />
    </Fragment>
  )
}

export const DateRange: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder isRange />
      <Size />
      <DateFormats options={dateFormatsOptions} />
      <DisabledBeforeToday />
      <IsRequired />
    </Fragment>
  )
}

export const Time: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <DateFormats options={timeFormatsOptions} />
      <IsRequired />
    </Fragment>
  )
}

export const TimeRange: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder isRange />
      <Size />
      <DateFormats options={timeFormatsOptions} />
      <IsRequired />
    </Fragment>
  )
}

export const DateTime: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <DateFormats options={dateTimeFormatsOptions} />
      <DisabledBeforeToday />
      <IsRequired />
    </Fragment>
  )
}

export const DateTimeRange: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder isRange />
      <Size />
      <DateFormats options={dateTimeFormatsOptions} />
      <DisabledBeforeToday />
      <IsRequired />
    </Fragment>
  )
}

export const Attachments: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <IsRequired />
    </Fragment>
  )
}