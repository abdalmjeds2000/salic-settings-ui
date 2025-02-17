import * as React from 'react';
import classNames from 'classnames';

type ImageInputProps = {
  icon?: React.ReactNode;
  placeholder?: string;
  image: string | null | undefined;
  imageClassName?: string; imageStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (image: string | null) => void;
};

export const ImageInput = ({
  icon, placeholder = "Upload Image",
  image, imageClassName, imageStyle,
  className, style,
  onChange
}: ImageInputProps) => {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (onChange) {
          onChange(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classNames('salic-settings-item image-input', className)} style={style}>
      <img 
        src={image as string} 
        className={classNames('image', imageClassName)}
        style={imageStyle}
      />
      
      {/* Input Wrapper */}
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
