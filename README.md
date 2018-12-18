This project was made as an assignment for the recruitment process with Tradeshift.

The project was built in React.js, using Bootstrap style sheets. I chose Bootstrap as 
I have experience with it and it can make a website aesthetically pleasing with 
minimal effort.

The application is split into two components: 
- App, which handles input and validation, determining if the user input is numeric and whether
 the side lengths can form a valid triangle, before sending the input to
- Result, which calculates the type of the triangle and outputs the result.

The application was split in this way to make expanding its functionality simple - as Result 
handles all calculations and renders the output, it would be easy to add additional functionality, 
such as calculating the internal angles of the triangle or even drawing it.

Automated tests were mostly not used, as due to the simplicity of the application, 
it was easier to test it manually.