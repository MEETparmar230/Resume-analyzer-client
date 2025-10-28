import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ResultCard from "./components/ResultCard";
import { supabase } from "./lib/supabaseClient";
import type { ResumeResult } from "./types/resume";
import Select from "react-select";
import type { SingleValue } from "react-select";


function App() {
  const [file, setFile] = useState<File | null>(null);
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<ResumeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [jobRoles, setJobRoles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);


  // 🧠 Fetch job titles from Supabase
  useEffect(() => {
    const fetchJobRoles = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("title");

      if (error) {
        console.error("Error fetching job roles:", error);
      } else if (data) {
        const titles = data.map((item) => item.title);
        setJobRoles(titles);
      }
    };

    fetchJobRoles();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null); // reset any previous error

if (!file) {
  setError("⚠️ Please upload a resume file.");
  return;
}

if (!jobRole && !jobDescription) {
  setError("⚠️ Please select a job role or enter a job description.");
  return; // ⬅️ add this line
}


  const formData = new FormData();
  formData.append("file", file);
  formData.append("job_role", jobRole);
  formData.append("job_description", jobDescription);

  setLoading(true);
  try {
    const res = await fetch("http://localhost:8081/api/analyze", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Failed to analyze resume");

    const data: ResumeResult = await res.json();
    setResult(data);
  } catch (err) {
    console.error(err);
    setError("❌ Error analyzing resume. Please try again.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (error) {
    const timer = setTimeout(() => setError(null), 4000);
    return () => clearTimeout(timer);
  }
}, [error]);

  return (
    <div className="min-h-screen bg-fuchsia-800 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10 px-4 py-2">
        <form
          onSubmit={handleSubmit}
          className="bg-fuchsia-700 p-6 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Resume</h2>

          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="block w-full mb-3 bg-fuchsia-600 p-2 rounded"
          />

          {/* 🧩 Job Role Dropdown */}
          <Select
  options={jobRoles.map((role) => ({ value: role, label: role }))}
  onChange={(selected: SingleValue<{ value: string; label: string }>) =>
    setJobRole(selected?.value || "")
  }
  placeholder="Select or type job role"
  className="w-full mb-3"
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#a21caf", // fuchsia-700
      borderColor: "#a21caf",
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#701a75",
      color: "white",
    }),
    singleValue: (base) => ({ ...base, color: "white" }),
    input: (base) => ({ ...base, color: "white" }),
    placeholder: (base) => ({
      ...base,
      color: "#f5d0fe", // 💜 light lavender
      opacity: 1,
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#c026d3" : "#701a75",
      color: "white",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white", // ⬇️ dropdown arrow color
      ":hover": { color: "#f5d0fe" },
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "white", // ❌ clear icon color
      ":hover": { color: "#f5d0fe" },
    }),
  }}
  theme={(theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#c026d3", // hover option
      primary: "#a21caf",   // selected option
    },
  })}
  isClearable
  isSearchable
/>




          <textarea
            placeholder="Job Description (comma separated skills)"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="block w-full mb-4 bg-fuchsia-600 p-2 rounded"
          />

          <button
  type="submit"
  disabled={loading}
  className="w-full bg-white text-fuchsia-800 font-semibold p-2 rounded hover:bg-fuchsia-200"
>
  {loading ? "Analyzing..." : "Analyze Resume"}
</button>

{/* ⚠️ Inline Error Message */}
{error && (
  <p className="text-red-300 mt-3 text-center font-medium animate-pulse">
    {error}
  </p>
)}

        </form>

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;
