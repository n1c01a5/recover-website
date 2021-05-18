import Head from 'next/head'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function StepToAddItem () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found steps to add an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__summary'>
          <Nav />
        </div>
        <div className='docs__container'>
          <div className='docs__content'>
            <h1>ITEMS ADDITION IN FEW EASY STEPS</h1>
            <h2>Highlighting the process of generating ethereum powered QR codes for your products to protect them against loss</h2>

            <p>Protect your valuables from loss in 5 easy steps:</p>

            <ol>
              <li>Go to app.recover.ws</li>
              <li>
                Click on the “Add Item” button as the first step of securing your item.
                You can also do this by finding the same on the right side of the screen.
                <figure>
                  <img src="" alt="Add item to secure your valuable" />
                  <figcaption>Click on ‘Add Item’ to secure your valuable</figcaption>
                </figure>
              </li>
              <li>
                You will be taken to a new item page which will allow you to configure an item. Here, you can select from a list of multiple items.
                <figure>
                  <img src="" alt="Add details to secure your valuable" />
                  <figcaption>Form to add details</figcaption>
                </figure>
                <ol>
                  <li>
                    Select the item you want to add from the dropdown list.
                    <figure>
                      <img src="" alt="Type the type of your item" />
                      <figcaption>Select the item from the list of choices</figcaption>
                    </figure>
                  </li>
                  <li>Give a brief description of your item.</li>
                  <li>Provide your contact information. This will be used in case your item is found and the finder needs to contact you.</li>
                  <li>Enter the reward amount in ETH (Ethers).</li>
                  <li>
                    From the Settings button, you can set your personal information like email, phone number, fund claims  (ETH), time locked (in seconds).
                    <figure>
                      <img src="" alt="Fill the desired escrow lost and found settings" />
                      <figcaption>Fill the desired settings</figcaption>
                    </figure>
                  </li>
                  <li>
                    Click on the “Save Settings” button to register your request. A metamask window will open which will ask
                    you to verify your signature to make sure you are the owner of the current address.
                    <figure>
                      <img src="" alt="Metamask window to verify signature" />
                      <figcaption>Metamask window to verify signature</figcaption>
                    </figure>
                  </li>
                  <li>
                    Click on Sign to save your request. You will be redirected to the add item page. Here, you can save your transaction
                    by clicking on the  “Save Transaction” button.
                  </li>
                </ol>
              </li>
              <li>
                You will get a metamask message which will show you the details of the transaction specifying the total amount to be transferred (Amount + Gas fee).
                Click on Confirm to finish the configuration of your product.
                <figure>
                  <img src="" alt="Metamask window with transaction details" />
                  <figcaption>Metamask window with transaction details</figcaption>
                </figure>
              </li>
              <li>
                You will see a window which will give you the details of your configured product with like description, contact information, and reward.
                Also you get the QR code which can be printed as per your need.
                <figure>
                  <img src="" alt="QR code for the configured item" />
                  <figcaption>QR code for the configured item</figcaption>
                </figure>
              </li>
            </ol>

            <p>
              You can repeat the same process 🔁 for all the items you want to secure using Recover.
            </p>

            <a href="">LEARN ABOUT ITEM RECOVERY ➡️</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
