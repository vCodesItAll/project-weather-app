/*

Setup page format
h1
input & button
container with 4 display boxes

each display box has header and body
database error below input button

hardcode these boxes to be filled with data from api
make sure things are lined up

set variable for states
state for successfully filling information
state for each error

make the object to make everything in the dotted lines



use an async function to getWeather(zip)
declare the api key
declare the api url

try function
declare an await for axios to get data
declare variable for data object
dataObject will include city, temperature, condition, and photo
    if k and c not provided write function to convert and store those values

init function
    variables for each display box set equal to document.getelementbyid

declare searchBtn and searchBar

event listener on searchBtn on click
async
zip is equal to the searchBar val

do a try catch
weatherData = await getWeather(zip)
then perform init function
then catch error for database error
or catch error for user errors
console log these errors in the alert box

*/