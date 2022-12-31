import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mitsubishi',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
    }
]