export const getIBDData = () => fetch('https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=IGQVJVbUxVNVFVdFVqMVhQMlVOZA2l6UEJtanh4M3lxb1NOZAHgtUHlvaTUwYkwweHRnRGdreHR3amZAOblhaY2hNcDBxcXFNakh4bHBXYXIyMlhOMGFzZAWFiSGw0cUQ5S0dSMy1MUkln')
.then(data => data)