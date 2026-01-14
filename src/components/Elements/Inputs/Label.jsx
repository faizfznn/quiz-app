const Label = (props) => {
    const {htmlFor, children} = props;
  return (
    <label
      htmlFor= {htmlFor}
      className="text-[#151515] text-[16px] font-semibold"
    >
      {children}
    </label>
  );
};

export default Label;
