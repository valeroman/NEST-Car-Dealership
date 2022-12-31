import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsServices: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsServices.findAll();
    }

    @Get(':id')
    // getCarById( @Param('id', new ParseUUIDPipe({ version: '4' }) ) id: string ) {  // validar la version del uuid con el ParseUUIDPipe
    getCarById( @Param('id', ParseUUIDPipe ) id: string ) {    
        console.log({ id })
        return this.carsServices.findOneById( id );
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ) {
        return this.carsServices.create( createCarDto );
        // return createCarDto;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe ) id: string,
        @Body() updateCarDto: UpdateCarDto ) 
    {
        return this.carsServices.update( id, updateCarDto );
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
        return this.carsServices.delete( id );
    }
}
