import React from 'react';
import styled from "styled-components"
import { Flex } from "../../UI Library/Components/Layout/Flex"
import { createLabelWithEmptyValues } from "../../utils/string"


export interface Contact {
  [key: string]: string
}

interface Props {
  contact: Contact | undefined;
}


const DetailsPane = styled(Flex).attrs({ flexDirection: "column" })`
  padding: 2rem;
  width: 70%;
  height: 100%;
  overflow: auto;
  color: #f4f4f6;
  position: relative;
`

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 12px;
  margin-bottom: 50px;
`

const ContactImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #414040;
  font-size: 18px;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`

const ContactName = styled.h2`
  margin: 0;
`

const ContactGroup = styled(Flex).attrs({ flexGap: 16 })`
  strong {
    font-size: 14px;
    font-weight: 200;
    line-height: 20px;
    min-width: 200px;
  }
  span {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
  }
  margin-top: 8px;
`
export const ContactDetails: React.FC<Props> = ({ contact }) => {
  if (!contact) {
    return (
      <DetailsPane>
        <Flex alignItems="center" justifyContent="center" style={{ height: "100%" }}>
          Select a contact
        </Flex>
      </DetailsPane>
    )
  }

  const {
    prefix,
    firstName,
    middleName,
    lastName,
    nickName,
    phoneNumberPrimary,
    phoneNumberSecondary,
    phoneNumberLandLine,
    emailPersonal,
    phoneNumberWork,
    phoneNumberWorkLandLine,
    jobTitle,
    department,
    industry,
    website,
    emailSecondary,
    bankName1,
    accountType1,
    gPay1,
    bankAccountNumber1,
    IFSC1,
    CVV1,
    addressLine1,
    addressLine2,
    addressLine3,
    city,
    state,
    pincode,
    panCardNumber,
    adhaarNumber,
    drivingLicenseNumber,
    voterIdNumber
  } = contact || {}

  const details = {
    personal: {
      label: "Personal Details",
      details: {
        name: { label: "Name", value: createLabelWithEmptyValues([prefix, firstName, middleName, lastName]) },
        nickname: { label: "Nick Name", value: createLabelWithEmptyValues(nickName) },
        phoneNumberPrimary: { label: "Mobile Primary", value: createLabelWithEmptyValues(phoneNumberPrimary) },
        phoneNumberSecondary: { label: "Mobile Secondary", value: createLabelWithEmptyValues(phoneNumberSecondary) },
        phoneNumberLandLine: { label: "LandLine", value: createLabelWithEmptyValues(phoneNumberLandLine) },
        emailPersonal: { label: "Email Personal", value: createLabelWithEmptyValues(emailPersonal) },
        emailSecondary: { label: "Email Secondary", value: createLabelWithEmptyValues(emailSecondary) }
      }
    },
    address: {
      label: [city?.trim() || "", "Address"].join(" "),
      details: {
        address: { label: "Address", value: createLabelWithEmptyValues([addressLine1, addressLine2, addressLine3]) },
        city: { label: "City", value: createLabelWithEmptyValues([addressLine1, addressLine2, addressLine3]) },
        state: { label: "state", value: createLabelWithEmptyValues(state) },
        pincode: { label: "Postal Code", value: createLabelWithEmptyValues(pincode) }
      }
    },
    work: {
      label: "Work Details",
      details: {
        phoneNumberWork: { label: "Mobile Work", value: createLabelWithEmptyValues(phoneNumberWork) },
        phoneNumberWorkLandLine: { label: "LandLine", value: createLabelWithEmptyValues(phoneNumberWorkLandLine) },
        jobTitle: { label: "Job Title", value: createLabelWithEmptyValues(jobTitle) },
        department: { label: "Department", value: createLabelWithEmptyValues(department) },
        industry: { label: "Industry", value: createLabelWithEmptyValues(industry) },
        website: { label: "Website", value: createLabelWithEmptyValues(website) }
      }
    },
    id: {
      label: "Important IDs",
      details: {
        adhaarNumber: { label: "Adhaar Card", value: createLabelWithEmptyValues(adhaarNumber) },
        panCardNumber: { label: "PAN Card", value: createLabelWithEmptyValues(panCardNumber) },
        drivingLicenseNumber: { label: "Driving License", value: createLabelWithEmptyValues(drivingLicenseNumber) },
        voterIdNumber: { label: "Voter Id", value: createLabelWithEmptyValues(voterIdNumber) }
      }
    },
    banking: {
      label: "Banking",
      details: {
        bankName1: { label: "Bank Name", value: createLabelWithEmptyValues(bankName1) },
        accountType1: { label: "Account Type", value: createLabelWithEmptyValues(accountType1) },
        gPay1: { label: "gPay", value: createLabelWithEmptyValues(gPay1) },
        bankAccountNumber1: { label: "Account Number", value: createLabelWithEmptyValues(bankAccountNumber1) },
        IFSC1: { label: "IFSC", value: createLabelWithEmptyValues(IFSC1) },
        CVV1: { label: "CVV1", value: createLabelWithEmptyValues(CVV1) }
      }
    }
  }
  return (
    <DetailsPane>
      <div
        style={{ marginTop: -35, fontSize: 24, fontWeight: 300, marginBottom: 24, position: "sticky", top: -35, padding: '20px 0', background: "#2b2b2d" }}
      >
        Contacts
      </div>
      <Flex flexDirection="column" flexGap={4}>
        <ContactHeader>
          <ContactImage>{contact?.firstName?.charAt(0) || ''}</ContactImage>
          <ContactName>{`${contact.firstName || ""} ${contact.lastName || ""}`}</ContactName>
        </ContactHeader>
        {Object.entries(details).map(([groupKey, group]: any) => (
          <Flex flexDirection="column">
            <label>{group.label}</label>
            {Object.entries(group.details).map(([key, contact]: any) => (
              <ContactGroup>
                <strong>{contact.label}:</strong>
                <span>{contact.value}</span>
              </ContactGroup>
            ))}
          </Flex>
        ))}
      </Flex>
    </DetailsPane>
  );
};
