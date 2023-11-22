import React from "react";

const List = ({ userData, onEdit }) => {
  return (
    <div className="mb-4">
      <p>Name: {userData.name}</p>
      <p>Sectors: {userData?.sectors && userData?.sectors?.join(", ")}</p>
      <p>Agree to terms: {userData.agree ? "Yes" : "No"}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        onClick={() => onEdit(userData)}
      >
        Edit
      </button>
      <hr className="my-2" />
    </div>
  );
};

export default List;
