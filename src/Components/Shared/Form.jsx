import React, { useState, useEffect } from "react";

const Form = ({
  sectors,
  savedData,
  setSavedData,
  editableData,
  setEditableData,
}) => {
  const [name, setName] = useState("");
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (editableData) {
      setName(editableData.name);
      setSelectedSectors(editableData.sectors);
      setAgree(editableData.agree);
    } else {
      setName("");
      setSelectedSectors([]);
      setAgree(false);
    }
  }, [editableData]);

  const handleSubmit = () => {
    if (!name || selectedSectors.length === 0 || !agree) {
      alert("Please fill in all fields.");
      return;
    }

    const userData = { name, sectors: selectedSectors, agree };

    if (editableData) {
      setSavedData((prevData) =>
        prevData.map((data) =>
          data.name === editableData.name ? userData : data
        )
      );
      setEditableData(null);
    } else {
      setSavedData((prevData) => [...prevData, userData]);

      setName("");
      setSelectedSectors([]);
      setAgree(false);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="sectors"
        >
          Sectors:
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          multiple
          size="5"
          value={selectedSectors}
          onChange={(e) =>
            setSelectedSectors(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {sectors.map((sector) => (
            <option key={sector.value} value={sector.label}>
              {sector.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        <label className="text-sm" htmlFor="agree">
          Agree to terms
        </label>
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
};

export default Form;
