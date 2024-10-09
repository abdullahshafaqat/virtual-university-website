// Adding event listeners for button clicks
document.getElementById('save').addEventListener('click', saveNote);
document.getElementById('delete').addEventListener('click', deleteNote);
document.getElementById('edit').addEventListener('click', editNote);
document.getElementById('share').addEventListener('click', shareNote);
document.getElementById('search').addEventListener('input', searchNotes);

// Function to save a note
function saveNote() {
    const title = document.getElementById('title').value;
    const note = document.getElementById('note').value;

    if (title && note) {
        const notesList = document.getElementById('notes-list');
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `<h3>${title}</h3><p>${note}</p>`;
        notesList.appendChild(noteItem);
        clearInputs(); // Clear the inputs after saving
    } else {
        alert('Please enter both title and note.'); // Alert if fields are empty
    }
}

// Function to delete the last note
function deleteNote() {
    const notesList = document.getElementById('notes-list');
    if (notesList.lastChild) {
        notesList.removeChild(notesList.lastChild);
    } else {
        alert('No notes to delete.'); // Alert if there are no notes
    }
}

// Function to edit the last note
function editNote() {
    const notesList = document.getElementById('notes-list');
    if (notesList.lastChild) {
        const lastNote = notesList.lastChild;
        document.getElementById('title').value = lastNote.querySelector('h3').innerText;
        document.getElementById('note').value = lastNote.querySelector('p').innerText;
        notesList.removeChild(lastNote);
    } else {
        alert('No notes to edit.'); // Alert if there are no notes
    }
}

// Function to share a note
function shareNote() {
    alert('Share functionality is not implemented yet.');
}

// Function to search notes
function searchNotes() {
    const query = document.getElementById('search').value.toLowerCase();
    const notes = document.querySelectorAll('.note-item');
    notes.forEach(note => {
        const title = note.querySelector('h3').innerText.toLowerCase();
        const content = note.querySelector('p').innerText.toLowerCase();
        note.style.display = (title.includes(query) || content.includes(query)) ? '' : 'none';
    });
}

// Function to clear the input fields
function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('note').value = '';
}
