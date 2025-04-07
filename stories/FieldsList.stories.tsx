import React, { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FieldsList } from '../src/components/form-fields/fields-list/index';

const meta: Meta<typeof FieldsList> = {
  title: "Components/FieldsList",
  component: FieldsList,
  argTypes: {
  },
};

export default meta;

const Template: StoryFn<typeof FieldsList> = (args: ComponentProps<typeof FieldsList>) => {
  const [fields, setFields] = useState([{"order": 0,"category":"input","type":"radiobuttons","name":"withFamily","label":"With Family ","initialValue":false,"dataType":"boolean","viewType":"yes/no","rules":[{"required":true,"message":""}],"props":{"size":"large","style":{"width":"100%"}},"options":[{"text":"Yes","optionProps":{"value":true,"style":{"width":"50%","textAlign":"center"}}},{"text":"No","optionProps":{"value":false,"style":{"width":"50%","textAlign":"center"}}}]},{"order": 1,"category":"input","type":"radiobuttons","name":"visaType","label":"VISA Type","initialValue":"single","dataType":"string","viewType":"string","rules":[{"required":false,"message":""}],"props":{"size":"large","placeholder":"Write here...","style":{"width":"100%"}},"options":[{"text":"Single","optionProps":{"value":"single","style":{"width":"50%","textAlign":"center"}}},{"text":"Multiple","optionProps":{"value":"multiple","style":{"width":"50%","textAlign":"center"}}}]},{"order": 2,"category":"input","type":"select","name":"visaDuration","dataType":"string","viewType":"string","label":"VISA Duration","rules":[{"required":true,"message":""}],"props":{"size":"large","placeholder":"Select VISA Duration"},"options":[{"value":"1 Day","label":"1 Day"},{"value":"3 Days","label":"3 Days"},{"value":"1 Week","label":"1 Week"},{"value":"2 Weeks","label":"2 Weeks"},{"value":"3 Weeks","label":"3 Weeks"},{"value":"1 Month","label":"1 Month"},{"value":"2 Months","label":"2 Months"},{"value":"3 Months","label":"3 Months"},{"value":"6 Months","label":"6 Months"},{"value":"9 Months","label":"9 Months"},{"value":"1 Year","label":"1 Year"}]},{"order": 3,"category":"input","type":"textarea","name":"description","dataType":"string","viewType":"longString","label":"Description","rules":[{"required":false,"message":""}],"props":{"size":"large","placeholder":"Write here...","rows":3}}]);
  
  return (
    <FieldsList 
      fields={fields as any}
      onChange={setFields}
    />
  );
};

export const Default = Template.bind({});