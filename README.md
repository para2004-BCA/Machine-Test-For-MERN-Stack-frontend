# Agent Distribution App – Frontend
This is the frontend for the MERN Stack-based Agent Distribution application.

# Features
 Built with React.js

 Admin Login using JWT

 Create and manage agents

 Upload CSV/XLSX files

 Auto-distribute data among 5 agents

 Display distributed lists per agent

 Tech Stack
React.js

Axios (for API calls)

Bootstrap / Tailwind (optional for UI)

React Router

Formik + Yup (for validation)

 Project Structure
pgsql
Copy code
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── AgentForm.jsx
│   │   ├── FileUpload.jsx
│   │   └── AgentDataTable.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── .env
└── package.json
⚙️ Setup Instructions
Clone the repository

bash
Copy code
git clone https://github.com/your-username/agent-distribution-frontend.git
cd agent-distribution-frontend
Install dependencies

bash
Copy code
npm install
Create .env file
Create a .env file in the root folder and add:

ini
Copy code
REACT_APP_API_URL=http://localhost:8080
Run the app

bash
Copy code
npm start
Open your browser and go to http://localhost:3000

 API Endpoints Used
POST /login – Authenticate user

POST /agents/create – Add new agent

GET /agents – Get all agents

POST /upload – Upload CSV and distribute

GET /distribution/:agentId – Get distributed data per agent
 Notes
Make sure backend is running on port 8080 or update .env.

Must login first to access dashboard and upload pages.

Supports .csv, .xlsx, and .xls formats.

 Support
For questions or help, contact:
Email: paramesha0002@gmail.com
Mobile: +91-8310201677
