import { PlayerActions, SlotActions } from './actions'
import { playerRegistration, playerLogin, getAllPlayers } from './endpoints/user'
import { filteringSlots, getCourtSlotInfo, createGroup, directBook } from './endpoints/slots'

class Api {
    constructor () {  }

    static async user (action, data) {
        switch (action) {
            case PlayerActions.PLAYER_REGISTRATION:
                return await playerRegistration(data)
            case PlayerActions.PLAYER_LOGIN:
                return await playerLogin(data)
            case PlayerActions.FILTERING_SLOTS:
                return await filteringSlots(data)
            case PlayerActions.GET_ALL_PLAYERS:
                return await getAllPlayers()
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