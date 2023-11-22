import React, { useState, useEffect } from "react";
import Form from "../Components/Shared/Form";
import List from "../Components/Shared/List";

function Home() {
  const [editableData, setEditableData] = useState(null);
  const [savedData, setSavedData] = useState([]);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sectors) {
          setSectors(data.sectors);
        }
      })
      .catch((error) => {
        console.error("Error fetching sectors:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Form
        sectors={sectors}
        savedData={savedData}
        setSavedData={setSavedData}
        editableData={editableData}
        setEditableData={setEditableData}
      />
      <div className="mt-5 md:w-1/2 w-full mx-auto">
        <h2>Saved Data</h2>
        {savedData.map((data, index) => (
          <List
            key={index}
            userData={data}
            onEdit={(userData) => setEditableData(userData)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
