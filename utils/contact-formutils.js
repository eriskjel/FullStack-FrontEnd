// contents of utils/loginutils.js file

export function isLoginSuccessful (response) {
    if (response === undefined ) return false;
    if (response.data === undefined || response.data == null ) return false;
    return response.data.status === "true";
}