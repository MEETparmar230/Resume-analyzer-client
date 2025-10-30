# 🎨 Resume Analyser - Frontend (React)

Resume Analyser is an intelligent web application that automates resume evaluation using modern full-stack architecture and NLP.
Users can upload resumes through a sleek React + TypeScript interface, where the file is processed via a Spring Boot backend.
The backend communicates with a Python FastAPI microservice that performs natural language processing on the text to extract:

- Key skills and technologies

- Experience summary

- Profile strengths and improvement suggestions

The results are then sent back to the frontend for display in a clean, responsive UI.
The system is designed with modular microservices for scalability and cloud deployment.

---

## 🌐 Deployment
- **Vercel:** [Frontend (react)](https://resume-analyzer-blush-nine.vercel.app/)
- **Render:** [Backend (Java)](https://resume-analyser-server-0h7e.onrender.com/api/) 
- **Docker (Image)** [Backend (Java)](https://hub.docker.com/repository/docker/mithparmar/resume-analyser-server/)
- **huggingface:** [AI Microservice (Python FastAPI)](https://mith010-resume-analyzer-fastapi.hf.space/)

---

## 🌐 Github
- **Frontend:** [Resume-analyzer-client](https://github.com/MEETparmar230/Resume-analyzer-client)
- **Backend (Java):** [Resume-analyzer-Server](https://github.com/MEETparmar230/Resume-analyzer-Server)
- **AI Microservice (Python FastAPI):** [resume-analyzer-microservice](https://github.com/MEETparmar230/resume-analyzer-microservice)

---

## 🚀 Tech Stack
- React 18 (Vite)
- TypeScript
- TailwindCSS (UI)
- Fetch API for backend communication

---

## ⚙️ Setup & Run Locally

```bash
# 1️⃣ Clone the repository
git clone https://https://github.com/MEETparmar230/Resume-analyzer-client
cd client

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create .env file
echo "VITE_API_BASE_URL=http://localhost:8081"

# 4️⃣ Run the app
npm run dev
