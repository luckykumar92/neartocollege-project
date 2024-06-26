const accountVerificationEmailContent = (fullName, verifyCode) => {
  return ` <div>
        <p>Hello ${fullName},</p>
        <div>
            <p>
                Thank you for registering. Please use the following verification
                code to complete your registration:
            </p>
        </div>
        <div>
            <p>${verifyCode}</p> 
        </div>
        <div>
            <p>If you did not request this code, please ignore this email.</p>
        </div>
    </div>
`;
};

const contactUsEmailContent = (fullName, email, message, subject) => {
  return ` <div>
        <p>Hello ${fullName},</p>
        <div>
            <p>
                Thank you for Contacting Us.
            </p>
        </div>
        <div>
            <p>Email: ${email}</p>
        </div>  
        <div>
            <p>Subject: ${subject}</p>
        <div>
            <p>Message: ${message}</p>
        </div>
        </div>
    </div>
    `;
};

const printOrderEmailContent = (
  orderData,
  newOrderNumber,
  eFilesUrl,
  orderValue
) => {
  return `
  <body
   style="
   background-color: #d8f2ff;
   margin-left: auto;
   margin-right: auto;
   max-width: 40rem;
   padding-top: 1rem;
   ">
   <div style="background-color: #ffffff;">
      <img
         src="https://res.cloudinary.com/utube-cloudinary/image/upload/v1713897767/neartocollege/logo/qwoej8mo5tgnovszrmmj.jpg"
         height="50px"
         style="display: block; margin: auto; padding-bottom: 25px; padding-top: 25px;"
         />
   </div>
   <div style="text-align: center; background-color: #023047; color: white;  padding-bottom: 25px; padding-top: 25px; ">
      <p
         style="
         font-family: sans-serif;
         font-weight: 700;
         padding-left: 1.5rem;
         ">
         Order Summary
      </p>
      <p
         style="
         font-family: sans-serif;
         font-weight: 700;
         padding-left: 1.5rem;
         ">
         Order Number : ${newOrderNumber}
      </p>
   </div>
   <div style="position: relative; border-radius: 0.375rem">
      <table
         style="
         width: 100%;
         font-size: 0.875rem;
         text-align: left;
         direction: ltr;
         color: #6b7280;
         background-color: #f9fafb;
         ">
         <thead
            style="
            font-size: 0.75rem;
            color: #4a5568;
            text-transform: uppercase;
            background-color: #f9fafb;
            ">
            <tr>
               <th
                  scope="col"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 0.75rem;
                  padding-bottom: 0.75rem;
                  ">
                  Shop Name :
               </th>
               <th
                  scope="col"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 0.75rem;
                  padding-bottom: 0.75rem;
                  ">
                  ${orderData.shopName} || ${orderData.shopLocation} 
               </th>
            </tr>
         </thead>
         <tbody>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Shop Contact Deatail :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.shopContactNumber},${orderData.shopEmail}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  No. of Pages :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.noOfPages}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  No. of Copies :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.noOfCopies}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Printed Colour :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.printedColour}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Prining Side :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.printingSide}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Prining Side :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.paperType}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Prining Side :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.paperSize}
               </td>
            </tr>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Cover Option :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.coverOption}
               </td>
            </tr>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Binding Option :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.bindingOption}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Messages :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${orderData.message}
               </td>
            </tr>
            <tr
               style="background-color: #ffffff; border-bottom: 1px solid #e5e5e5">
               <th
                  scope="row"
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  font-weight: 500;
                  color: #333333;
                  white-space: nowrap;
                  ">
                  Files Url :
               </th>
               <td
                  style="
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  ">
                  ${eFilesUrl}
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div style="background-color: #023047; color: white;  padding-bottom: 25px; padding-top: 15px; ">
      <span
         style="
         font-family: sans-serif;
         font-weight: 800;
         padding-left: 1.5rem;
         padding-right: 1.5rem;
         ">
         <table
            style="
            width: 100%;
            text-align: left;
            direction: ltr;
            color: white;
            ">
            <tbody>
               <tr
                  style="border-bottom: 1px solid #e5e5e5">
                  <th
                     scope="row"
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     font-weight: 500;
                     white-space: nowrap;
                     "> Sub Total: 
                  </th>
                  <td
                     style="padding-left: 1.5rem;            padding-right: 1.5rem;            padding-top: 1rem; padding-bottom: 1rem;">
                     ₹${orderValue.subTotal}
                  </td>
               </tr>
               <tr
                  style="border-bottom: 1px solid #e5e5e5">
                  <th
                     scope="row"
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     font-weight: 500;
                     white-space: nowrap;
                     "> Tax:
                  </th>
                  <td
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     ">
                     ₹${orderValue.tax}
                  </td>
               </tr>
               <tr
                  style="border-bottom: 1px solid #e5e5e5">
                  <th
                     scope="row"
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     font-weight: 500;
                     white-space: nowrap;
                     ">Delivery Fee:
                  </th>
                  <td
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     ">
                     ₹${orderValue.deliveryFee}
                  </td>
               </tr>
               <tr
                  style="border-bottom: 1px solid #e5e5e5">
                  <th
                     scope="row"
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     font-weight: 500;
                     white-space: nowrap;
                     "> Order Total:
                  </th>
                  <td
                     style="
                     padding-left: 1.5rem;
                     padding-right: 1.5rem;
                     padding-top: 1rem;
                     padding-bottom: 1rem;
                     ">
                     ₹${orderValue.orderTotal}
                  </td>
               </tr>
            </tbody>
         </table>
      </span>
      <hr>
      <p style="padding-left: 1.5rem; text-align: center;">
         We hope to see you again soon.
      </p>
      <p style="font-weight: 800; padding-left: 1.5rem; margin-bottom: 1.5rem; text-align: center;">Neartocollege.com</p>
   </div>
</body>
   `;
};
export {
  accountVerificationEmailContent,
  contactUsEmailContent,
  printOrderEmailContent,
};
