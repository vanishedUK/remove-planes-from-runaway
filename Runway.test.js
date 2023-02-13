const Runway = require('./Runway');

describe('Runway class', () => {
  beforeEach(() => {
    Runway.planes = [];
  });

  test('checks that the maximum number of planes allowed on the Runway is 100', () => {
    expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
  });

  test('checks you can initialize a Runway class with a name', () => {
    const runway = new Runway('Manchester Airport');
    expect(runway.name).toBe('Manchester Airport');
  });

  test('validates you can add planes to the Runway', () => {
    const runway = new Runway('Manchester Aiport');
    runway.add('Hawker Hurricane');
    runway.add('U-2 Spy Plane');
    expect(Runway.planes).toEqual(['Hawker Hurricane', 'U-2 Spy Plane']);
  });

  test('validates that you receive an error message if you try to add planes to the Runway after it is at max capacity', () => {
    const runway = new Runway('Manchester Aiport');
    for (let i = 0; i < 101; i++) {
      runway.add(`plane ${i + 1}`);
    }
    expect(() => runway.add('P-51 Mustang')).toThrow('runways at full capacity!');
  });

  test('validates you can remove planes from the Runway', () => {
    const runway = new Runway('Manchester Aiport');
    runway.add('Hawker Hurricane');
    runway.add('U-2 Spy Plane');
    runway.remove('Hawker Hurricane');
    expect(Runway.planes).toEqual(['U-2 Spy Plane']);
  });

  test('validates that you receive an error message if you try to remove planes from the Runway when there are no planes currently in the Runway', () => {
    const runway = new Runway('Manchester Aiport');
    expect(() => runway.remove('Hawker Hurricane')).not.toThrow();
  });
});
