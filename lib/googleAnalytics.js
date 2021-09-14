import ReactGA from 'react-ga';

const trackingId = process.env.GA_TRACKING_ID;
ReactGA.initialize(trackingId);
ReactGA.set({});
