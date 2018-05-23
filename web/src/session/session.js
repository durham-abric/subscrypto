var UID = null;
var loginTime = null;
var logoutTime = null;
var actionsPerformed = [];

export const setLoginInfo = (uid) => {
    UID = uid;
    loginTime = Date.now();
    return;
}

export const setLogoutInfo = () => {
    logoutTime = Date.now();
    return;
}

export const addAction = (name, detail, time) => {
    actionsPerformed.push((name, detail, time));
    return;
}

export const getSessionDetails = () => {
    var session = {UID, loginTime, logoutTime, actionsPerformed};
    return session;
}

export const clearSessionData = () => {
    UID = null;
    loginTime = null;
    logoutTime = null;
    actionsPerformed = [];
}