import React from 'react';
import {FakeServiceConsumer} from '../fake-service-context';

const withFakeService = () => (Wrapped) => {

    return (props) => {
        return (
            <FakeServiceConsumer>
                {
                    (fakeService) => {
                        return <Wrapped {...props} fakeService={fakeService}/>
                    }
                }
            </FakeServiceConsumer>
        );
    }
};

export default withFakeService;