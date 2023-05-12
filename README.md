# CIS2201-Class-Project

## Dependencies to download before running chatbot
npm install socket.io
npm install socket.io-client
npm install --save-dev @types/socket.io-client
npm install express-session body-parser cookie-parser
npm install -g concurrently

## Important Links 
1. [Deliverables](https://drive.google.com/drive/folders/1KxLr-nuEIsJ1NMRdx6y6PDaXoMM-g495?usp=sharing)

Access using usc email ⚠

## Setting Up the Project
1. Clone the project in any local directory you like
Example using the git CLI
```
git clone https://github.com/JulianErnest/CIS2201-Class-Project-FE.git
```
2. CD into the root folder
```
cd CIS2201-Class-Project-FE
```
3. Install dependencies
```
// If you're using npm
npm install

// If you're using yarn
yarn
```

4. Run the project
```
// If you're using npm
npm run dev

// If you're using yarn
yarn dev
```

5. ⚠ Please check the `Branching` section below ⚠

## Commands To Run During Development
1. Start local frontend server
```
// If you're using npm
npm run dev

// If you're using yarn
yarn dev
```

2. Make sure your local backend server and mySQL server is running as well 
```
// TODO: Add commands here
```

## File Structure
1. `src\assets` - This is where you place images (.png, .svg, etc...)
2. `src\components` - Common components to be used throughout the application, you usually don't wanna touch this folder
3. `src\pages` - Pages of the website
4. `src\constants` - Global variables  
5. `src\modules\*` - Where each group will be doing the most work in. Contains files related to your module
```
Example for #5:
src
|__modules
        |__borrowing
                    |__ index.tsx - Entry point for the borrowing module
                    |__ Search.tsx - Contains the search page for the moduule
```

## Branching
1. When you clone the repository, make sure you are in the `main` branch. You can check by running this command:
```
git status
```
Expected output would be:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
2. Pull the latest changes
```
git pull
```
3. Switch to the branch your module is assigned to. Example:
```
git checkout -b {branch name of your module}
// G1 example:
// Refer to the bottom for the list of all branch names
git checkout -b g1-borrowing-module
```
4. Pull the latest changes again, this time from your module

```
git pull
```
5. To push your local changes, run the following commands: 
```
git add {files you want to stage}
// or if you want to stage everything
git add . 

git commit -m [{type of change}] {meaningful message}
// Added table example:
git commit -m "[feature] added a meaningful table 😲"  

git push
// For merge conflicts, resolve within your subgroups 
```

## Branch Names
1. g1-borrowing-module
2. g2-seating-assignment
3. g3-meeting-scheduler
4. g4-bulletin-board
5. g5-chatbot
6. g6-event-manager
7. g7-inventory-module
8. g8-grievances
9. g9-room-issues

