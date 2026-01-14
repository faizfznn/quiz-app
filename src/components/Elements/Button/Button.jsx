const Button = (props) => {
  const { 
    children, 
    className = "", 
    onClick = () => {}, 
    type = "button", 
    disabled = false,
    variant = "primary"
  } = props;

  const baseStyles = "inline-flex items-center justify-center gap-2 h-[48px] px-4 py-2 rounded-lg font-['Inter'] text-[16px] font-semibold leading-[24px] transition-colors duration-200 box-border";
  
  const variants = {
    primary: `
      bg-[#1C6EA4] text-[#F5F5F5] 
      hover:bg-[#196495] 
      active:bg-[#144E74] 
      disabled:bg-[#D7D7D7] disabled:text-[#717171] disabled:cursor-not-allowed
    `
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;