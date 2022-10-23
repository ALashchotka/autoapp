import {
  ADDITIONAL_COSTS_DEFAULT,
  UNCLE_PRICE_DEFAULT,
} from "../screens/Calculator/constants";

export function useCalculator({
  year,
  price,
  volume,
  unclePrice = UNCLE_PRICE_DEFAULT,
  additionalCosts = ADDITIONAL_COSTS_DEFAULT,
}: any) {
  if (!year || !price || !volume) {
    return 0;
  }

  const parsedPrice = parseInt(price, 10) || 0;
  const parsedVolume = parseInt(volume, 10) || 0;

  const duty = getDuty({
    year,
    price: parsedPrice,
    volume: parsedVolume,
  });

  return (
    (unclePrice ? duty / 2 : duty) + parsedPrice + unclePrice + additionalCosts
  );
}

function getDuty({ year, price, volume }: any) {
  if (year >= 2019) {
    if (price <= 8500) {
      return price * 0.54 < volume * 2.5 ? volume * 2.5 : price * 0.54;
    } else if (price > 8500 && price <= 16700) {
      return price * 0.48 < volume * 3.5 ? volume * 3.5 : price * 0.48;
    } else if (price > 16700 && price <= 42300) {
      return price * 0.48 < volume * 5.5 ? volume * 5.5 : price * 0.48;
    } else if (price > 42300 && price <= 84500) {
      return price * 0.48 < volume * 7.5 ? volume * 7.5 : price * 0.48;
    } else if (price > 84500 && price <= 169000) {
      return price * 0.48 < volume * 15 ? volume * 15 : price * 0.48;
    } else if (price > 169000) {
      return price * 0.48 < volume * 20 ? volume * 20 : price * 0.48;
    }
  } else if (year >= 2018) {
    if (volume <= 1000) {
      return volume * 1.5;
    } else if (volume > 1000 && volume <= 1500) {
      return volume * 1.7;
    } else if (volume > 1500 && volume <= 1800) {
      return volume * 2.5;
    } else if (volume > 1800 && volume <= 2300) {
      return volume * 2.7;
    } else if (volume > 2300 && volume <= 3000) {
      return volume * 3;
    } else if (volume > 3000) {
      return volume * 3.6;
    }
  } else {
    if (volume <= 1000) {
      return volume * 3;
    } else if (volume > 1000 && volume <= 1500) {
      return volume * 3.2;
    } else if (volume > 1500 && volume <= 1800) {
      return volume * 3.5;
    } else if (volume > 1800 && volume <= 2300) {
      return volume * 4.8;
    } else if (volume > 2300 && volume <= 3000) {
      return volume * 5;
    } else if (volume > 3000) {
      return volume * 5.7;
    }
  }

  return 0;
}
