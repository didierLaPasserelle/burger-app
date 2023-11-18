import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function SocialMedia() {
  return (
    <SocialMediaStyled className="social-media">
      <FaFacebook className="social-media-icon" />
      <FaTwitter className="social-media-icon" />
      <FaInstagram className="social-media-icon" />
    </SocialMediaStyled>
  );
}

const SocialMediaStyled = styled.div`
  background: #18181c;
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 15px;

  .social-media-icon {
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.white};
  }
`;
