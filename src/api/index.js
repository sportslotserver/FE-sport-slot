import { PlayerActions, SlotActions } from './actions'
import { playerRegistration, playerLogin, getAllPlayers, getSlotPlayers, getPlayerInfo, getPlayerPaymentMethods, updatePlayerAccoutn } from './endpoints/user'
import { filteringSlots, getCourtSlotInfo, createGroup, directBook } from './endpoints/slots'

class Api {
    constructor () {  }

    static async user (action, data) {
        switch (action) {
            case PlayerActions.PLAYER_REGISTRATION:
                return await playerRegistration(data)
            case PlayerActions.PLAYER_LOGIN:
                return await playerLogin(data)
            case PlayerActions.GET_PLAYER_INFO:
                return await getPlayerInfo(data)
            case PlayerActions.FILTERING_SLOTS:
                return await filteringSlots(data)
            case PlayerActions.GET_ALL_PLAYERS:
                return await getAllPlayers()
            case PlayerActions.GET_SLOT_PLAYERS:
                return await getSlotPlayers(data)
            case PlayerActions.GET_PLAYER_PAYMENT_METHODS:
                return await getPlayerPaymentMethods(data)
            case PlayerActions.UPDATE_PLAYER_PROFILE:
                return await updatePlayerAccoutn(data)
            default:
                throw new Error('Action doesnt exist')
        }
    }

    static async slot (action, data) {
        switch (action) {
            case SlotActions.FILTERING_SLOTS:
                return await filteringSlots(data)
            case SlotActions.GET_COURT_SLOT_INFO:
                return await getCourtSlotInfo(data)
            case SlotActions.CREATE_GROUP:
                return await createGroup(data)
            case SlotActions.DIRECT_BOOK:
                return await directBook(data)
            default:
                throw new Error('Action doesnt exist')
        }
    }

}

export default Api