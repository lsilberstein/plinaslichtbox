let lightsAxios;

export function setLightsAxios(axios) {
    lightsAxios = axios;
}

export async function turnLightOn() {
    const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;
    const PHILIPS_API_LIGHT_ID = process.env.PHILIPS_API_LIGHT_ID;
    console.log("PHILIPS_HUE_API_ID:", PHILIPS_HUE_API_ID);
    console.log("PHILIPS_API_LIGHT_ID:", PHILIPS_API_LIGHT_ID);
    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/${PHILIPS_API_LIGHT_ID}/state`, { on: true, bri: 100 })
        .then((err, res) => {
            if(err) console.log("error:");
            else {console.log("I turned the light on!");}
            
        })
}

export async function turnLightOff() {
    lightsAxios.put(`api/${PHILIPS_HUE_API_ID}/lights/${PHILIPS_API_LIGHT_ID}/state`, { on: false })
        .then(res => {
            console.log("I turned the light off!");
        })
}
