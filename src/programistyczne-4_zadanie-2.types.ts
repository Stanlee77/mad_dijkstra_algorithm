export interface Test {
    input: {
        m: number;
        n: number;
        b: number;
        roads: string[];
        cities: string[];
    };
    expectedResult: {
        isBuildable: boolean;
        totalCost: number;
        examplePath: string[];
    };
}