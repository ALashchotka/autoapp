/* eslint-disable sort-exports/sort-exports */
export const BODY: Record<string, string> = {
  Седан: "sedan",
  Универсал: "wagon",
  Хэтчбек: "hatchback",
  Минивэн: "minivan",
  Внедорожник: "suv",
  "Купе (Coupe)": "coupe",
  Кабриолет: "cabriolet",
};

export const BRANDS: Record<string, string> = {
  "Alfa Romeo": "alfaRomeo",
  "Land Rover": "landRover",
  "Mercedes-Benz": "mercedes",
};

export const FUEL: Record<string, string> = {
  Бензин: "petrol",
  "Бензин / газ": "petrol",
  "Бензин / электричество": "petrol",
  Дизель: "diesel",
  "Дизель / электричество": "diesel",
};

export const GEARBOX: Record<string, string> = {
  Автоматическая: "automatic",
  Механическая: "manual",
};

const AUDI_MODELS: Record<string, string> = {
  "A5 SPORTBACK": "A5",
  "A7 SPORTBACK": "A7",
  "Q3 Sportback": "Q3",
  "Q5 Sportback": "Q5",
};

const BMW_MODELS: Record<string, string> = {
  116: "1Series",
  118: "1Series",
  120: "1Series",
  123: "1Series",
  125: "1Series",
  128: "1Series",
  130: "1Series",
  135: "1Series",
  M135: "1Series",
  M140: "1Series",
  218: "2Series",
  220: "2Series",
  225: "2Series",
  228: "2Series",
  230: "2Series",
  M235: "2Series",
  M240: "2Series",
  "214 Active Tourer": "2SeriesActiveTourer",
  "216 Active Tourer": "2SeriesActiveTourer",
  "218 Active Tourer": "2SeriesActiveTourer",
  "220 Active Tourer": "2SeriesActiveTourer",
  "225 Active Tourer": "2SeriesActiveTourer",
  "214 Gran Tourer": "2SeriesGranTourer",
  "216 Gran Tourer": "2SeriesGranTourer",
  "218 Gran Tourer": "2SeriesGranTourer",
  "220 Gran Tourer": "2SeriesGranTourer",
  315: "3Series",
  316: "3Series",
  318: "3Series",
  "318 Gran turismo": "3Series",
  "320": "3Series",
  "320 Gran turismo": "3Series",
  323: "3Series",
  324: "3Series",
  325: "3Series",
  "325 Gran turismo": "3Series",
  328: "3Series",
  "328 Gran turismo": "3Series",
  330: "3Series",
  "330 Gran turismo": "3Series",
  340: "3Series",
  "340 Gran turismo": "3Series",
  M340d: "3Series",
  M340i: "3Series",
  418: "4Series",
  420: "4Series",
  "420 Gran Coupe": "4Series",
  425: "4Series",
  "425 Gran Coupe": "4Series",
  428: "4Series",
  "428 Gran Coupe": "4Series",
  430: "4Series",
  "430 Gran Coupe": "4Series",
  435: "4Series",
  "435 Gran Coupe": "4Series",
  440: "4Series",
  "440 Gran Coupe": "4Series",
  M440: "4Series",
  518: "5Series",
  520: "5Series",
  "520 Gran turismo": "5Series",
  523: "5Series",
  524: "5Series",
  525: "5Series",
  528: "5Series",
  530: "5Series",
  "530 Gran turismo": "5Series",
  535: "5Series",
  "535 Gran turismo": "5Series",
  540: "5Series",
  545: "5Series",
  550: "5Series",
  "550 Gran turismo": "5Series",
  M550: "5Series",
};

const LAND_ROVER_MODELS: Record<string, string> = {
  Evoque: "RangeRoverEvoque",
};

const OPEL_MODELS: Record<string, string> = {
  Astra: "AstraSlashAstraOPS",
  Corsa: "CopsaSlashCorsaOPS",
  Insignia: "InsigniaSlashInsigniaOPS",
  Meriva: "MerivaSlashMerivaOPS",
  Vectra: "VectraSlashVectraOPC",
  Zafira: "ZafiraSlashZafiraOPC",
  "Zafira Life": "ZafiraSlashZafiraOPC",
  "Zafira tourer": "ZafiraSlashZafiraOPC",
};

const PEUGEOT_MODELS: Record<string, string> = {
  "205": "205Slash205GTI",
  "208": "208Slash208GTI",
  "308": "308Slash308GTI",
};

const RENAULT_MODELS: Record<string, string> = {
  Clio: "ClioSlashClioRS",
  Megane: "MeganeSlashMeganeRS",
  Sandero: "SanderoSlashSanderoRS",
};

const VOLVO_MODELS: Record<string, string> = {
  C30: "CMinusseries",
  C303: "CMinusseries",
  "C40 Recharge": "CMinusseries",
  C70: "CMinusseries",
  S40: "SMinusseries",
  S60: "SMinusseries",
  "S60 Cross Country": "SMinusseries",
  S70: "SMinusseries",
  S80: "SMinusseries",
  S90: "SMinusseries",
  V40: "VMinusseries",
  "V40 Cross Country": "VMinusseries",
  V50: "VMinusseries",
  V60: "VMinusseries",
  "V60 Cross Country": "VMinusseries",
  V70: "VMinusseries",
  V80: "VMinusseries",
  V90: "VMinusseries",
  "V90 Cross Country": "VMinusseries",
  XC40: "XCMinusseries",
  XC60: "XCMinusseries",
  XC70: "XCMinusseries",
  XC90: "XCMinusseries",
};

export const MODELS: Record<string, string> = {
  ...AUDI_MODELS,
  ...BMW_MODELS,
  ...LAND_ROVER_MODELS,
  ...OPEL_MODELS,
  ...PEUGEOT_MODELS,
  ...RENAULT_MODELS,
  ...VOLVO_MODELS,
};
