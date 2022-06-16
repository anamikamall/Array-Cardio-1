 const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [ 'Mall, Anamika', 'Mall, Ashish', 'Singh, Ayush', 'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

     /* Array.prototype.filter() */
     //filter creates new arry filled with elements that pass provided test case by a function
    // 1. Filter the list of inventors for those who were born in the 1500's
     const fifteen = inventors.filter(function(inventor) {
         if(inventor.year >=1500 && inventor.year < 1600) {
             return true; //keep it
         }
         // optional
         else {
             return false;
         }
     });
     console.table(fifteen); // print in tabular form
     //or use arrow function
     const fif = inventors.filter(inventor => (inventor.year >=1500 && inventor.year <1600))
     console.table(fif);

     /* Array.prototype.map() */
     // map creates a new array by calling a function for every array element (returns array of same length)
    // 2. Give us an array of the inventor first and last names
    const fullname = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log(fullname)

    /* // Array.prototype.sort() */
    //sort array in particular order
    // 3. Sort the inventors by birthdate, oldest to youngest
    const order = inventors.sort(function(a,b) {  //a=first person b=second person
        if(a.year > b.year)
        return 1;  //if positive, b is sorted before a
        else
        return -1;  // if negative , a is sorted before b and if zero no change in sorting order
    } );
    console.table(order);
    // or using ternary operator
    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
    console.table(ordered);

    /*// Array.prototype.reduce() */
    // 4. How many years did all the inventors live?
    // reduce allows to build something on every single element
const totalYears = inventors.reduce((total,inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);  //0 because total is undefined so it will give unexpected output
console.log (totalYears);
 //above code is equivalent to this code
    var total = 0;
    for(var i=0; i<inventors.length; i++) {
        total = total + (inventors[i].passed - inventors[i].year);
    }
    console.log(total);

     // 5. Sort the inventors by years lived (oldest to younest)
     const oldest = inventors.sort(function(a,b) {
         const last=a.passed - a.year;
         const next=b.passed - b.year;
         return last > next ? -1 : 1;
     });
     console.table(oldest);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //this code will run in console of the given website
    /*const category = document.querySelector('.mw-category');
     const lin = category.querySelectorAll('a'); //will return a Node List
     const link = [...category.querySelectorAll('a')]; //other way to convert array using spread operator
     const links = Array.from(category.querySelectorAll('a'));  //converting it to array cause map function does not work on node list
     const de = links
                 .map(link => link.textContent)  //will return the text content of links
                 .filter(streetName => streetName.includes('de'));
    console.log(de);*/

     // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne , nextOne) => {
        const parts = lastOne.split(', ') //will return array where first element is last name and second element is first name
        //comma and space is common in all names in people array so we split name in form of first name and last name
        const [aLast , aFirst] = lastOne.split(', '); //to destructure array created by split (in parts) and store in their own seperate variable
        const [bLast , bFirst] = nextOne.split(', ');
        // console.log(lastOne);
        // console.log(parts);
        // console.log(alast, afirst);
return aLast > bLast ? 1 : -1 ;
    });
    console.log(alpha); 

     // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transport = data.reduce(function(obj,item) {
if (!obj[item]) { //first check if there is an entry for the instance in array (zero) if not create one entry
    obj[item] = 0;  //making entry for item with initial value 0
}
obj[item]++;  //increment 
// console.log(obj[item]);   prints value 1,2,3
// console.log(obj['car']);  prints frequency of car
// console.log(obj);   //prints object {car: 2, truck: 2, bike: 1}
return obj;
    },{}); //starting with null object
    console.log(transport);
