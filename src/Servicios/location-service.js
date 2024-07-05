import { query } from "express";
import locationRepository from "../repositories/location-repositories.js"
const LocationRepository= new locationRepository();
import { Pagination} from "../utils/Paginacion.js";
const PaginacionConfig = new Pagination();

export default class Location
{

async getLocationByProvince(id)
{
    const getLocationByProvince = await LocationRepository.getLocationByProvince(id);
    return getLocationByProvince;
}   

async getLocalidades(limit, offset) {
    const parsedLimit = PaginacionConfig.parseLimit(limit) 
    const parsedOffset = PaginacionConfig.parseOffset(offset)
    const cantidad =  Number.parseInt(await LocationRepository.countLocalidades()); //cant Eventos (Hay que estar seguro)
    const nextPage=((parsedOffset+1) * parsedLimit<=cantidad) ?`/location ?`:"null"
    const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, nextPage)
    const collection = await LocationRepository.getLocalidades(parsedLimit, parsedOffset)
    const collection2 = {collection, paginacion}
    return collection2;

  }

    async getLocalidadById(id) {
    return await LocationRepository.getLocalidadById(id);
    }

    async getEvLocByLocalidad(id_location, limit, offset) {
        const parsedLimit = PaginacionConfig.parseLimit(limit) 
        const parsedOffset = PaginacionConfig.parseOffset(offset)
        const cantidad =  Number.parseInt(await LocationRepository.countLocalidades()); //cant Eventos
        const nextPage=((parsedOffset+1) * parsedLimit<=cantidad) ?`/location/${id_location}/event-location`:"null";
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, nextPage)
        const collection = await LocationRepository.getEventLocationsByLocation(id_location,parsedLimit, parsedOffset)
        const collection2 = {collection, paginacion}
        return collection2;
      }
}
      
