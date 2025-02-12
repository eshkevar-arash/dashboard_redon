const operationNavbarList = document.querySelector('.operation-navbar_list')
let operationNavbarItems = Array.from(operationNavbarList.children)
let operationSections = document.querySelectorAll('.operation__section')
operationSections = Object.values(operationSections)
operationNavbarList.addEventListener('click' , function (event){
    let targetLi = event.target && event.target.closest('.operation-navbar_item')
    if (targetLi){
        operationNavbarItems.forEach(item => {
            item.classList.remove('active')
        })
        targetLi.classList.add('active')
        let index = operationNavbarItems.indexOf(targetLi)
        operationSections.forEach(function (section){
            section.classList.remove('fade')
        })
        operationSections[index].classList.add('fade')
    }
})
const options = {
    chart: {
        fontFamily: 'Poppins',
        type: 'line',
        height: 350
    },
    series: [{
        name: 'Sales',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
            style: {
                colors: '#666' ,// تغییر رنگ فونت محور افقی
                fontSize: '12px' // سایز فونت دلخواه
            }
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: '#666' // تغییر رنگ فونت محور عمودی
            }
        }
    },
    title: {
        text: 'Monthly Sales Data',
        align: 'center',
        style: {
            fontSize: '10px',
            color: '#666'
        }
    },

};

var chart = new ApexCharts(document.querySelector("#chart-bitcoin"), options);
chart.render();


var resetCssClasses = function(activeEl) {
    var els = document.querySelectorAll('.chart-bitcoin_btn')
    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('active')
    })

    activeEl.target.classList.add('active')
}

document
    .querySelector('#one_month')
    .addEventListener('click', function(e) {
        resetCssClasses(e)
        /*  chart.updateSeries([{
              name: 'Updated Sales',
              data: [3, 5, 45, 6, 70, 80, 95, 100, 130]
          }]);*/
        chart.updateOptions({
            xaxis: {
                categories: ['1', '1', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            series: [{
                name: 'Sales',
                data: [10, 10, 0, 20, 49, 62, 69, 91, 148]
            }],
        }, true); // 'true' برای انیمیشن
    })

document
    .querySelector('#six_months')
    .addEventListener('click', function(e) {
        resetCssClasses(e)
        chart.updateSeries([{
            name: 'Updated Sales',
            data: [5, 6, 45, 60, 7, 80, 95, 100, 130]
        }]);
        chart.updateOptions({
            xaxis: {
                categories: ['2', '2', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            }
        }, true); // 'true' برای انیمیشن
    })

document.querySelector('#one_year').addEventListener('click', function(e) {
    resetCssClasses(e)
    chart.updateSeries([{
        name: 'Updated Sales',
        data: [300, 500, 45, 60, 70, 80, 95, 100, 10]
    }]);
    chart.updateOptions({
        xaxis: {
            categories: ['3', '3', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    }, true); // 'true' برای انیمیشن
})

document.querySelector('#ytd').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.updateSeries([{
        name: 'Updated Sales',
        data: [3, 5, 4, 60, 70, 80, 95, 100, 130]
    }]);
    chart.updateOptions({
        xaxis: {
            categories: ['4', '4', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    }, true); // 'true' برای انیمیشن
})

document.querySelector('#all').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.updateSeries([{
        name: 'Updated Sales',
        data: [0, 0, 0, 60, 70, 80, 95, 100, 130]
    }]);
    chart.updateOptions({
        xaxis: {
            categories: ['5', '5', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    }, true); // 'true' برای انیمیشن
})


