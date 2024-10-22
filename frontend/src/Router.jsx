import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home, Match, Score, NotFound } from './pages';
import { Layout } from './Layout.jsx'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={ <Layout />} >
          <Route index element={ <Home />} />
          <Route path="match/:matchId/play" element={ <Match />} />
          <Route path="match/:matchId/score" element={ <Score /> } />
          <Route path="*" element={ <NotFound />} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}