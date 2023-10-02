import { GitVersionOptions } from './git-version.options'

export declare class GitVersion {
  private baseVersion: string
  private options: GitVersionOptions

  constructor(options: GitVersionOptions)

  getPreviousVersion(): {
    'previous-tag': string | null
    'previous-version-prefix': string
    'previous-version': string
  }

  getPreviousTagAndVersion(): {
    previousTag: string | null
    previousVersion: string
  }

  currentBranchOrTag(): string
  tagsByBranch(): string[]
  getNewVersion(): {
    version: string
    'version-complete': string
  }
  currentCommitHash(): string
}
