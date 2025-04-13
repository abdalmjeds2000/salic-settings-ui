import React, { Fragment } from 'react';
import { AllowCustomValue, DisabledBeforeToday, IsRequired, Label, Placeholder, SelectOptions, Size, TextareaSize, TextareaRows, RadioButtonsOptions, ListFieldsRenderer, RadioSize, TextSize, PasswordSize, NumberSize, SwitchSize, ButtonsSize, SelectSize, DateSize } from './inputs';

interface ReactFCWithExtra extends React.FC<{ list?: boolean }> {
  Extra: React.FC<{ list?: boolean }>;
}


export const Text: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <TextSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Textarea: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <TextareaRows isList={list} />
      <TextareaSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Number: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <NumberSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Password: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <PasswordSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Checkbox: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      {/* <Size isList={list} /> */}
    </Fragment>
  )
}

export const Switch: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <SwitchSize isList={list} />
    </Fragment>
  )
}

export const Select: ReactFCWithExtra = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <SelectSize isList={list} />
      <IsRequired isList={list} />
      <br />
      <AllowCustomValue isList={list} />
    </Fragment>
  )
}
const SelectExtra: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <SelectOptions isList={list} />
    </Fragment>
  )
}
Select.Extra = SelectExtra

export const MultiSelect: ReactFCWithExtra = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <SelectSize isList={list} />
      <IsRequired isList={list} />
      <br />
      <AllowCustomValue isList={list} />
    </Fragment>
  )
}
export const MultiSelectExtra: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <SelectOptions isList={list} />
    </Fragment>
  )
}
MultiSelect.Extra = MultiSelectExtra;

export const LookupSelect: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <SelectSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Radio: ReactFCWithExtra = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <RadioSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}
export const RadioExtra: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <SelectOptions isList={list} />
    </Fragment>
  )
}
Radio.Extra = RadioExtra

export const RadioButtons: ReactFCWithExtra = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <ButtonsSize isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}
export const RadioButtonsExtra: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <RadioButtonsOptions isList={list} />
    </Fragment>
  )
}
RadioButtons.Extra = RadioButtonsExtra;

export const Date: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <DateSize isList={list} pickerType='date' />
      {/* <DateFormats options={dateFormatsOptions} isList={list} /> */}
      <DisabledBeforeToday isList={list} />
      <br />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const DateRange: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <DateSize isList={list} pickerType='date' />
      {/* <DateFormats options={dateFormatsOptions} isList={list} /> */}
      <DisabledBeforeToday isList={list} />
      <br />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Time: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <DateSize isList={list} pickerType='time' />
      {/* <DateFormats options={timeFormatsOptions} isList={list} /> */}
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const TimeRange: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <DateSize isList={list} pickerType='time' />
      {/* <DateFormats options={timeFormatsOptions} isList={list} /> */}
      <br />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const DateTime: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Placeholder isList={list} />
      <DateSize isList={list} pickerType='datetime' />
      {/* <DateFormats options={dateTimeFormatsOptions} isList={list} /> */}
      <DisabledBeforeToday isList={list} />
      <br />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const DateTimeRange: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <Size isList={list} />
      <DateSize isList={list} pickerType='datetime' />
      {/* <DateFormats options={dateTimeFormatsOptions} isList={list} /> */}
      <DisabledBeforeToday isList={list} />
      <br />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const Attachments: React.FC<{ list?: boolean }> = ({ list }) => {
  return (
    <Fragment>
      <Label isList={list} />
      <IsRequired isList={list} />
    </Fragment>
  )
}

export const List: React.FC = () => {
  return (
    <Fragment>
      <Label />
      <ListFieldsRenderer />
      <IsRequired />
    </Fragment>
  )
}