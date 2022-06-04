import axios from "axios"
import { Routes } from "../routes";
import { Config } from "../config"; 

export const filteringSlots = async (data) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.FILTERING_SLOTS}/${data.date}/${data.time}/${data.city}/${data.state}/${data.sport}/${data.bookingType}`)
    } catch (error) {
        throw new Error('Error rised while filtering slots...')
    }
}