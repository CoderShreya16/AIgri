"use client";

import { toast } from "react-hot-toast";

/**
 * Displays a success toast notification.
 */

export default function ToastButton() {
  return (
    <button
      onClick={() => toast.success("Action Successful!")}
      className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
    >
      Show Toast
    </button>
  );
}