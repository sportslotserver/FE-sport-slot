import { PlayerActions, SlotActions } from './actions'
import { playerRegistration, playerLogin } from './endpoints/user'
import { filteringSlots, getCourtSlotInfo } from './endpoints/slots'

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
            default:
                throw new Error('Action doesnt exist')
        }
    }

}

export default Api