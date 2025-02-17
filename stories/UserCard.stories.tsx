import * as React from 'react';
import { ComponentProps } from 'react';

import { UserCard } from '../src/components/user-card';
import { Ellipsis } from 'lucide-react';

type StoryProps = ComponentProps<typeof UserCard>;

const meta: any = {
  title: 'Components/UserCard',
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
    user: {
      "id": "c8a91b75-9428-4df0-80d1-8b164f2a6294",
      "name": "Abdulmohsen Al-Aiban",
      "email": "abdulmohsen.alaiban@salic.com",
      "department": null,
      "title": "SVP - Information Technology",
      "grade": "9"
    },
    
  },
};

export default meta;

type Story = any;

export const Default: Story = {
  args: {
    user: {
      "id": "c8a91b75-9428-4df0-80d1-8b164f2a6294",
      "name": "Abdulmohsen Al-Aiban",
      "email": "abdulmohsen.alaiban@salic.com",
      "department": null,
      "title": "SVP - Information Technology",
      "grade": "9"
    },
    style: { maxWidth: 360, margin: '0 auto' }
  },
  render: ({ ...args }: StoryProps) => {
    return <UserCard {...args} />;
  },
};

export const WithExtra: Story = {
  args: {
    user: {
      "id": "d0644526-7507-489c-a6b1-6c7743911c6a",
      "name": "Turki Alasime",
      "email": "Turki.Alasime@salic.com",
      "department": null,
      "title": "Executive Secretary",
      "grade": "4"
    },
    extra: <span style={{ color: '#777', fontSize: 12 }}>Since 15 January 2020</span>
  },
  render: ({ ...args }: StoryProps) => {
    return <UserCard {...args} />;
  },
};

export const GridList: Story = {
  render: () => {
    const data: StoryProps[] = [
      {
        user: {
          "id": "d0644526-7507-489c-a6b1-6c7743911c6a",
          "name": "Turki Alasime",
          "email": "Turki.Alasime@salic.com",
          "department": null,
          "title": "Executive Secretary",
          "grade": "4"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "c8a91b75-9428-4df0-80d1-8b164f2a6294",
          "name": "Abdulmohsen Al-Aiban",
          "email": "abdulmohsen.alaiban@salic.com",
          "department": null,
          "title": "SVP - Information Technology",
          "grade": "9"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "bf2c12c9-ee49-4190-bba6-76d81a65962e",
          "name": "Akmal Aldahdooh",
          "email": "akmal.eldahdouh@salic.com",
          "department": null,
          "title": "AVP - IT Development",
          "grade": "7"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "7aef9fff-dff8-4f82-af95-15f50b965c5b",
          "name": "Abdullah Alsuheem",
          "email": "abdullah.alsuheem@salic.com",
          "department": null,
          "title": "IT Support Associate",
          "grade": "5"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "4eadbd79-b1b8-4186-aa5e-d01115a8d8e1",
          "name": "Alaaeldin Abdeltawab",
          "email": "Alaaeldin.Abdeltawab@salic.com",
          "department": null,
          "title": "IT Application Support Associate",
          "grade": "5"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "762debbd-7d45-4cfd-a022-59465146331a",
          "name": "Hassan Alyami",
          "email": "hassan.alyami@salic.com",
          "department": null,
          "title": "Facilities and H&S Coordinator",
          "grade": "2"
        },
        extra: <Ellipsis color="#777" size={20} />
      },{
        user: {
          "id": "7a82204d-6d35-48da-8d51-f58b1aaf05c9",
          "name": "Osama Khedr",
          "email": "Osama.Khedr@salic.com",
          "department": null,
          "title": "IT Development Senior Specialist",
          "grade": "4"
        },
        extra: <Ellipsis color="#777" size={20} />
      },
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