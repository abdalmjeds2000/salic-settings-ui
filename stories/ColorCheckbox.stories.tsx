import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ColorCheckbox } from "../src/components/color-checkbox";

const meta: Meta<typeof ColorCheckbox> = {
  title: "Components/ColorCheckbox",
  component: ColorCheckbox,
  argTypes: {
    color: { control: "color" },
    checked: { control: "boolean" },
    size: { control: { type: "select", options: ["lg", "default", "sm"] } },
    disabled: { control: "boolean" },
    className: { control: "text" },
    style: { control: "object" },
    onChange: { action: "toggled" },
  },
};

export default meta;
type Story = StoryObj<typeof ColorCheckbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <ColorCheckbox 
        color="#3498db" 
        checked={checked} 
        size="default"
        onChange={setChecked} 
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <ColorCheckbox 
        color="#2ecc71" 
        checked={checked} 
        size="default"
        onChange={setChecked} 
      />
    );
  },
};

export const DisabledChecked: Story = {
  render: () => (
    <ColorCheckbox 
      color="#9b59b6" 
      checked={true} 
      size="default"
      disabled={true}
      onChange={() => {}}
    />
  ),
};

export const DisabledUnchecked: Story = {
  render: () => (
    <ColorCheckbox 
      color="#95a5a6" 
      checked={false} 
      size="default"
      disabled={true}
      onChange={() => {}}
    />
  ),
};

export const SmallSize: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <ColorCheckbox 
        color="#f1c40f" 
        checked={checked} 
        size="sm"
        onChange={setChecked} 
      />
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <ColorCheckbox 
        color="#8e44ad" 
        checked={checked} 
        size="lg"
        onChange={setChecked} 
      />
    );
  },
};
