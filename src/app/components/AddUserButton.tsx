"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "@mdi/font/css/materialdesignicons.min.css";

const AddUserButton = () => {
  const [islOpen, setIslOpen] = useState(false);
  return (
    <div>
      <Button
        variant="info"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        onClick={() => setIslOpen(true)}
      >
        <i className="mdi mdi-account-plus"></i>
      </Button>
    </div>
  );
};

export default AddUserButton;
