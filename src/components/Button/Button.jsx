const Button = ({ children, classList = "" }) => (
  <button className={classList}>{children}</button>
);

export default Button;
