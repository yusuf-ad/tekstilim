import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type LabelProps = {
  title: string;
} & ComponentPropsWithoutRef<"div">;

function Label({ title, className, ...props }: LabelProps) {
  return (
    <div className="absolute bottom-0 left-0 z-30 w-full md:px-4 md:pb-4 px-2 pb-3">
      <div
        {...props}
        className={clsx(
          "rounded-lg bg-white-500 md:p-4 p-2 text-sm md:text-base text-center font-bold text-dark-90",
          className
        )}
      >
        {title}
      </div>
    </div>
  );
}

export default Label;
