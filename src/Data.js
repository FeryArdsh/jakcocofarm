import cSugar from "./assets/cSugar.jpg";
import briquettes from "./assets/briquettes.jpg";

const dataProduct = [
  {
    id: 1,
    title: "Coconut Sugar",
    location: "West Java",
    minOrder: "19.000 Kg",
    estimated: "20 Day",
    shippment: "Tanjung Priok",
    packaging: "Paper Bags 25 Kg With Plastic Inner - 49 X 85",
    certificate: "FDA, JAS, CU, USDA, HACCP, MUI, BPOM",
    image: `${cSugar}`,
    titleDescription: "NUCIFERA ORGANIC COCONUT SUGAR",
    description: [
      "Made from 100% coconut flower sap, processed hygienically without using chemicals (sulphite free) from organic coconut plantations in Central Java.",
      "Coconut sugar is very good for diabetics because it has a low glycemic index (LOW GI). For a healthier life, use organic coconut sugar as a sweetener in various foods & beverages",
    ],
  },
  {
    id: 2,
    title: "Briquettes",
    location: "West Java",
    minOrder: "18.000 Kg",
    estimated: "20 Day",
    shippment: "Tanjung Priok",
    packaging: "Private Label & OEM",
    certificate: "Report Of Analysis",
    image: `${briquettes}`,
    titleDescription: "Briquettes Charcoal Coconut",
    description: [
      "Our production base are located in Tangerang, Banten",
      "We assure that we use high-quality raw materials, prices production process, and maximum drying, and we ensure that there are no cracks on the surface of the briquttes and have lot of benefits.",
      "Made from 100% premium quality coconut shells. Suitable for  shisha/hookah and others as it is completely safe to use indoors, is odorless, smokeless, and burns twice as long as wood charcoal.",
    ],
  },
];

export default dataProduct;
