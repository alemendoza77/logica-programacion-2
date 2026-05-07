function convertirTemperatura() {
    // Obtenemos el valor del input
    let input = document.getElementById("celsiusInput").value;
    let resultadoDiv = document.getElementById("resultado");
    
    // Validación: Convertimos a número y verificamos si es válido
    let celsius = parseFloat(input);

    // Si el input está vacío o no es un número (NaN)
    if (isNaN(celsius) || input.trim() === "") {
        alert("¡Error, joven aprendiz! Debes ingresar un valor numérico válido.");
        document.getElementById("celsiusInput").value = ""; // Limpiamos el input
        resultadoDiv.style.display = "none";
        return;
    }

    // Fórmulas de conversión
    // Fahrenheit: (C * 9/5) + 32
    // Kelvin: C + 273.15
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    // Mostramos los resultados
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h4 style="color: #ffb703;">Resultados:</h4>
        <p class="mb-1"><strong>Grados Kelvin:</strong> ${kelvin.toFixed(2)}</p>
        <p class="mb-0"><strong>Grados Fahrenheit:</strong> ${fahrenheit.toFixed(2)}</p>
    `;

    // Imprimimos resultado en la consola
    console.log(`Entrada: ${celsius}`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}