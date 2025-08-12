# IPL T20 Live Dashboard

A responsive dashboard application that displays IPL T20 match information,
including upcoming/live matches, points table, and full schedule.
This project primarily uses **dummy data** due to the complexities and unreliability of
scraping dynamic websites like iplt20.com.

## Tech Stack

*   **Frontend:** React (with Vite), TypeScript, Tailwind CSS
*   **Backend:** Node.js, Express, TypeScript
*   **Data Fetching (Conceptual):** Axios, Cheerio (for scraping simulation)
*   **Frontend:** You can run "npm run dev"


## Features
**Backend:** You can run "npm run dev"
*   **Live/Upcoming Match Display:** Shows current live match (if available from dummy data) or upcoming matches.
*   **Points Table:** Displays the IPL points table.
*   **Match Schedule:** Lists all matches with dates, times, and teams.
*   **Responsive Design:** Mobile-first approach.
*   **Periodic Data Refresh:** Frontend polls the backend every 5 minutes for updates.
*   **Simple Caching:** Backend has a very basic in-memory cache for API responses.

## Folder Structure
ipl-dashboard/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── iplController.ts
│   │   ├── routes/
│   │   │   └── iplRoutes.ts
│   │   ├── services/
│   │   │   └── scraperService.ts  // Will contain scraping logic & dummy data
│   │   ├── types/
│   │   │   └── iplTypes.ts        // Shared types for data
│   │   └── server.ts              // Express server setup
│   ├── MOCK_DATA/                 // Folder for JSON dummy data files (optional)
│   │   └── upcomingMatches.json
│   │   └── pointsTable.json
│   │   └── schedule.json
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── LiveUpcoming.tsx
│   │   │   ├── PointsTable.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── services/
│   │   │   └── api.ts             // To call backend APIs
│   │   ├── types/
│   │   │   └── iplTypes.ts        // Frontend types (can be same as backend)
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css              // Tailwind imports
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
│   └── tsconfig.node.json
│   └── vite.config.ts
│
└── README.md








## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js:** Version 16 or later recommended. (Includes npm - Node Package Manager). You can download it from [nodejs.org](https://nodejs.org/).
*   **Git:** For version control and cloning the repository. You can download it from [git-scm.com](https://git-scm.com/).
*   A **code editor** of your choice (e.g., VS Code, Sublime Text, WebStorm).
*   A **web browser** (e.g., Chrome, Firefox, Edge).

## Getting the Project Code (Using Git)

There are several ways to get the project code onto your local machine.

### Option 1: Cloning the Repository (Recommended)

Cloning creates a local copy of the entire repository, including all its history and branches. This is the recommended way if you want to keep up-to-date with changes or potentially contribute.

1.  **Open your terminal or command prompt.**
2.  **Navigate to the directory where you want to store the project.**
    ```bash
    cd path/to/your/projects_folder
    ```
3.  **Clone the repository using HTTPS (easiest) or SSH:**

    *   **Using HTTPS:**
        ```bash
        git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        ```
        *(Replace `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git` with the actual URL of this project's repository. You can find this URL by clicking the "Code" button on the GitHub repository page.)*

    *   **Using SSH (requires SSH key setup with GitHub):**
        ```bash
        git clone git@github.com:YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        ```
        *(Replace `git@github.com:YOUR_USERNAME/YOUR_REPOSITORY_NAME.git` with the actual SSH URL.)*

4.  **Navigate into the newly cloned project directory:**
    ```bash
    cd ipl-dashboard # Or the name of the repository directory
    ```

You now have a local copy of the project!

### Option 2: Forking and Cloning (For Contributing or Personal Modifications)

Forking creates your own personal copy of the repository on GitHub. You can then clone your fork, make changes, and optionally create a Pull Request to suggest your changes to the original project.

1.  **Fork the Repository on GitHub:**
    *   Go to the main GitHub page of this repository.
    *   Click the "Fork" button in the top-right corner. This will create a copy of the repository under your GitHub account.

2.  **Clone Your Fork:**
    *   Once the fork is created, go to your forked repository page (e.g., `https://github.com/YOUR_GITHUB_USERNAME/ipl-dashboard`).
    *   Click the "Code" button and copy the HTTPS or SSH URL.
    *   In your terminal, clone your fork:
        ```bash
        # Using HTTPS
        git clone https://github.com/YOUR_GITHUB_USERNAME/ipl-dashboard.git

        # Or using SSH
        # git clone git@github.com:YOUR_GITHUB_USERNAME/ipl-dashboard.git
        ```
    *   Navigate into the cloned directory:
        ```bash
        cd ipl-dashboard
        ```

3.  **(Advanced - for contributing back) Set up an "upstream" remote:**
    This allows you to pull changes from the original repository into your fork to keep it up-to-date.
    ```bash
    git remote add upstream https://github.com/ORIGINAL_OWNER_USERNAME/YOUR_REPOSITORY_NAME.git
    ```
    *(Replace with the original repository's URL.)*
    You can then fetch changes from upstream: `git fetch upstream` and merge them: `git merge upstream/main` (or `upstream/master` depending on the default branch name).

### Option 3: Downloading a ZIP Archive (No Git History)

If you don't want to use Git or just want a quick snapshot of the code without version history:

1.  Go to the main GitHub page of this repository.
2.  Click the green "Code" button.
3.  Select "Download ZIP".
4.  Extract the ZIP file to your desired location on your computer.
5.  Open your terminal and navigate into the extracted folder (e.g., `ipl-dashboard-main`).

**Note:** With this method, you won't be able to easily update the project using `git pull` if the original repository changes. You'll need to download a new ZIP file.

## Setup and Run Instructions

Once you have the project code locally, follow these steps to set up and run the application:

### Backend Setup

The backend is a Node.js/Express server that provides the API.

1.  **Navigate to the `backend` directory from the project root:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    This command reads the `package.json` file and installs all necessary Node.js modules.
    ```bash
    npm install
    ```
3.  **Run the backend development server:**
    This command typically uses `nodemon` (if configured) to automatically restart the server when code changes are detected.
    ```bash
    npm run dev
    ```
    The backend server will start, usually on `http://localhost:5000`. You should see a message in the console like "Backend server running on http://localhost:5000".

### Frontend Setup

The frontend is a React application built with Vite.

1.  **Open a *new terminal window or tab*.** Do not close the terminal running the backend.
2.  **Navigate to the `frontend` directory from the project root:**
    ```bash
    cd frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Important for Team Logos:**
    *   Ensure you have placeholder team logo images (e.g., `csk.png`, `mi.png`, `default.png`) in the `frontend/public/teams/` directory. The dummy data in the backend references these paths (e.g., `/teams/mi.png`). If these are missing, you'll see broken image icons.

5.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend development server will start, usually on `http://localhost:5173` (Vite will show you the exact URL). Your web browser might open automatically.

## Accessing the Application

Once both the backend and frontend servers are running:

*   Open your web browser and navigate to the URL provided by the frontend development server (usually `http://localhost:5173`).

You should see the IPL T20 Live Dashboard. The frontend will make API calls to your local backend (running on `http://localhost:5000`) to fetch data.

## Keeping Your Local Repository Updated

If you cloned the repository (Option 1 or 2 under "Getting the Project Code") and the original repository has new changes, you can update your local copy.

1.  **Ensure you have no uncommitted local changes** (or stash/commit them first).
    ```bash
    git status # Check your current status
    # git add . && git commit -m "My local changes" # To commit
    # git stash # To temporarily save uncommitted changes
    ```
2.  **Navigate to your local project directory** (e.g., `ipl-dashboard`) in the terminal.
3.  **Fetch and merge changes from the remote repository:**
    If you cloned directly from the main repository (Option 1):
    ```bash
    git pull origin main  # Or 'master' if that's the default branch name
    ```
    If you forked and cloned your fork (Option 2), and want to update from the *original* (upstream) repository:
    ```bash
    git fetch upstream
    git merge upstream/main # Or 'master'
    ```
    (This assumes you've set up an `upstream` remote as described in Option 2).

    Alternatively, to update your fork from your own remote fork (if someone else pushed changes to your fork):
    ```bash
    git pull origin main # Or your branch name
    ```
4.  **Re-install dependencies if `package.json` files changed:**
    After pulling changes, if `package.json` (in `backend` or `frontend`) was updated, you might need to run `npm install` in the respective directories again.
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    cd ..
    ```

## API Endpoints (Backend)

The backend provides the following API endpoints, which the frontend consumes. These are proxied through Vite in development.

*   `GET /api/ipl/live-upcoming`: Fetches live and upcoming match data.
*   `GET /api/ipl/points-table`: Fetches the current points table.
*   `GET /api/ipl/schedule`: Fetches the full match schedule.

You can append `?force=true` to any of these endpoint URLs when accessing them directly in your browser (e.g., `http://localhost:5000/api/ipl/live-upcoming?force=true`) to instruct the backend to bypass its cache for that specific request.

## Scraping Methodology and Challenges

### Data Sourcing (Current Implementation)

This project **primarily uses hardcoded dummy JSON data** located in the `backend/MOCK_DATA/` directory. The `backend/src/services/scraperService.ts` file loads this dummy data and serves it through the API.

### Conceptual Scraping Methodology (If real scraping were implemented)
1.  **Target URLs:** Identify the specific pages on `iplt20.com`.
2.  **HTTP Requests:** Use `axios` to fetch HTML.
3.  **HTML Parsing:** Use `cheerio` to parse HTML.
4.  **DOM Traversal & Data Extraction:** Use CSS selectors with `cheerio`.
5.  **Data Structuring:** Organize into TypeScript interfaces.

### Challenges with Scraping `iplt20.com`

*   **Dynamic Content:** `iplt20.com` loads content with JavaScript. `axios` + `cheerio` often miss this.
    *   *Solution for real scraping:* Headless browsers (Puppeteer, Playwright).
*   **Changing Website Structure:** Selectors break when website HTML changes.
*   **Anti-Scraping Measures:** CAPTCHAs, IP blocking, etc.
*   **Complexity of Data:** Extracting from complex/inconsistent HTML is hard.
*   **Ethical and Legal Considerations:** Check `robots.txt` and terms of service.

**Due to these significant challenges, this project defaults to serving reliable dummy data.**

## Bonus Features (Future Considerations)

*   **Real-time Notifications**
*   **Historical Data & Enhanced Visualization**

## Contributing

Contributions are welcome! If you'd like to contribute:

1.  **Fork the repository** (see [Option 2: Forking and Cloning](#option-2-forking-and-cloning-for-contributing-or-personal-modifications)).
2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name  # For new features
    # or
    git checkout -b fix/issue-description    # For bug fixes
    ```
3.  **Make your changes** and commit them with clear, descriptive messages:
    ```bash
    git add .
    git commit -m "feat: Add X feature"
    # or
    git commit -m "fix: Resolve Y bug in Z component"
    ```
    (Consider using [Conventional Commits](https://www.conventionalcommits.org/) for commit messages).
4.  **Push your changes to your forked repository:**
    ```bash
    git push origin feature/your-feature-name
    ```
5.  **Open a Pull Request (PR)** from your fork's branch to the `main` (or `master`) branch of the original repository.
6.  Provide a clear description of your changes in the PR.

Please ensure your code adheres to the existing coding style and that any new dependencies are justified.





Automated Deployment (CI/CD) with Docker, Kubernetes, and GitHub Actions
This project is configured with a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline. Every time a change is pushed to the main branch, the following automated process is triggered:
Build Docker Images: The pipeline builds separate Docker images for the frontend (React) and the backend (Node.js).
Push to Docker Hub: These newly built images are tagged with latest and pushed to a public Docker Hub repository.
Deploy to Kubernetes: The pipeline connects to an AWS EKS (Elastic Kubernetes Service) cluster and applies the latest configurations, triggering a rolling update of the application with zero downtime.


Tech Stack for Deployment
Containerization: Docker
Orchestration: AWS EKS (Elastic Kubernetes Service)
CI/CD Tool: GitHub Actions
How it Works: The CI/CD Pipeline (.github/workflows/deploy.yml)
The core of the automation lies in the deploy.yml workflow file. Here's a step-by-step breakdown of the pipeline's job:
Checkout Code: The runner first checks out the latest version of the code from the main branch.
Configure AWS Credentials: It securely configures AWS access using secrets stored in GitHub (AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY).
Login to Docker Hub: It logs into Docker Hub using a username and an access token, also stored securely as GitHub secrets.

Build & Push Backend Image: It builds the Docker image for the Node.js backend located in the ipl-dashboard-backend folder and pushes it to Docker Hub.

Build & Push Frontend Image: Similarly, it builds the multi-stage Docker image for the React frontend (using Nginx) from the ipl-dashboard-frontend folder and pushes it to Docker Hub.
Connect to EKS Cluster: The workflow uses the AWS CLI to update its kubeconfig, allowing it to communicate with the designated EKS cluster.
Apply Kubernetes Manifests: Finally, it runs kubectl apply to update the Kubernetes objects based on the configuration files in the k8s/ directory.
k8s/deployment.yaml: Defines the desired state for the frontend and backend pods, including the Docker image to use.
k8s/service.yaml: Defines how the application is exposed. The backend uses a ClusterIP for internal communication, and the frontend uses a LoadBalancer to be accessible from the internet.
Rollout Restart: After applying the changes, kubectl rollout restart is used to force the deployments to pull the new :latest images and start new pods, ensuring the update is applied immediately.
Setting Up For Your Own Deployment
To adapt this pipeline for your own AWS and Docker Hub accounts, you would need to:
Create an EKS Cluster: Set up your own Kubernetes cluster on AWS.
Update Workflow Variables: In .github/workflows/deploy.yml, change the AWS_REGION and EKS_CLUSTER_NAME environment variables to match your setup.
Update Kubernetes Manifests: In k8s/deployment.yaml, replace the Docker Hub username in the image fields with your own.
Configure GitHub Secrets: In your forked repository's settings (Settings > Secrets and variables > Actions), create the following secrets:

AWS_ACCESS_KEY_ID: Your AWS IAM user's access key.
AWS_SECRET_ACCESS_KEY: Your AWS IAM user's secret key.
DOCKERHUB_USERNAME: Your Docker Hub username.
DOCKERHUB_TOKEN: An access token generated from your Docker Hub account.



---