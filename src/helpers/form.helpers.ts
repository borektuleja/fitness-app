export enum FormStatus {
  INITIAL = 0,
  SUCCESS = 1,
  FAILURE = 2,
}

export interface FormState {
  status: FormStatus;
  message?: string;
}

export const makeFormState = (status: FormStatus, message?: string): FormState => ({ status, message });

export const makeFormModel = (payload: FormData, keys?: string[]) => Object.fromEntries(Array.from(payload.entries()).filter(([key]) => !keys || keys.includes(key)));
