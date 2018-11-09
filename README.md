
Help about making test/mocha.opt file
https://stackoverflow.com/questions/10753288/how-to-specify-test-directory-for-mocha

Put the below in this file, instead of the instructions to use IntelliJ to modify mocha options
        --compilers js:babel-core/register
        ./tests/**/*.spec.js
        --no-deprecation
