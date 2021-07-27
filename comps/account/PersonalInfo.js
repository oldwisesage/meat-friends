import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';
import Heading from '../Heading';

// TODO add crud ability with this personal infomation

const UserInfoContainer = styled.div``;
const InnerInfoContainer = styled.div`
  box-shadow: ${boxShadow.idle};
  border: 0.5px solid ${color.greyPale};
  border-radius: ${borderRadius.default};
  padding: 2.5rem;
`;
const Avatar = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const AvatarImage = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-image: url('https://images.unsplash.com/photo-1624899346311-7dfd9c135c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80');
  background-position: cover;
  position: relative;
`;
const AvatarEditButton = styled.button`
  @include long-form-text;
  color: $white;
  font-weight: 500;
  position: absolute;
  right: 0rem;
  bottom: 0.2rem;
  background-color: $black;
  border-radius: 10px;
  padding: 0.25rem 0.75rem;
  &:hover {
    @include shadow-idle;
  }
  &:active {
    @include shadow-active;
  }
`;

const UserIntro = styled.div`
  justify-self: flex-start;
  align-self: center;
  h2 {
    font-size: ${fontSize.h3};
    font-weight: ${fontWeight.mid};
  }
  h4 {
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
  }
`;

const UserContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  max-width: 80%;
  grid-gap: 1rem;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
`;

export default function PersonalInfo({ active }) {
  if (!active) return null;
  // TODO add formik here
  return (
    <UserInfoContainer>
      <Heading title="Personal Information" />
      <InnerInfoContainer>
        {/* COMP Avatar */}
        <Avatar>
          <AvatarImage>
            <AvatarEditButton type="button">✎ edit</AvatarEditButton>
          </AvatarImage>
          <UserIntro>
            <h2>Hi User's name!</h2>
            <h4>Feel free to edit your info here</h4>
          </UserIntro>
        </Avatar>
        {/* TODO really style this out so it's potentially really fun */}
        {/* COMP User information */}
        <UserContainer>
          {/* TODO add formik into this & add tags for favorite cuts */}
        </UserContainer>
      </InnerInfoContainer>
    </UserInfoContainer>
  );
}
