const { TascaService } = require('./services/TascaService');


(async function () {
  const ts = new TascaService();

  // Llistat
  let sortida = await ts.llistarTasques();
  console.log('[APP1]', sortida);

  // Afegir
  const novaTasca = {nom:'tasca nova'}
  await ts.afegirTasca(novaTasca)
  sortida = await ts.llistarTasques();
  console.log('[APP2]', sortida);

  // Esborrar
  await ts.esborrarTasca(3);
  sortida = await ts.llistarTasques();
  console.log('[APP3]', sortida);

  // Actualitzar
  await ts.actualitzarTasca({id:1, nom:'Nou Nom'});
  sortida = await ts.llistarTasques();
  console.log('[APP3]', sortida);

})();


