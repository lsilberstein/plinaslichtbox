const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;
let lightsAxios;

export function setLightsAxios(axios) {
    lightsAxios = axios;
}

export async function turnLightOn() {
    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/1/state`, { on: true, bri: 100 })
        .then(res => {
            // not working yet. Needs fix!
            console.log("I turned the light on:");
        })
}

export async function turnLightOff() {
    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/1/state`, { on: false })
        .then(res => {
            console.log("I turned the light off:");
        })
}
