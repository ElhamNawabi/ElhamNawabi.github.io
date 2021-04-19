function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let lat = document.querySelector("#lat");
  let long = document.querySelector("#long");
  let latVal = lat.value.trim();
  let longVal = long.value.trim();
  let latFlag = false;
  let longFlag = false;

  if(latVal < -90 || latVal > 90 || isNaN(latVal)) {
    document.querySelector("#latit > span").innerHTML ="";
    document.querySelector("#latit > span").append("* must be a valid Latitude (-90 to 90)");
    }
    else {
      document.querySelector("#latit > span").innerHTML = "";
      latFlag = true;
    }

  if (longVal < -180 || longVal > 180 || isNaN(longVal)) {
    document.querySelector("#longit > span").innerHTML = "";
    document.querySelector("#longit > span").append("* must be a valid Longitude (-180 to 180)");
  }
  else {
    document.querySelector("#longit > span").innerHTML = "";
    longFlag = true;
  }

  if (latFlag === false || longFlag === false) {
    event.preventDefault();
    return validate();
  }
  //console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
