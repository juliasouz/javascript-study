/* Add the less than or equal to operator so that the return statements make sense. */
function testLessOrEqual(val) {
  if (val <= 12) { 
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);