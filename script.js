let notes = [];

function addNote() {
  let titleInput = document.getElementById("title");
  let contentInput = document.getElementById("content");
  let title = titleInput.value.trim();
  let content = contentInput.value.trim();

  if (title !== "" && content !== "") {
    let note = {
      title,
      content,
    };

    notes.push(note);

    displayNotes();
    clearInputs();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}

function displayNotes() {
  let noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteNote(index);

    let titleParagraph = document.createElement("p");
    titleParagraph.innerText = note.title;

    let contentParagraph = document.createElement("p");
    contentParagraph.innerText = note.content;

    noteDiv.appendChild(deleteBtn);
    noteDiv.appendChild(titleParagraph);
    noteDiv.appendChild(contentParagraph);

    noteList.appendChild(noteDiv);
  });
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}



// Initialization:

// An empty array notes is declared. This array will be used to store note objects.
// addNote Function:

// This function is called when the user clicks an "Add" button on the web page.
// It retrieves the values entered by the user in the "title" and "content" input fields.
// It trims the input values to remove leading and trailing whitespace.
// If both the title and content are not empty, a new note object is created with the title and content.
// The new note is added to the notes array.
// The displayNotes function is called to update the list of notes displayed on the web page.
// The clearInputs function is called to clear the input fields.


// deleteNote Function:

// This function is used to delete a note from the notes array.
// It takes an index parameter that specifies the index of the note to be deleted.
// notes.splice(index, 1) is used to remove one element at the specified index from the notes array.
// After deleting the note, the displayNotes function is called to update the displayed list of notes.


// displayNotes Function:

// This function updates the list of notes displayed on the web page.
// It starts by getting a reference to the HTML element with the id "noteList" where the notes will be displayed.
// It clears the existing content of the "noteList" element using innerHTML = "".
// It then iterates over the notes array using forEach.
// For each note in the array, it creates a new div element with the class "note" to represent the note.
// Inside this div, it creates a "Delete" button, a title paragraph, and a content paragraph.
// The "Delete" button is configured to call the deleteNote function with the appropriate index when clicked.
// The title and content paragraphs are filled with the respective data from the note object.
// Finally, the div representing the note is appended to the "noteList" element.


// clearInputs Function:

// This function clears the input fields with the ids "title" and "content" after a note is added.
// It sets the value property of these input fields to an empty string.