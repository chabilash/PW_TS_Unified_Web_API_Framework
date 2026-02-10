import * as fs from 'fs';

export function readJson(filePath: string): any {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

export function readJSONDataFromTestCase(filePath: string, testcaseName: string): any {
    const testCaseData = readJson(filePath);
    return testCaseData[testcaseName];
}


// The below function is suggested by Co-Pilot.
export function writeJson(filePath: string, data: any): void {
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}