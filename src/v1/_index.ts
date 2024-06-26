export {};

import { Router } from "express";
import { getABarangay, getAllBarangays } from "../v1/barangay";
import { getACity, getAllBarangaysOfACity, getAllCities } from "../v1/city";
import {
    getAMunicipality,
    getAllBarangaysOfAMunicipality,
    getAllMunicipalities,
} from "../v1/municipality";
import {
    getAProvince,
    getAllCitiesOfAProvince,
    getAllMunicipalitiesOfAProvince,
    getAllProvinces,
} from "../v1/province";
import {
    getARegion,
    getAllProvincesOfARegion,
    getAllRegions,
} from "../v1/region";
const router = Router({ mergeParams: true });

// BARANGAY CONTROLLERS
router.get("/barangay", getAllBarangays);
router.get("/barangay/:code", getABarangay);

// CITY CONTROLLERS
router.get("/city", getAllCities);
router.get("/city/:code", getACity);
router.get("/city/:code/barangay", getAllBarangaysOfACity);

// MUNICIPALITY CONTROLLERS
router.get("/municipality", getAllMunicipalities);
router.get("/municipality/:code", getAMunicipality);
router.get("/municipality/:code/barangay", getAllBarangaysOfAMunicipality);

// PROVINCE CONTROLLERS
router.get("/province", getAllProvinces);
router.get("/province/:code", getAProvince);
router.get("/province/:code/city", getAllCitiesOfAProvince);
router.get("/province/:code/municipality", getAllMunicipalitiesOfAProvince);

// REGION CONTROLLERS
router.get("/region", getAllRegions);
router.get("/region/:code", getARegion);
router.get("/region/:code/province", getAllProvincesOfARegion);

export default router;
