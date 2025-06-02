import React, { ComponentProps } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RowCard } from '../src/components/row-card';
import { ChevronRight, Info, Settings } from 'lucide-react';

export default {
  title: 'Components/RowCard',
  component: RowCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    iconBgColor: { control: 'color' },
    collapsable: { control: 'boolean' },
    collapsedDefaultValue: { control: 'boolean' },
    alwaysOpen: { control: 'boolean' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
} as Meta<typeof RowCard>;

const Template: StoryFn<typeof RowCard> = (args: ComponentProps<typeof RowCard>) => <RowCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Info size={20} />,
  iconBgColor: '#E3F2FD',
  title: 'Company Logo',
  description: 'Update your company logo.',
  extra: <img src='/images/logo.png' width={75} />
};

export const Collapsable = Template.bind({});
Collapsable.args = {
  icon: <Settings size={20} color='#776644' />,
  iconBgColor: '#FFECB3',
  title: 'Settings',
  description: 'Click to expand and reveal more options.',
  collapsable: true,
  children: <div style={{ padding: '25px' }}><p>Expanded content goes here.</p></div>,
};

export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = {
  icon: <Settings size={20} />,
  iconBgColor: '#FFCDD2',
  title: 'Always Open Section',
  description: 'This section is always expanded regardless of user interaction.',
  collapsable: true,
  alwaysOpen: true,
  children: <div style={{ padding: '25px' }}><p>This content is always visible.</p></div>,
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  icon: <Info size={20} color='#2C9F70' />,
  iconBgColor: '#C8E6C9',
  title: 'Company Logo',
  description: 'Update your company logo',
  extra: <span>Custom Extra</span>,
  className: 'custom-row-card',
  style: { border: '1px solid #2C9F70' },
};
