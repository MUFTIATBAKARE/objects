// Question 1
function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

// Question 2
const postA = new InstagramPost("madebymimee", "video", "hhtps.instagram.com/madebymimee", 540, 420);
const postB = new InstagramPost("alx_africa", "picture", "hhtps.instagram.com/alx_africa", 12540, 920);
console.log(postA);
console.log(postB);

// Question 3a
function createPerson(name, age, location){
    return{
        name : name,
        age : age,
        location : location
    }
}
const person = createPerson("musa", 19, "lekki");
console.log(person);

// Question 3b
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

// Using JSON.parse(JSON.stringify())
const laptop = {
    brand : "hp",
    operatingSystem : "windows 10",
    processorType : "interCore i5",
    memory : "8GB RAM",
    internalDrive : "256GB ssd"
}
const laptopClone = JSON.parse(JSON.stringify(laptop));
console.log(laptop);
console.log({laptopClone});

// Question 5
const presidentialCandidates = {
    AAC : 'Omoyele Sowore',
    ACCORD : 'Christopher Imumolen',
    APC : 'Bola Ahmed Tinubu',
    LP : 'Peter Obi',
    NNPP : 'Rabiu Kwankwaso',
    PDP : 'Atiku Abubakar'
}
for (const key in presidentialCandidates){
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + key )
}