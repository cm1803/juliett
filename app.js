// NATO phonetic alphabet object
const nato = {
    'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot', 'G': 'Golf',
    'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November',
    'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform',
    'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 'Z': 'Zulu'
};

// Function to convert word to NATO phonetic alphabet
function convertToNATO(word) {
    return word.toUpperCase().split('').map(letter => nato[letter] || letter).join(' - ');
}

// Function to convert word to kebab case
function convertToKebabCase(word) {
    return word.toLowerCase().replace(/\s+/g, '-');
}

// Function to convert word to civilian format
function convertToCivilian(word) {
    return word.toLowerCase().replace(/\s+/g, ' ');
}

// Event listener for submit button
$('#submitBtn').click(function () {
    const word = $('#inputWord').val();
    let result;
    if ($('#kebabCaseToggle').prop('checked')) {
        result = convertToKebabCase(word);
    } else if ($('#civilianToggle').prop('checked')) {
        result = convertToCivilian(word);
    } else {
        result = convertToNATO(word);
    }
    $('#resultList').empty().append(`<li class="list-group-item">${result}</li>`).slideDown();
});

// Event listener for clear button
$('#clearBtn').click(function () {
    $('#inputWord').val('');
    $('#resultList').slideUp();
});
