import React, { useState } from "react";
import UserForm from "./form";

const Card = ({ name, username, id, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (data) => {
    onEdit(id, data);
    setIsEditing(false);
  };

  return (
    <div className="w-[400px] p-[10px] rounded-[20px] border-[2px] border-y-green-200">
      {isEditing ? (
        <UserForm onSubmit={handleEdit} defaultValues={{ name, username }} />
      ) : (
        <>
          <h1 className="text-[28px] text-gray-400">{name}</h1>
          <p className="text-gray-400 text-[20px]">{username}</p>
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 p-[10px] rounded-[10%] text-white w-[150px] mt-[10px] block"
          >
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 p-[10px] rounded-[10%] text-white w-[150px] mt-[10px] block"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
