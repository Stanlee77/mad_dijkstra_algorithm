import { Test } from "../programistyczne-4_zadanie-2.types";

export const TESTS: Test[] = [
    {
        input: {

            m: 5,
            n: 6,
            b: 13,
            roads: [
                "A B 5",
                "A E 7",
                "B D 9",
                "B E 1",
                "C D 4",
                "D E 2"
            ],
            cities: ['A', 'B', 'C', 'D', 'E']
        },
        expectedResult: {
            isBuildable: true,
            totalCost: 12,
            examplePath: ["B E", "D E", "D C", "A B", "A E"]
        }
    }
];