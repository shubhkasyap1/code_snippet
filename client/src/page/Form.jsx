import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    stdin: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('/api/code-snippets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Code snippet submitted successfully!');
        setFormData({
          username: '',
          language: '',
          stdin: '',
          code: '',
        });
      } else {
        alert('Failed to submit code snippet');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
    <div className="bg-primary w-full min-h-screen flex justify-center items-center shadow-xl">
      <div className="p-10 w-full max-w-screen-lg bg-white flex flex-col items-center rounded-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Code Snippet</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-4">
          <div className="mt-4">
            <label htmlFor="username" className="font-bold block mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full h-10 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mt-4">
            <label className="font-bold block mb-1">Preferred Code Language:</label>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="language-cpp"
                  name="language"
                  value="C++"
                  checked={formData.language === "C++"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="language-cpp">C++</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="language-java"
                  name="language"
                  value="Java"
                  checked={formData.language === "Java"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="language-java">Java</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="language-js"
                  name="language"
                  value="JavaScript"
                  checked={formData.language === "JavaScript"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="language-js">JavaScript</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="language-python"
                  name="language"
                  value="Python"
                  checked={formData.language === "Python"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="language-python">Python</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="language-go"
                  name="language"
                  value="Go"
                  checked={formData.language === "Go"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="language-go">Go</label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="stdin" className="font-bold block mb-1">
              Standard Input (stdin):
            </label>
            <input
              type="text"
              id="stdin"
              name="stdin"
              value={formData.stdin}
              onChange={handleChange}
              className="w-full h-10 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="code" className="font-bold block mb-1">Source Code:</label>
            <textarea
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full h-32 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Form;
