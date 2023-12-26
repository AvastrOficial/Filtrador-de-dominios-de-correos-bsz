function filtrarPorDominio() {
      // Obtenemos el valor del dominio seleccionado
      const dominioDeseado = document.getElementById('dominioSelect').value.trim().toLowerCase();

      // Obtenemos la lista de correos electrónicos y los convertimos en un array
      const listaCorreosTexto = document.getElementById('listaCorreos').value.trim().replace(/\n/g, ' ');
      const listaCorreos = listaCorreosTexto.split(' ').map(correo => correo.trim());

      // Filtrar por el dominio deseado
      const correosFiltrados = listaCorreos.filter(correo => correo.toLowerCase().includes("@" + dominioDeseado));

      // Mostrar los resultados en una tabla
      const resultadosTabla = document.getElementById('resultados');
      resultadosTabla.innerHTML = '';
      
      if (correosFiltrados.length > 0) {
        correosFiltrados.forEach(correo => {
          const row = document.createElement('tr');
          const cell = document.createElement('td');
          cell.textContent = correo;
          row.appendChild(cell);
          resultadosTabla.appendChild(row);
        });
      } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = 'No se encontraron correos electrónicos con el dominio ' + dominioDeseado + '.';
        row.appendChild(cell);
        resultadosTabla.appendChild(row);
      }
    }

    function descargarArchivo() {
      const tabla = document.getElementById('tablaResultados');
      const rows = tabla.getElementsByTagName('tr');
      let contenidoArchivo = '';

      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {
          contenidoArchivo += cells[0].innerText + '\n';
        }
      }

      const enlaceDescarga = document.createElement('a');
      const archivo = new Blob([contenidoArchivo], { type: 'text/plain' });
      enlaceDescarga.href = URL.createObjectURL(archivo);
      enlaceDescarga.download = 'correos_filtrados.txt';
      enlaceDescarga.click();
    }
    
     function limpiarResultados() {
      document.getElementById('resultados').innerHTML = '';
      document.getElementById('listaCorreos').value = '';
    }
    
   function showSubmenu() {
  var dominioSelect = document.getElementById("dominioSelect");
  var hotmailGeneral = document.getElementById("hotmailGeneral");
  var liveSubmenu = document.getElementById("liveSubmenu");
  var yahooSubmenu = document.getElementById("yahooSubmenu");
  var outlookSubmenu = document.getElementById("outlookSubmenu");

  if (dominioSelect.value === "hotmailGeneral") {
    hotmailGeneral.style.display = "block";
    liveSubmenu.style.display = "none";
    yahooSubmenu.style.display = "none";
    outlookSubmenu.style.display = "none";
  } else if (dominioSelect.value === "liveGeneral") {
    hotmailGeneral.style.display = "none";
    liveSubmenu.style.display = "block";
    yahooSubmenu.style.display = "none";
    outlookSubmenu.style.display = "none";
  } else if (dominioSelect.value === "yahooGeneral") {
    hotmailGeneral.style.display = "none";
    liveSubmenu.style.display = "none";
    yahooSubmenu.style.display = "block";
    outlookSubmenu.style.display = "none";
  } else if (dominioSelect.value === "outlookGeneral") {
    hotmailGeneral.style.display = "none";
    liveSubmenu.style.display = "none";
    yahooSubmenu.style.display = "none";
    outlookSubmenu.style.display = "block";
  } else {
    hotmailGeneral.style.display = "none";
    liveSubmenu.style.display = "none";
    yahooSubmenu.style.display = "none";
    outlookSubmenu.style.display = "none";
  }
}
