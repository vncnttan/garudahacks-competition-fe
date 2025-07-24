export interface LanguageResponse<T> {
  success: boolean,
  message: string,
  data: T,
}

export interface Language {
    id: string,
    languageCode: string,
    languageName: string
}