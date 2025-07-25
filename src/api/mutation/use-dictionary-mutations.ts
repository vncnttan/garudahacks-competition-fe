import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type {
  AddWordResponse,
  AddWordVariables,
  AIResponse,
  ApiErrorResponse,
  SearchWordResponse,
  SearchWordVariables,
} from "@/types/api/Dictionary.ts";
import { DictionaryService } from "@/api/service/dictionary-service.ts";

export const useAddWordMutation = (
  options?: Omit<
    UseMutationOptions<
      AddWordResponse,
      AxiosError<ApiErrorResponse>,
      AddWordVariables
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: DictionaryService.addWord,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error adding word",
      SUCCESS_MESSAGE: "Word successfully added!",
    },
  });
};

export const useSearchWordMutation = (
  options?: Omit<
    UseMutationOptions<
      SearchWordResponse,
      AxiosError<ApiErrorResponse>,
      SearchWordVariables
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: DictionaryService.searchWord,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error Searching word translation",
      SUCCESS_MESSAGE: "Searching successful!",
    },
  });
};

export const useAiDescriptionMutation = (
  options?: Omit<
    UseMutationOptions<
      AIResponse,
      AxiosError<ApiErrorResponse>,
      SearchWordVariables
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: DictionaryService.searchAi,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error Searching word translation",
      SUCCESS_MESSAGE: "Searching successful!",
    },
  });
};
