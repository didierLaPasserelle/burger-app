export const getFormTitlesConfig = ({ handleDemoFormClick, handleClientFormClick, isClicked }) => {
    const formTitlesData = [
      {
        id: "1",
        onClick: handleDemoFormClick,
        isActive: isClicked,
        text: "J'accède à la démo"
      },
      {
        id: "2",
        onClick: handleClientFormClick,
        isActive: !isClicked,
        text: 'J\'ai déjà un compte'
      }
    ]
    return formTitlesData
  }