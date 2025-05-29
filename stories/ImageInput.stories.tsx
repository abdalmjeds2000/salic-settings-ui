import React, { useState } from "react";
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
    readOnly: { control: "boolean" },
    onChange: { action: "imageSelected" },
  },
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  render: () => {
    const [image, setImage] = useState<string | null>(null);
    return (
      <ImageInput 
        placeholder="Upload Image"
        icon={<UploadCloud size={18} />}
        image={image}
        onChange={(response) => {
          setImage(response.getBase64());
          console.log("Base64:", response.getBase64());
          console.log("File:", response.getFile());
        }}
      />
    );
  },
};

export const WithImage: Story = {
  render: () => {
    const [image, setImage] = useState<string | null>("https://salicapi.com/File/logo.png");
    return (
      <ImageInput
        placeholder="Change Logo"
        image={image}
        imageStyle={{ width: 200 }}
        icon={<UploadCloud size={20} />}
        onChange={(response) => {
          setImage(response.getBase64());
          console.log("Base64:", response.getBase64());
          console.log("File:", response.getFile());
        }}
      />
    );
  },
};

export const WithoutImage: Story = {
  render: () => {
    const [image, setImage] = useState<string | null>(null);
    return (
      <ImageInput
        placeholder="Without Image"
        image={image}
        icon={<UploadCloud size={20} />}
        onChange={(response) => {
          setImage(response.getBase64());
          console.log("Base64:", response.getBase64());
          console.log("File:", response.getFile());
        }}
      />
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    const [image] = useState<string | null>("https://salicapi.com/File/logo.png");
    return (
      <ImageInput
        placeholder="Read-only Image Input"
        image={image}
        readOnly
        imageStyle={{ width: 200 }}
        icon={<UploadCloud size={20} />}
        onChange={(response) => {
          console.log("Should not trigger in readOnly mode:", response.getBase64());
        }}
      />
    );
  },
};
