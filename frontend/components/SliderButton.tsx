import clsx from "clsx";
import { ReactNode } from "react";

function SliderButton({
  icon,
  active,
  onClick,
  disabled,
}: {
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 group ",
        {
          "bg-primary-800 text-white-5": active && !disabled,
          "bg-primary-10 text-primary-90": !active && !disabled,
          "bg-gray-300 text-gray-500 cursor-not-allowed ": disabled,
        }
      )}
    >
      <span className="group-hover:scale-125 transition-transform duration-300 group-disabled:scale-100">
        {icon}
      </span>
    </button>
  );
}

export default SliderButton;
