import * as React from 'react';
import classNames from 'classnames';
import { useSettingsConfig } from '../ConfigProvider';

type ImageInputResponse = {
  getBase64: () => string | null;
  getFile: () => File | null;
};

type ImageInputProps = {
  icon?: React.ReactNode;
  placeholder?: string;
  image?: string | null;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (response: ImageInputResponse) => void;
};

export const ImageInput = ({
  icon,
  placeholder = "Upload Image",
  image: initialImage = null,
  imageClassName,
  imageStyle,
  className,
  style,
  onChange
}: ImageInputProps) => {
  const { theme } = useSettingsConfig();
  const [image, setImage] = React.useState<string | null>(initialImage);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setImage(base64);

      if (onChange) {
        onChange({
          getBase64: () => base64,
          getFile: () => file
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={classNames('salic-settings-item image-input', className, { 'dark': theme === 'dark' })}
      style={style}
    >
      {image && (
        <img 
          src={image}
          className={classNames('image', imageClassName)}
          style={imageStyle}
        />
      )}

      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={classNames("drop-zone", { dragging: isDragging })}
        style={{ cursor: "pointer", display: "block" }}
      >
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: "none" }}
        />
        <div className={classNames('placeholder-btn', { "with-image": !!image, "without-image": !image })}>
          {!!icon && <span>{icon}</span>}
          <p>{isDragging ? "Drop the image here..." : placeholder}</p>
        </div>
      </label>
    </div>
  );
};
