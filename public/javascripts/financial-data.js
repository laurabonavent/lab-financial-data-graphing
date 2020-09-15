const url = `http://api.coindesk.com/v1/bpi/historical/close.json?start=<${$datefrom}>&end=<${$dateto}>`;


axios.get(url)
  .then(response => {
    //console.log(response.data)
    printTheChart(response.data)
  })
  .catch()


function printTheChart(data) {
  const indexPrice = [];
  
  const date = Object.keys(data.bpi)
  
  Object.values(data.bpi).forEach(el => {
    indexPrice.push(el)
  })
  console.log(indexPrice);

  var ctx = document.getElementById('myChart').getContext('2d');

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels : date,
      datasets : [
        {
          label : "Index Prices",
          data : indexPrice
        }
      ]
    }
    
});
}

const $datefrom = document.querySelector('#datefrom')

$datefrom.addEventListener('click', (event)=> {
  // alert("coucou")
})

const $dateto = document.querySelector('#dateto')

$dateto.addEventListener('click', (event)=> {
  // alert("coucou date to")
})