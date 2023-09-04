const Button = ({
  label,
  iconUrl,
  bgColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full bg-white w-5 h-5"
          src={iconUrl}
          alt="rightArrow"
        />
      )}
    </button>
  );
};

export default Button;
