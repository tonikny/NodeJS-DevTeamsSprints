const { TascaService } = require('./services/TascaService');


(async function () {
  const ts = new TascaService();
  let sortida = await ts.llistarTasques();
  console.log('[APP1]', sortida);
  const novaTasca = {nom:'tasca nova'}
  await ts.afegirTasca(novaTasca)
  sortida = await ts.llistarTasques();
  console.log('[APP2]', sortida);
  await ts.esborrarTasca(3);
  sortida = await ts.llistarTasques();
  console.log('[APP3]', sortida);
})();


