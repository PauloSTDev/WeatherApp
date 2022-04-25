import axios from "axios";

export const getData = (code, dataAtual) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get("https://apiprevmet3.inmet.gov.br/previsao/" + code)
            //console.log(response.data[code][dataAtual])
            resolve(response.data[code][dataAtual]);
        } catch (error) {
            reject("Ocorreu um erro!")
        }
    })
}
