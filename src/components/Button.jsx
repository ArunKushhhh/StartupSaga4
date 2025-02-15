import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, bg }) => {
  return (
    <button
      id={id}
      className={clsx(
        `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ${bg} px-7 py-3 text-black`,
        containerClass
      )}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {leftIcon}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {leftIcon}
        </div>
      </span>

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 font-bold">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 font-bold">
          {title}
        </div>
      </span>

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {rightIcon}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {rightIcon}
        </div>
      </span>
    </button>
  );
};

export default Button;
