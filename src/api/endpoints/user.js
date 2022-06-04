import axios from "axios"
import { Routes } from "../routes";
import { Config } from "../config"; 

export const playerRegistration = async (data) => {
    try {
        return await axios.post(`${Config.baseURL}${Routes.REGISTRATION}`, data)
    } catch (error) {
        throw new Error('Error rised in player registration')
    }
}

export const playerLogin = async (data) => {
    try {
        return await axios.post(`${Config.baseURL}${Routes.LOGIN}`, data)
    } catch (error) {
        throw new Error('Error rised in player login')
    }
}