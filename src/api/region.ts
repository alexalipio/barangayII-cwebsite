import RegionRequest from "../models/regionRequest";
import ProvinceRequest from "../models/provinceRequest";
import handleAsync from "../utils/handleAsync";

/**
 * !PATH: /region/
 */
export const getAllRegions = handleAsync(async (_, res, _next) => {
    const { page = 1, limit = 10 } = _.query;
    const data = await RegionRequest.find()
        .limit(<number>limit * 1)
        .skip((<number>page - 1) * <number>limit)
        .exec();
    const count = await RegionRequest.countDocuments();
    res.json({
        data,
        totalPages: Math.ceil(count / <number>limit),
        currentPage: page
    });
});

/**
 * !PATH: /region/:code
 */
export const getARegion = handleAsync(async (req, res, _next) => {
    const { code } = req.params;
    const [data] = await RegionRequest.find({ "region.code": code });
    if (!data) throw new Error("No Results Found");

    const totalNumOfRegions = parseInt(data.total);

    for (let i = 0; i < totalNumOfRegions; i++) {
        let db_code = data.region[i]["code"];
        let db_obj = data.region[i];
        if (code == db_code) {
            res.json(db_obj);
            break;
        }
    }
});

/**
 * !PATH: /region/:code/province
 */
export const getAllProvincesOfARegion = handleAsync(async (req, res, _next) => {
    const { code } = req.params;
    const [data] = await ProvinceRequest.find();
    if (!data) throw new Error("No Results Found");

    const totalNumOfProvinces = parseInt(data.total);
    const codeArray = code.split("");
    const results = [];

    let new_split_code = 0;
    let split_code =
        codeArray.length < 9
            ? parseInt(codeArray[0])
            : parseInt(codeArray[0] + codeArray[1]);

    for (let i = 0; i < totalNumOfProvinces; i++) {
        const db_code = data.province[i]["code"];

        db_code.split("").length < 9
            ? (new_split_code = parseInt(db_code[0]))
            : (new_split_code = parseInt(db_code[0] + db_code[1]));

        split_code === new_split_code
            ? results.push(data["province"][i])
            : null;
    }

    res.json(results);
});
