import React, { Fragment } from 'react'
import { AllowCustomValue, DateFormats, DisabledBeforeToday, IsRequired, Label, Placeholder, SelectOptions, Size, Number as NumberInput, RadioButtonsOptions } from './inputs'
import { dateFormatsOptions, dateTimeFormatsOptions, timeFormatsOptions } from '../../../utils/form-builder'

interface ReactFCWithExtra extends React.FC {
  Extra: React.FC
}


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
      <NumberInput 
        label='Number Of Lines' 
        name='props.rows' 
        props={{
          min: 1,
          max: 10
        }}
      />
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

export const Password: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
    </Fragment>
  )
}

export const Checkbox: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Size />
    </Fragment>
  )
}

export const Select: ReactFCWithExtra = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
      <br />
      <AllowCustomValue />
    </Fragment>
  )
}
const SelectExtra: React.FC = () => {
  return (
    <Fragment>
      <SelectOptions />
    </Fragment>
  )
}
Select.Extra = SelectExtra

export const MultiSelect: ReactFCWithExtra = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <IsRequired />
      <br />
      <AllowCustomValue />
    </Fragment>
  )
}
export const MultiSelectExtra: React.FC = () => {
  return (
    <Fragment>
      <SelectOptions />
    </Fragment>
  )
}
MultiSelect.Extra = MultiSelectExtra;

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

export const Radio: ReactFCWithExtra = () => {
  return (
    <Fragment>
      <Label />
      <Size />
      <IsRequired />
    </Fragment>
  )
}
export const RadioExtra: React.FC = () => {
  return (
    <Fragment>
      <SelectOptions />
    </Fragment>
  )
}
Radio.Extra = RadioExtra

export const RadioButtons: ReactFCWithExtra = () => {
  return (
    <Fragment>
      <Label />
      <Size />
      <IsRequired />
    </Fragment>
  )
}
export const RadioButtonsExtra: React.FC = () => {
  return (
    <Fragment>
      <RadioButtonsOptions />
    </Fragment>
  )
}
RadioButtons.Extra = RadioButtonsExtra;

export const Date: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <Placeholder />
      <Size />
      <DateFormats options={dateFormatsOptions} />
      <DisabledBeforeToday />
      <br />
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
      <br />
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
      <br />
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
      <br />
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
      <br />
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