function convert() {
    
    let celsiusInput = document.getElementById("celsius").value;
    let fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsiusInput}°C is equal to ${fahrenheit}°F.`;
}