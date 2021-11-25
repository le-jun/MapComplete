import ScriptUtils from "./ScriptUtils";
import {writeFileSync} from "fs";
import LegacyJsonConvert from "../Models/ThemeConfig/LegacyJsonConvert";

/*
 * This script reads all theme and layer files and reformats them inplace
 * Use with caution, make a commit beforehand!
 */

const layerFiles = ScriptUtils.getLayerFiles();
for (const layerFile of layerFiles) {
    try {
        LegacyJsonConvert.fixLayerConfig(layerFile.parsed)
        writeFileSync(layerFile.path, JSON.stringify(layerFile.parsed, null, "  "))
    } catch (e) {
        console.error("COULD NOT LINT LAYER" + layerFile.path + ":\n\t" + e)
    }
}

const themeFiles = ScriptUtils.getThemeFiles()
for (const themeFile of themeFiles) {
    try {
        LegacyJsonConvert.fixThemeConfig(themeFile.parsed)
        writeFileSync(themeFile.path, JSON.stringify(themeFile.parsed, null, "  "))
    } catch (e) {
        console.error("COULD NOT LINT THEME" + themeFile.path + ":\n\t" + e)
    }
}