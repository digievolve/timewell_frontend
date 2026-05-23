interface Option { label: string; value: string; }
interface RadioGroupProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name: string;
}

export default function RadioGroup({ label, options, value, onChange, error, name }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-700 mb-2">
        {label} <span className="text-red-500" aria-hidden="true">*</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all duration-200 select-none ${
              value === opt.value
                ? "border-primary-500 bg-primary-50 text-primary-700"
                : "border-slate-200 text-slate-600 hover:border-primary-300 hover:bg-primary-50/40"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                value === opt.value ? "border-primary-500" : "border-slate-300"
              }`}
            >
              {value === opt.value && (
                <span className="w-2 h-2 rounded-full bg-primary-500 block" />
              )}
            </span>
            {opt.label}
          </label>
        ))}
      </div>
      {error && <p role="alert" className="mt-1.5 text-xs text-red-600">{error}</p>}
    </fieldset>
  );
}
