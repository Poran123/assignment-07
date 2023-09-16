# antim Cs course site

## features
-** Here any one can choose course about programming but not more than 20 credits
-** any student can select their course by just clicking on select button
-** If any student take more than 20 credits then it will give a alert message
-** Student can not choose same course again

## How i manage the useState 
here i use useState hook to declare and initialize multiple state variables in a functional component. Let's break down each line of code to explain what's happening:
**
const [courses, setCourses] = useState([]);
This line declares a state variable named courses and its corresponding update function setCourses.
The useState([]) hook initializes courses to an empty array ([]) as its initial state value.
This state variable is likely intended to store a list of courses.

***
const [selectCourse, setSelectCourse] = useState([]);
Similar to the first line, this line declares a state variable named selectCourse and its corresponding update function setSelectCourse.
It initializes selectCourse to an empty array ([]) as its initial state value.
This state variable might be used to store a list of selected courses.

****
const [remaining, setRemaining] = useState(20);
Here, a state variable named remaining and its update function setRemaining are declared.
remaining is initialized to the value 20 as its initial state value.
This state variable could represent the number of remaining course slots or something similar.

*****
const [totalCredit, setTotalCredit] = useState(0);
This line declares a state variable named totalCredit and its corresponding update function setTotalCredit.
It initializes totalCredit to the value 0 as its initial state value.
This state variable is likely intended to store the total credit hours of the selected courses.







