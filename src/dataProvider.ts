import jsonServerProvider from "ra-data-json-server";
export const dataProvider = jsonServerProvider(
 ' https://atme-quiz.onrender.com/api'
);