# wk7UnitTesting
This is entails testing and debugging using mocha.

# Steps
1. open your directory
2. create two other directories named src and test within the root of your project
3. in the src directory, create a file named e.g. unit.js
4. open your terminal in VSCode and use the command 'npm init -y' to initialize the project. This will create the package.json file
5. write your main code in the 'unit.js' file
6. in the 'test' directory, create a file named e.g. 'unit.test.js' and write the code you will use to test and debug the program.
7. in your terminal, use the command 'npm install mocha --save-dev --ignore-scripts
' to install mocha without dependencies that are specific to Linux.
8. use the command 'npm test' to run the testing and debugging.
# Points to note
->Make sure you don't have syntax errors in any of your codes
->In the package.json file, make sure this is what you have:
  "scripts": {
    "test": "mocha"}
->Make sure you specify the correct path for the 'unit.js' file in the 'unit.test.js' file.

# !!! Happy Coding !!!