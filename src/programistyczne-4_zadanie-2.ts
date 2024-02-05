import { TESTS } from "./tests/tests.data";


interface RoadDetail {
  from: string;
  to: string;
  cost: number;
}

interface CheckCanBuildParams {
  citiesNum: number;
  roadsNum: number;
  budget: number;
  cities: string[];
  roads: string[];
}

const splitRoadsAndCosts = (roads: string[]): RoadDetail[] => {
  return roads.map(road => {
    const [from, to, cost] = road.split(' ');
    return {
      from,
      to,
      cost: Number(cost)
    }
  });
}

function checkCanBuild({ citiesNum, roadsNum, budget, cities, roads }: CheckCanBuildParams) {
  const roadsDetails = splitRoadsAndCosts(roads);
  const resultConnections: string[] = [];
  const wrappedCities = cities.map(city => [city])
  const sortedRoads = roadsDetails.sort((a, b) => a.cost - b.cost);
  let totalCost = 0;

  for (let road of sortedRoads) {
    const { cost, from: roadFrom, to: roadTo } = road;
    let startCities = null;
    let endCities = null;
    for (let cityCollectionIdx = 0; cityCollectionIdx < wrappedCities.length; cityCollectionIdx++) {
      if (wrappedCities[cityCollectionIdx].includes(roadFrom)) startCities = wrappedCities[cityCollectionIdx];
      if (wrappedCities[cityCollectionIdx].includes(roadTo)) endCities = wrappedCities[cityCollectionIdx];
    }
    if (startCities === endCities) continue;

    totalCost += cost;

    if (startCities.length <= endCities.length) {
      startCities.splice(startCities.indexOf(roadFrom), 1);
      endCities.push(roadFrom);
    } else {
      endCities.splice(endCities.indexOf(roadTo), 1);
      startCities.push(roadTo);
    }

    resultConnections.push(`${roadFrom} ${roadTo}`);

    if (totalCost > budget) {
      console.log("NIE");
      return false;
    }
  }

  if (totalCost <= budget) {
    console.log("TAK");
    console.log(totalCost);
    console.log(resultConnections.join(', '));
  }
}

const { m, n, b, roads, cities } = TESTS[0].input;
checkCanBuild({ citiesNum: m, roadsNum: n, budget: b, cities, roads });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj kolejno liczbę miast, liczbę dróg, budżet inwestycji (w formacie m n b): ', (citiesAndRoadsNumberAndBudget: string) => {
  const [m, n, b] = citiesAndRoadsNumberAndBudget.split(' ').map(Number);
  rl.question('Podaj nazwy miast (w formacie X, Y, Z): ', (cities: string) => {
    rl.question('Podaj drogi (w formacie X Y 0, X Z 5, Y Z 10): ', (roads: string) => {
      checkCanBuild({ citiesNum: m, roadsNum: n, budget: b, cities: cities.split(', '), roads: roads.split(', ') });
      rl.close();
    });
  });
});