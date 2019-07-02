

 export const myWardrobe = {
    myItems: [],
    myLooks: [],
    inspirations: [],
    text: "export test"

};

const Item = class {
    constructor(id, type, temperature, style, timeOfDay, color, pattern, userId="userId", userName="userName", owned=true, isVisible=true, isLiked=false, isUnliked=false, matchesWith=[])
    {   
        this.id = id;
        this.src = `./itemsImg/${this.id}.jpg`;
        this.userId=userId;
        this.userName=userName;
        this.owned= owned;
        this.type=type;
        this.temperature=temperature;
        this.timeOfDay = timeOfDay;
        this.style = style;
        this.color = color;
        this.pattern = pattern;
        this.isVisible = isVisible;
        this.isLiked = isLiked;
        this.isUnliked = isUnliked;
        this.matchesWith = matchesWith;
       
    }
}
// sre absolute path /home/marek/Documents/wardrobe/public/itemsImg/d0.jpg
// types = dress, first-top, second-top, bottom, shoes, accessories  
// owned = bool
// season = cold/chilly/warm/hot
// timeOfDay = work/ afterhours / weekend
// style = elegant / casual / sport
// pattern = pattern / plain / print
// main color = white / black / gray / green / brown / blue / red / pink / orange / navy / light gray / violet / yellow

const items = [
    ["d0", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "brown", "plain"],
    ["d1", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "yellow", "pattern"],
    [ "d2", "dress", ['warm','hot'], ['casual'], ['afterhours','weekend'], "orange", "plain" ],
    [ "d3", "dress", ['chilly','warm'], ['elegant'], ['work','afterhours'], "black", "plain" ],
    [ "d4", "dress", ['chilly','warm','hot'], ['elegant'], ['work','afterhours'], "black", "plain" ],
    [ "d5", "dress", ['warm','hot'], ['casual'], ['weekend'], "navy", "plain" ],
    [ "d6", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "red", "plain" ],
    [ "d7", "dress", ['warm','hot'], ['elegant','casual'], ['afterhours'], "navy", "pattern" ],
    [ "d8", "dress", ['cold','chilly','warm'], ['elegant'], ['work','afterhours'], "black", "pattern" ],
    [ "d9", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "plain" ],
    [ "d10", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours','weekend'], "lightgray", "plain" ],
    [ "d11", "dress", ['cold','chilly'], ['sport'], ['weekend'], "pink", "pattern" ],
    [ "d12", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours','weekend'], "green", "pattern" ],
    [ "d13", "dress", ['chilly'], ['casual'], ['afterhours','weekend'], "brown", "plain" ],
    [ "d14", "dress", ['warm'], ['casual'], ['afterhours','weekend'], "yellow", "plain" ],
    [ "d15", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "yellow", "pattern" ],
    [ "d16", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "black", "plain" ],
    [ "d17", "dress", ['warm','hot'], ['casual'], ['afterhours'], "gray", "print" ],
    [ "d18", "dress", ['warm','hot'], ['casual','sport'], ['weekend'], "blue", "pattern" ],
    [ "d19", "dress", ['warm','hot'], ['casual'], ['afterhours'], "green", "print" ],
    [ "d20", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "blue", "pattern" ],
    // fristTop
    [ "ft0", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "white", "print" ],
    [ "ft1", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "gray", "print" ],
    [ "ft2", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "orange", "plain" ],
    [ "ft3", "firstTop", ['cold','chilly','warm','hot'], ['sport'], ['weekend'], "blue", "plain" ],
    [ "ft4", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "pattern" ],
    [ "ft5", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
    [ "ft6", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
    [ "ft7", "firstTop", ['cold','chilly','warm'], ['elegant'], ['work'], "brown", "pattern" ],
    [ "ft8", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['afterhours','weekend'], "black", "print" ],
    [ "ft9", "firstTop", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours','weekend'], "white", "print" ],
    [ "ft10", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "navy", "print" ]





    





]

// const d0 = new Item("d0","/home/marek/Documents/wardrobe/public/itemsImg/d0.jpg", 
// "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "brow", "plain"
//   )

//   const d1 = new Item("d1","/home/marek/Documents/wardrobe/public/itemsImg/d1.jpg", 
//   "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "yellow", "pattern")

function createObj(arr) {
    arr.forEach(el =>
     { let x = new Item(...el)
       myWardrobe.myItems.push(x)
    
    })
}

createObj(items)

