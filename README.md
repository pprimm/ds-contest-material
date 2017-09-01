## What is this?
This project is a submission to the [deepstreamHub Contest, Sept. 2017](https://www.collaborizm.com/thread/r1lTSRXSZ).  It is a realtime mobile UI demo demonstrating how to use the deepstream JavaScript client to interact with a home security system through deepstreamHub.  The companion project (LINK HERE) is a security system simulator that demonstrates how to create a *provider* for deepstreamHub using NodeJS and the same deepstream JavaScript client as the UI.

![System Page](https://user-images.githubusercontent.com/4693314/29977696-eb7ba126-8f03-11e7-8981-8d2a6194b7b7.png)

## Why is it here?
Well, the obvious reason is that it was created as a submission to the aforementioned design contest.   But, there's a bit of background here.  I have been playing with using React/cerebral to create UX for home automation for a few months.  My original tech stack used MQTT over Web-sockets for real-time transport.  This worked pretty well because my back-end control system is MQTT driven.  However, I wanted to test an abstraction that allowed for more productivity and ease-of-design on the front-end; in other words, deepstream would be used for the front-end channel to separate/decouple messaging.  Anyhoo, the contest gave me the opportunity (*interpret*: the motivation) to produce a limited-scope solution to test deepstream in this scenario.

## Tech Stack
 - [deepstreamHub](https://deepstreamhub.com/) & [deepstream javascript client](https://deepstreamhub.com/docs/client-js/client/) 
 - [React](https://facebook.github.io/react/)
 - [Cerebral for React for state management, effects and routing](http://cerebraljs.com/)
 - [Material UI](https://material-ui-1dab0.firebaseapp.com/getting-started/installation/) to ease the UI design burden
 
## A Brief Architectural Overview (Commentary)
 *Warning: this is opionated*.  The concepts of React and Flux have made significant impacts on the dev community over the past few years.  Specifically, the state/action flow of Flux helped to shape perceptions of uni-directional flow.  I wanted to solve the problem of this particular contest (Realtime Security System) with what I term "full-stack-flux"; basically, flux concept from the front-end to back-end.  Please allow me to try and explain further.
 
 The View is React; so from that standpoint, we're on-par with standard Flux.  From there we indroduce the concepts of Signals, Actions and State which come from the Cerebral project.   [Signals](http://cerebraljs.com/docs/api/signal.html) are triggered from both user interaction and the back-end and then, in turn, trigger [Actions](http://cerebraljs.com/docs/api/action.html) that either update the local UI [State](http://cerebraljs.com/docs/api/state.html) or send the action on to the back-end for processing.  It may be important to note that the Actions triggered by Signals are composable and provide a needed abstraction layer.  The pure UI has no idea of front-end or back-end state changes or processing, doesn't care and ideally hold no state of its own.  The deepstreamHub provider listens for Actions ([pub-sub Events](https://deepstreamhub.com/docs/client-js/pubsub-client-event/) in deepstream) coming from the front end and/or other back-end services.  The Actions received are processed and may or may not produce a change in state ([Records](https://deepstreamhub.com/docs/client-js/datasync-record/) in deepstream).  These Record(s) changes then trigger Signals to be processed on the front-end as described above.  The flow is extremely easy to reason about. 
 
 To give a concrete example "event" from our app, we'll follow a progression that takes place when the user "taps" on a zone to toggle the zone bypass.  So, here's what takes place:
 
 - The user taps a toggle control on a particular security zone (the `<Switch>` component in the higher-order `<ZoneListItem>` component).
 - The components `onChange()` event calls a `bypassPressed` signal with the ID of the zone.  This is the last the UI knows of the process.
 - Though Cerebral, the signal calls the single `bypassPressed` action (it could call many actions that update both UI and call back-end actions independently).
 - The bypassPress action calls the `action(...)` function on the deepstream provider; which ultimately performs a pub-sub event call to deepstreamHub.
 - On the back-end, the deepstreamHub provider (written in NodeJS...our security system simulator) receives the pub-sub event because it is appropriately subscribed to the event.
 - The simulator processes and validate the Event and, in this case, toggles the bypass property, if you will, in the appropriate Record and performs other processing now that the zone has been bypassed by the user.  This action then triggers multiple actions like: if the bypassed zone was keeping the system from going to the ready state, the system could then move to the ready state.  Because this is also a state change, the appropriate record would be updated and things would progress similarly as described below.
 - Back on the front-end, Cerebral deepstreamHub provider is subscribed to received changes to that record, so it received this update and then triggers the, you guessed it, `dsUpdate` Signal which calls the `dsUpdate` Action.
 - The `dsUpdate` Action the modifies the appropriate Crerebral state; this, in turn, triggers the UI updates because the appropriate components are "subscribed" to that portion of the state tree.
 - AND, voilà, the user sees the toggle control change state (and any other state changes that occurred because of the simulator updates).

## Possible Improvements (what I would do from here if this were a real app)
There are many improvement that could be made to make this app better.  Improvements to structure, naming convention, etc. would be a first step.  Really, this app was slung together quickly in order to meet a deadline for contest entry.  So, here are some things I would do if this were a real app:

 - Add DeepstreamHub User Authorization and Permissions.  Obvious permissions would be to prevent UI client(s) from modifying Records in any way because these client should only be able to trigger Actions (as described above) and prevent them from listening to corresponding Actions.
 - Refactor React code.  Possibly add styled-components ('cause I love it).  I am not a front-end coder and not very experienced in HTML/CSS; there is likely *A LOT* of room for improvement here.
 - Refactor deepstream client provider by adding a deepstream cerebral module to handle interaction between the app and the deepstream client cerebral provider.  In addition to exposing the core deepstream client api through the provider in a cerebral-ish way, a signal/action/state behavior layer might be exposed as well.
 - Analyze refactoring the cerebral app state by investigating the effects/boundaries of separating ui specific state from device specific state.  Effects here would be very beneficial in a large app with many pages/state/user interactions.
 - Analyze ramifications of multiple users performing multiple actions at the same time (address scaling).
 - Improve the UX (highly subjective, but, this UX is marginal)
 - The back-end device would be based on a real security system implementation to the API could change dramatically.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).