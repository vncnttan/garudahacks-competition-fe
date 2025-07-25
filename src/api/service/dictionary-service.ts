import { axiosClient } from "@/api/axiosClient.ts";
import type {
  AddWordVariables,
  AddWordResponse,
  SearchWordResponse,
  SearchWordVariables,
  AIResponse,
} from "@/types/api/Dictionary.ts";
import axios from "axios";

const ENDPOINT = "/dictionary";
const ENDPOINT_WORDS = "/words";

export const DictionaryService = {
  addWord: async (values: AddWordVariables): Promise<AddWordResponse> => {
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
      formData.append(
        "pronunciation",
        new File([values.pronunciation], "pronunciation.mp3", {
          type: "audio/mp3",
        }),
      );
    }

    if (values.examplePronunciation) {
      formData.append(
        "examplePronunciation",
        values.examplePronunciation,
        "examplePronunciation.mp3",
      );
    }

    const response = await axiosClient.post<AddWordResponse>(
      ENDPOINT + "/word",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  },
  searchWord: async (
    variables: SearchWordVariables,
  ): Promise<SearchWordResponse> => {
    const { prompt, languageDst, languageSrc } = variables;
    if (!prompt || !languageDst) {
      return;
    }
    const response = await axiosClient.get<SearchWordResponse>(
      `${ENDPOINT_WORDS}/translation`,
      {
        params: {
          prompt,
          languageDst,
          languageSrc,
        },
      },
    );
    console.log("Response: ", response);
    return response?.data;
  },
  searchAi: async (variables: SearchWordVariables): Promise<AIResponse> => {
    const response = await axios.post<AIResponse>(
      "https://makna.ai.vncnttan.my.id/ai-definition",
      {
        query: variables.prompt,
        lang_dst: variables.languageDst,
        lang_src: variables.languageSrc,
      },
    );

    return response.data;
  },
};
