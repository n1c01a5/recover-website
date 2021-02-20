import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import styles from '../../../styles/elements/message-box/ethereum-transaction.module.scss'

const EthereumTransaction = ({
  networkName,
  txId,
  isPending,
  isOngoing,
  txError
}) => (
  <div
    className={styles.ethereumTransaction}
    onClick={() =>
      window.open(`https://${networkName === ('' || 'mainnet') ? '' : (networkName + '.')}etherscan.io/tx/${txId}`)}
  >
    <div>
      {(isPending || isOngoing) && !txError
        ? 'Transaction pending...'
        : null}
      {txError ? 'Transaction rejected. Please try again.' : null}
    </div>
    {isOngoing && !txError ? <BounceLoader size={50} color='#fff' /> : null}
  </div>
)

EthereumTransaction.propTypes = {
  networkName: PropTypes.string.isRequired,
  txId: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  isOngoing: PropTypes.bool,
  txError: PropTypes.string // FIXME: check the type
}

EthereumTransaction.defaultProps = {
  networkName: 'mainnet',
  txId: '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e',
  isPending: true,
  isOngoing: true,
  txError: '' // FIXME: check the type
}

export default EthereumTransaction
