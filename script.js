const planets = {
    solen: 27.01,
    merkur: 0.38,
    venus: 0.91,
    jorden: 1,
    månen: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptun: 1.19,
    pluto: 0.06
};

const calculateWeight = () => {
    const weightInput = document.getElementById('weightInput');
    const weight = parseFloat(weightInput.value);

    if (isNaN(weight)) {
        alert('Vennligst skriv inn en gyldig vekt.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (const planet in planets) {
        const planetWeight = weight * planets[planet];
        const planetDiv = document.createElement('div');
        planetDiv.innerHTML = `
            <h2>${planet.charAt(0).toUpperCase() + planet.slice(1)}</h2>
            <p>Vekten din på ${planet} er ${planetWeight.toFixed(2)} kg.</p>
            <img src="planet_images/${planet}.png" alt="${planet}">
        `;
        resultsDiv.appendChild(planetDiv);
    }
};

const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateWeight);
