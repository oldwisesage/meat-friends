import styled from 'styled-components';
import Heading from '../comps/Heading';
import Logo from '../comps/Logo';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../theme/Variables';

const AdminSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const LogoContainer = styled.div`
  display: grid;
  padding: 1rem 0;
`;

const SidebarContainer = styled.div`
  background-color: ${color.greyDark};
  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
  justify-content: center;
`;

const AdminNavbar = styled.div`
  display: grid;
`;

const SidebarLink = styled.div`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.bold};
  align-items: center;
`;

const BottomNavbar = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  align-content: end;
  padding-bottom: 2.5rem;
`;

const AdminContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: space-between;
  padding: 2.5rem;
`;

const DateContainer = styled.div`
  display: grid;
  justify-items: end;
  justify-content: end;
`;

const Date = styled.div`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.bold};
`;

const Time = styled.div``;

const WidgetContainer = styled.div`
  display: grid;
  padding: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2.5rem;
  grid-template-areas:
    'sales sales orders'
    'pie   pie   orders';
`;

const Widget = styled.div`
  border: ${border.thickest};
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.idle};
`;

const SalesWidget = styled(Widget)`
  grid-area: sales;
`;

const PieWidget = styled(Widget)`
  grid-area: pie;
`;

const OrdersWidget = styled(Widget)`
  grid-area: orders;
`;

const AdminPage = () => (
  <AdminSection>
    <SidebarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <AdminNavbar>
        <SidebarLink>Home</SidebarLink>
        <SidebarLink>Orders</SidebarLink>
        <SidebarLink>Reports</SidebarLink>
        <SidebarLink>Products</SidebarLink>
        <SidebarLink>Inventory</SidebarLink>
        <SidebarLink>Offers</SidebarLink>
      </AdminNavbar>
      <BottomNavbar>
        <SidebarLink>Account</SidebarLink>
        <SidebarLink>Settings</SidebarLink>
      </BottomNavbar>
    </SidebarContainer>
    <AdminContainer>
      <TopContainer>
        <Heading
          title="Hello User!"
          subtitle="Sales have increased by ⬆️ 200%"
        />
        <DateContainer>
          <Heading subtitle="Monday, June 6th, 2021" subtext="12:12 pm est" />
        </DateContainer>
      </TopContainer>
      <WidgetContainer>
        <SalesWidget />
        <OrdersWidget />
        <PieWidget />
      </WidgetContainer>
    </AdminContainer>
  </AdminSection>
);

AdminPage.layout = 'no';

export default AdminPage;
