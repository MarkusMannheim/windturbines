document.getElementById('distanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const observerHeight = parseFloat(document.getElementById('observerHeight').value);
    const turbineHeight = parseFloat(document.getElementById('turbineHeight').value);
  
    if (!isNaN(observerHeight) && !isNaN(turbineHeight)) {
      const distance = calculateDistance(observerHeight, turbineHeight);
      document.getElementById('result').innerHTML = `<p>The turbine can be seen from ${(distance / 1000).toFixed(1)} kilometres away in perfect conditions.</p>`;
    } else {
      document.getElementById('result').innerHTML = '<p>Enter valid numbers</p>';
    }
  });
  
  function calculateDistance(observerHeight, turbineHeight) {
    const radiusEarth = 6371000; // Approximate radius of the Earth in kilometers
    return Math.sqrt((radiusEarth + observerHeight) ** 2 - radiusEarth ** 2) +
        Math.sqrt((radiusEarth + turbineHeight) ** 2 - radiusEarth ** 2);
  }
  