let day = prompt("Enter the Day:").toLowerCase();

switch (day) {
  case 'M':
    console.log("Monday");
    break;
  case 'T':
    console.log("Tuesday");
    break;
  case 'W':
    console.log("Wednesday");
    break;
  case 't':
    console.log("Thursday");
    break;
  case 'F':
    console.log("Friday");
    break;
  case 'S':
    console.log("Saturday");
    break;
  case 's':
    console.log("Sunday");
    break;
    
  default:
    console.log("Invalid input!");

}