# BSIT-SQUAD-SURVEY-freeCodeCamp-
(New) Responsive Web Design (SurveyForm)

<!DOCTYPE html>
<html>
  <head>
    <title>Survey Form</title>
  </head>
  <body>
    <h1 id="title"> BSIT SQUAD SURVEY</h1>
    <p id="description">What do you think of our FreeCodeCamp videos so far?</p>
    </header>
    <main>
      <form id="survey-form">
        <label for="name" id="name-label">Please enter your name: </label>
        <input id="name" type="text" required placeholder="Jes Bloggs">
        <hr>
        <label for="email" id="email-label">Please enter e-mail:</label>
        <input id="email" type="email" required placeholder="Jesses@jesses.com">
        <hr>
        <label for="number" id="number-label">Please enter your age: </label>
        <input id="number" type="number" min="5" max="100" required placeholder="age"
required>
<hr>
        <label for="dropdown"> Cake or Coffee </label>
        <select id="dropdown">
          <option> Cake </option>
          <option> Coffee</option>
        </select>
<hr>
        <label >Eggs or Milk: </label>
        <input type="radio" name="radio-group" id="eggs" value="0">
        <label for="eggs">Eggs</label>
        <input type="radio" name="radio-group" id="milk" value="1>"
        <label for="milk">Milk</label>
<hr>
        <label >Pancake or Sanwich: </label>
        <input type="checkbox" value="0" id="pancake">
        <label for="pancake">Pancake</label>
        <input type="checkbox" value="1" id="sanwich">
        <label for="sanwich" >Sanwich</label>
<hr>
        <textarea>
         Please enter your additional comments here:

        </textarea>
<hr>

        <input id="submit" type="submit">
      </form>
    </main>
  </body>
</html>
