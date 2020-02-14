import React from 'react';

const {
    Provider: FakeServiceProvider,
    Consumer: FakeServiceConsumer
} = React.createContext();

export {
    FakeServiceConsumer,
    FakeServiceProvider
};