export const footballApi = {
  url: 'https://apiv2.apifootball.com/',
  key: '034aa18edcf40688f828cbba37cb6efec11446360bca81af721e46a15117825c',
};

export const countryId = {
  England: 41,
  Romania: 119,
  Denmark: 34,
  Germany: 51,
  Austria: 8,
  Italy: 68,
  Norway: 106,
  France: 46,
};

// There i have changed Country ID-s
// because football API takes us only
// two countries without payment
// (only England and France)

for (const key in countryId) {
  if (countryId[key] % 2) {
    countryId[key] = 41;
  } else {
    countryId[key] = 46;
  }
}
