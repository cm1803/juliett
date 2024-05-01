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
    return word.toLowerCase().split('').join('-');
}

// Function to convert word to civilian format
function convertToCivilian(word) {
    const civilian = {
        'a': 'Adam', 'b': 'Boy', 'c': 'Charlie', 'd': 'David', 'e': 'Edward', 'f': 'Frank', 'g': 'George',
        'h': 'Henry', 'i': 'Ida', 'j': 'John', 'k': 'King', 'l': 'Lincoln', 'm': 'Mary', 'n': 'Nora',
        'o': 'Ocean', 'p': 'Paul', 'q': 'Queen', 'r': 'Robert', 's': 'Sam', 't': 'Tom', 'u': 'Union',
        'v': 'Victor', 'w': 'William', 'x': 'X-ray', 'y': 'Young', 'z': 'Zebra'
    };
    return word.toLowerCase().split('').map(letter => civilian[letter] || letter).join(' - ');
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
