

let ledZeppelin = {
  id: 'led-zeppelin',
  name: 'Led Zeppelin',
  songs: [{
    title: 'Black Dog',
    band: 'Led Zeppelin',
    rating: 3,
  }],
};

let pearlJam = {
  id: 'pearl-jam',
  name: 'Pearl Jam',
  songs: [
    {
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4,
    }, 
    {
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5,
    }
  ],
};

let fooFighters = {
  id: 'foo-fighters',
  name: 'Foo Fighters',
  songs: [{
    title: 'The Pretender',
    band: 'Foo Fighters',
    rating: 2,
  }],
};
const bands = [ledZeppelin, pearlJam, fooFighters];


export function getAllBandsData() {
  return bands;
}

export function getAllBandIDs() {
  return bands.map(band => {
    return {
      params: {
        id: band.id
      }
    }
  });
}

export function getBandData(id) {
  return bands.find( (band) => band.id === id );
}