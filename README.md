# CIS2201-Class-Project

## Important Links 
1. [Deliverables](https://drive.google.com/drive/folders/1KxLr-nuEIsJ1NMRdx6y6PDaXoMM-g495?usp=sharing)
2. [UI Style Guide](https://drive.google.com/file/d/1KeXOv_WearzkQqlx2MZp-AEtljkELAO8/view?usp=share_link)

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
1. 

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


HAPPY CODING! :D
