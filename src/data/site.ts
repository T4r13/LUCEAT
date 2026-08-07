export const site = {
  name: 'LUCEAT',
  email: 'contact@luceat.tn',
  phone: {
    display: '+216 58 881 106',
    href: '+21658881106',
  },
  address: {
    street: 'Cité El Bokri',
    city: 'Sidi Thabet',
    postalCode: '2020',
    governorate: 'Ariana',
    country: 'Tunisie',
    formatted: 'Cité El Bokri, Sidi Thabet 2020, Ariana, Tunisie',
  },
  social: {
    facebook: 'https://www.facebook.com/luceat.tn/',
    instagram: '',
    linkedin: '',
  },
  // No verified coordinates or Google Business listing yet — use a search
  // query against the formatted address rather than an inaccurate embed/pin.
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Cit%C3%A9%20El%20Bokri%2C%20Sidi%20Thabet%202020%2C%20Ariana%2C%20Tunisie',
} as const;
