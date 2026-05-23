interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  error?: string;
  placeholder?: string;
}

export default function Select({ label, options, error, placeholder, id, className = "", ...props }: SelectProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
        {label}
        {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <select
        id={inputId}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none appearance-none bg-white
          focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400
          ${error ? "border-red-400" : "border-slate-200 hover:border-slate-300"}
          ${!props.value ? "text-slate-400" : "text-slate-800"}`}
        aria-invalid={!!error}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
