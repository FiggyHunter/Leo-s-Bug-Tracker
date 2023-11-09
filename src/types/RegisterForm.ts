export type RegisterFormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type RegisterErrorData = {
  email: null | string;
  password: null | string;
  repeatPassword: null | string;
};

export type RegisterFormDataWithoutRepeat = {
  email: string;
  password: string;
};
