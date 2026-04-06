import { GENDER_OPTIONS, GenderEnum } from "../../../features/auth/domain/enums/gender-enum";

export function getGenderLabel(value: GenderEnum | null): string {
  if (value == null) return '';
  return GENDER_OPTIONS.find(x => x.value === value)?.label ?? '';
}



