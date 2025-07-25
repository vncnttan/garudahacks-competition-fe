import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type {
    AddWordResponse,
    AddWordVariables,
    ApiErrorResponse,
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
