export type TextChangeHandler = (value: string) => void;

export type InputType = 'dark' | 'light'; 

export interface InputStyled {
  colorType: InputType;
}

export interface InputSearchContentProps {
  colorType: InputType;
  width: string;
  // handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handleTextChange: TextChangeHandler;
  getClients?: () => void;
}