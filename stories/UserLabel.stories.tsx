import * as React from 'react';
import { ComponentProps } from 'react';

import { UserLabel } from '../src/components/user-label';

type StoryProps = ComponentProps<typeof UserLabel>;

const meta: any = {
  title: 'Components/UserLabel',
  component: UserLabel,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    email: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    style: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    "name": "Abdulmohsen Al-Aiban",
    "email": "abdulmohsen.alaiban@salic.com",
    "title": "SVP - Information Technology",
  },
};

export default meta;

type Story = any;

export const Default: Story = {
  args: {
    "name": "Abdulmohsen Al-Aiban",
    "email": "abdulmohsen.alaiban@salic.com",
    "title": "SVP - Information Technology",
    size: "default",
  },
  render: ({ ...args }: StoryProps) => {
    return <UserLabel {...args} />;
  },
};

export const Sizes: Story = {
  args: {},
  render: ({ ...args }: StoryProps) => {
    const props1: StoryProps = {
      "name": "Abdulmohsen Al-Aiban",
      "email": "abdulmohsen.alaiban@salic.com",
      "title": "SVP - Information Technology",
      "size": "lg"
    };
    const props2: StoryProps = {
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com",
      "title": "AVP - IT Development",
      "size": "default"
    };
    const props3: StoryProps = {
      "name": "Turki Alasime",
      "email": "Turki.Alasime@salic.com",
      "title": "Executive Secretary",
      "size": "sm"
    };
    return <div>
      <UserLabel {...props1} /> <br />
      <UserLabel {...props2} /> <br />
      <UserLabel {...props3} />
    </div>;
  },
};

