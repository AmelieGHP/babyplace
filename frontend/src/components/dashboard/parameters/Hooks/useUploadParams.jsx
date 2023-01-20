import axios from "axios"
import { toast } from "react-hot-toast"

export const useUploadParams = (structureId, getData, fileName) => {
    const uploadDoc = async (value, docData, ref, table) => {
        try {
            docData = new FormData()
            docData.append('file', ref.current.files[0])
            const res = await axios.post(`${import.meta.env.VITE_PATH}/uploads`, docData)
            fileName = res.data
            await axios.put(`${import.meta.env.VITE_PATH}/dashboard/docs/`, {
                id: structureId,
                value: value,
                file: fileName,
                table: table
            })
            toast.success("Votre profil a bien été mis à jour")
            getData()
        } catch (err) {
            console.error(err.message)
        }
    }

    return { uploadDoc }
}