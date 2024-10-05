import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Match, Home, NoPage } from './pages';
import { Layout } from './Layout.jsx'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={ <Layout />} >
          <Route index element={ <Home />} />
          <Route path="match" element={ <Match />} />
          <Route path="*" element={ <NoPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}