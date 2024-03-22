import { useEffect, useState } from "react";
import "./App.css";
import diaryService from "./services/diaryService";
import { NonSensitiveDiaryEntry } from "./types";
import { DiaryEntries } from "./components/DiaryEntries";
import { AddEntry } from "./components/AddEntry";

function App() {
  const [diaryEntries, setDiaryEntries] = useState<NonSensitiveDiaryEntry[]>(
    []
  );
  console.log(diaryEntries);

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      const entries = await diaryService.getAll();
      setDiaryEntries(entries);
    };
    fetchDiaryEntries();
  }, []);

  return (
    <>
      <h1>Flight Diary</h1>
      <DiaryEntries entries={diaryEntries} />
      <AddEntry />
    </>
  );
}

export default App;
