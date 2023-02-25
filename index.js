function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
const postA = new InstagramPost("madebymimee", "video", "hhtps.instagram.com/madebymimee", 540, 420);
const postB = new InstagramPost("alx_africa", "picture", "hhtps.instagram.com/alx_africa", 12540, 920);
console.log(postA);
console.log(postB);

function createPerson(name, age, location){
    return{
        name : name,
        age : age,
        location : location
    }
}
const person = createPerson("musa", 19, "lekki");
console.log(person);

function createJambScores(eng, govt, lit, crk){
    return{
        ENG : eng,
        GOVT : govt,
        LIT : lit,
        CRK : crk,
    }
}
const Scores = createJambScores(70, 85, 82, 94);
person.Scores = createJambScores(70, 85, 82, 94);

console.log(Scores);
console.log(person.Scores);

/**
 * Question 4
 * 1. Using object.assign()
 * 2. Using spread operator(...)
 * 3. Using JSON.parse(JSON.stringify())
 */

// Examples
// Using object.assign()
const phone = {
    brand : "Infinix",
    yearOfRelease : 2020,
    numberOfSim : 2,
    model : "X655C",
    price : "120000naira"
}
const phoneClone = Object.assign({},phone);
console.log(phone);
console.log({phoneClone});

// using spread operator(...)
const student = {
    name : "peter obi",
    matricNumber : "156/MS/89",
    matricYear: 1986,
    gradYear : 1993,
    currentLevel : 500,
    courseOfStudy : "Medicine and Surgery",
    department : "Medicine and Surgery",
    faculty : "Clinical Sciences"

}
const studentClone = {... student};
console.log(student);
console.log({studentClone});