/* eslint-disable prettier/prettier */
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  /* Algolia index credentials */
  appId: "JDBD6EJM33",
  apiKey: "3778de8f66c0009d29f8eb676569871b",
  indexName: "boubyan",

  /* Answers parameters */
  attributesForPrediction: ["description4", "description3", "description2", "description"],
  queryLanguages: ["en"],
  nbHits: 4, // default 10
  threshold: 0, // default 0
  params: {},

  /* Use for styling and text rendering */
  company: "Boubyan",
  responseHeadAttribute: [""],
  logoFormat: "png", // or png
  primary: "#404040",
  blurWeight: "0px",

  searchSuggestion1: "How can I finance my car?",
  searchSuggestion2: "كيف يمكنني الحصول على بطاقة؟"
};
