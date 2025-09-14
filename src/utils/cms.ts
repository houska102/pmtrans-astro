const cmsUrl = import.meta.env.CMS_PATH
export const getImageUrl = (path: string) => `${cmsUrl}${path}`