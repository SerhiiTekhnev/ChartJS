let ctx = document.getElementById('mychart1').getContext('2d');
let myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28'],
        datasets: [{
            label: 'Night.Temp.',
            borderColor: 'rgb(0, 144, 244)',
            data: [-1, -6, -8, -3, 1, 0, -2],
            fill: false,
            // type: 'line',
            },
            {
            label: 'Day.Temp.',
            borderColor: 'rgb(255, 200, 200)',
            data: [5, -1, -3, 2, 5, 2, 1],
            fill: false,
            // type: 'line'
            }],
        
        },
        
    options: {
       
        
    }
})


let cty = document.getElementById('mychart2').getContext('2d');
let myChart2 = new Chart(cty, {
    type: 'bar',
    
    data: {
        labels: ['Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28'],
        datasets: [{
            label: 'Precipitations,mm',
            borderColor: 'rgb(0, 44, 44)',
            backgroundColor: 'rgb(0, 144, 255)',
            borderWidth: 1,
            data: [0, 0.1, 2.7, 0.6, 0, 2, 2],
            
            }],
            
        },
        
    options: {
        
    }
})


let ctz = document.getElementById('mychart3').getContext('2d');
let mychart3 = new Chart(ctz, {
    type: 'horizontalBar',
    
    data: {
        labels: ['Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28'],
        datasets: [{
            label: 'Humidity,%',
            borderColor: 'rgb(0, 44, 44)',
            backgroundColor: 'rgb(0, 200, 255)',
            borderWidth: 1,
            data: [72, 84, 79, 88, 89, 94, 81],
            
            }],
            
        },
        
    options: {
        
    }
})