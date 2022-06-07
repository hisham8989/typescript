let allStringArray: string[] = ['php', 'nodejs', 'python']

let mixedTypeArray: [string, number, boolean] = ['hiString', 12, true]

let betterMixedTypeArray: any[] = ['hiString', 12, true]

let betterMixedTypeArray2 = ['hiString', 12, true]

//Wont work due to pushing number in all string array
// allStringArray.push(123)
allStringArray.push('123')
