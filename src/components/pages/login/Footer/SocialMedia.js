import styled from "styled-components";
import { theme } from "../../../../theme";
import { iconsConfig } from "./iconConfig";

export default function SocialMedia() {
  const iconsTab = iconsConfig;

  return (
    <SocialMediaStyled className="social-media">
      {iconsTab.map((Icon) => (
        <span key={Icon.id}>{Icon.icon}</span>
      ))}
    </SocialMediaStyled>
  );
}

const SocialMediaStyled = styled.div`
  background: #18181c;
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 15px;

  .icon {
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.white};
  }
`;
