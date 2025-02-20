import React, { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sidebar } from '../src/components/sidebar';
import { UserLabel } from '../src/components/user-label';
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

export const WithExtra = Template.bind({});
WithExtra.args = {
  title: 'With Extra',
  items: [
    { label: 'Home', selected: true },
    { label: 'Dashboard', selected: false },
    { label: 'Settings', selected: false },
    
  ],
  extra: (
    <UserLabel
      name='Akmal Aldahdouh'
      email='akmal.eldahdouh@salic.com'
      title='AVP - IT Development'
      size='sm'
    />
  )
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
