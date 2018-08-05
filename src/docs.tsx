import * as React from 'react';
import * as dom from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocsButtons from './docs/DocsButtons';
import DocsCards from './docs/DocsCards';
import DocsForms from './docs/DocsForms';
import DocsHeaders from './docs/DocsHeaders';
import DocsIcons from './docs/DocsIcons';
import DocsIntro from './docs/DocsIntro';
import DocsLists from './docs/DocsLists';
import DocsMenus from './docs/DocsMenus';
import DocsModal from './docs/DocsModal';
import DocsSidebar from './docs/DocsSidebar';
import DocsText from './docs/DocsText';
import DocsThemes from './docs/DocsThemes';
import { ThemeProvider } from './ThemeProvider';

<<<<<<< HEAD
const Demo = () => {
  const themeSet = {
    color: {
      Body: '#efefef',
      Button: '#076699',
      Danger: '#ce0000',
      Disabled: '#eeeeee',
      Primary: '#41bfee',
      Secondary: '#344a58',
    },
    radius: {
      Button: '2px',
      Card: '12px',
    },
    shadow: {
      Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
      Main: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
  };
=======
// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
export default class Demo extends React.Component {
  public render() {
    const theme = {
      color: {
        BodyText: '#2f2f2f',
        Button: '#076699',
        ButtonText: '#ffffff',
        Danger: '#ff0000',
        Disabled: '#eeeeee',
        DisabledText: '#5d5d5d',
        Primary: '#41bfee',
        PrimaryText: '#ffffff',
        Secondary: '#344a58',
        SecondaryText: '#ffffff',
      },
      radius: {
        Button: '2px',
        Card: '12px',
      },
      shadow: {
        Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
        Main: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
      },
    };
>>>>>>> origin/master

    const MainWrap = styled.div`
      display: grid;
      grid-template-columns: 250px auto;
      grid-template-rows: auto;
      max-width: 1200px;
      height: 100%;
    `;

    const Main = styled.main`
      padding: 20px;
    `;

<<<<<<< HEAD
  return (
    <ThemeProvider theme={themeSet}>
      <MainWrap>
        <DocsSidebar />
        <Main>
          <Switch>
            <Route exact path="/" component={DocsIntro}/>
            <Route path="/themes" component={DocsThemes}/>
            <Route path="/buttons" component={DocsButtons}/>
            <Route path="/cards" component={DocsCards}/>
            <Route path="/forms" component={DocsForms}/>
            <Route path="/headers" component={DocsHeaders}/>
            <Route path="/icons" component={DocsIcons}/>
            <Route path="/lists" component={DocsLists}/>
            <Route path="/menus" component={DocsMenus}/>
            <Route path="/modal" component={DocsModal}/>
            <Route path="/text" component={DocsText}/>
          </Switch>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};
=======
    return (
      <ThemeProvider theme={theme}>
        <MainWrap>
          <DocsSidebar />
          <Main>
            <Switch>
              <Route exact path="/" component={DocsIntro} />
              <Route path="/themes" component={DocsThemes} />
              <Route path="/buttons" component={DocsButtons} />
              <Route path="/cards" component={DocsCards} />
              <Route path="/forms" component={DocsForms} />
              <Route path="/headers" component={DocsHeaders} />
              <Route path="/icons" component={DocsIcons} />
              <Route path="/lists" component={DocsLists} />
              <Route path="/menus" component={DocsMenus} />
              <Route path="/modal" component={DocsModal} />
              <Route path="/text" component={DocsText} />
            </Switch>
          </Main>
        </MainWrap>
      </ThemeProvider>
    );
  }
}
>>>>>>> origin/master

const element = document.getElementsByClassName('app')[0];
dom.render(<BrowserRouter><Demo /></BrowserRouter>, element);
