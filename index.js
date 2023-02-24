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

