import React from 'react'
import Main from '../components/Main'
import Speaker from '../components/Speakers/Speaker'
import SpeakersList from '../components/Speakers/SpeakersList'
import Case from '../components/Cases/Case'
import CasesList from '../components/Cases/CasesList'
import Router from 'react-router'
import { Route, IndexRoute } from 'react-router'
import urls from './urls'

module.exports = (
  <Route path="/" component={Main}>
    <Route path={urls.speakers()} component={SpeakersList} />
    <Route path={urls.speakers() + "/:speakerId"} component={Speaker} />
    <Route path={urls.cases()} component={CasesList} />
    <Route path={urls.cases() + "/:docketNum"} component={Case} />
    <IndexRoute component={CasesList} />
  </Route>
);
