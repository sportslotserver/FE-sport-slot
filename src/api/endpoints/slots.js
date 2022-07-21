import axios from "axios"
import { Routes } from "../routes";
import { Config } from "../config"; 

export const filteringSlots = async (data) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.FILTERING_SLOTS}/${data?.date}/${data?.time}/${data?.city}/${data?.state}/${data?.sport}/${data?.bookingType}`)
    } catch (error) {
        throw new Error('Error rised while filtering slots...')
    }
}

export const getCourtSlotInfo = async (data) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.GET_SLOT_INFO}/${data.court_id}/${data.id}/${data.player_id}/${data.reservation_id}`)
    } catch (error) {
        throw new Error('Error rised while geting slot info...')
    }
}

export const createGroup = async (data) => {
    try {
        return await axios.post(`${Config.baseURL}${Routes.CREATE_GROUP}`, data)
    } catch (error) {
        throw new Error('Error rised while create group...')
    }
}

export const directBook = async (data) => {
    try {
        return await axios.post(`${Config.baseURL}${Routes.DIRECT_BOOK}`, data)
    } catch (error) {
        throw new Error('Error rised while direct booking...')
    }
}