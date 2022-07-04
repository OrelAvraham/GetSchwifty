------ Instructions ------</br>
When Starting the project (by LiveServer of vs code or any other server)
The screen will show only a start button. Click it to start the game.

Now some popup windows should pop and ask for user informationo (I had no time to change it fo forms, not I know how to do that).

To select a block click on it and if possible it will silde it.

Only when the game finishes you'll be able to start another one.
A leader should appear below the game table. Hopefuly when winning it displays the players. 
To test this feature one has to win the game and I didn't have enough time for that.


------ Design ------
In this project I focused on implementing MVC, and less on designing SOLIDly. 

Due to a lack of time I didn't manage to design a proper conector. I bleieve It should be a class that gets a view and a model
injected and the manipulations happen inside it but currentlly all the binding (& the leader board logic) happens in index.js.

