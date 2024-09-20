import { IField } from '../type';

export const validateField = (field: IField, value: string) => {
  if (field.validation) {
    const regex = new RegExp(field.validation);
    return regex.test(value) ? null : `${field.label} incorrect format!`;
  }
  return null;
};
