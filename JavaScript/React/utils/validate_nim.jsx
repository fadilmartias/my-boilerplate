const { apiKKN } = require("./api_helper");

const validateNIM = async (nim) => {
    const endpoint = "/mahasiswa/detail"
    const res = await apiKKN.post(endpoint, {
        nim: nim
    })
    if (res.status) {
        return res
    } else {
        return false;
    }
};

export { validateNIM }
