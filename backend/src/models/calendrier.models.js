const datasource = require('../../database')

const getCalendrier = async (id) => {
    const [result] = await datasource.query("SELECT * FROM calendrier WHERE structureId = ?", [id])
    return result
}

const updateStatusClose = async (id) => {
    const [result] = await datasource.query("UPDATE calendrier SET nbPlaces = -1 WHERE calendrierId = ?", [id])
    return result
}

const updateStatusOpen = async (maxPlaces, id) => {
    const [result] = await datasource.query("UPDATE calendrier SET nbPlaces = ? WHERE calendrierId = ?", [maxPlaces, id])
    return result
}

const updatePlaces = async (nbPlaces, id) => {
    const [result] = await datasource.query("UPDATE calendrier SET nbPlaces = ? WHERE calendrierId = ?", [nbPlaces, id])
    return result
}

const postDate = async (date, nbPlaces, structureId) => {
    const [result] = await datasource.query("INSERT INTO calendrier (date, nbPlaces, structureId) VALUES (?, ?, ?)", [date, nbPlaces, structureId])
    return result
}

const deleteDates = async () => {
    const [result] = await datasource.query("DELETE FROM calendrier WHERE date < CURDATE()")
    return result
}

const fullDate = async (id) => {
    const [result] = await datasource.query("DELETE FROM calendrier WHERE calendrierId = ?", [id])
    return result
}

module.exports = {
    getCalendrier,
    updateStatusClose,
    updateStatusOpen,
    updatePlaces,
    postDate,
    deleteDates,
    fullDate
};