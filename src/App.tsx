import * as classNames from 'classnames';
import * as React from 'react';
import './__styles__/App.css';
import cryptopotamus from './static/cryptopotamus.svg';
import github from './static/github.svg';
import logoFull from './static/logo-full.svg';
import logo from './static/logo.svg';
import medium from './static/medium.svg';

const Main = () => (
  <div className={classNames('main', 'column')}>
    <img src={logoFull} alt="STREAM" className="logo-full" />
    <h2 className="goodbye-message">
      You’re probably looking for the Stream token project.
      <br />
      We’re sorry to tell you that we shut down in May 2018.
      <br />
      Long story short, we faced a risky and unpredictable legal climate that
      restricted our ability to flexibly and successfully execute on the
      vision we set out when we started the project.
      <br />
      <br />
      We wish things didn’t have to be this way.
      <br />
      However, some good things have come of this:
    </h2>
  </div>
);

const GoodThing = (props: {
  className?: string,
  imgSrc: string,
  imgAlt: string,
  message: React.ReactNode,
  href: string,
  hrefLabel: string,
}) => (
  <div className={classNames('GoodThing', props.className, 'column')}>
    <img src={props.imgSrc} alt={props.imgAlt} />
    <div className={classNames('message', 'text', 'column')}>{props.message}</div>
    <a className="button" href={props.href} target="_blank">{props.hrefLabel}</a>
  </div>
);

const GoodThings = () => (
  <div className="good-things">
    <GoodThing
      imgSrc={github}
      imgAlt="Github"
      message={
        <p>
          We’ve released all of our code, designs and whitepapers under an open source license.
          <br />
          You can check it out, fork it, and do your own thing with our Github repo <a href="https://github.com/streamproject" target="_blank">here</a>
        </p>
      }
      href="https://github.com/streamproject"
      hrefLabel="View the Github Repo"
    />
    <GoodThing
      imgSrc={medium}
      imgAlt="blog"
      message={
        <p>
          We’ve definitely learned a lot.
          <br />
          We documented some of our
          learnings, and explained in more detail why Stream closed
          down, <a href="https://blog.streamtoken.net/" target="_blank">here.</a>
        </p>
      }
      href="https://github.com/streamproject"
      hrefLabel="Read the blogpost"
    />
    <GoodThing
      imgSrc={cryptopotamus}
      imgAlt="Github"
      message={
        <p>
          We created <a href="https://cryptopotam.us" target="_blank">Cryptopotamu.us</a>,
          an integration for Twitch and StreamLabs that makes it easier for
          you to accept Ethereum tips from your viewers.
        </p>
      }
      href="https://cryptopotam.us"
      hrefLabel="Go to cryptopotam.us"
    />
  </div>
)

const Footer = () => (
  <div className={classNames('footer', 'small', 'column')}>
    <div className="content">
      <img className="logo" src={logo} alt="stream-logo" />
      <div className="stream-text">
        2018 Stream - All Rights Reserved
      </div>
    </div>
  </div>
);

class App extends React.Component {
  public render() {
    return (
      <div className={classNames('rc-App', 'column')}>
        <div className="background" />
        <div className={classNames('container', 'column')}>
          <Main />
          <GoodThings />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App