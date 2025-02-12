function createChart(chartId, type, labels, data, options = {}) {
    const ctx = document.getElementById(chartId).getContext('2d');

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: options.label || 'Dataset 1',
                    data: data,
                    backgroundColor: options.backgroundColor || 'rgba(75, 192, 192, 0.5)', // رنگ پس‌زمینه
                    borderColor: options.borderColor || 'transparent', // رنگ مرز
                    borderWidth: options.borderWidth || 1, // ضخامت مرز
                    barThickness: options.barThickness || 20, // قطر ستون‌ها (برای نمودار میله‌ای)
                    borderRadius: options.borderRadius || 10, // گرد کردن لبه‌ها (برای نمودار میله‌ای)
                },
            ],
        },
        options: { ...defaultOptions, ...options },
    });
}

// نمودار میله‌ای (bar chart) با شخصی‌سازی ویژگی‌ها
createChart(
    'barChart',
    'bar',
    ['January', 'February', 'March', 'April', 'May'],
    [12, 19, 3, 5, 2],
    {
        label: 'Bar Chart Data',
        backgroundColor: 'rgba(255, 255, 255, 1)', // رنگ سفید برای هر ستون
        borderColor: 'transparent', // حذف خط مرز
        borderWidth: 0, // حذف مرز
        barThickness: 10, // عرض 5 سانتی‌متر معادل 189 پیکسل
        borderRadius: 10, // گرد کردن لبه‌های میله‌ها
    }
);

// نمودار خطی اول (line chart) با شخصی‌سازی ویژگی‌ها
createChart(
    'lineChart1',
    'line',
    ['June', 'July', 'August', 'September', 'October'],
    [10, 15, 8, 12, 6],
    {
        label: 'Line Chart 1 Data',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        barThickness: 0, // برای نمودار خطی، barThickness بی‌اثر است
        borderRadius: 0, // برای نمودار خطی، borderRadius بی‌اثر است
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    }
);

// نمودار خطی دوم (line chart) با شخصی‌سازی ویژگی‌ها
createChart(
    'lineChart2',
    'line',
    ['November', 'December', 'January', 'February', 'March'],
    [20, 25, 18, 22, 16],
    {
        label: 'Line Chart 2 Data',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        barThickness: 0, // برای نمودار خطی، barThickness بی‌اثر است
        borderRadius: 0, // برای نمودار خطی، borderRadius بی‌اثر است
    }
);
