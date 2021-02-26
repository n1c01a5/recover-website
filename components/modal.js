import { useRef } from 'react'

import ClientOnlyPortal from '../utils/client-only-portal'
import useOutsideClick from '../utils/hooks/use-outside-click'
import { useModalContext } from '../contexts/state'

const Modal = ({ children }) => {
  const { setOpen, isOpen } = useModalContext()
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (isOpen) setOpen(false)
  })

  return (
    <>
      {isOpen && (
        <ClientOnlyPortal selector='#modal'>
          <div className='backdrop'>
            <div className='modal-custom' ref={ref}>
              <div id='mdiv' onClick={() => setOpen(false)}>
                <div className='mdiv'>
                  <div className='md' />
                </div>
              </div>
              {children}
            </div>
            <style jsx>
              {`
                :global(body) {
                  overflow: hidden;
                }

                .backdrop {
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.5);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  z-index: 10;
                }

                .modal-custom {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 15px;
                  overflow: hidden;
                  z-index: 100000;
                }

                #mdiv {
                  position: absolute;
                  top: 20px;
                  right: 22px;
                  width: 35px;
                  height: 35px;
                  background-color: #a6ffcc;
                  border-radius: 50%;
                  cursor: pointer;
                }

                .mdiv {
                  position: absolute;
                  top: 5px;
                  left: 4px;

                  height: 25px;
                  width: 3px;
                  margin-left: 12px;
                  background-color: #14213d;
                  transform: rotate(45deg);
                  Z-index: 1;
                }

                .md {
                  height: 25px;
                  width: 3px;
                  background-color: #14213D;
                  transform: rotate(90deg);
                  Z-index: 2;
                }
              `}
            </style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  )
}

export default Modal
