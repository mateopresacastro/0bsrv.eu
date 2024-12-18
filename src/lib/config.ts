export const config = {
  economy: [
    {
      label: "Inflation",
      dataSetCode: "prc_hicp_manr",
      params: {
        unit: "RCH_A",
        coicop: "CP00",
      },
      euKey:
        "european union (eu6-1958, eu9-1973, eu10-1981, eu12-1986, eu15-1995, eu25-2004, eu27-2007, eu28-2013, eu27-2020)",
      unit: "percent",
    },
    {
      dataSetCode: "namq_10_gdp",
      params: {
        unit: "CLV_PCH_PRE",
        s_adj: "SCA",
        na_item: "B1GQ",
      },
      euKey:
        "euro area (ea11-1999, ea12-2001, ea13-2007, ea15-2008, ea16-2009, ea17-2011, ea18-2014, ea19-2015, ea20-2023)",
      label: "GDP Growth",
      unit: "percent",
    },
    {
      label: "Unemployment",
      dataSetCode: "une_rt_m",
      params: {
        unit: "PC_ACT",
        s_adj: "SA",
        age: "TOTAL",
        sex: "T",
      },
      euKey: "european union - 27 countries (from 2020)",
      unit: "percent",
    },
    {
      label: "House Prices",
      dataSetCode: "prc_hpi_q",
      params: {
        purchase: "TOTAL",
      },
      euKey:
        "european union (eu6-1958, eu9-1973, eu10-1981, eu12-1986, eu15-1995, eu25-2004, eu27-2007, eu28-2013, eu27-2020)",
      unit: "index",
    },
  ],
  demography: [
    {
      label: "Population Growth",
      dataSetCode: "demo_gind",
      params: {
        indic_de: "GROWRT",
        lang: "en",
      },
      euKey: "european economic area (eu28 - 2013-2020 and is, li, no)",
      unit: "percent",
    },
    {
      unit: "count",
      dataSetCode: "demo_gind",
      params: {
        indic_de: "DEATH",
      },
      euKey: "european union - 27 countries (from 2020)",
      label: "Number of Deaths",
      hideEu: true,
      tickFormatter: "millions",
    },
    {
      label: "Population",
      dataSetCode: "demo_gind",
      params: {
        indic_de: "AVG",
      },
      euKey: "euro area – 20 countries (from 2023)",
      unit: "count",
      hideEu: true,
      tickFormatter: "millions",
    },
    {
      label: "Crime Rate",
      dataSetCode: "ilc_mddw03",
      params: {
        unit: "PC",
        hhtyp: "TOTAL",
        incgrp: "TOTAL",
      },
      euKey:
        "european union (eu6-1958, eu9-1973, eu10-1981, eu12-1986, eu15-1995, eu25-2004, eu27-2007, eu28-2013, eu27-2020)",
      unit: "rate",
    },
  ],
} as const;

export const countries = [
  "belgium",
  "bulgaria",
  "czechia",
  "denmark",
  "germany",
  "estonia",
  "ireland",
  "greece",
  "spain",
  "france",
  "croatia",
  "italy",
  "cyprus",
  "latvia",
  "lithuania",
  "luxembourg",
  "hungary",
  "malta",
  "netherlands",
  "austria",
  "poland",
  "portugal",
  "romania",
  "slovenia",
  "slovakia",
  "finland",
  "sweden",
  "iceland",
  "norway",
  "switzerland",
  "montenegro",
  "north macedonia",
  "albania",
  "serbia",
  "türkiye",
  "kosovo",
].sort();
