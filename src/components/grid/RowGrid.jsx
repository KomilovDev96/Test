import "./style.scss";

export const RowGrid = ({
  children,
  align,
  justify,
  className,
  direction = "row",
}) => {
  return (
    <div
      className={className ? className : 'row'}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};
