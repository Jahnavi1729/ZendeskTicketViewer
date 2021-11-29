Zendesk-Coding-Challenge

## Installation & Usage
-> Node
https://nodejs.org/en/download/ 

-> Angular CLI
https://github.com/angular/angular-cli

-> Git
-> VisualStudioCode (or any other editor)

## Step 1: Setting up the project locally

1. Clone the repo to your local machine, or, alternatively, download the project as a zip file and extract it to your local machine.
2. Open the project folder in VisualStudioCode or any other editor
3. From the root of the project, run  "npm install" in one of the terminals
4. Run "npm install -g json-server"

## Step 2: Starting the backend server

4. To start the server, in the other terminal, run "json-server --watch tickets.json" You should see a console message saying that the server is running on  http://localhost:3000 and  Resources http://localhost:3000/tickets

## Step 3: Start the Front end server
5. From the other terminal run either "ng serve" or "npm start" . This should start the angular  server on an available port (most likely localhost:4200)

## Step 4: Starting the app
6. In the browser of your choice navigate to http://localhost:4200/
7. Enjoy some tickets.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
