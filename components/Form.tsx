import { useState } from 'react';
import { IField } from '../type';
import { validateField } from '../utils';
import Button from 'components/Button';
import Field from 'components/Field';

const Form = ({ data, handler }: { data: IField[]; handler: Function }) => {
  const initialFormValues = data.reduce<Record<string, string>>(
    (acc, field) => {
      acc[field.label] = field.default_value || '';
      return acc;
    },
    {},
  );

  const [formDataValues, setFormDataValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormDataValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const field = data.find((f) => f.label === name);
    const error = field ? validateField(field, value) : undefined;

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...(error ? { [name]: error } : { [name]: '' }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    data.forEach((field) => {
      const error = validateField(field, formDataValues[field.label]);
      if (error) {
        newErrors[field.label] = error;
      }
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));

    if (Object.keys(newErrors).length) {
      return;
    }

    handler(formDataValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((field) => {
        const { id, label, type, options } = field;

        return (
          <div key={id}>
            <Field
              label={label}
              type={type}
              options={
                type === 'dropdown'
                  ? options?.map((option) => ({
                      value: option,
                      label: option,
                    }))
                  : undefined
              }
              value={formDataValues[label]}
              onChange={handleChange}
              placeholder={type === 'text' ? `Введите ${label}` : undefined}
              name={label}
              required
            />
            {errors[label] && (
              <span className="text-red-500 text-sm">{errors[label]}</span>
            )}
          </div>
        );
      })}

      <Button type="submit">Send</Button>
    </form>
  );
};

export default Form;
