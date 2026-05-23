interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, id, className = "", ...props }: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
        {label}
        {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={inputId}
        rows={4}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none resize-vertical
          focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400
          placeholder:text-slate-400
          ${error ? "border-red-400 bg-red-50/40" : "border-slate-200 bg-white hover:border-slate-300"}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
