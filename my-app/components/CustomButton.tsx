'use client';

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyle,
  handleClick,
  btnType = "button",
}) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`custom-btn ${containerStyle}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
