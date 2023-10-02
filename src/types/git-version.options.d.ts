export declare class GitVersionOptions {
  releaseBranch: string
  releaseCandidateBranch: string
  betaBranch: string
  prefix: string
  dirAffected: string
  majorIdentifier: string
  minorIdentifier: string
  majorIdIsRegex: boolean
  minorIdIsRegex: boolean
  releaseCandidateBranchSufix: string
  developmentBranchSufix: string
  defaultSufix: string
  folder: string
  previousVersion: boolean
  newVersion: boolean

  constructor(options: Record<string, string | boolean>)
  logPathsFilter(): string
}
