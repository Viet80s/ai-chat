"use client";
import React, { useState } from "react";

const Page = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      const res = await fetch("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "value" }),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data.content));
    } catch (error) {
      if (error instanceof Error) {
        setResponse("Error: " + error.message);
      } else {
        setResponse("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send POST Request</button>
      {response && <div>Response: {response}</div>}
    </div>
  );
};

export default Page;
