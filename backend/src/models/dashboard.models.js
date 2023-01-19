const datasource = require("../../database")

const updateHours = async (value, id, jourId, state) => {
    const [result] = await datasource.query(`UPDATE horaires SET ${state} = ? WHERE structureId = ? AND jourId = ?`, [value, id, jourId])
    return result
}

const updateTarif = async (table, tarif, tarifValue, id) => {
    const [result] = await datasource.query(`UPDATE ${table} SET ${tarif} = ? WHERE structureId = ?`, [tarifValue, id])
    return result
}

const updateIndemn = async (table, indemn, indemnValue, id) => {
    const [result] = await datasource.query(`UPDATE ${table} SET ${indemn} = ? WHERE structureId = ?`, [indemnValue, id])
    return result
}

const updateOptions = async (options, optionsValue, id) => {
    const [result] = await datasource.query(`UPDATE structure SET ${options} = ? WHERE structureId = ?`, [optionsValue, id])
    return result
}

module.exports = {
    updateHours,
    updateTarif,
    updateIndemn,
    updateOptions
}