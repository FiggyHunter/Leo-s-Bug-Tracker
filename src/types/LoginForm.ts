export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginErrorData = {
  email: null | string;
  password: null | string;
};
