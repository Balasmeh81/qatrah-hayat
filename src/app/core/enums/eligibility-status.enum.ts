export enum EligibilityStatus {
  Eligible = 1,
  TempDeferred = 2,
  PermDeferred = 3
}

export const EligibilityStatus_OPTIONS = [
  { value: EligibilityStatus.Eligible, label: 'EligibilityStatusOpts.Eligible' },
  { value: EligibilityStatus.TempDeferred, label: 'EligibilityStatusOpts.TempDeferred' },
  { value: EligibilityStatus.PermDeferred, label: 'EligibilityStatusOpts.PermDeferred' }
];
