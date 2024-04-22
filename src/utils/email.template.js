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

export { accountVerificationEmailContent, contactUsEmailContent };
