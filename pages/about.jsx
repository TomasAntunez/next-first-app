import { MainLayout, DarkLayout } from '@/components/layouts';


export default function AboutPage() {
  return (
    <h1>About page</h1>
  );
};


AboutPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
};
