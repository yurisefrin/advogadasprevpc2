const fs = require('fs');

const files = [
  'src/components/LandingPageTemplate.tsx',
  'src/app/page.tsx',
  'src/app/politica-de-privacidade/page.tsx',
  'src/app/aposentadoria-tempo-contribuicao/page.tsx',
  'src/app/revisao-pente-fino/page.tsx',
  'src/app/salario-maternidade/page.tsx',
  'src/app/recursos-crps/page.tsx',
  'src/app/pensao-por-morte/page.tsx',
  'src/app/bpc-loas-deficiencia/page.tsx',
  'src/app/bpc-loas-idoso/page.tsx',
  'src/app/auxilio-acidente/page.tsx',
  'src/app/auxilio-reclusao/page.tsx',
  'src/app/aposentadoria-invalidez/page.tsx',
  'src/app/bpc/page.tsx',
  'Site-completo/Hub/home-advogadasprev.html',
  'Site-completo/LandingPages/Aux-doenca/index.html'
];

for (const filePath of files) {
  try {
    const buf = fs.readFileSync(filePath);
    let str = buf.toString('latin1');
    // We injected words like "Análise" and "análise", maybe "iniciais" or "rápida"?
    // "-replace ' — gratuita e mais rápida', ' — sem custos judiciais e mais rápida'" -> "rápida" has 'á'
    // Let's just proactively replace \xE1 -> \xC3\xA1 and \xE9 -> \xC3\xA9 for all
    // occurrences where they MIGHT be bare, but ONLY if they are bare.
    // Actually, it's safer to just replace the exact words we injected:
    const replacements = [
        { from: "An\xE1lise", to: "An\xC3\xA1lise" },
        { from: "an\xE1lise", to: "an\xC3\xA1lise" },
        { from: "r\xE1pida", to: "r\xC3\xA1pida" }
    ];
    let changed = false;
    for (const r of replacements) {
        if (str.includes(r.from)) {
            str = str.split(r.from).join(r.to);
            changed = true;
        }
    }
    
    // Check if there are any other bare \xE1 or \xE9? 
    // Usually UTF-8 characters are two bytes, e.g. \xC3 followed by \xA1
    
    if (changed) {
        fs.writeFileSync(filePath, Buffer.from(str, 'latin1'));
        console.log("Fixed: " + filePath);
    }
  } catch(e) { console.error("Error on " + filePath, e) }
}
