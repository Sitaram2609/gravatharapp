document.getElementById('profileForm').addEventListener('submit', function (event) {
    let isValid = true;

    const email = document.getElementById('email');
    const fullName = document.getElementById('fullName');
    const username = document.getElementById('username');
    const phoneNumber = document.getElementById('phoneNumber');
    const location = document.getElementById('location');
    const website = document.getElementById('website');
    const bio = document.getElementById('bio');

    // Clear previous error messages and remove invalid/valid classes
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('invalid', 'valid'));

    // Regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    const fullNamePattern = /^[a-zA-Z\s]+$/; // Only alphabets and spaces
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/; // Must start with an alphabet
    const phonePattern = /^[0-9]{10}$/; // Only 10-digit numbers
    const websitePattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/;

    function validateField(field, pattern, errorMessage) {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('invalid');
            document.getElementById(field.id + 'Error').textContent = errorMessage + ' is required.';
        } else if (pattern && !pattern.test(field.value.trim())) {
            isValid = false;
            field.classList.add('invalid');
            document.getElementById(field.id + 'Error').textContent = 'Invalid ' + errorMessage + '.';
        } else {
            field.classList.add('valid');
        }
    }

    // Apply validation
    validateField(email, emailPattern, 'Email');
    validateField(fullName, fullNamePattern, 'Full Name (only alphabets)');
    validateField(username, usernamePattern, 'Username (must start with a letter, 3-16 chars)');
    validateField(phoneNumber, phonePattern, 'Phone Number (10 digits only)');
    validateField(location, null, 'Location');
    validateField(website, websitePattern, 'Website URL');
    validateField(bio, null, 'Bio');

    if (!isValid) event.preventDefault();
});

