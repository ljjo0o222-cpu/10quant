const https = require('https');

https.get('https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1mo&range=2y', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const timestamps = json.chart.result[0].timestamp;
      const closes = json.chart.result[0].indicators.quote[0].close;
      
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
  });
});
