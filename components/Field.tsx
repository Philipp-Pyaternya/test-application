interface IOption {
  value: string | number;
  label: string | number;
}

interface IField {
  label: string;
  type?: 'text' | 'longtext' | 'dropdown' | 'number';
  options?: IOption[] | undefined;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  placeholder?: string;
  required?: boolean;
  name: string;
  min?: number;
  max?: number;
}

const Field: React.FC<IField> = ({
  label,
  type = 'text',
  options,
  value,
  onChange,
  placeholder,
  required = false,
  name,
  min,
  max,
}) => {

  const defaultStyle = 'block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'

  console.log('label', label);
  console.log('value', value);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'dropdown' ? (
        <select
          name={name}
          value={String(value)}
          onChange={onChange}
          required={required}
          className={defaultStyle}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'longtext' ? (
        <textarea
          name={name}
          value={String(value)}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={defaultStyle}
        />
      ) : (
        <input
          type={type === 'number' ? 'number' : 'text'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={defaultStyle}
        />
      )}
    </div>
  );
};

export default Field;
