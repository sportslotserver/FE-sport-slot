export const setCapitalLetter = (letter) => {
    const str = letter
    const str2 = str.charAt(0).toUpperCase() + str.slice(1)       
    return str2
}