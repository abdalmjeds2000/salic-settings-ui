import React, { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CheckboxButtons } from '../src/components/checkbox-buttons';

const meta: Meta<typeof CheckboxButtons> = {
  title: "Components/CheckboxButtons",
  component: CheckboxButtons,
  argTypes: {
    items: { control: 'object' },
    activeKey: { control: 'text' },
    onChange: { action: 'changed' },
    className: { control: 'text' },
    style: { control: 'object' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<typeof CheckboxButtons> = (args: ComponentProps<typeof CheckboxButtons>) => {
  const [active, setActive] = useState(args.activeKey);
  return (
    <CheckboxButtons 
      {...args} 
      activeKey={active} 
      onChange={(key) => {
        setActive(key);
        args.onChange(key);
      }} 
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { key: 'option1', label: 'Option 1' },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3' },
  ],
  activeKey: 'option1',
};

export const Sizes = () => {
  const [active, setActive] = useState('option1');
  const items = [
    { key: 'option1', label: 'Option 1' },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3' },
  ]
  return (
    <div>
      <CheckboxButtons 
        items={items}
        activeKey={active} 
        size='sm'
        onChange={setActive as any} 
      />
      <br />
      <CheckboxButtons 
        items={items}
        activeKey={active} 
        size='default'
        onChange={setActive as any} 
      />
      <br />
      <CheckboxButtons 
        items={items}
        activeKey={active} 
        size='lg'
        onChange={setActive as any} 
      />
    </div>
  );
};