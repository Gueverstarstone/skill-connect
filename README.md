#  🧠🔗 skill-connect
SkillConnect is a modern web platform that connects skilled workers with clients who need reliable services such as plumbing, electrical repairs, carpentry, tech fixes, and more.
The platform is built using React JS and CSS module  with json-server powering a lightweight backend for rapid development.
# 🌟 Features

## 👥 For Clients
- Browse and search skilled workers by category or location
- View detailed worker profiles (skills, experience, ratings)
- Send job requests directly to workers
- Track the status of your job requests

## 🛠 For Workers
- View incoming job requests in a dashboard
- Update job progress (Pending → In Progress → Completed)
  
## 🖥 For Admins
- Manage workers (add, edit, delete)
- Moderate customer reviews
- View platform statistics and activities

# 🧰 Tech Stack

| 🏷️ Category          | 🛠️ Technology / Tool                        |
|----------------------|--------------------------------------------|
| ⚛️ Frontend          | React JS (Vite)                            |
| 🎨 Styling           | CSS Modules                                 |
| 📊 State Management  | TanStack Query (React Query)               |
| 🛣️ Routing           | React Router v6                             |
| 🗄️ Backend           | json-server (`db.json`)                     |
| 📝 Forms             | React Hook Form          |
# 🚀 Getting Started

Follow these steps to run the SkillConnect app locally.

## 1️⃣ Clone the Repository

```bash
git clone `git@github.com:Gueverstarstone/skill-connect.git`
cd skillconnect
```
## 2️⃣ Install Dependencies
```
npm install
```
## 3️⃣ Run the Frontend
```
npm run dev
```
The app will run at:
```
http://localhost:5173
```
4️⃣ Run the JSON Server (Backend)
```
npx json-server db.json --port 3001
```
API runs on:
```
http://localhost:3001
```
# 🛣 Routes

## 🔓 Public Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/client/browse` | Browse workers |
| `/client/worker/:id` | Worker profile |
| `/client/request/:workerId` | Submit job request |
| `/client/jobs` | View my jobs |

## 👷 Worker Routes

| Route | Description |
|-------|-------------|
| `/worker/dashboard` | Worker dashboard |
| `/worker/job/:jobId` | Update job progress |

## 🛡 Admin Routes

| Route | Description |
|-------|-------------|
| `/admin` | Admin dashboard |
| `/admin/reviews` | Review management |
# 🔌 API Endpoints (json-server)

This API is powered by **JSON Server**. Use the following endpoints to interact with the backend.

---

## 👤 Workers

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/workers` | Get a list of all workers |
| `GET` | `/workers/:id` | Get a single worker by ID |
| `POST` | `/workers` | Add a new worker |
| `PATCH` | `/workers/:id` | Update an existing worker |
| `DELETE` | `/workers/:id` | Delete a worker |

---

## 📝 Job Requests

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/requests` | Get a list of all job requests |
| `GET` | `/requests/:id` | Get a single job request by ID |
| `POST` | `/requests` | Create a new job request |
| `PATCH` | `/requests/:id` | Update a job request (e.g., change status) |
| `DELETE` | `/requests/:id` | Delete a job request |

---

## 🗄 Archived Job Requests

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/archivedRequests` | Get a list of all archived/completed job requests |
| `GET` | `/archivedRequests/:id` | Get a single archived request by ID |
| `POST` | `/archivedRequests` | Add a new archived request |
| `PATCH` | `/archivedRequests/:id` | Update an archived request |
| `DELETE` | `/archivedRequests/:id` | Delete an archived request |
# 🛠 Development Workflow

Follow these guidelines when adding new features or maintaining the project.

---

## Adding a New Feature

1. **Create a component**  
   Add a new component in `src/components/`

2. **Add a page**  
   Add a new page in `src/pages/`

3. **Register the route**  
   Update `src/App.jsx` to include the new route

4. **Add API logic**  
   Add API calls or functions in `src/api/api.js`

5. **Update database**  
   Modify `db.json` structure if new data is required

---

## Code Quality Tools

- **Prettier** – automatic code formatting  
- **ESLint** – code linting and error detection  
- Maintain a **clean component architecture** for readability and scalability
# 🚀 Deploying to Netlify

## Connect Netlify
1. Go to [Netlify](https://www.netlify.com/)  
2. Click **New Site from Git**  
3. Select your GitHub repository

## Set Build Options
- **Build command:**  
```bash
npm run build
```
## Deploy

Click Deploy Site

### Live Demo

[https://your-skillconnect-site.netlify.app](https://workcon.netlify.app/)

# 🔮 Future Plans

Planned features and improvements for upcoming versions:

- 🔑 **User authentication** – Implement JWT or Firebase authentication  
- 🔔 **Real-time notifications** – Use Pusher or Firebase for instant updates  
- 📅 **Worker availability calendar** – Show and manage worker schedules  
- 🔍 **Advanced job filters** – Enable filtering by skills, location, ratings, etc.  
- 💳 **Payment processing integration** – Support secure online payments  
- 📱 **Mobile version** – Build a mobile app using React Native
  
# 📞 Support
If you need help improving the project, debugging, or adding advanced features, feel free to reach out anytime — I'm here to assist you. ✨
