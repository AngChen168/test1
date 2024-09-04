document.getElementById('fitCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    const shaftDiameter = parseFloat(document.getElementById('shaftDiameter').value);
    const hubDiameter = parseFloat(document.getElementById('hubDiameter').value);
    const modulusElasticity = parseFloat(document.getElementById('modulusElasticity').value);
    const poissonRatio = parseFloat(document.getElementById('poissonRatio').value);

    const interference = hubDiameter - shaftDiameter;
    const radialStress = (interference / shaftDiameter) * (modulusElasticity / (1 - poissonRatio * poissonRatio)) * 1000; // Pa

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `<p>干涉量: ${interference.toFixed(4)} mm</p>`;
    resultDiv.innerHTML += `<p>徑向應力: ${radialStress.toFixed(2)} MPa</p>`;
});
