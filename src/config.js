import md5 from "md5";

export const ts = 1;
export const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
export const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export const steps = 20;

export const params = {
    apikey: apiKey,
    ts,
    hash: md5(`${ts}${privateKey}${apiKey}`),
    limit: steps
};