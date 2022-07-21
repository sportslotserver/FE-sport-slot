import axios from "axios"
import { Routes } from "../routes";
import { Config } from "../config"; 

export const getFeatureCourts = async (data) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.GET_FEATURE_COURTS}/${data.state}/${data.city}/${data.sport}`)
    } catch (error) {
        throw new Error('Error rised while geting featured courts...')
    }
}