import blacklist from './recipient-blacklist'
import { MAINNET_NETWORK_ID } from '../../network/enums'

/**
 * Checks if a specified account on a specified network is blacklisted
 * @param {string} networkId
 * @param {string} account
 * @throws {Error} if the account is blacklisted on mainnet
 */
export function throwIfAccountIsBlacklisted (networkId, account) {
  if (networkId.toString() !== MAINNET_NETWORK_ID) {
    return
  }

  const accountToCheck = account.toLowerCase()
  if (blacklist.includes(accountToCheck)) {
    throw new Error('Recipient is a public account')
  }
}
