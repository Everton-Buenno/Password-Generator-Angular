export interface PasswordRequest {
  Length: number;
  IncludeUppercase: boolean;
  IncludeLowercase: boolean;
  IncludeNumbers: boolean;
  IncludeSpecialChars: boolean;
}