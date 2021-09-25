import { lazy, Suspense } from 'react';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';
import GroupProvider from './context/GroupProvider';
import TemplateProvider from './templates/TemplateProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  return (
    <TemplateProvider>
      <GroupProvider> 
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
      </GroupProvider>
    </TemplateProvider>
  );
}

export default App;
