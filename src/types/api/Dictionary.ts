export type DictionaryEntry = {
    word: string;
    definition: string;
    example: string;
    exampleTranslation: string;
    directTranslation: string[];
    languageCode: string;
    pronunciation: Blob;
    examplePronunciation: Blob;
};

export type AddWordVariables = DictionaryEntry;

export type AddWordResponse = {
    success: boolean;
    message?: string;
    data?: DictionaryEntry;
};

export type ApiErrorResponse = {
    error: string;
    statusCode: number;
    message?: string;
};
