import { useLogOutRedirect } from 'hooks/useLogautRedirect';

const DashboardPage = () => {
  useLogOutRedirect();
  return <div>Dashboard Page</div>;
};

export default DashboardPage;
