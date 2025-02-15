import * as React from 'react';
import { ComponentProps } from 'react';

import { UserCard } from '../src/components/user-card';

type StoryProps = ComponentProps<typeof UserCard>;

const meta: any = {
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    jobTitle: {
      control: {
        type: 'text',
      },
    },
    role: {
      control: {
        type: 'text',
      },
    },
    imageUrl: {
      control: {
        type: 'text',
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
    name: "Abdulmohsen Alaiban",
    jobTitle: "VP - IT Development",
    role: "Admin",
    imageUrl: "https://salicapi.com/api/user/photo?id=abdulmohsen.alaiban@salic.com"
  },
};

export default meta;

type Story = any;

export const Example1: Story = {
  args: {
    name: "Abdulmohsen Alaiban",
    jobTitle: "VP - IT Development",
    role: "Admin",
    imageUrl: "https://salicapi.com/api/user/photo?id=abdulmohsen.alaiban@salic.com",
    onClick: () => alert("Hi! I am Abdulmohsen Alaiban")
  },
  render: ({ ...args }: StoryProps) => {
    return <UserCard {...args} />;
  },
};

export const Example2: Story = {
  args: {
    name: "Akmal Aldahdouh",
    jobTitle: "AVP - IT Development",
    role: "Admin",
    imageUrl: "https://salicapi.com/api/user/photo?id=Akmal.Eldahdouh@salic.com"
  },
  render: ({ ...args }: StoryProps) => {
    return <UserCard {...args} />;
  },
};

export const Example3: Story = {
  render: () => {
    const data: StoryProps[] = [
      {
        name: "Akmal Aldahdouh",
        jobTitle: "AVP - IT Development",
        role: "Admin",
        imageUrl: "https://salicapi.com/api/user/photo?id=Akmal.Eldahdouh@salic.com",
        onClick: () => alert("Hi! I am Akmal Aldahdouh")
      },{
        name: "Abdullah Almuhannaa",
        jobTitle: "Talent Management Associate",
        role: "User",
        imageUrl: "https://salicapi.com/api/user/photo?id=Abdullah.Almuhannaa@salic.com"
      },{
        name: "Abdullah Alshuwayrikh",
        jobTitle: "AVP - HC Excellence",
        imageUrl: "https://salicapi.com/api/user/photo?id=Abdullah.Alshuwayrikh@salic.com"
      },{
        name: "Abdulaziz Aldalaan",
        jobTitle: "VP - Strategic Performance",
        role: "User",
        imageUrl: "https://salicapi.com/api/user/photo?id=Abdulaziz.Aldalaan@salic.com"
      },{
        name: "Omar Nasir",
        jobTitle: "Commercial Manager",
        role: "User",
        imageUrl: "https://salicapi.com/api/user/photo?id=Omar.Nasir@Salic.com"
      },{
        name: "Alaaeldin Abdeltawab",
        jobTitle: "IT Application Support Associate",
        role: "Admin",
        imageUrl: "https://salicapi.com/api/user/photo?id=Alaaeldin.Abdeltawab@salic.com"
      },{
        name: "Farah Aldhalaan",
        jobTitle: "AVP – Funding and Cash Management",
        role: "User",
        imageUrl: "https://salicapi.com/api/user/photo?id=Farah.Aldhalaan@salic.com"
      },{
        name: "Alaa Fatta",
        jobTitle: "Facilities and H&S Coordinator",
        role: "User",
        imageUrl: "https://salicapi.com/api/user/photo?id=Alaa.Fatta@salic.com"
      },{
        name: "Abdulmohsen Alaiban",
        jobTitle: "VP - IT Development",
        role: "Admin",
        imageUrl: "https://salicapi.com/api/user/photo?id=abdulmohsen.alaiban@salic.com"
      }
    ];
    
    return <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem"
      }}>
      {data.map(user => <UserCard {...user} />)}
    </div>;
  },
};