import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className='docs__menu__title-2'>ADDING AN ITEM</div>
    <ul className='docs__menu__items'>
      <li><Link href='/docs/add-item/introduction'><a>Introduction</a></Link></li>
      <li><Link href='/docs/add-item/flowchart'><a>Item Addition Flowchart</a></Link></li>
      <li><Link href='/docs/add-item/steps-to-add-item'><a>Item Addition in few easy Steps</a></Link></li>
    </ul>

    <div className='docs__menu__title-2'>ITEM RECOVERY</div>
    <ul className='docs__menu__items'>
      <li><Link href='/docs/recovery-item/introduction'><a>Introduction</a></Link></li>
      <li><Link href='/docs/recovery-item/simple-flowchart'><a>Simple Recovery Flowchart</a></Link></li>
      <li><Link href='/docs/recovery-item/details-flowchart'><a>Detailed Recovery Flowchart</a></Link></li>
      <li><Link href='/docs/recovery-item/steps-to-recover-item'><a>Item Recovery in few Steps</a></Link></li>
    </ul>
  </nav>
)

export default Nav
