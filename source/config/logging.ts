const getTimeStamp = (): string => {
    return new Date().toISOString();
};

/** Logs in an info message */
const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace} ${message}]`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace} ${message}]`);
    }
};

/** Logs in a warn message */
const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace} ${message}]`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace} ${message}]`);
    }
};

/** Logs in an error message */
const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace} ${message}]`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace} ${message}]`);
    }
};

/** Logs in a debug message */
const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace} ${message}]`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace} ${message}]`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
