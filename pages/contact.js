import styled from 'styled-components';
import ContactForm from '../comps/forms/ContactForm';
import Heading from '../comps/Heading';
import { border, fontSize, fontWeight } from '../theme/Variables';

const ContactSection = styled.section`
  display: grid;
  place-items: center center;
`;

const HeadingContainer = styled.div`
  display: grid;
  justify-content: flex-start;
  width: 77.5rem;
  padding: 5rem 0 2.5rem 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: ${border.thicker};
  grid-gap: 2.5rem;
  padding: 2.5rem 0 10rem 0;
`;

const SidebarContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-content: flex-start;
`;

const BusinessInfo = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  h3 {
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.body};
  }
  p {
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.caption};
  }
`;

const SmallLogo = styled.h4`
  font-weight: 900;
  font-size: ${fontSize.body};
  letter-spacing: -0.5px;
`;

const Address = styled.div`
  p {
    font-size: ${fontSize.caption};
    font-weight: ${fontWeight.light};
  }
`;

const ContactPage = () => (
  <ContactSection>
    <HeadingContainer>
      <Heading
        title="Need to reach out?"
        subtitle="Anything you need, we're here to help"
      />
    </HeadingContainer>
    <ContactContainer>
      <SidebarContainer>
        <BusinessInfo>
          <h3>Customer Service</h3>
          <p>⏳ Friday 10am to 6pm EST</p>
          <p>📞 (301) GET-MEAT</p>
          <p>✉️ help@meatfriends.co</p>
        </BusinessInfo>
        <Address>
          <SmallLogo>meat friends</SmallLogo>
          <p>
            40 E. Patrick St. <br />
            Frederick, MD 21701
          </p>
          <p>butcher@meatfriends.co</p>
        </Address>
      </SidebarContainer>
      <ContactForm />
    </ContactContainer>
  </ContactSection>
);

export default ContactPage;
