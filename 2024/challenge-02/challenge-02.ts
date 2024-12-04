function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map(name => name.length));
  const bordeSuperiorInferior = '*'.repeat(maxLength + 4);
  let marco = bordeSuperiorInferior + '\n';
  for (let nombre of names) {
    marco += `* ${nombre.padEnd(maxLength)} *\n`;
  }
  marco += bordeSuperiorInferior;
  return marco;
}
