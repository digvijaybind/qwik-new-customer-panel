import styles from "./input.module.css";
export const TextInput = ({
  label,
  labelClass = "",
  register,
  className,
  value,
  inputClass = "",
  onChange,
}) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label
        className={`absolute top-[-10px] left-[8px] bg-white ${labelClass}`}
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${styles.TextInput} outline-0 h-[40px] text-[14px] pl-[8px] ${inputClass}`}
        type="text"
        value={value}
        onChange={onChange}
        {...register}
      />
    </div>
  );
};
export const DateInput = ({label, className, register, value, onChange}) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label className="absolute top-[-10px] left-[8px] bg-white" htmlFor="">
        {label}
      </label>
      <input
        className={`${styles.TextInput} outline-0 h-[40px] text-[14px] pl-[8px]`}
        type="date"
        value={value}
        onChange={onChange}
        {...register}
      />
    </div>
  );
};
export const TextPax = ({
  label,
  labelClass = "",
  register,
  className,
  value,
  inputClass = "",
  onChange,
}) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label
        className={`absolute top-[-10px] left-[8px] bg-white ${labelClass}`}
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${styles.TextInput} outline-0 h-[40px] text-[14px] pl-[8px] ${inputClass}`}
        type="Number"
        value={value}
        onChange={onChange}
        {...register}
      />
    </div>
  );
};
