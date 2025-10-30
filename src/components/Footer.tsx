import { PiArrowsLeftRightFill } from "react-icons/pi";
import { LuArrowUpDown } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-fuchsia-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between md:gap-6">
        
        {/* React Frontend */}
        <div className="bg-fuchsia-800 rounded-2xl p-5 shadow-md hover:shadow-fuchsia-700/50 w-full h-56 md:w-1/3 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-3 border-b border-fuchsia-500 pb-1">
            ⚛️ React Frontend
          </h2>
          <ul className="space-y-1 text-sm text-fuchsia-100">
            <li>🚀 Hosted on <strong>Vercel</strong></li>
            <li>📤 Sends form data to Java backend:</li>
            <li className="break-all text-fuchsia-200">
              <a
                href="https://resume-analyser-server-0h7e.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-fuchsia-300 transition-colors"
              >
                https://resume-analyser-server-0h7e.onrender.com
              </a>
            </li>
          </ul>
        </div>

        {/* Connector Icon (Horizontal on desktop / Vertical on mobile) */}
        <PiArrowsLeftRightFill className="hidden md:block text-3xl text-fuchsia-300 animate-pulse" />
        <LuArrowUpDown className="block md:hidden text-3xl text-fuchsia-300 animate-pulse" />

        {/* Java Spring Boot Backend */}
        <div className="bg-fuchsia-800 rounded-2xl p-5 shadow-md hover:shadow-fuchsia-700/50 w-full h-56 md:w-1/3 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-3 border-b border-fuchsia-500 pb-1">
            ☕ Java Spring Boot Backend
          </h2>
          <ul className="space-y-1 text-sm text-fuchsia-100">
            <li>🖥️ Hosted on <strong>Render</strong></li>
            <li>📦 Sends JSON data to Python microservice:</li>
            <li className="break-all text-fuchsia-200">
              <a
                href="https://mith010-resume-analyzer-fastapi.hf.space/analyze"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-fuchsia-300 transition-colors"
              >
                https://mith010-resume-analyzer-fastapi.hf.space/analyze
              </a>
            </li>
          </ul>
        </div>

        {/* Connector Icon (Horizontal on desktop / Vertical on mobile) */}
        <PiArrowsLeftRightFill className="hidden md:block text-3xl text-fuchsia-300 animate-pulse" />
        <LuArrowUpDown className="block md:hidden text-3xl text-fuchsia-300 animate-pulse" />

        {/* Python FastAPI Microservice */}
        <div className="bg-fuchsia-800 rounded-2xl p-5 shadow-md hover:shadow-fuchsia-700/50 w-full md:w-1/3 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-3 border-b border-fuchsia-500 pb-1">
            🧠 Python FastAPI NLP Microservice
          </h2>
          <ul className="space-y-1 text-sm text-fuchsia-100">
            <li>☁️ Hosted on <strong>Hugging Face</strong></li>
            <li>📄 Handles PDF parsing, skill extraction, and result generation</li>
            <li>📨 Sends analysis results back to:</li>
            <li className="break-all text-fuchsia-200">
              <a
                href="https://resume-analyser-server-0h7e.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-fuchsia-300 transition-colors"
              >
                https://resume-analyser-server-0h7e.onrender.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom note */}
      <div className="text-center text-sm text-fuchsia-200 mt-10 border-t border-fuchsia-700 pt-3">
        © {new Date().getFullYear()} <span className="font-semibold">Resume Analyzer</span> — Built by{" "}
        <a
          href="https://my-portfolio-site-theta-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-fuchsia-300 transition-colors"
        >
          Meet Parmar
        </a>
      </div>
    </footer>
  );
}
