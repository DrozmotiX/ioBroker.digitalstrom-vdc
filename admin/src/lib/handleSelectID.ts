import { SelectType } from '../types/selectType';
import { Config } from './Config';

export const handleSelectId = (select: string | undefined, deviceType: SelectType) => {
    console.log(`Type: ${deviceType} ID: ${select} `);
    if (deviceType === 'lamp') {
        if (select !== undefined) {
            console.log('lamp');
            Config.OnOffSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'rgbLamp') {
        if (select !== undefined) {
            console.log('rgbLamp');
            Config.RGBSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'colorMode') {
        if (select !== undefined) {
            console.log('colorMode');
            Config.ColorModeSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'colorTemp') {
        if (select !== undefined) {
            console.log('colorTemp');
            Config.ColorTempSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'dimmer') {
        if (select !== undefined) {
            console.log('dimmer');
            Config.DimmerSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'hue') {
        if (select !== undefined) {
            console.log('hue');
            Config.HueSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'saturation') {
        if (select !== undefined) {
            console.log('saturation');
            Config.SaturationSelectID = select;
            console.log(Config);
        }
    }

    if (deviceType === 'sensor') {
        if (select !== undefined) {
            console.log('sensor');
            Config.SensorSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'button') {
        if (select !== undefined) {
            console.log('button');
            Config.ButtonSelectID = select;
            console.log(Config);
        }
    }
};
