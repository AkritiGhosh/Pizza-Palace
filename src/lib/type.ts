export type UserContextType = {
  user: string,
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};