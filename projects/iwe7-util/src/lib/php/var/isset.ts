export function isset(a: any): boolean {
    if (a === undefined || a === null) { 
        return false;
    }
    return true;
}