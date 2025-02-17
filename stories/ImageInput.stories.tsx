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
    onChange: { action: "imageSelected" }, // Logs changes in Storybook Actions
  },
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  render: () => {
    const [image, setImage] = useState<string | null | undefined>(undefined);
    
    return (
      <ImageInput 
        placeholder="Upload Image"
        image={image}
        icon={<UploadCloud size={18} />}
        onChange={(img) => setImage(img)}
      />
    );
  },
};

export const WithImage: Story = {
  render: () => {
    const [image, setImage] = useState<any>("https://salicapi.com/File/logo.png");

    return (
      <ImageInput
        placeholder="Change Logo"
        image={image} imageStyle={{ width: 200 }}
        icon={<UploadCloud size={20} />}
        onChange={(img) => setImage(img)}
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
        onChange={(img) => setImage(img)}
      />
    );
  },
};
