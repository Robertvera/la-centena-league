import { HistoricDataDto } from "interfaces/historic.interface";
import { mapHistoricData } from "../mappers";
import { supabase } from "../signals/supabase.signals";
import { HISTORIC_TABLE } from "./supabase.constants";

export const getHistoricData = async () => {
  const { data } = await supabase.value.from(HISTORIC_TABLE).select("*");

  return mapHistoricData(data as HistoricDataDto[]);
};
