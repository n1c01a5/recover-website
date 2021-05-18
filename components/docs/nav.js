import Link from 'next/link'

import styles from '../../styles/elements/docs/nav.module.scss'

const Nav = () => (
  <nav>
    <div className='docs__menu__title-2'>ADDING AN ITEM</div>
    <ul>
      <li><Link href='/docs/add-item/introduction'>Introduction</Link></li>
      <li><Link href='/docs/add-item/flowchart'>Item addition flowchart</Link></li>
      <li><Link href='/docs/add-item/steps-to-add-item'>Item addition in few easy steps</Link></li>
    </ul>

    <div className='docs__menu__title-2'>ITEM RECOVERY</div>
    <ul>
      <li><Link href='/docs/recovery-item/introduction'>Introduction</Link></li>
      <li><Link href='/docs/recovery-item/simply-flowchart'>Simple recovery flowchart</Link></li>
      <li><Link href='/docs/recovery-item/details-flowchart'>Detailed recovery flowchart</Link></li>
      <li><Link href='/docs/recovery-item/steps-to-recover-item'>Item recovery in few steps</Link></li>
    </ul>
  </nav>
)

export default Nav
