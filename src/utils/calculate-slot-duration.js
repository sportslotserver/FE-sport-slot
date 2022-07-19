const slotDuration = (slotEndTime, slotStartTime) => {
    const endTime = slotEndTime.substring(0, 2)
    const startTime = slotStartTime.substring(0, 2)
    return parseInt(endTime) - parseInt(startTime)
}

export default slotDuration