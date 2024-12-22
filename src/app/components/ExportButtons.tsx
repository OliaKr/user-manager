import React from "react";
import { User } from "../types";

interface ExportButtonsProps {
  users: User[];
}

const ExportButtons = ({ users }: ExportButtonsProps) => {
  const handleExportAsJSON = () => {
    const blob = new Blob([JSON.stringify(users, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportAsCSV = () => {
    const headers = ["Name", "Email", "Location", "ID"];
    const csvRows = [
      headers.join(","),
      ...users.map((user) =>
        [user.name, user.email, user.location, user.id]
          .map((value) => `"${value}"`)
          .join(",")
      ),
    ];

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleExportAsJSON}
        className="w-auto px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition sm:text-sm sm:px-4 sm:py-2"
      >
        Export as JSON
      </button>
      <button
        onClick={handleExportAsCSV}
        className="w-auto px-3 py-1 text-xs font-medium text-white bg-teal-500 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition sm:text-sm sm:px-4 sm:py-2"
      >
        Export as CSV
      </button>
    </div>
  );
};

export default ExportButtons;
