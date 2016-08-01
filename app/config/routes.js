import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Speaker from '../components/Speakers/Speaker'
import SpeakersList from '../components/Speakers/SpeakersList'
import Case from '../components/Cases/Case'
import CasesList from '../components/Cases/CasesList'
import Router from 'react-router'
import { Route, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <Route path="speakers" component={SpeakersList} />
    <Route path="speakers/:speakerId" component={Speaker} />
    <Route path="cases" component={CasesList} />
    <Route path="cases/:docketNum" component={Case} />
    <IndexRoute component={Home} />
  </Route>
);
