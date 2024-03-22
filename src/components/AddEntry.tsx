import { useState } from "react";
import diaryService from "../services/diaryService";

export const AddEntry = () => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  const style = {
    padding: 10
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry = {
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment,
    };
    await diaryService.create(newEntry);
    window.location.reload();
    setDate("");
    setVisibility("");
    setWeather("");
    setComment("");
  };

  return (
    <div>
      <h2>Add entry</h2>
      <form onSubmit={handleSubmit}>
        <div style={style}>
          Date{" "}
          <input
            type="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div style={style}>
          {" "}
          Visibility <label>Great</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setVisibility("great")}
          />
          <label>Good</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setVisibility("good")}
          />
          <label>Ok</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setVisibility("ok")}
          />
          <label>Poor</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setVisibility("poor")}
          />
        </div>
        <div style={style}>
          Weather <label>Sunny</label>
          <input
            type="radio"
            name="weather"
            onChange={() => setWeather("sunny")}
          />
          <label>Windy</label>
          <input
            type="radio"
            name="weather"
            onChange={() => setWeather("windy")}
          />
          <label>Cloudy</label>
          <input
            type="radio"
            name="weather"
            onChange={() => setWeather("cloudy")}
          />
          <label>Rainy</label>
          <input
            type="radio"
            name="weather"
            onChange={() => setWeather("rainy")}
          />
        </div>
        <div style={style}>
          {" "}
          Comment{" "}
          <input
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
