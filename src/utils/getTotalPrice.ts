import {
  ADDITIONAL_COSTS_DEFAULT,
  UNCLE_PRICE_DEFAULT,
} from "../screens/Calculator/constants";

export function getTotalPrice({
  additionalCosts = ADDITIONAL_COSTS_DEFAULT,
  price,
  unclePrice = UNCLE_PRICE_DEFAULT,
  capacity,
  year,
}: {
  additionalCosts?: number;
  price?: string;
  unclePrice?: number;
  capacity?: string;
  year?: number;
}): number {
  if (!year || !price || !capacity) {
    return 0;
  }

  const parsedPrice: number = parseInt(price, 10) || 0;
  const parsedVolume: number = parseInt(capacity, 10) || 0;

  const duty: number = getDuty({
    year,
    price: parsedPrice,
    capacity: parsedVolume,
  });

  return parseInt(
    (
      (unclePrice ? duty / 2 : duty) +
      parsedPrice +
      unclePrice +
      additionalCosts
    ).toFixed(0),
    10
  );
}

function getDuty({
  year,
  price,
  capacity,
}: {
  year: number;
  price: number;
  capacity: number;
}): number {
  if (year >= 2019) {
    if (price <= 8500) {
      return price * 0.54 < capacity * 2.5 ? capacity * 2.5 : price * 0.54;
    } else if (price > 8500 && price <= 16700) {
      return price * 0.48 < capacity * 3.5 ? capacity * 3.5 : price * 0.48;
    } else if (price > 16700 && price <= 42300) {
      return price * 0.48 < capacity * 5.5 ? capacity * 5.5 : price * 0.48;
    } else if (price > 42300 && price <= 84500) {
      return price * 0.48 < capacity * 7.5 ? capacity * 7.5 : price * 0.48;
    } else if (price > 84500 && price <= 169000) {
      return price * 0.48 < capacity * 15 ? capacity * 15 : price * 0.48;
    } else if (price > 169000) {
      return price * 0.48 < capacity * 20 ? capacity * 20 : price * 0.48;
    }
  } else if (year >= 2018) {
    if (capacity <= 1000) {
      return capacity * 1.5;
    } else if (capacity > 1000 && capacity <= 1500) {
      return capacity * 1.7;
    } else if (capacity > 1500 && capacity <= 1800) {
      return capacity * 2.5;
    } else if (capacity > 1800 && capacity <= 2300) {
      return capacity * 2.7;
    } else if (capacity > 2300 && capacity <= 3000) {
      return capacity * 3;
    } else if (capacity > 3000) {
      return capacity * 3.6;
    }
  } else {
    if (capacity <= 1000) {
      return capacity * 3;
    } else if (capacity > 1000 && capacity <= 1500) {
      return capacity * 3.2;
    } else if (capacity > 1500 && capacity <= 1800) {
      return capacity * 3.5;
    } else if (capacity > 1800 && capacity <= 2300) {
      return capacity * 4.8;
    } else if (capacity > 2300 && capacity <= 3000) {
      return capacity * 5;
    } else if (capacity > 3000) {
      return capacity * 5.7;
    }
  }

  return 0;
}
