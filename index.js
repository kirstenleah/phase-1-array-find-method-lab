// code your solution here

// function loopAndFind(result, finder){
//     for(let item of result){
//       if(finder(item) === true){
//         outcome = item
//         break
//       }
//     }
//     return outcome
//   }
//   function superbowlWin(win){
//     if(win.result === 'W'){
//     console.log(superbowlWin)
//     return win.year
//     }
//   }

// function superbowlWin(record){
//     let answer = record.find(function(game) {
//         return game.result === 'W';
//     });
//     if (answer)return answer.year
// }

function loopAndFind(arr, finder){
    let answer;
    for(let obj of arr) {
        if(finder(obj)) {
            answer = obj;
            break;
        }
    }
    return answer;
  }
function superbowlWin(arr) {
    let answer = loopAndFind(arr, function(obj) {
    return obj.result === 'W';
});
if (answer){
    return answer.year;
}
}
//   if(win.result === 'W'){
//         console.log(superbowlWin)
//         return win.year