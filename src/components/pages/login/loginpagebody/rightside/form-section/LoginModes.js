import React from 'react'
import { CustomTitle } from '../../../../../reusable-ui/CustomTitle';
import { NO_PASSWORD_MESSAGE } from "../../../../../../enums/product";

export default function LoginModes({linksTab, demoPasswordMessage}) {
  return (
     <div className="login-modes">
        {linksTab.map((link) => (
          <h2 key={link.id}>
            <CustomTitle
              onClick={link.onClick}
              isActive={link.isActive}
              text={link.text}
              className={link.isActive ? "is-active" : ""}
            />
          </h2>
        ))}
        <span>{demoPasswordMessage ? NO_PASSWORD_MESSAGE : null}</span>
      </div> 
  )
}
