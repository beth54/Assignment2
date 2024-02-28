const api = 'http://localhost:8000';
 
 
const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
fetch(url)
.then((response) => response.json())
.then((data) =>
{
    let popdat = data.data;
    popdat.sort((a, b) => a.Year - b.Year);

    let table1 = document.getElementById('table');
    popdat.forEach(item => 
    {
        const row = document.createElement('tr');
        row.innerHTML = 
            `<td>${item.Year}</td>
            <td>${item.Population.toLocaleString()}</td>`;
        
        table1.appendChild(row);
    })
})
.catch(error => console.error('Error fetching data:', error));