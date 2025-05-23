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
  image: string | null | undefined;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (response: ImageInputResponse) => void;
};

export const ImageInput = ({
  icon,
  placeholder = "Upload Image",
  image,
  imageClassName,
  imageStyle,
  className,
  style,
  onChange
}: ImageInputProps) => {
  const { theme } = useSettingsConfig();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;

        if (onChange) {
          const response: ImageInputResponse = {
            getBase64: () => base64,
            getFile: () => file
          };
          onChange(response);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classNames('salic-settings-item image-input', className, { 'dark': theme === 'dark' })} style={style}>
      <img 
        src={image as string} 
        className={classNames('image', imageClassName)}
        style={imageStyle}
      />
      
      <label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: "none" }}
        />
        <div className={classNames('placeholder-btn', { "with-image": !!image }, { "without-image": !image })}>
          {!!icon && <span>{icon}</span>}
          <p>{placeholder}</p>
        </div>
      </label>
    </div>
  );
};
