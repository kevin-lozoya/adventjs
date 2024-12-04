function prepareGifts(gifts: number[]): number[] {
  const sinDuplicados = [...new Set(gifts)]
  // Pasamos  función de comparación para garantizar que se ordena correctamente de menor a mayor.
  // Si no, no pasa los últimos tests
  const ordenados = sinDuplicados.sort((a, b) => a - b)
  return ordenados
}
