export type AppSettings = {
  API_DOMAIN: string;
};

const Settings = {
  API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN || "",
};

export default Settings;
