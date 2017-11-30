# LEARNING SYSTEM
## INSTALLATION
Prerequisites:
1. Need node.js installed - https://nodejs.org/en/
2. Need yarn installed (npm install -g yarn)

To Run:
1. cd to project directory (./learning_system)
2. yarn install
3. yarn start

(note: if UI is looking weird might need to install semantic UI separately)
1. yarn add semantic-ui-react
2. yarn add semantic-ui-css
3. yarn start
## ASSUMPTIONS
1. Input courses file must be in following delimited space format as given in instructions. Only the "NAME" field is allowed to have spaces. (header is for show only, remove the header line in the file being uploaded).
```
ID NAME LENGTH SUBJECT
12345 Discrete Math 3 Math
88333 Java 3 CS
```
## ISSUES/BUGS TO FIX
1. Able to add duplicates from courses list to favorites list. There are a few ways to fix.
-Can delete object from courses list once user clicks add to favorites, and then when user clicks remove from favorites can add object back to courses list.
-Or can also deactivate the Add button once user clicks it, and then reactivate once user deletes that object from favorites list. 
2. Need some sort of field validation for user input file, and error handle if user uploads incorrect format/file.  
## INSTRUCTIONS GIVEN
Take Home Project

Create a program that models a learning system.

You will have a list of courses that you need to load (see attached courses.txt). Each course will have the following fields: course id, course name (could have spaces in name), course length (in hours), course subject. First you need to read in all the courses which will be in the format of: Id name length subject. Each line will be a new course.

After the courses are loaded, your program should ask the user for their name. After the user enters their name, your program should list all the courses and then ask the user if they would like to input or edit a course. You can choose any method of input (please add the method in the readme). Then the program should prompt the user for choices of (add, edit, list, and search). The following operations should be supported:

1)	Add: the program should prompt the user to add a course. Once the choice has been made, your program should request the user to input all the required fields for the course and add the course to the previously defined list.
2)	Edit: the program should first list the courses and prompt the user for an id to edit. Once the user inputs an id, the program should prompt the user for a field to edit and an edit value. Then the program should update the field with the new edit.
3)	List: the program should list all the courses. 
4)	Search: the program should take in any input and search the courses and list any courses with matching fields (all the fields should be searched)

At the end of each operation the program should prompt the user for any additional operations. If the user says “yes”, the program should prompt the user for any operations (1-4). If the user says “no”, the program should prompt the user to add courses to a “favorites” list (comma separated ids). The program should print the favorites list and calculate the following total course hours: sum of each course * course hours. The following text should be then outputted:
“<user name inputted> has signed up for <number of courses> courses with <total course hours> credits”
The program should then terminate.

Please provide the required validation for the following:
1)	Course ID: integer number, 5 digits
2)	Course name: freetext (string) 
3)	Course length: integer number
4)	Course subject: freetext (string)

You can also provide any other validation you would feel is necessary in a real-world situation. Please provide a readme file describing how to run your program and any assumptions that were made. Feel free to contact the Walmart team with any clarifying questions.
