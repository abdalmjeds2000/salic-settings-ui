import React, { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FieldDrawer } from '../src/components/form-fields/field-drawer/index';

const meta: Meta<typeof FieldDrawer> = {
  title: "Components/FieldDrawer",
  component: FieldDrawer,
  argTypes: {
  },
};

export default meta;

const Template: StoryFn<typeof FieldDrawer> = (args: ComponentProps<typeof FieldDrawer>) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <button type='button' onClick={() => setOpen(true)}>
        Open
      </button>
      <FieldDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

export const Default = Template.bind({});