import { series } from './data.js';
const tableBody = document.getElementById('series-table-body');
const detailContainer = document.getElementById("serie-detail");
function cargarTabla() {
    let totalTemporadas = 0;
    if (tableBody) {
        series.forEach((serie) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td> ${serie.name} </td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
            `;
            row.addEventListener('click', () => showSerieDetail(serie));
            tableBody.appendChild(row);
            totalTemporadas += serie.seasons;
        });
    }
    const promedio = totalTemporadas / series.length;
    const filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = `
    <td colspan="4"><strong>Seasons average: ${promedio.toFixed(0)}</strong></td>`;
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(filaPromedio);
}
function showSerieDetail(serie) {
    if (!detailContainer)
        return;
    detailContainer.innerHTML = `
    <div class="card" style="width: 100%;">
      <img src="${serie.image}" class="card-img-top w-100" style="height: 200px; object-fit: cover;" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="btn btn-primary">Watch</a>
      </div>
    </div>
  `;
}
cargarTabla();
