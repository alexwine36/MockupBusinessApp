function convertFarads(farad) {

  var F;

  if (farad == "F") {
    uF = document.getElementById("F").value * Math.pow(10,6);
    // mF = document.getElementById("F").value * Math.pow(10,3);
    // console.log(mF);
    showConversion("Farad");
  }
  if (farad == "mF") {
    uF = document.getElementById("mF").value * Math.pow(10,3);
    console.log(uF);
    showConversion("MilliFarad");
  }
  if (farad == "uF") {
    uF = document.getElementById("uF").value;
    console.log(uF);
    showConversion("MicroFarad");
  }
  if (farad == "nF") {
    uF = document.getElementById("nF").value * Math.pow(10,-3);
    console.log(uF);
    showConversion("Nanofarad");
  }
  if (farad == "pF") {
    uF = document.getElementById("pF").value * Math.pow(10,-6);
    console.log(uF);
    showConversion("PicoFarad");
  }
  function showConversion(type) {
    F = uF * Math.pow(10,-6);
    mF = uF * Math.pow(10,-3);
    nF = uF * Math.pow(10,3);
    pF = uF * Math.pow(10,6);

    // mF = F * Math.pow(10,3);
    // uF = F * Math.pow(10,6);
    // nF = F * Math.pow(10,9);
    // pF = F * Math.pow(10,12);

    document.getElementById("F").value = F;
    document.getElementById("mF").value = mF;
    document.getElementById("uF").value = uF;
    document.getElementById("nF").value = nF;
    document.getElementById("pF").value = pF;
    document.getElementById("conversionType").innerHTML = type;
  }

}
