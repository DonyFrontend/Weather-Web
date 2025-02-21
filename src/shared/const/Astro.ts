import moonPhase from "src/assets/icons/moon-phase.svg";
import moonrise from "src/assets/icons/moonrise.svg";
import moonset from "src/assets/icons/moonset.svg";
import sunrise from "src/assets/icons/sunrise.svg";
import sunset from "src/assets/icons/sunset.svg";

type astroData = {
    moon_phase: string,
    moonrise: string,
    moonset: string,
    sunrise: string,
    sunset: string
}

type astroReturn = {
    text: string,
    icon: string,
    time: string
}

export function getAstro(astro: astroData): astroReturn[] {
    return [
        {
            text: "Moon phase",
            icon: moonPhase,
            time: astro.moon_phase,
        },
        {
            text: "Moonrise",
            icon: moonrise,
            time: astro.moonrise,
        },
        {
            text: "Moonset",
            icon: moonset,
            time: astro.moonset,
        },
        {
            text: "Sunrise",
            icon: sunrise,
            time: astro.sunrise,
        },
        {
            text: "Sunset",
            icon: sunset,
            time: astro.sunset,
        }
    ]
}