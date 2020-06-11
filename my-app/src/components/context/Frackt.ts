export interface Frackt{
    fracktId: number
    fracktName: string
    fracktSpeed: number
    fracktCost: number
}


let fracktCheck: Frackt[] = [
    {
        fracktId: 1,
        fracktName: 'Postnord',
        fracktSpeed: 3,
        fracktCost: 50
    },
    {
        fracktId: 2,
        fracktName: 'Parcel Select',
        fracktSpeed: 2,
        fracktCost: 100
    },
    {
        fracktId: 3,
        fracktName: 'Express Post',
        fracktSpeed: 1,
        fracktCost: 150
    },
];

export default fracktCheck;