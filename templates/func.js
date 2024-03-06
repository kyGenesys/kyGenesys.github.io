let DEV_OR_DEBUG = process.env?.LOCAL_DEV?.toLowerCase() === 'true';

// event based?
if (event?.headers?.debug === 'Cl^Gr^N[o4^B39b') {
  DEV_OR_DEBUG = true;
  console.info(JSON.stringify(event));
}

const stringArg = (arg) => {
    // debugger
    if (arg?.type?.toLowerCase() === 'click') {
        return 'button'
    }
    if (typeof (arg) === 'object') {
        return JSON.stringify(arg)
    } else if (typeof (arg) === 'string') {
        return arg
    } else {
        console.error('Supplied arg is not type "object" or "string"')
    }
};

/**
* @description blah blah
* @param {object} input data
* @returns {object} output data
*/
const func = async (input) => {
  if (DEV_OR_DEBUG) {
    console.info('func()');
    const args = ['input1', 'input2', 'input3', 'etc'];
    args.forEach((arg) => console.info(`${arg}: ${input?.arg ? stringArg(input.arg) : 'undefined'}`));
  }
  console.info('Attempting to func')
  
  try {
    const result = await apiCallOfSomeSort();
  } catch (e) {
    if (DEV_OR_DEBUG) {
                console.error(`${functionName}() error:`, e?.message);
                if (e?.code) console.error('Code: ', e.code);
                if (e?.stack) console.error('Stack: ', e.stack);
            } else {
                console.error(e?.message);
            };
            throw e; // Re-throw the error after logging it.
    }
};
