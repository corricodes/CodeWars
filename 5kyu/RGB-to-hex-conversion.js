// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


// first tryyyy
function rgb(r, g, b){
  return convertToRGB(r)+convertToRGB(g)+convertToRGB(b)
}

const convertToRGB = (rgbVal) =>{

  if(rgbVal <= 0) return '00'
  if(rgbVal >= 255) return 'FF'

  firstHex=parseInt(rgbVal/16)
  secondHex=((rgbVal/16)-firstHex) * 16

  return getHexValue(firstHex)+getHexValue(secondHex)

}

const getHexValue = (digit) =>{
  const rgbToHex = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
  }

  return rgbToHex[digit.toString()]

}

// simplified
function rgb(r, g, b) {
  //RGB Code validation/ conversion
  const rgbToHex = function(arg) {
    let x = arg;
    //validate rgb values
    if (x < 0) {
      x = 0;
    }else if(x > 255) {
      x = 255;
    }
    //turn each rgb value into a hex value
    let hex = Number(x).toString(16);
    //ensure there are 2 digits in each hex value
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    //return hexcode
    console.log(hex);
    return hex;
  };

  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);

  let hexColor = red + green + blue;
  console.log(hexColor.toUpperCase())
  return hexColor.toUpperCase();
};

// new solution
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}
