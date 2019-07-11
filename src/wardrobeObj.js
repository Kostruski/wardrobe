

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
        this.src = `./${this.id}.jpg`;
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
    // [ "dummy", "dress",["hot"], ["sport"], ["afterhours"], "brown", "plain"],
    // [ "dummy", "firstTop",["hot"], ["sport"], ["afterhours"], "brown", "plain"],
    // [ "dummy", "secondTop",["hot"], ["sport"], ["afterhours"], "brown", "plain"],
    // [ "dummy", "bottom",["hot"], ["sport"], ["afterhours"], "brown", "plain"],
    // [ "dummy", "acessories",["hot"], ["sport"], ["afterhours"], "brown", "plain"],
    // [ "dummy", "shoes",["hot"], ["sport"], ["afterhours"], "brown", "plain"],


    ["d0", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours"], "brown", "plain"],
    ["d1", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours"], "yellow", "pattern"],
    [ "d2", "dress", ['warm','hot'], ['casual'], ['afterhours'], "orange", "plain" ],
    [ "d3", "dress", ['chilly','warm'], ['elegant'], ['work','afterhours'], "black", "plain" ],
    [ "d4", "dress", ['chilly','warm','hot'], ['elegant'], ['work','afterhours'], "black", "plain" ],
    [ "d5", "dress", ['warm','hot'], ['casual'], ['weekend'], "navy", "plain" ],
    [ "d6", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "red", "plain" ],
    [ "d7", "dress", ['warm','hot'], ['elegant','casual'], ['afterhours'], "navy", "pattern" ],
    [ "d8", "dress", ['cold','chilly','warm'], ['elegant'], ['work','afterhours'], "black", "pattern" ],
    [ "d9", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "plain" ],
    [ "d10", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "d11", "dress", ['cold','chilly'], ['sport'], ['weekend'], "pink", "pattern" ],
    [ "d12", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours'], "green", "pattern" ],
    [ "d13", "dress", ['chilly'], ['casual'], ['afterhours'], "brown", "plain" ],
    [ "d14", "dress", ['warm'], ['casual'], ['afterhours'], "yellow", "plain" ],
    [ "d15", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "yellow", "pattern" ],
    [ "d16", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "black", "plain" ],
    [ "d17", "dress", ['warm','hot'], ['casual'], ['afterhours'], "gray", "print" ],
    [ "d18", "dress", ['warm','hot'], ['casual','sport'], ['weekend'], "blue", "pattern" ],
    [ "d19", "dress", ['warm','hot'], ['casual'], ['afterhours'], "green", "print" ],
    [ "d20", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "blue", "pattern" ],
    [ "d21", "dress", ['chilly','warm','hot'], ['elegant','casual'], ['afterhours'], "white", "plain" ],
    [ "d22", "dress", ['chilly','warm','hot'], ['elegant','casual'], ['afterhours'], "black", "pattern" ],
    [ "d23", "dress", ['chilly','warm','hot'], ['casual'], ['afterhours'], "blue", "plain" ],
    [ "d24", "dress", ['chilly','warm','hot'], ['elegant','casual'], ['afterhours'], "violet", "plain" ],
    [ "d25", "dress", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "brown", "plain" ],


    // fristTop
    [ "ft0", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "white", "print" ],
    [ "ft1", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "gray", "print" ],
    [ "ft2", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "orange", "plain" ],
    [ "ft3", "firstTop", ['cold','chilly','warm','hot'], ['sport'], ['weekend'], "blue", "plain" ],
    [ "ft4", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "pattern" ],
    [ "ft5", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
    [ "ft6", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
    [ "ft7", "firstTop", ['cold','chilly','warm'], ['elegant'], ['work'], "brown", "pattern" ],
    [ "ft8", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['afterhours'], "black", "print" ],
    [ "ft9", "firstTop", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours'], "white", "print" ],
    [ "ft10", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "navy", "print" ],
    [ "ft11", "firstTop", ['cold','chilly','warm'], ['elegant'], ['afterhours'], "blue", "plain" ],
    [ "ft12", "firstTop", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "blue", "plain" ],
    [ "ft13", "firstTop", ['chilly','warm','hot'], ['sport'], ['afterhours'], "white", "print" ],
    [ "ft14", "firstTop", ['chilly','warm','hot'], ['sport'], ['afterhours'], "navy", "plain" ],
    [ "ft15", "firstTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "navy", "pattern" ],
    [ "ft16", "firstTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "ft17", "firstTop", ['warm','hot'], ['casual'], ['afterhours'], "black", "print" ],
    [ "ft18", "firstTop", ['chilly','warm','hot'], ['casual'], ['afterhours'], "orange", "plain" ],
    [ "ft19", "firstTop", ['chilly','warm','hot'], ['elegant','casual'], ['work'], "blue", "pattern" ],
    [ "ft20", "firstTop", ['cold','chilly','warm'], ['casual'], ['afterhours'], "yellow", "print" ],
    // [ "ft21", "firstTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "pink", "plain" ],

    //second top
    [ "st0", "secondTop", ['cold','chilly','warm'], ['elegant'], ['work'], "brown", "pattern" ],
    [ "st1", "secondTop", ['chilly','warm','hot'], ['casual'], ['afterhours'], "navy", "print" ],
    [ "st2", "secondTop", ['cold','chilly','warm'], ['elegant','casual'], ['afterhours'], "navy", "plain" ],
    [ "st3", "secondTop", ['cold','chilly'], ['casual','sport'], ['afterhours'], "black", "plain" ],
    [ "st4", "secondTop", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "brown", "pattern" ],
    [ "st5", "secondTop", ['cold','chilly'], ['elegant','casual','sport'], ['work','afterhours'], "brown", "plain" ],
    [ "st6", "secondTop", ['cold','chilly'], ['casual','sport'], ['work','afterhours'], "gray", "plain" ],
    [ "st7", "secondTop", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "st8", "secondTop", ['cold','chilly','warm'], ['casual'], ['afterhours'], "brown", "pattern" ],
    [ "st9", "secondTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "white", "print" ],
    [ "st10", "secondTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "st11", "secondTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "st12", "secondTop", ['chilly','warm'], ['casual','sport'], ['afterhours'], "blue", "print" ],
    [ "st13", "secondTop", ['chilly','warm'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "st14", "secondTop", ['chilly','warm'], ['casual'], ['work','afterhours'], "white", "plain" ],
    [ "st15", "secondTop", ['cold','chilly','warm'], ["casual"], ['work','afterhours'], "red", "print" ],
    [ "st16", "secondTop", ['chilly','warm','hot'], ['sport'], ['afterhours'], "red", "print" ],

    // bottom
    [ "b0", "bottom", ['chilly','warm','hot'], ['sport'], ['afterhours'], "blue", "print" ],
    [ "b1", "bottom", ['chilly','warm','hot'], ['casual'], ['afterhours'], "pink", "print" ],
    [ "b2", "bottom", ['chilly','warm','hot'], ['casual'], ['afterhours'], "orange", "print" ],
    [ "b3", "bottom", ['chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "blue", "plain" ],
    [ "b4", "bottom", ['chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "violet", "plain" ],
    [ "b5", "bottom", ['warm','hot'], ['casual'], ['work','afterhours'], "navy", "plain" ],
    [ "b6", "bottom", ['cold','chilly','warm'], ['casual'], ['work','afterhours'], "violet", "plain" ],
    [ "b7", "bottom", ['cold','chilly','warm'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "b8", "bottom", ['cold','chilly','warm'], ['elegant'], ['work','afterhours'], "navy", "plain" ],
    [ "b9", "bottom", ['cold','chilly','warm'], ['elegant','casual'], ['work','afterhours'], "red", "plain" ],
    [ "b10", "bottom", ['cold','chilly','warm'], ['elegant','casual'], ['work','afterhours'], "brown", "pattern" ],
    [ "b11", "bottom", ['cold','chilly','warm'], ['elegant'], ['work'], "navy", "plain" ],
    [ "b12", "bottom", ['chilly','warm','hot'], ['elegant','casual'], ['work'], "pink", "plain" ],
    [ "b13", "bottom", ['chilly','warm','hot'], ['casual','sport'], ['afterhours'], "red", "plain" ],
    [ "b14", "bottom", ['chilly','warm','hot'], ['casual','sport'], ['afterhours'], "red", "plain" ],
    [ "b15", "bottom", ['cold','chilly','warm'], ['sport'], ['afterhours'], "black", "plain" ],
    [ "b16", "bottom", ['cold','chilly','warm'], ['sport'], ['afterhours'], "gray", "plain" ],
    [ "b17", "bottom", ['cold','chilly','warm'], ['elegant','casual'], ['afterhours'], "violet", "plain" ],
    [ "b18", "bottom", ['warm','hot'], ['casual','sport'], ['afterhours'], "pink", "plain" ],
    [ "b19", "bottom", ['warm','hot'], ['casual','sport'], ['afterhours'], "orange", "print" ],

    // // bags
    [ "a0", "acessories", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours'], "blue", "plain" ],
    [ "a1", "acessories", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours'], "green", "pattern" ],
    [ "a2", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "pink", "plain" ],
    [ "a3", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "yellow", "plain" ],
    [ "a4", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "violet", "pattern" ],
    [ "a5", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "a6", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "a7", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "orange", "plain" ],
    [ "a8", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "black", "print" ],
    [ "a9", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "red", "pattern" ],
    [ "a10", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "white", "plain" ],
    [ "a11", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "a12", "acessories", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "gray", "plain" ],

    // //shoes
    [ "s0", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "yellow", "pattern" ],
    [ "s1", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "brown", "plain" ],
    [ "s2", "shoes", ['cold','chilly'], ['elegant','casual','sport'], ['work','afterhours'], "black", "plain" ],
    [ "s3", "shoes", ['cold','chilly'], ['casual','sport'], ['work','afterhours'], "orange", "plain" ],
    [ "s4", "shoes", ['cold','chilly'], ['casual','sport'], ['work','afterhours'], "white", "plain" ],
    [ "s5", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "gray", "plain" ],
    [ "s6", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "gray", "pattern" ],
    [ "s7", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "brown", "pattern" ],
    [ "s8", "shoes", ['cold','chilly'], ['elegant','casual'], ['work','afterhours'], "red", "plain" ],
    [ "s9", "shoes", ['warm','hot'], ['elegant'], ['work','afterhours'], "black", "plain" ],
    [ "s10", "shoes", ['warm','hot'], ['elegant'], ['work','afterhours'], "pink", "plain" ],
    [ "s11", "shoes", ['warm','hot'], ['elegant','casual'], ['work','afterhours'], "white", "pattern" ],
    [ "s12", "shoes", ['warm','hot'], ['elegant','casual'], ['work','afterhours'], "green", "plain" ],
    [ "s13", "shoes", ['warm','hot'], ['elegant','casual'], ['work','afterhours'], "red", "print" ],
    [ "s14", "shoes", ['warm','hot'], ['elegant','casual'], ['work','afterhours'], "pink", "plain" ],
    [ "s15", "shoes", ['warm','hot'], ['elegant','casual'], ['work','afterhours'], "black", "plain" ],
    [ "s16", "shoes", ['warm','hot'], ['casual','sport'], ['afterhours'], "gray", "plain" ],
    [ "s17", "shoes", ['warm','hot'], ['casual','sport'], ['afterhours'], "white", "plain" ],
    [ "s18", "shoes", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours'], "orange", "plain" ],
    [ "s19", "shoes", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours'], "yellow", "plain" ]


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





// wersja zapasowa z opcją wokr weekend i afterhours

// const items = [
// ["d0", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "brown", "plain"],
// ["d1", "dress", ["warm", "hot"], ["casual", "sport"], ["afterhours",'weekend'], "yellow", "pattern"],
// [ "d2", "dress", ['warm','hot'], ['casual'], ['afterhours','weekend'], "orange", "plain" ],
// [ "d3", "dress", ['chilly','warm'], ['elegant'], ['work','afterhours'], "black", "plain" ],
// [ "d4", "dress", ['chilly','warm','hot'], ['elegant'], ['work','afterhours'], "black", "plain" ],
// [ "d5", "dress", ['warm','hot'], ['casual'], ['weekend'], "navy", "plain" ],
// [ "d6", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "red", "plain" ],
// [ "d7", "dress", ['warm','hot'], ['elegant','casual'], ['afterhours'], "navy", "pattern" ],
// [ "d8", "dress", ['cold','chilly','warm'], ['elegant'], ['work','afterhours'], "black", "pattern" ],
// [ "d9", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "plain" ],
// [ "d10", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours','weekend'], "gray", "plain" ],
// [ "d11", "dress", ['cold','chilly'], ['sport'], ['weekend'], "pink", "pattern" ],
// [ "d12", "dress", ['cold','chilly'], ['casual','sport'], ['afterhours','weekend'], "green", "pattern" ],
// [ "d13", "dress", ['chilly'], ['casual'], ['afterhours','weekend'], "brown", "plain" ],
// [ "d14", "dress", ['warm'], ['casual'], ['afterhours','weekend'], "yellow", "plain" ],
// [ "d15", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "yellow", "pattern" ],
// [ "d16", "dress", ['cold','chilly','warm','hot'], ['elegant'], ['afterhours'], "black", "plain" ],
// [ "d17", "dress", ['warm','hot'], ['casual'], ['afterhours'], "gray", "print" ],
// [ "d18", "dress", ['warm','hot'], ['casual','sport'], ['weekend'], "blue", "pattern" ],
// [ "d19", "dress", ['warm','hot'], ['casual'], ['afterhours'], "green", "print" ],
// [ "d20", "dress", ['chilly','warm','hot'], ['casual'], ['work','afterhours'], "blue", "pattern" ],
// // fristTop
// [ "ft0", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "white", "print" ],
// [ "ft1", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "gray", "print" ],
// [ "ft2", "firstTop", ['chilly','warm','hot'], ['sport'], ['weekend'], "orange", "plain" ],
// [ "ft3", "firstTop", ['cold','chilly','warm','hot'], ['sport'], ['weekend'], "blue", "plain" ],
// [ "ft4", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['work','afterhours'], "navy", "pattern" ],
// [ "ft5", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
// [ "ft6", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "white", "plain" ],
// [ "ft7", "firstTop", ['cold','chilly','warm'], ['elegant'], ['work'], "brown", "pattern" ],
// [ "ft8", "firstTop", ['cold','chilly','warm','hot'], ['casual'], ['afterhours','weekend'], "black", "print" ],
// [ "ft9", "firstTop", ['cold','chilly','warm','hot'], ['casual','sport'], ['afterhours','weekend'], "white", "print" ],
// [ "ft10", "firstTop", ['cold','chilly','warm','hot'], ['elegant'], ['work','afterhours'], "navy", "print" ],
// [ "ft11", "firstTop", ['cold','chilly','warm'], ['elegant'], ['afterhours'], "blue", "plain" ],
// [ "ft12", "firstTop", ['cold','chilly','warm','hot'], ['elegant','casual'], ['work','afterhours'], "blue", "plain" ],
// [ "ft13", "firstTop", ['chilly','warm','hot'], ['sport'], ['afterhours','weekend'], "white", "print" ],
// [ "ft14", "firstTop", ['chilly','warm','hot'], ['sport'], ['afterhours','weekend'], "navy", "plain" ],
// [ "ft15", "firstTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours','weekend'], "navy", "pattern" ],
// [ "ft16", "firstTop", ['cold','chilly','warm'], ['casual','sport'], ['afterhours','weekend'], "gray", "plain" ],
// [ "ft17", "firstTop", ['warm','hot'], ['casual'], ['afterhours'], "black", "print" ],
// [ "ft18", "firstTop", ['chilly','warm','hot'], ['casual'], ['afterhours'], "orange", "plain" ],
// [ "ft19", "firstTop", ['chilly','warm','hot'], ['elegant','casual'], ['work'], "blue", "pattern" ],
// // [ "ft20", "firstTop", ['chilly','warm','hot'], ['elegant','casual'], ['work'], "brown", "plain" ]

