import { axiosClient } from "@/api/axiosClient.ts";
import type {
    AddWordVariables,
    AddWordResponse,
} from "@/types/api/Dictionary.ts";

const ENDPOINT = "/dictionary";

export const DictionaryService = {
    addWord: async (
        values: AddWordVariables,
    ): Promise<AddWordResponse> => {
        const formData = new FormData();

        formData.append("word", values.word);
        formData.append("definition", values.definition);
        formData.append("example", values.example);
        formData.append("exampleTranslation", values.exampleTranslation);
        formData.append("languageCode", values.languageCode);
        values.directTranslation.forEach((t) => {
            formData.append("directTranslation[]", t);
        });

        if (values.pronunciation) {
            formData.append("pronunciation", new File([values.pronunciation], "pronunciation.mp3", { type: "audio/mp3" }));
        }

        if (values.examplePronunciation) {
            formData.append("examplePronunciation", values.examplePronunciation, "examplePronunciation.mp3");
        }

        const response = await axiosClient.post<AddWordResponse>(
            ENDPOINT + "/word",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    },
};

