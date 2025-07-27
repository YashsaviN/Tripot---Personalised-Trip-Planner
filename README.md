## Tripot---Personalised-Trip-Planner
A traveling planning up where users can plant trips, create vision boards and get personalized destination recommendations based on their top three hobbies and their budget.

## Core Concept
A web app where users:
- Plan trips using flexible Notion-style components (editable blocks, todo lists, notes)
- Create travel vision boards with mood boards, images, goals
- Get AI or rule-based personalized travel recommendations based on:
- Top 3 hobbies
    - Budget range
    - Travel time (optional)
    - Save trips and ideas to their profile
- Accessible UI for all users

## Ideas
1. Trip Workspace (Notion-style)
- Drag/drop blocks (text, todo, checklist, media)
- Travel-specific templates (e.g., 7-day Paris planner)
2. Destination Recommender
Users enter:
- 3 hobbies/interests (e.g., hiking, art, food)
- Budget range
- System recommends destinations that match interest tags and price range
- Optional: display average cost per day, top attractions
3. Vision Board
- Upload or search images (travel aesthetics, goals)
- Pin places, quotes, or photos
- Mood-board-style canvas (like Pinterest Lite)
4. User Profiles & Saved Plans
- Save multiple trips
- Edit/update any time
- Track trip status (planned, in-progress, completed)

## Programming
- Front-End: React and Tailwind Css
- Back-End: Node.js and Express
- Database: MongoDB ( for vision board)
- APIs: GeoDB Cities, Uncplash or AI API
- Authentication: Firebase Auth or JWT 
- Figma Designs : 3 screens: Dashboard, Vision Board, Trip Recommender. 

## Development Process
1. Verify that you're in the main branch.
    ```sh
    git branch
    ```
2. Make sure your main branch is up to date by doing the following command.
    ```sh 
    git pull
    ```
3. Create a branch off of the main branch with the issue number as the prefix, followed by the title or summary of the issue. Then checkout that branch.
    ```sh
    git checkout -b 2-create-navbar
    ```
4. If you created new files, add them through the following command.
    ```sh
    git add --all
    ```
5. Save your changes. Inside the quotation marks, put the commit message which describes the changes you made.
    ```sh
    git commit -m "Create navigation bar."
    ```
6. To push the code: 
    ```sh
    # if pushing for the first time:
    git push --set-upstream origin <branch-name>

    # otherwise do:
    git push 
    ```
7. Creatinh a pull request on GitHub. 
    - Go to Pull Requests tab, New Pull Request. 
    - Keep the `base:main`, change the `compare:<branchName>` to your branch. 
    - Review your changes and create the pull request.
    - Add "closes #2" (#2 being the issue number) in the description so it automatically closes the issue once the pull request has been merged.
8. Wait for approval, fix merge conflicts if necessary, then merge.
