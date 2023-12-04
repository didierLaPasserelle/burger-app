import React from 'react'
import { CustomTitle } from '../../../../../reusable-ui/CustomTitle';
import { NO_PASSWORD_MESSAGE } from "../../../../../../enums/product";

export default function LoginModes({FormTitles, demoPasswordMessage}) {
  return (
     <div className="login-modes">
        {FormTitles.map((title) => (
          <h2 key={title.id}>
            <CustomTitle
              onClick={title.onClick}
              isActive={title.isActive}
              text={title.text}
              className={title.isActive ? "is-active" : ""}
            />
          </h2>
        ))}
        <span>{demoPasswordMessage ? NO_PASSWORD_MESSAGE : null}</span>
      </div> 
  )
}
