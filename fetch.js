const fetch = require('node-fetch');

async function getSP500() {
  try {
    const res = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1mo&range=2y');
    const data = await res.json();
    const timestamps = data.chart.result[0].timestamp;
    const closes = data.chart.result[0].indicators.quote[0].close;
    
    const results = [];
    for (let i = 0; i < timestamps.length; i++) {
      const date = new Date(timestamps[i] * 1000);
      if (date.getFullYear() === 2025) {
        results.push({
          month: date.getMonth() + 1,
          close: closes[i]
        });
      }
    }
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.error(e);
  }
}

getSP500();
