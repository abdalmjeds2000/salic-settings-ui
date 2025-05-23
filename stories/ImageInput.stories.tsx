import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ImageInput } from "../src/components/image-input";
import { UploadCloud } from "lucide-react";

const meta: Meta<typeof ImageInput> = {
  title: "Components/ImageInput",
  component: ImageInput,
  argTypes: {
    image: { control: "text" },
    placeholder: { control: "text" },
    imageClassName: { control: "text" },
    className: { control: "text" },
    style: { control: "object" },
    icon: { control: "object" },
    onChange: { action: "imageSelected" }, // Storybook action logging
  },
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  render: () => (
    <ImageInput 
      placeholder="Upload Image"
      icon={<UploadCloud size={18} />}
      onChange={(response) => {
        console.log("Base64:", response.getBase64());
        console.log("File:", response.getFile());
      }}
    />
  ),
};

export const WithImage: Story = {
  render: () => (
    <ImageInput
      placeholder="Change Logo"
      image="https://salicapi.com/File/logo.png"
      imageStyle={{ width: 200 }}
      icon={<UploadCloud size={20} />}
      onChange={(response) => {
        console.log("Base64:", response.getBase64());
        console.log("File:", response.getFile());
      }}
    />
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <ImageInput
      placeholder="Without Image"
      icon={<UploadCloud size={20} />}
      onChange={(response) => {
        console.log("Base64:", response.getBase64());
        console.log("File:", response.getFile());
      }}
    />
  ),
};
