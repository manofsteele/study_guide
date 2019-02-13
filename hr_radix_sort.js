function processData(input) {
  let arr = [];
  let maxElLength = 0;
  let vals = input.split(/[\n\s]/);
  vals.shift();
  vals.shift();
  // console.log(vals);

  vals.forEach(el => {
      arr.push(el);
      if (el.length > maxElLength) {
          maxElLength = el.length;
      }
  });
    // console.log(arr);
      let place = 1; 
      while (place <= maxElLength) {
          let counter = {};
          for (i = 0; i < 10; i++) {
              counter[i] = [];
          }

          arr.forEach(num => {
            numPlace = place;
             
            let key = num[num.length - numPlace];
            if (num.length < place) {
                key = '0';
            }
            
            if (counter[key] !== undefined) {
              counter[key].push(num);
            } else {
              counter[key] = [num];
            }
          });
          let newArr = [];
          // console.log(counter);
          for (i = 0; i < 10; i++) {
            if (counter[i] !== undefined) {
                counter[i].forEach(num => {
                    // console.log(num);
                    newArr.push(num);
                });
            }
          }
          arr = newArr;

          place += 1;
      }
      let result = [];

      arr.forEach(num => {
          result.push(parseInt(num));
      });
      let resultString = "[";

      resultString += result.join(",");
      resultString += "]";

      console.log(resultString);
      return(resultString);
  
}