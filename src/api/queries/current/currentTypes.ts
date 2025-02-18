import { Dispatch, SetStateAction } from "react";

interface CurrentCondition {
    code: number,
    icon: string,
    text: string,
}

interface Current {
    cloud: number,
    condition: CurrentCondition,
    dewpoint_c: number,
    dewpoint_f: number,
    feelslike_c: number,
    feelslike_f: number,
    gust_kph: number,
    gust_mph: number,
    heatindex_c: number,
    heatindex_f: number,
    humidity: number,
    is_day: number,
    last_updated: number,
    last_updated_epoch: number,
    precip_in: number,
    precip_mm: number,
    pressure_in: number,
    pressure_mb: number,
    temp_c: number,
    temp_f: number,
    uv: number,
    vis_km: number,
    vis_miles: number,
    wind_degree: number,
    wind_dir: number,
    wind_kph: number,
    wind_mph: number,    
    windchill_c: number, 
    windchill_f: number,
}

interface ICurrentLocation {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: string,
    name: string,
    region: string,
    tz_id: string,
}

export interface ICurrent {
    current: Current,
    location: ICurrentLocation,
}

export interface ICurrentData {
    data: ICurrent,
}

export interface ICurrentHeader {
    state: Dispatch<SetStateAction<string | undefined>>,
}