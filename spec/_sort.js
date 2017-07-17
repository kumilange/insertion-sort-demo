describe('Your sorting algo', () => {
  it('should return the sorted data with valid parameter', () => {
    expect(insertionSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(insertionSort([5, 198, 28])).toEqual([5, 28, 198]);
    expect(insertionSort([7, 30, 1, 78])).toEqual([1, 7, 30, 78]);
  });

  it('should return empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  it('should throw an error if parameter is boolean', () => {
    expect(()=> insertionSort(false)).toThrow('Need an array');
  });

  it('should throw an error if parameter is boolean', () => {
    expect(()=> insertionSort('test')).toThrow('Need an array');
  });

  it('should throw an error if parameter is boolean', () => {
    expect(()=>insertionSort({})).toThrow('Need an array');
  });
});