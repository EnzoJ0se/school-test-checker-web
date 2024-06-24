export const resourceSelectCompareFn: (opt1: any, opt2: any) => boolean = (opt1: any, opt2: any) => opt1?.id === opt2?.id;

export function uuid() {
    return Math.random().toString(36).substring(2)
}
