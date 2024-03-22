import axios from "axios";
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(
    `${apiBaseUrl}/diaries`
  );
  return data;
};

const create = async (object: NewDiaryEntry) => {
  try {
    const { data } = await axios.post<DiaryEntry>(
      `${apiBaseUrl}/diaries`,
      object
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        window.alert(error.response.data);
      }
    }
    console.log(error);
  }
};

export default {
  getAll,
  create,
};
