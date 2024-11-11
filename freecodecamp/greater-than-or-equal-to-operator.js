/* Add the greater than or equal to operator so that the return statements make sense. */
function testGreaterOrEqual(val) {
  if (val >= 20) { 
    return "20 or Over";
  }

  if (val >= 10) { 
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);