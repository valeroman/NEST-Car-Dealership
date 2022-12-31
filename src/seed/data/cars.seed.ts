import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corrolla',
    },
    {
        id: uuid(),
        brand: 'Mitsubishi',
        model: 'Outlander',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
    }
]