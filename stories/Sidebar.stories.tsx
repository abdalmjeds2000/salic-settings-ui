import React, { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sidebar } from '../src/components/sidebar';
import { ArrowLeft, PanelLeftClose } from 'lucide-react';

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    title: { control: 'text' },
    beforeTitle: { control: 'text' },
    afterTitle: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args: ComponentProps<typeof Sidebar>) => {
  const [items, setItems] = useState(args.items);

  const handleItemClick = (index: number) => {
    const newItems = items.map((item, i) => ({
      ...item,
      selected: i === index,
    }));
    setItems(newItems);
  };

  return (
    <div style={{ display: 'flex', gap: "2rem", height: '600px', border: '1px solid #EFEFEF', overflow: "hidden", borderRadius: '8px' }}>
      <div style={{ width: '350px' }}>
        <Sidebar {...args} items={items.map((item, index) => ({
          ...item,
          onClick: () => handleItemClick(index),
        }))} />
      </div>
      <div>
        empty
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Settings',
  items: [
    { label: 'Profile', selected: false },
    { label: 'Security', selected: true },
    { label: 'Notifications', selected: false },
  ],
};

export const WithBeforeAndAfterTitle = Template.bind({});
WithBeforeAndAfterTitle.args = {
  title: 'Settings',
  beforeTitle: <ArrowLeft size={20} />,
  afterTitle: <PanelLeftClose size={16} />,
  items: [
    { label: 'Profile', selected: false },
    { label: 'Security', selected: true },
    { label: 'Notifications', selected: false },
  ],
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: 'Custom Sidebar',
  className: 'custom-sidebar',
  style: { backgroundColor: '#f8f8FF', padding: '10px' },
  items: [
    { label: 'Home', selected: true },
    { label: 'Dashboard', selected: false },
    { label: 'Settings', selected: false },
  ],
};
