/**
 * Prints a message to the console in a specified color and console level.
 *
 * @param {string} text - The message to print.
 * @param {string} [color] - The color to print the message in. Must be one of 'red', 'yellow', 'green', 'blue', 'purple'. If not specified, defaults to no color.
 * @param {string} [consoleLevel='log'] - The console level at which to print the message. Must be one of 'log', 'info', 'error'. If not specified, defaults to 'log'.
 */
const printInColor = (text, color, consoleLevel = 'log') => {
    try {
        // Check if text is a string
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }

        // Check if color is one of the allowed colors or undefined
        const allowedColors = ['red', 'yellow', 'green', 'blue', 'purple'];
        if (color && !allowedColors.includes(color)) {
            throw new Error('Color must be one of: ' + allowedColors.join(', '));
        }

        // Check if consoleLevel is one of the allowed levels or undefined
        const allowedLevels = ['log', 'info', 'error'];
        if (consoleLevel && !allowedLevels.includes(consoleLevel)) {
            throw new Error('Console level must be one of: ' + allowedLevels.join(', '));
        }

        // Map colors to their corresponding ANSI codes
        const colorCodes = {
            red: '\x1b[31m',
            yellow: '\x1b[33m',
            green: '\x1b[32m',
            blue: '\x1b[34m',
            purple: '\x1b[35m' // ANSI doesn't have purple, closest is magenta
        };

        // Get the color code, or default to no color
        const colorCode = color ? colorCodes[color] : '';

        // Print the text in the specified color and console level
        console[consoleLevel](colorCode + '%s\x1b[0m', text);
    } catch (e) {
        console.error(e.message);
        if (e.stack) console.error(e.stack);
    };
};


/**
 * Formats a duration given in milliseconds into a human-readable string.
 *
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {string} A string representing the duration in the format "X hours, Y minutes, and Z seconds".
 */
const formatDuration = (milliseconds) => {
    const duration = moment.duration(milliseconds);
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    let result = '';
    if (hours > 0) {
        result += `${hours} hour`;
    }
    if (minutes > 0) {
        if (result.length > 0) {
            result += ', ';
        }
        result += `${minutes} minute`;
    }
    if (seconds > 0) {
        if (result.length > 0) {
            result += ', and ';
        }
        result += `${seconds} second`;
    }
    return result;
};

/**
 * Converts object keys to lower case.
 *
 * @param {object} obj - The object to convert keys.
 * @returns {object} Object with all keys in lower case.
 */
const convertKeysToLowerCase = (obj) => {
    return Object.keys(obj).reduce((acc, currentKey) => {
        acc[currentKey.toLowerCase()] = obj[currentKey];
        return acc;
    }, {});
};
