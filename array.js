//1. Create a new array called `planets` that holds all of the names of the planets
//       I used the below line uncommented for exercises 1 - 12
//let planet = ["Earth", "Jupiter", "Neptune", "Mars", "Saturn", "Mercury", "Uranus", "Venus"];
//console.log(planet);

//2. What is the index of **Mars**? 
//[3]


//3. Print **Mars** to the command line from the `planet` array.
//console.log(planet[3]);

//4. Print **Saturn** to the command line from the `planet` array.
//console.log(planet[4]);

//5. Print **Venus** to the command line from the `planet` array.
//console.log(planet[7]);

//6. Print out how many elements are in the `planet` array.
//console.log (planet.length);

//7. Loop through the `planet` array using a for loop and print the name of each planet.
// for (let i = 0; i < planet.length; i++){
//    console.log(planet[i]);
//}
   
//8. Create a while loop that iterates through each of the items in the `planet` array
//and changes each element to lowercase.
// let planet = ["Earth", "Jupiter", "Neptune", "Mars", "Saturn", "Mercury", "Uranus", "Venus"]
// let i = 0;

// while (i < planet.length){
//    console.log(planet[i].toLowerCase());
//    i++;
// }

//This was the one I was gonna ask about, is the map for lowercase the right way to do it?

// //9. Add **Pluto** to the `planet` array.
//planet.push("Pluto");
//console.log (planet)


//10. Loop through each planet in the `planet` array and print them on the command line.
// planet.push("Pluto")
//    for (let planets = 0; planets < planet.length; planets++)
//    console.log(planet[planets])


//11. Since **Pluto** isn't really a planet, delete it from the `planet` array.
//12. Loop through the `planet` array and print the updated values (Pluto removed).
// planet.push("Pluto")
// planet.pop();
//    for (let planets = 0; planets < planet.length; planets++){
//    console.log(planet[planets]);}

//---------------------------------------------------------------------------------------

//13. Create a new array called `nums` with the following values [6, 8, 10, 12, 14, 16]
//14. Loop through `nums`  and print each number to the command line. 

// let nums = [6, 8, 10, 12, 14, 16]
// for (let values = 0; values < nums.length; values++)
//    console.log(nums[values])

//15. Add 99 to the end of the `nums` array.
//16. Add 23 to the beginning of the `nums` array. 
// let nums = [6, 8, 10, 12, 14, 16]
// nums.unshift(23)
// nums.push(99);
//    for (let values = 0; values < nums.length; values++)
//    console.log(nums[values])

//17. Loop through `nums` and multiply each number by 5. 
// let nums = [6, 8, 10, 12, 14, 16]
// nums.unshift(23)
// nums.push(99);
//    for (let i = 0; i < nums.length; i++)
//    console.log(nums[i]*5)

//18. Sum all of the elements of the `nums` array.

// let nums = [6, 8, 10, 12, 14, 16];
// nums.push(23);
// nums.push(99);
// let total = 0;

// for (let i = 0; i < nums.length; i++){
//    total = (total + nums[i]*5);
// }

// console.log(total);

