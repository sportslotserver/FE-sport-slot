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

export const getPlayerInfo = async (id) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.GET_PLAYER_INFO}/${id}`)
    } catch (error) {
        throw new Error('Error rised while geting player info ')
    }
}

export const getAllPlayers = async () => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.GET_ALL_PLAYERS}`)
    } catch (error) {
        throw new Error('Error rised in get all players... ')
    }
}

export const getSlotPlayers = async (data) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.GET_SLOT_PLAYERS}/${data.city}/${data.state}/${data.sport}`)
    } catch (error) {
        throw new Error('Error rised in get all players... ')
    }
}

export const getPlayerPaymentMethods = async (id) => {
    try {
        return await axios.get(`${Config.baseURL}${Routes.PLAYER_PAYMENT_METHODS}/${id}`)
    } catch (error) {
        throw new Error('Error rised in get all players... ')
    }
}