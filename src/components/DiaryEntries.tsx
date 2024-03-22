import { NonSensitiveDiaryEntry } from "../types";

const SingleEntry = (props: NonSensitiveDiaryEntry) => {
  return (
    <div style={{ padding: 10 }}>
      <p style={{ fontWeight: "bold" }}>{props.date}</p>
      <p>Visibility: {props.visibility}</p>
      <p>Weather: {props.weather}</p>
    </div>
  );
};

interface EntriesProps {
  entries: NonSensitiveDiaryEntry[];
}

export const DiaryEntries = (props: EntriesProps) => {
  return (
    <div>
      {props.entries.map((e) => (
        <SingleEntry key={e.id} {...e} />
      ))}
    </div>
  );
};
