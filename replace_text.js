const fs = require('fs');

const files = [
  'src/app/salario-maternidade/page.tsx',
  'src/app/bpc-loas-idoso/page.tsx',
  'src/app/pensao-por-morte/page.tsx',
  'src/app/auxilio-reclusao/page.tsx',
  'src/app/bpc-loas-deficiencia/page.tsx',
  'src/app/auxilio-acidente/page.tsx',
  'src/app/auxilio-doenca/page.tsx',
  'src/app/aposentadoria-tempo-contribuicao/page.tsx',
  'src/app/aposentadoria-idade/page.tsx',
  'src/app/aposentadoria-invalidez/page.tsx',
  'src/app/aposentadoria-especial/page.tsx',
  'Site-completo/LandingPages/Aux-doenca/index.html'
];

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/Quero [A|a]nalisar [M|m]eu [C|c]aso/g, 'Quero saber se tenho direito');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}
