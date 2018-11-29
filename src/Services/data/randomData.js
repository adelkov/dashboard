export const generateChartData = () => {
    const data = [
        { name: 'Mon', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Tue', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Wed', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Thu', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Fri', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Sat', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
        { name: 'Sun', Visits: Math.floor(Math.random() * 3000), Orders: Math.floor(Math.random() * 3000) },
    ];
    return data;
};
