import { series } from './data.js';


const tableBody: HTMLElement | null = document.getElementById('series-table-body');
function cargarTabla(): void {
    let totalTemporadas = 0;
    if (tableBody) {
        
        series.forEach((serie) => {
            const row = document.createElement('tr');

            row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td> <a href="${serie.link}" target="_blank">${serie.name} </a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
            `;

            tableBody.appendChild(row);
            totalTemporadas += serie.seasons;
        });
    }

    const promedio = totalTemporadas/series.length;
    const filaPromedio = document.createElement("tr");

    filaPromedio.innerHTML =`
    <td colspan="4"><strong>Seasons average: ${promedio.toFixed(0)}</strong></td>`;
    
    tableBody?.appendChild(filaPromedio)

}


cargarTabla();
