let lightsAxios;

export function setLightsAxios(axios) {
    lightsAxios = axios;
}

export async function turnLightOn() {
    const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;
    const PHILIPS_HUE_API_LIGHT_ID = process.env.PHILIPS_HUE_API_LIGHT_ID;

    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/${PHILIPS_HUE_API_LIGHT_ID}/state`, { on: true, bri: 100 })
        .then((err, res) => {
            console.log("I turned the light on!", res);
        }
    )
}

export async function turnLightOff() {
    const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;
    const PHILIPS_HUE_API_LIGHT_ID = process.env.PHILIPS_HUE_API_LIGHT_ID;

    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/${PHILIPS_HUE_API_LIGHT_ID}/state`, { on: false })
        .then((err, res) => {
            console.log("I turned the light off!", res);
        }
    )
}
