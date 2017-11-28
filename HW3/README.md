# Homework #3

**25 points**

**DUE: Tuesday, Nov 28, 1:30pm**

### Setup

1. Download this repository, rename it as "hw3", and put it under you "code" folder.
2. Use the command line to `yarn install` and then `yarn start`.
3. Notice that the app doesn't work completely.


### The Challenge

You're in charge of managing the development of the new TMDB mobile application. The deadline is almost here, and your entire development team quits!

You can tell the board of directors that you can't deliver the project... or you can finish it yourself. Luckily, you took an awesome introduction to software development in b-school! You've got this!

Here's how the app should work when it's finished:

![](target.gif)


**TO DO**

* (7 pts) Fix the TextInput so that users can enter a movie title.  (Hint: wite code so that the title ends up in `this.state.movieNameInput`)
* When the return key is pressed:
  * (0 pts) Use the value in `this.state.movieNameInput` to call the TMDB API (this has already been done by your development team)
  * (7 pts) Store the first result in state using the name `movie`. (7 points)
  * (7 pts) Fix the movie display to show the correct title and rating instead of always showing Apollo 13.
  * (4 pts) Clear out the existing search term so that it reads "Enter a movie name!" instead of the movie you just searched for.

**MORE HINTS**

* Read the React documentation on the TextInput component – https://facebook.github.io/react-native/releases/0.28/docs/textinput.html – pay particular attention to the onChangeText (event that occurs when typing into the TextInput) and also onSubmitEditing (event that occurs when the user presses the return key) - write event handler functions for both!
* Styles are already written and applied, so there's no need to modify them, unless you want to!

### How to Turn In Your Homework

1. Use the GitHub app to convert your "hw3" folder into a local repository and publish it under your GitHub account as "hw3".
2. Use Canvas to turn in your assignment by providing the URL to your repository.
