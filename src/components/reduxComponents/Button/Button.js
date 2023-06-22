// import clsx from "clsx";
// import css from "./Button.module.css";
import { Btn } from "./Button.styled";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <Btn
    //   className={clsx(css.btn, {
    //     [css.isSelected]: selected
    //   })}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};