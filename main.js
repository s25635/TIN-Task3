// main.js

function toggleEditForm() {
    var editForm = document.getElementById('edit-form');
    editForm.style.display = (editForm.style.display === 'none' || editForm.style.display === '') ? 'block' : 'none';

    // Set body height to 800px when the edit form is displayed
    document.body.style.height = (editForm.style.display === 'block') ? '100px' : 'auto';

    if (editForm.style.display === 'block') {
        document.getElementById('name').value = document.getElementById('pokemon-name').innerText;
        document.getElementById('type').value = document.getElementById('pokemon-type').innerText;
        document.getElementById('level').value = document.getElementById('pokemon-level').innerText;
        document.getElementById('image').value = document.getElementById('pokemon-image').src;
        document.getElementById('desc').value = document.getElementById('pokemon-desc').innerText;
    }
}

function saveChanges() {
    var newName = document.getElementById('name').value;
    var newType = document.getElementById('type').value;
    var newLevel = document.getElementById('level').value;
    var newImage = document.getElementById('image').value;
    var newDesc = document.getElementById('desc').value;

    // Validation rules
    if (newName.length > 20) {
        alert('Name must not contain more than 20 characters.');
        return false;
    }

    if (newType.length > 20) {
        alert('Type must not contain more than 20 characters.');
        return false;
    }

    if (newDesc.length > 600) {
        alert('Description must not contain more than 250 characters.');
        return false;
    }

    // Validate the image format
    var imageRegex = /^images\/\w+/;
    if (!imageRegex.test(newImage)) {
        alert('Image must be in the format "images/filename...".');
        return false;
    }

    // Validate the level (assuming it's an integer)
    if (isNaN(newLevel) || newLevel < 1 || newLevel > 100) {
        alert('Level must be a number between 1 and 100.');
        return false;
    }

    document.getElementById('pokemon-name').innerText = newName;
    document.getElementById('pokemon-type').innerText = newType;
    document.getElementById('pokemon-level').innerText = newLevel;
    document.getElementById('pokemon-image').src = newImage;
    document.getElementById('pokemon-desc').innerText = newDesc;

    document.getElementById('edit-form').style.display = 'none';
    document.body.style.height = 'auto';

    alert('Changes saved successfully!');
    return false;
}
