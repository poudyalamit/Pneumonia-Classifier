import React, { useState } from "react";

const ImageChecker = () => {
  const [user, setUser] = useState(null);
  const [result, setResult] = useState(null);

  async function checkYourStatus(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://api-inference.huggingface.co/models/nickmuchi/vit-finetuned-chest-xray-pneumonia",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const resultData = await response.json();
        // Assuming the API response contains a field like 'pneumoniaDetected' that indicates the result
        setResult(resultData.label);
      } else {
        // Handle API error
        setResult("Error occurred while checking status");
      }
    } catch (error) {
      // Handle errors
      setResult("Error occurred while processing the image");
    }
  }

  const handleFileChange = (e) => {
    setUser(e.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (user) {
      await checkYourStatus(user);
    }
  };

  return (
    <>
      <strong>Check your Status</strong>

      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Check Your Status
      </button>

      {result !== null && (
        <div>
          {result === "PNEUMONIA" ? (
            <p>Pneumonia Detected</p>
          ) : (
            <p>No Pneumonia Detected</p>
          )}
        </div>
      )}
    </>
  );
};

export default ImageChecker;
