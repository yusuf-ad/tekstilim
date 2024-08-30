import clsx from "clsx";
import { ReactNode } from "react";

function SliderButton({ icon, active }: { icon: ReactNode; active?: boolean }) {
  return (
    <button
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 group transition-all duration-200",
        {
          "bg-primary-800 text-white-5": active,
          "bg-primary-10 text-primary-90": !active,
        }
      )}
    >
      <span className="group-hover:scale-105">{icon}</span>
    </button>
  );
}

export default SliderButton;
