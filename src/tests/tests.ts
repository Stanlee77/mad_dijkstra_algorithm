import { Test } from "../programistyczne-4_zadanie-2.types";
import { TESTS } from "./tests.data";

// export const runTests = (tests: Test[]) => {
    // const testResults = tests.map((test: Test, idx: number) => {
    //     const result = checkCanBuildPipeline(test.input);
    //     const hasPassed = JSON.stringify(result) === JSON.stringify(test.expectedResult);
    //     if (hasPassed) {
    //         console.log(`✅ Test ${idx + 1} has passed`);
    //         return true;
    //     }

    //     console.log(`❌ Test ${idx + 1} has NOT passed:`);
        // console.log(`Input:\n n = ${test.input.n}\n sequence = ${test.input.sequence}`);

        // console.log(`Expected:\n isGraph: ${expectedIsGraph}\n graph:`);
        // if (expectedGraph) { console.log('graph: '); printMatrix(expectedGraph, true); }

        // console.log(`Got:\n isGraph: ${resultIsGraph}`);
        // if (resultGraph) { console.log('graph: '); printMatrix(resultGraph, true); }
        // console.log('resultGraph:', resultGraph);
//         return false;
//     })
//     console.log(' ');
//     const passedTests = testResults.reduce((acc, curr) => curr ? acc + 1 : acc, 0);
//     if (passedTests === tests.length) console.log('💚 All tests have passed.');
//     else if (passedTests) console.log(`⚠️  ${passedTests}/${tests.length} tests have passed.`);
//     else console.log('💀 All tests have failed.');
// }

// runTests(TESTS);
