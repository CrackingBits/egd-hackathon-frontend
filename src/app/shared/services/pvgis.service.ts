import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PvCalcResponse } from '../models/pv-calc-response';
import { EconomicModelCalculationDto } from '../../api-swagger/models/economic-model-calculation-dto';
import { PvType } from '../../api-swagger/models/pv-type';

@Injectable({
  providedIn: 'root',
})
export class PvGisService {
  // Location[Lat / Lon]:	 49.209,16.601
  readonly DEFAULT_BRNO_LAT = '49.209';
  readonly DEFAULT_BRNO_LON = '16.601';

  // lat F   Yes	-	Latitude, in decimal degrees, south is negative.
  readonly PARAM_LAT = 'lat';

  // lon F   Yes	-	Longitude, in decimal degrees, west is negative.
  readonly PARAM_LON = 'lon';

  // usehorizon I   No	1	Calculate taking into account shadows from high horizon.Value of 1 for "yes".
  readonly PARAM_USEHORIZON = 'usehorizon';

  // userhorizon L   No  -	Height of the horizon at equidistant directions around the point of interest, in degrees.Starting at north and moving clockwise. The series '0,10,20,30,40,15,25,5' would mean the horizon height is 0° due north, 10° for north-east, 20° for east, 30° for south-east, etc.
  // raddatabase T   No default DB
  // Name of the radiation database. "PVGIS-SARAH" for Europe, Africa and Asia or "PVGIS-NSRDB" for the Americas between 60°N and 20°S, "PVGIS-ERA5" and "PVGIS-COSMO" for Europe (including high-latitudes), and "PVGIS-CMSAF" for Europe and Africa(will be deprecated)
  readonly PARAM_RADDATABASE = 'raddatabase';
  readonly PARAM_RADDATABASE_PVGISSARAH = 'PVGIS-SARAH';
  readonly PARAM_RADDATABASE_PVGISSARAH2 = 'PVGIS-SARAH2';

  // peakpower F   Yes	-	Nominal power of the PV system, in kW.
  readonly PARAM_PEAKPOWER = 'peakpower';

  // pvtechchoice T   No	"crystSi"	PV technology.Choices are: "crystSi", "CIS", "CdTe" and "Unknown".
  readonly PARAM_PVTECHCHOICE = 'pvtechchoice';
  readonly PARAM_PVTECHCHOICE_CRYSTSI = 'crystSi';
  readonly PARAM_PVTECHCHOICE_CIS = 'CIS';
  readonly PARAM_PVTECHCHOICE_CDTE = 'CdTe';
  readonly PARAM_PVTECHCHOICE_UNKNOWN = 'Unknown';

  // mountingplace T   No  "free"	Type of mounting of the PV modules.Choices are: "free" for free-standing and "building" for building-integrated.
  readonly PARAM_MOUNTINGPLACE = 'mountingplace';
  readonly PARAM_MOUNTINGPLACE_FREE = 'free';
  readonly PARAM_MOUNTINGPLACE_BUILDING = 'building';

  // loss F   Yes -	Sum of system losses, in percent.
  readonly PARAM_LOSS = 'loss';

  // fixed I No  1   Calculate a fixed mounted system. Value of 0 for "no".All other values(or no value) mean "Yes".Note that this means the default is "yes".

  // angle   F   No  0   Inclination angle from horizontal plane of the(fixed) PV system.
  readonly PARAM_ANGLE = 'angle';

  // aspect  F   No  0   Orientation(azimuth) angle of the(fixed) PV system, 0 = south, 90 = west, -90 = east.
  readonly PARAM_ASPECT = 'aspect';

  // optimalinclination  I   No  0   Calculate the optimum inclination angle.Value of 1 for "yes".All other values(or no value) mean "no".
  readonly PARAM_OPTIMALINCLINATION = 'optimalinclination';

  // optimalangles   I   No  0   Calculate the optimum inclination AND orientation angles.Value of 1 for "yes".All other values(or no value) mean "no".
  readonly PARAM_OPTIMALANGLES = 'optimalangles';

  // inclined_axis   I   No  0   Calculate a single inclined axis system.Value of 1 for "yes".All other values(or no value) mean "no".
  // inclined_optimum    I   No  0   Calculate optimum angle for a single inclined axis system.Value of 1 for "yes".All other values(or no value) mean "no".
  // inclinedaxisangle   F   No  0   Inclination angle for a single inclined axis system.Ignored if the optimum angle should be calculated(parameter "inclined_optimum").
  // vertical_axis   I   No  0   Calculate a single vertical axis system.Value of 1 for "yes".All other values(or no value) mean "no".
  // vertical_optimum    I   No  0   Calculate optimum angle for a single vertical axis system.Value of 1 for "yes".All other values(or no value) mean "no".
  // verticalaxisangle   F   No  0   Inclination angle for a single vertical axis system.Ignored if the optimum angle should be calculated(parameter "vertical_optimum" set to 1).
  // twoaxis I   No  0   Calculate a two axis tracking system.Value of 1 for "yes".All other values(or no value) mean "no".
  // pvprice I   No  0   Calculate the PV electricity price[kwh / year] in the currency introduced by the user for the system cost.
  // systemcost  F   if pvprice - Total cost of installing the PV system[your currency].
  // interest    F   if pvprice - Interest in %/ year
  // lifetime    I   No  25  Expected lifetime of the PV system in years.
  // outputformat    T   No  "csv"   Type of output.Choices are: "csv" for the normal csv output with text explanations, "basic" to get only the data output with no text, and "json".
  readonly PARAM_OUTPUTFORMAT = 'outputformat';
  readonly PARAM_OUTPUTFORMAT_JSON = 'json';

  // browser I   No  0   Use this with a value of "1" if you access the web service from a web browser and want to save the data to a file.

  // startyear   I No  year_min(DB) First year of the output of hourly averages.Availability varies with the temporal coverage of the radiation DB chosen.The default value is the first year of the DB.
  readonly PARAM_STARTYEAR = 'startyear';

  // endyear I   No year_max(DB) Final year of the output of hourly averages.Availability varies with the temporal coverage of the radiation DB chosen.The default value is the last year of the DB.
  readonly PARAM_ENDYEAR = 'endyear';

  // pvcalculation I   No  0	If "0" outputs only solar radiation calculations, if "1" outputs the estimation of hourly PV production as well.
  readonly PARAM_PVCALCULATION = 'pvcalculation';

  constructor(private http: HttpClient) {}

  pvGisInfo(economicModelCalculation: EconomicModelCalculationDto): any {
    var params = new HttpParams();

    params = this.addDefaultUrlParams(params, economicModelCalculation);
    params = this.addPositionParams(params, economicModelCalculation);
    params = this.addPvCalcParams(params, economicModelCalculation);

    console.log(params.toString());

    return this.http.get<PvCalcResponse>(environment.pVGisUrl, { params });
  }

  addPvCalcParams(
    uriParams: HttpParams,
    economicModelCalculation: EconomicModelCalculationDto
  ): HttpParams {
    if (
      economicModelCalculation.pvPeakPower == null ||
      economicModelCalculation.pvPeakPower == 0
    ) {
      economicModelCalculation.pvPeakPower = 1;
    }

    if (economicModelCalculation.pvPeakPower != null) {
      uriParams = this.appendParam(
        uriParams,
        this.PARAM_PEAKPOWER,
        economicModelCalculation.pvPeakPower?.toString()
      );
    }

    // angle   F   No  0   Inclination angle from horizontal plane of the(fixed) PV system.
    if (economicModelCalculation.slope != null) {
      var value = economicModelCalculation.slope;
      if (value < 0) {
        value = 0;
      }
      if (value > 90) {
        value = 90;
      }
      uriParams = this.appendParam(
        uriParams,
        this.PARAM_ANGLE,
        value.toString()
      );
      economicModelCalculation.slope = value;
    }

    // aspect  F   No  0   Orientation(azimuth) angle of the(fixed) PV system, 0 = south, 90 = west, -90 = east.
    if (economicModelCalculation.azimut != null) {
      var value = economicModelCalculation.azimut;
      if (value < -180) {
        value = -180;
      }
      if (value > 180) {
        value = 180;
      }
      uriParams = this.appendParam(
        uriParams,
        this.PARAM_ASPECT,
        value.toString()
      );
      economicModelCalculation.azimut = value;
    }

    if (economicModelCalculation.pvType != PvType.Unknown) {
      var pvType: string = this.PARAM_PVTECHCHOICE_UNKNOWN;

      if (economicModelCalculation.pvType == PvType.CrystallineSilicon) {
        pvType = this.PARAM_PVTECHCHOICE_CRYSTSI;
      } else if (economicModelCalculation.pvType == PvType.CdTe) {
        pvType = this.PARAM_PVTECHCHOICE_CDTE;
      } else if (economicModelCalculation.pvType == PvType.Cis) {
        pvType = this.PARAM_PVTECHCHOICE_CIS;
      } else {
        pvType = this.PARAM_PVTECHCHOICE_UNKNOWN;
      }

      uriParams = this.appendParam(uriParams, this.PARAM_PVTECHCHOICE, pvType);
    }

    return uriParams;
  }

  addPositionParams(
    uriParams: HttpParams,
    economicModelCalculation: EconomicModelCalculationDto
  ): HttpParams {
    var lat: string = this.DEFAULT_BRNO_LAT;
    var lon: string = this.DEFAULT_BRNO_LON;
    if (economicModelCalculation.locationGps != null) {
      // 49.2983958748433, 17.386776433848386
      var splitString = economicModelCalculation.locationGps.split(',');
      if (splitString.length == 2) {
        lat = splitString[0].trim();
        lon = splitString[1].trim();
      }
    }

    uriParams = this.appendParam(uriParams, this.PARAM_LAT, lat);
    uriParams = this.appendParam(uriParams, this.PARAM_LON, lon);

    return uriParams;
  }

  addDefaultUrlParams(
    uriParams: HttpParams,
    economicModelCalculation: EconomicModelCalculationDto
  ): HttpParams {
    uriParams = this.appendParam(
      uriParams,
      this.PARAM_RADDATABASE,
      this.PARAM_RADDATABASE_PVGISSARAH
    );
    uriParams = this.appendParam(
      uriParams,
      this.PARAM_OUTPUTFORMAT,
      this.PARAM_OUTPUTFORMAT_JSON
    );

    uriParams = this.appendParam(uriParams, this.PARAM_LOSS, '14');

    return uriParams;
  }

  appendParam(
    uriParams: HttpParams,
    paramName: string,
    value: string
  ): HttpParams {
    return uriParams.append(paramName, value);
  }
}
