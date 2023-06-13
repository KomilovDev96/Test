import "./style.scss";
export const Button = ({ children, x = "16px", y = "32px", ...props }) => {
  return (
    <div
      className="button"
      {...props}
      style={{
        paddingTop: x,
        paddingBottom: x,
        paddingLeft: y,
        paddingRight: y,
      }}
    >
      {children}
    </div>
  );
};
